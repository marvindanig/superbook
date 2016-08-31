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
	
	var _mode = __webpack_require__(307);
	
	var _mode2 = _interopRequireDefault(_mode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	!+-~function (w, d, undefined) {
	
	    var node = d.getElementById('book');
	
	    var book = {};
	
	    book.mode = _mode2.default.getMatch('all and (min-width: 870px)') ? 'double' : 'single';
	
	    _mode2.default.onChange('all and (min-width: 870px)', function (match) {
	        book.mode = match ? 'double' : 'single';
	    });
	
	    // We sweep pages here.
	    book.pages = [].concat(_toConsumableArray(node.children)).map(function (obj) {
	        return wrapPage(obj);
	    });
	
	    function wrapPage(pageObj) {
	        // Wrap appropriately
	        return pageObj;
	    }
	
	    removeChildren(node);
	
	    function removeChildren(node) {
	        while (node.hasChildNodes()) {
	            node.removeChild(node.lastChild);
	        }
	    }
	
	    // Print pages, add, remove into the DOM etc.
	    book.range = [1, 6];
	
	    function printRange(range) {
	        for (var i = range[0]; i <= range[1]; i++) {
	            var elem = book.pages[i - 1];
	            elem.id = i;
	            node.appendChild(elem);
	        }
	    }
	
	    printRange(book.range);
	
	    d.getElementById('plotter').addEventListener('mouseenter', function (event) {
	
	        d.getElementById('next').addEventListener('click', function () {
	            turnPage('next');
	        });
	
	        d.getElementById('previous').addEventListener('click', function () {
	            turnPage('previous');
	        });
	    });
	
	    function turnPage(direction) {
	
	        switch (direction) {
	            case 'next':
	
	                removePage(book.range[0]);
	                addPage(book.range[1] + 1);
	                book.range[0]++;
	                book.range[1]++;
	                break;
	
	            case 'previous':
	
	                removePage(book.range[1]);
	                addPage(book.range[0] - 1);
	                book.range[0]--;
	                book.range[1]--;
	
	                break;
	
	        }
	
	        // updateView
	    }
	
	    function removePage(pageNumber) {
	        console.log('Remove ' + pageNumber);
	        node.removeChild(d.getElementById(pageNumber));
	    }
	
	    function addPage(pageNumber) {
	        console.log('Add ' + pageNumber);
	        var elem = book.pages[pageNumber - 1];
	        elem.id = pageNumber;
	        node.appendChild(elem);
	    }
	
	    // console.table(book);
	
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
	exports.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n*:after {\n    box-sizing: border-box;\n}\n\n*:before {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    pointer-events: none;\n/*    cursor: none; */  \n    display: -webkit-box;  \n    display: -ms-flexbox;  \n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.viewer {\n    /*pointer-events: auto;*/\n    cursor: default;\n   -webkit-perspective: 200px; /* Applies uniformly to its children */\n    perspective: 200px; \n    -webkit-perspective-origin: 50% 50%; \n            perspective-origin: 50% 50%;\n}\n\n#book {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    -webkit-transform: translateZ(0px);\n            transform: translateZ(0px); /* Can effect pinch2zoom */\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d; /* Gets faus 3D space for pages */\n}\n\n.page {\n    height: 100%;\n}\n\n\n.left {\n    float: left;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.right {\n    float: right;\n    position: absolute;\n    top: 0;\n    right: 0\n}\n\n.promoted {\n  will-change: transform;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n\n@media (max-width: 870px) {\n    body .viewer {\n        width: calc(100vh * 1540/(1000 * 2));\n        height: 100vh;\n        max-height: calc(100vw * 1443/1114);\n    }\n    body .page {\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        width: 100%;\n    }\n    body .flipped {\n        -webkit-transform: rotateY( 0deg );\n                transform: rotateY( 0deg );\n    }\n\n}\n\n@media (min-width: 871px) {\n    body .viewer {\n        width: calc(100vh * 1540/1000);\n        height: 100vh;\n        max-height: calc(50vw * 1443/1114);\n    }\n    body .page {\n        -webkit-backface-visibility: visible;\n                backface-visibility: visible;\n        width: 50%;\n    }\n    body .flipped {\n        -webkit-transform: rotateY( 180deg );\n                transform: rotateY( 180deg );\n    }\n}\n\n\n\n\n\n\n\n\n/* Arrow buttons for desktops */\n\n.arrow-controls {\n    -webkit-transition: none;\n    transition: none;\n    width: 30px;\n    height: 100%;\n    opacity: 1;\n    -webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s;\n    cursor: pointer;\n    background: rgba(100, 100, 100, 0.4);\n    color: white;\n    z-index: 10;\n}\n\n.previous-page {\n    float: left;\n    margin: 0 0 0 -30px;\n    float: left;\n    border-radius: 10px 0 0 10px;\n}\n\n.next-page {\n    float: right;\n    margin: 0 -30px 0 0;\n    border-radius: 0 10px 10px 0;\n}\n\n.flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.noselect {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.arrow-tap {\n    opacity: 1;\n}\n\n.first-page .previous-page {\n    opacity: 0;\n}\n\n.last-page .next-page {\n    opacity: 0;\n}\n\n.first-page .next-page {\n    -webkit-animation: next-page 1s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n    -moz-animation: next-page 1s;\n    -moz-animation-iteration-count: infinite;\n    -moz-animation-timing-function: ease-in-out;\n    -o-animation: next-page 1s;\n    -o-animation-iteration-count: infinite;\n    -o-animation-timing-function: ease-in-out;\n    -ms-animation: next-page 1s;\n    -ms-animation-iteration-count: infinite;\n    -ms-animation-timing-function: ease-in-out;\n    -webkit-animation: next-page 1s;\n    animation: next-page 1s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n}\n\n@-webkit-keyframes next-page {\n    0% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n    50% {\n        -webkit-transform: translateX(6px);\n        transform: translateX(6px);\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n}\n\n@keyframes next-page {\n    0% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n    50% {\n        -webkit-transform: translateX(6px);\n        transform: translateX(6px);\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n}\n\n.page iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 0px none;\n    min-width: 100%;\n    min-height: 100%;\n    margin: 0;\n}\n\n\n.grabbable {\n    cursor: move; /* fallback if grab cursor is unsupported */\n    cursor: grab;\n    cursor: -webkit-grab;\n}\n\n /* (Optional) Apply a \"closed-hand\" cursor during drag operation. */\n.grabbable:active { \n    cursor: grabbing;\n    cursor: -webkit-grabbing;\n}\n\n\n/* Deletable */\n\n.red {\n    background-color: red;\n}\n\n.blue {\n    background-color: lightblue;\n}\n\n.green {\n    background-color: lightgreen;\n}\n\n.yellow {\n    background-color: yellow;\n}\n\n.orange {\n    background-color: orange;\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 200, 1);\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 200, 1);\n}\n\n.pink {\n    background-color: pink;\n}\n\n.wheat {\n    background-color: wheat;\n}\n\n.gray {\n    background-color: gray;\n}\n\n#plotter {\n    pointer-events: auto;\n    cursor: default;\n    -webkit-perspective: 200px;\n    /* Applies uniformly to its children */\n    perspective: 200px;\n    -webkit-perspective-origin: 50% 50%;\n            perspective-origin: 50% 50%;\n    background-position: 0 0;\n    background-size: 50% 50%;\n    background-image: -webkit-linear-gradient(left, grey 1px, transparent 1px), -webkit-linear-gradient(top, grey 1px, transparent 1px);\n    background-image: linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px);\n}\n\n#coordinates {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 200px;\n    background: rgba( 0, 190, 0, 0.3);\n}\n\n#xaxis, #yaxis {\n    width: 100%;\n    height: 50%;\n}\n\n.turn {\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-transition: all 3s;\n    transition: all 3s;\n}\n\n.forward {\n    -webkit-animation-name: forward;\n            animation-name: forward;\n    -webkit-animation-iteration-count: once;\n            animation-iteration-count: once;\n    -webkit-animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);\n            animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);\n    -webkit-animation-delay: 0;\n            animation-delay: 0;\n    -webkit-animation-duration: 6s;\n            animation-duration: 6s;\n    -webkit-transform-origin: 0 50% 0;\n            transform-origin: 0 50% 0;\n}\n\n@-webkit-keyframes forward {\n\n    from {\n        -webkit-transform: rotateY(0deg);\n                transform: rotateY(0deg);\n    }\n\n    to {\n        -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg);\n    }\n}\n\n@keyframes forward {\n\n    from {\n        -webkit-transform: rotateY(0deg);\n                transform: rotateY(0deg);\n    }\n\n    to {\n        -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg);\n    }\n}\n\n.backward {\n    -webkit-animation-name: backward;\n            animation-name: backward;\n    -webkit-animation-iteration-count: once;\n            animation-iteration-count: once;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-delay: 0;\n            animation-delay: 0;\n    -webkit-animation-duration: 6s;\n            animation-duration: 6s;\n    -webkit-transform-origin: 100% 50% 0;\n            transform-origin: 100% 50% 0;\n}\n\n@-webkit-keyframes backward {\n\n    from {\n        -webkit-transform: rotateY(0deg);\n                transform: rotateY(0deg);\n    }\n\n    to {\n        -webkit-transform: rotateY(-180deg);\n                transform: rotateY(-180deg);\n    }\n}\n\n@keyframes backward {\n\n    from {\n        -webkit-transform: rotateY(0deg);\n                transform: rotateY(0deg);\n    }\n\n    to {\n        -webkit-transform: rotateY(-180deg);\n                transform: rotateY(-180deg);\n    }\n}\n", ""]);
	
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

	"use strict";
	
	+!~-function (w, d, undefined) {
	
	    module.exports.pages = book.pages;
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
	
	    module.exports = {
	        getMatch: function getMatch(query, usePolyfill) {
	            return testMedia(query, usePolyfill).matches;
	        },
	        onChange: function onChange(query, cb, usePolyfill) {
	            var res = testMedia(query, usePolyfill);
	
	            res.addListener(function (changed) {
	                cb.apply({}, [changed.matches, changed.media]);
	            });
	        }
	    };
	
	    // Private
	    function testMedia(query, usePolyfill) {
	        var isMatchMediaSupported = !!(w && w.matchMedia) && !usePolyfill;
	
	        if (isMatchMediaSupported) {
	            var res = w.matchMedia(query);
	
	            return res;
	        } else {
	            // ... polyfill
	        }
	    }
	}(window, document);
	
	// 1.
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjBkMzU2MDMyN2Y1NGU0YzlmNjQiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3M/ODFlZiIsIndlYnBhY2s6Ly8vLi9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9zaGltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19iaW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtbnVtYmVyLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWxvZzFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWV4cG0xLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy1pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYW5jaG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJpZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGF0ZS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcGFkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWVuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5tYXRjaC1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWZvcmNlZC1wYW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLWdldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1zZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pYWRkaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pc3ViaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC51bXVsaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcGFydGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFD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UjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxx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LEVBQTZCLE1BQTdCLENBQVA7QUFDRCxJQUZEO0FBR0QsRUFKRCxFOzs7Ozs7OztBQ0FBLHFCQUFRLEdBQVIsRUFBMEIsT0FBMUIsRUFBbUMsQ0FBbkMsRUFBc0MsVUFBUyxJQUFULEVBQWM7QUFDbEQsVUFBTyxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEIsVUFBMUIsRUFBc0MsTUFBdEMsRUFBNkM7QUFDbEQsWUFBTyxLQUFLLElBQUwsRUFBVyxJQUFYLEVBQWlCLFVBQWpCLEVBQTZCLE1BQTdCLENBQVA7QUFDRCxJQUZEO0FBR0QsRUFKRCxFOzs7Ozs7OztBQ0FBLHFCQUFRLEdBQVIsRUFBMEIsUUFBMUIsRUFBb0MsQ0FBcEMsRUFBdUMsVUFBUyxJQUFULEVBQWM7QUFDbkQsVUFBTyxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsVUFBM0IsRUFBdUMsTUFBdkMsRUFBOEM7QUFDbkQsWUFBTyxLQUFLLElBQUwsRUFBVyxJQUFYLEVBQWlCLFVBQWpCLEVBQTZCLE1BQTdCLENBQVA7QUFDRCxJQUZEO0FBR0QsRUFKRCxFOzs7Ozs7OztBQ0FBLHFCQUFRLEdBQVIsRUFBMEIsU0FBMUIsRUFBcUMsQ0FBckMsRUFBd0MsVUFBUyxJQUFULEVBQWM7QUFDcEQsVUFBTyxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBK0M7QUFDcEQsWUFBTyxLQUFLLElBQUwsRUFBVyxJQUFYLEVBQWlCLFVBQWpCLEVBQTZCLE1BQTdCLENBQVA7QUFDRCxJQUZEO0FBR0QsRUFKRCxFOzs7Ozs7OztBQ0FBLHFCQUFRLEdBQVIsRUFBMEIsU0FBMUIsRUFBcUMsQ0FBckMsRUFBd0MsVUFBUyxJQUFULEVBQWM7QUFDcEQsVUFBTyxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBK0M7QUFDcEQsWUFBTyxLQUFLLElBQUwsRUFBVyxJQUFYLEVBQWlCLFVBQWpCLEVBQTZCLE1BQTdCLENBQVA7QUFDRCxJQUZEO0FBR0QsRUFKRCxFOzs7Ozs7OztB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LENBaUNELE1BakNDLEVBaUNPLFFBakNQLENBQUo7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDYwZDM1NjAzMjdmNTRlNGM5ZjY0XG4gKiovIiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuaW1wb3J0IGlzVG91Y2ggZnJvbSAnLi9saWIvaXNUb3VjaC5qcyc7XG5cbmltcG9ydCB3aGF0ZXZlciBmcm9tICcuL2xpYi9wYWdlcy5qcyc7XG5cbmltcG9ydCBncmFwaCBmcm9tICcuL2xpYi9ncmFwaC5qcyc7XG5cbmltcG9ydCB2aWV3ZXIgZnJvbSAnLi9saWIvbW9kZS5qcyc7XG5cblxuISsgLX4oKHcsIGQsIHVuZGVmaW5lZCkgPT4ge1xuXG4gICAgbGV0IG5vZGUgPSBkLmdldEVsZW1lbnRCeUlkKCdib29rJyk7XG5cbiAgICBsZXQgYm9vayA9IHt9O1xuXG4gICAgYm9vay5tb2RlID0gdmlld2VyLmdldE1hdGNoKCdhbGwgYW5kIChtaW4td2lkdGg6IDg3MHB4KScpID8gJ2RvdWJsZScgOiAnc2luZ2xlJztcblxuICAgIHZpZXdlci5vbkNoYW5nZSgnYWxsIGFuZCAobWluLXdpZHRoOiA4NzBweCknLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICBib29rLm1vZGUgPSBtYXRjaCA/ICdkb3VibGUnIDogJ3NpbmdsZSc7XG4gICAgfSk7XG5cblxuICAgIC8vIFdlIHN3ZWVwIHBhZ2VzIGhlcmUuXG4gICAgYm9vay5wYWdlcyA9IFsuLi5ub2RlLmNoaWxkcmVuXS5tYXAoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB3cmFwUGFnZShvYmopO1xuICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiB3cmFwUGFnZShwYWdlT2JqKSB7XG4gICAgICAgIC8vIFdyYXAgYXBwcm9wcmlhdGVseVxuICAgICAgICByZXR1cm4gcGFnZU9iajtcbiAgICB9XG5cblxuICAgIHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4obm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZS5oYXNDaGlsZE5vZGVzKCkpXG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICB9XG5cblxuICAgIC8vIFByaW50IHBhZ2VzLCBhZGQsIHJlbW92ZSBpbnRvIHRoZSBET00gZXRjLlxuICAgIGJvb2sucmFuZ2UgPSBbMSwgNl07XG5cblxuICAgIGZ1bmN0aW9uIHByaW50UmFuZ2UocmFuZ2UpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJhbmdlWzBdOyBpIDw9IHJhbmdlWzFdOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtID0gYm9vay5wYWdlc1tpIC0gMV07XG4gICAgICAgICAgICBlbGVtLmlkID0gaTtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmludFJhbmdlKGJvb2sucmFuZ2UpO1xuXG4gICAgZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHR1cm5QYWdlKCduZXh0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0dXJuUGFnZSgncHJldmlvdXMnKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdHVyblBhZ2UoZGlyZWN0aW9uKSB7XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuXG4gICAgICAgICAgICAgICAgcmVtb3ZlUGFnZShib29rLnJhbmdlWzBdKTtcbiAgICAgICAgICAgICAgICBhZGRQYWdlKGJvb2sucmFuZ2VbMV0gKyAxKTtcbiAgICAgICAgICAgICAgICBib29rLnJhbmdlWzBdKys7XG4gICAgICAgICAgICAgICAgYm9vay5yYW5nZVsxXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG5cbiAgICAgICAgICAgICAgICByZW1vdmVQYWdlKGJvb2sucmFuZ2VbMV0pO1xuICAgICAgICAgICAgICAgIGFkZFBhZ2UoYm9vay5yYW5nZVswXSAtIDEpO1xuICAgICAgICAgICAgICAgIGJvb2sucmFuZ2VbMF0tLTtcbiAgICAgICAgICAgICAgICBib29rLnJhbmdlWzFdLS07XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlVmlld1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFnZShwYWdlTnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmUgJyArIHBhZ2VOdW1iZXIpO1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGQuZ2V0RWxlbWVudEJ5SWQocGFnZU51bWJlcikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhZ2UocGFnZU51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnQWRkICcgKyBwYWdlTnVtYmVyKTtcbiAgICAgICAgbGV0IGVsZW0gPSBib29rLnBhZ2VzW3BhZ2VOdW1iZXIgLSAxXTtcbiAgICAgICAgZWxlbS5pZCA9IHBhZ2VOdW1iZXI7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS50YWJsZShib29rKTtcblxuXG5cblxuXG5cblxuXG5cbn0pKHdpbmRvdywgZG9jdW1lbnQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zY3JpcHQuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzISEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEhLi9zdHlsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jc3Mvc3R5bGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbio6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4vKiAgICBjdXJzb3I6IG5vbmU7ICovICBcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICBcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udmlld2VyIHtcXG4gICAgLypwb2ludGVyLWV2ZW50czogYXV0bzsqL1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMjAwcHg7IC8qIEFwcGxpZXMgdW5pZm9ybWx5IHRvIGl0cyBjaGlsZHJlbiAqL1xcbiAgICBwZXJzcGVjdGl2ZTogMjAwcHg7IFxcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTsgXFxuICAgICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbn1cXG5cXG4jYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7IC8qIENhbiBlZmZlY3QgcGluY2gyem9vbSAqL1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgLyogR2V0cyBmYXVzIDNEIHNwYWNlIGZvciBwYWdlcyAqL1xcbn1cXG5cXG4ucGFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuLmxlZnQge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwXFxufVxcblxcbi5wcm9tb3RlZCB7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XFxuICAgIGJvZHkgLnZpZXdlciB7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2aCAqIDE1NDAvKDEwMDAgKiAyKSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2dyAqIDE0NDMvMTExNCk7XFxuICAgIH1cXG4gICAgYm9keSAucGFnZSB7XFxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgYm9keSAuZmxpcHBlZCB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDBkZWcgKTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODcxcHgpIHtcXG4gICAgYm9keSAudmlld2VyIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZoICogMTU0MC8xMDAwKTtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDUwdncgKiAxNDQzLzExMTQpO1xcbiAgICB9XFxuICAgIGJvZHkgLnBhZ2Uge1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgICBib2R5IC5mbGlwcGVkIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBBcnJvdyBidXR0b25zIGZvciBkZXNrdG9wcyAqL1xcblxcbi5hcnJvdy1jb250cm9scyB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5wcmV2aW91cy1wYWdlIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCAwIDAgLTMwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xcbn1cXG5cXG4ubmV4dC1wYWdlIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDAgLTMwcHggMCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbn1cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubm9zZWxlY3Qge1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hcnJvdy10YXAge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZmlyc3QtcGFnZSAucHJldmlvdXMtcGFnZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5sYXN0LXBhZ2UgLm5leHQtcGFnZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5maXJzdC1wYWdlIC5uZXh0LXBhZ2Uge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbmV4dC1wYWdlIDFzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LWFuaW1hdGlvbjogbmV4dC1wYWdlIDFzO1xcbiAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAtby1hbmltYXRpb246IG5leHQtcGFnZSAxcztcXG4gICAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIC1vLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAtbXMtYW5pbWF0aW9uOiBuZXh0LXBhZ2UgMXM7XFxuICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbmV4dC1wYWdlIDFzO1xcbiAgICBhbmltYXRpb246IG5leHQtcGFnZSAxcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbmV4dC1wYWdlIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBuZXh0LXBhZ2Uge1xcbiAgICAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4ucGFnZSBpZnJhbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyOiAwcHggbm9uZTtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5ncmFiYmFibGUge1xcbiAgICBjdXJzb3I6IG1vdmU7IC8qIGZhbGxiYWNrIGlmIGdyYWIgY3Vyc29yIGlzIHVuc3VwcG9ydGVkICovXFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxufVxcblxcbiAvKiAoT3B0aW9uYWwpIEFwcGx5IGEgXFxcImNsb3NlZC1oYW5kXFxcIiBjdXJzb3IgZHVyaW5nIGRyYWcgb3BlcmF0aW9uLiAqL1xcbi5ncmFiYmFibGU6YWN0aXZlIHsgXFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG59XFxuXFxuXFxuLyogRGVsZXRhYmxlICovXFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi55ZWxsb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAyMDAsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMjAwLCAxKTtcXG59XFxuXFxuLnBpbmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4ud2hlYXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuLmdyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4jcGxvdHRlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDIwMHB4O1xcbiAgICAvKiBBcHBsaWVzIHVuaWZvcm1seSB0byBpdHMgY2hpbGRyZW4gKi9cXG4gICAgcGVyc3BlY3RpdmU6IDIwMHB4O1xcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBncmV5IDFweCwgdHJhbnNwYXJlbnQgMXB4KSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCBncmV5IDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBncmV5IDFweCwgdHJhbnNwYXJlbnQgMXB4KSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZ3JleSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XFxufVxcblxcbiNjb29yZGluYXRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDAsIDE5MCwgMCwgMC4zKTtcXG59XFxuXFxuI3hheGlzLCAjeWF4aXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbi50dXJuIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzcztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDNzO1xcbn1cXG5cXG4uZm9yd2FyZCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZvcndhcmQ7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZvcndhcmQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogb25jZTtcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBvbmNlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtc3RhcnQsIGN1YmljLWJlemllcigwLjEsIDAuNywgMS4wLCAwLjEpO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIHN0ZXAtc3RhcnQsIGN1YmljLWJlemllcigwLjEsIDAuNywgMS4wLCAwLjEpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMDtcXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlIDA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCUgMDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZvcndhcmQge1xcblxcbiAgICBmcm9tIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmb3J3YXJkIHtcXG5cXG4gICAgZnJvbSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICB9XFxufVxcblxcbi5iYWNrd2FyZCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2t3YXJkO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBiYWNrd2FyZDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBvbmNlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IG9uY2U7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMDtcXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlIDA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCUgMDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2t3YXJkIHtcXG5cXG4gICAgZnJvbSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBiYWNrd2FyZCB7XFxuXFxuICAgIGZyb20ge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vY3NzL3N0eWxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcImNvcmUtanMvc2hpbVwiKTtcblxucmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTtcblxucmVxdWlyZShcImNvcmUtanMvZm4vcmVnZXhwL2VzY2FwZVwiKTtcblxuLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuaWYgKGdsb2JhbC5fYmFiZWxQb2x5ZmlsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC1wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpO1xufVxuZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTtcblxuLy8gU2hvdWxkIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZTpcblxudmFyIERFRklORV9QUk9QRVJUWSA9IFwiZGVmaW5lUHJvcGVydHlcIjtcbmZ1bmN0aW9uIGRlZmluZShPLCBrZXksIHZhbHVlKSB7XG4gIE9ba2V5XSB8fCBPYmplY3RbREVGSU5FX1BST1BFUlRZXShPLCBrZXksIHtcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuXG5kZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRMZWZ0XCIsIFwiXCIucGFkU3RhcnQpO1xuZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIFwicGFkUmlnaHRcIiwgXCJcIi5wYWRFbmQpO1xuXG5cInBvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXMsaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlcyxqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YscmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgW11ba2V5XSAmJiBkZWZpbmUoQXJyYXksIGtleSwgRnVuY3Rpb24uY2FsbC5iaW5kKFtdW2tleV0pKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanNcbiAqKi8iLCJyZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmJpbmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYXNpbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNicnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jbHozMicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5leHBtMScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguaW11bCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC50YW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy50cmltJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuYW5jaG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5iaWcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5ib2xkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mb250c2l6ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRhbGljcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcubGluaycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc21hbGwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS5ub3cnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lm9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmpvaW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc29ydCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5mb3ItZWFjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmlsdGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNvbWUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZXZlcnknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtZW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLm1hdGNoLWFsbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLXNldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLWdldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLXNldHRlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmVycm9yLmlzLWVycm9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguaWFkZGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC5pc3ViaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXRoLmltdWxoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGgudW11bGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXNhcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYnNlcnZhYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLnRpbWVycycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi5pbW1lZGlhdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9fY29yZScpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL3NoaW0uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbiAqKi8iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiovIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qc1xuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fa2V5b2YuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuICoqLyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKi8iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqLyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanNcbiAqKi8iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faHRtbC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbiAqKi8iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4gKiovIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydGllczogcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzXG4gKiovIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKi8iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbiAqKi8iLCIvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpLmY7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qc1xuICoqLyIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzXG4gKiovIiwiLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIG1ldGEgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG4gIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbC5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbigkcHJldmVudEV4dGVuc2lvbnMpe1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qc1xuICoqLyIsIi8vIDE5LjEuMi4xMiBPYmplY3QuaXNGcm96ZW4oTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzRnJvemVuJywgZnVuY3Rpb24oJGlzRnJvemVuKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRnJvemVuID8gJGlzRnJvemVuKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanNcbiAqKi8iLCIvLyAxOS4xLjIuMTMgT2JqZWN0LmlzU2VhbGVkKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uKCRpc1NlYWxlZCl7XG4gIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc1NlYWxlZCA/ICRpc1NlYWxlZChpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzXG4gKiovIiwiLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCRpc0V4dGVuc2libGUpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanNcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtpczogcmVxdWlyZSgnLi9fc2FtZS12YWx1ZScpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzXG4gKiovIiwiLy8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KXtcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NhbWUtdmFsdWUuanNcbiAqKi8iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1xuICoqLyIsIi8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnRnVuY3Rpb24nLCB7YmluZDogcmVxdWlyZSgnLi9fYmluZCcpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgaXNPYmplY3QgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaW52b2tlICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgYXJyYXlTbGljZSA9IFtdLnNsaWNlXG4gICwgZmFjdG9yaWVzICA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24oRiwgbGVuLCBhcmdzKXtcbiAgaWYoIShsZW4gaW4gZmFjdG9yaWVzKSl7XG4gICAgZm9yKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qLCBhcmdzLi4uICovKXtcbiAgdmFyIGZuICAgICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgLCBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbigvKiBhcmdzLi4uICovKXtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbiAgaWYoaXNPYmplY3QoZm4ucHJvdG90eXBlKSlib3VuZC5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYmluZC5qc1xuICoqLyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgaGFzICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgRlByb3RvICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAsIG5hbWVSRSAgICAgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS9cbiAgLCBOQU1FICAgICAgID0gJ25hbWUnO1xuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpe1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgLCBuYW1lID0gKCcnICsgdGhhdCkubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIGhhcyh0aGF0LCBOQU1FKSB8fCAhaXNFeHRlbnNpYmxlKHRoYXQpIHx8IGRQKHRoYXQsIE5BTUUsIGNyZWF0ZURlc2MoNSwgbmFtZSkpO1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSEFTX0lOU1RBTkNFICAgPSByZXF1aXJlKCcuL193a3MnKSgnaGFzSW5zdGFuY2UnKVxuICAsIEZ1bmN0aW9uUHJvdG8gID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gMTkuMi4zLjYgRnVuY3Rpb24ucHJvdG90eXBlW0BAaGFzSW5zdGFuY2VdKFYpXG5pZighKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSlyZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwge3ZhbHVlOiBmdW5jdGlvbihPKXtcbiAgaWYodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xuICBpZighaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKXJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcbiAgd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKWlmKHRoaXMucHJvdG90eXBlID09PSBPKXJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzXG4gKiovIiwidmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fcGFyc2UtaW50Jyk7XG4vLyAxOC4yLjUgcGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlSW50ICE9ICRwYXJzZUludCksIHtwYXJzZUludDogJHBhcnNlSW50fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtaW50LmpzXG4gKiovIiwidmFyICRwYXJzZUludCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnBhcnNlSW50XG4gICwgJHRyaW0gICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltXG4gICwgd3MgICAgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJylcbiAgLCBoZXggICAgICAgPSAvXltcXC0rXT8wW3hYXS87XG5cbm1vZHVsZS5leHBvcnRzID0gJHBhcnNlSW50KHdzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdzICsgJzB4MTYnKSAhPT0gMjIgPyBmdW5jdGlvbiBwYXJzZUludChzdHIsIHJhZGl4KXtcbiAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKTtcbiAgcmV0dXJuICRwYXJzZUludChzdHJpbmcsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KHN0cmluZykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3BhcnNlLWludC5qc1xuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzcGFjZXMgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJylcbiAgLCBzcGFjZSAgID0gJ1snICsgc3BhY2VzICsgJ10nXG4gICwgbm9uICAgICA9ICdcXHUyMDBiXFx1MDA4NSdcbiAgLCBsdHJpbSAgID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpXG4gICwgcnRyaW0gICA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uKEtFWSwgZXhlYywgQUxJQVMpe1xuICB2YXIgZXhwICAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYoQUxJQVMpZXhwW0FMSUFTXSA9IGZuO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFLCAnU3RyaW5nJywgZXhwKTtcbn07XG5cbi8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4vLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcbi8vIDMgLT4gU3RyaW5nI3RyaW1cbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uKHN0cmluZywgVFlQRSl7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZihUWVBFICYgMSlzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZihUWVBFICYgMilzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctdHJpbS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDE4LjIuNCBwYXJzZUZsb2F0KHN0cmluZylcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdC5qc1xuICoqLyIsInZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnBhcnNlRmxvYXRcbiAgLCAkdHJpbSAgICAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy10cmltJykudHJpbTtcblxubW9kdWxlLmV4cG9ydHMgPSAxIC8gJHBhcnNlRmxvYXQocmVxdWlyZSgnLi9fc3RyaW5nLXdzJykgKyAnLTAnKSAhPT0gLUluZmluaXR5ID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHIpe1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpXG4gICAgLCByZXN1bHQgPSAkcGFyc2VGbG9hdChzdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcGFyc2UtZmxvYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBjb2YgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJylcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZmFpbHMgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgZ09QTiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCBnT1BEICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZlxuICAsIGRQICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsICR0cmltICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltXG4gICwgTlVNQkVSICAgICAgICAgICAgPSAnTnVtYmVyJ1xuICAsICROdW1iZXIgICAgICAgICAgID0gZ2xvYmFsW05VTUJFUl1cbiAgLCBCYXNlICAgICAgICAgICAgICA9ICROdW1iZXJcbiAgLCBwcm90byAgICAgICAgICAgICA9ICROdW1iZXIucHJvdG90eXBlXG4gIC8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xuICAsIEJST0tFTl9DT0YgICAgICAgID0gY29mKHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKShwcm90bykpID09IE5VTUJFUlxuICAsIFRSSU0gICAgICAgICAgICAgID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24oYXJndW1lbnQpe1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICBpZih0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMil7XG4gICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMClcbiAgICAgICwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuICAgIGlmKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpe1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZihmaXJzdCA9PT0gNDgpe1xuICAgICAgc3dpdGNoKGl0LmNoYXJDb2RlQXQoMSkpe1xuICAgICAgICBjYXNlIDY2IDogY2FzZSA5OCAgOiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQgOiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZm9yKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKXJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbmlmKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSl7XG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpe1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlXG4gICAgICAsIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uKCl7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IodmFyIGtleXMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspe1xuICAgIGlmKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpe1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHRhcmdldCwgQyl7XG4gIHZhciBQLCBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICBpZihTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKXtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvSW50ZWdlciAgICA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGFOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4vX2EtbnVtYmVyLXZhbHVlJylcbiAgLCByZXBlYXQgICAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0JylcbiAgLCAkdG9GaXhlZCAgICAgPSAxLi50b0ZpeGVkXG4gICwgZmxvb3IgICAgICAgID0gTWF0aC5mbG9vclxuICAsIGRhdGEgICAgICAgICA9IFswLCAwLCAwLCAwLCAwLCAwXVxuICAsIEVSUk9SICAgICAgICA9ICdOdW1iZXIudG9GaXhlZDogaW5jb3JyZWN0IGludm9jYXRpb24hJ1xuICAsIFpFUk8gICAgICAgICA9ICcwJztcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24obiwgYyl7XG4gIHZhciBpICA9IC0xXG4gICAgLCBjMiA9IGM7XG4gIHdoaWxlKCsraSA8IDYpe1xuICAgIGMyICs9IG4gKiBkYXRhW2ldO1xuICAgIGRhdGFbaV0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcbnZhciBkaXZpZGUgPSBmdW5jdGlvbihuKXtcbiAgdmFyIGkgPSA2XG4gICAgLCBjID0gMDtcbiAgd2hpbGUoLS1pID49IDApe1xuICAgIGMgKz0gZGF0YVtpXTtcbiAgICBkYXRhW2ldID0gZmxvb3IoYyAvIG4pO1xuICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICB9XG59O1xudmFyIG51bVRvU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgdmFyIGkgPSA2XG4gICAgLCBzID0gJyc7XG4gIHdoaWxlKC0taSA+PSAwKXtcbiAgICBpZihzICE9PSAnJyB8fCBpID09PSAwIHx8IGRhdGFbaV0gIT09IDApe1xuICAgICAgdmFyIHQgPSBTdHJpbmcoZGF0YVtpXSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKFpFUk8sIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG52YXIgcG93ID0gZnVuY3Rpb24oeCwgbiwgYWNjKXtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcbnZhciBsb2cgPSBmdW5jdGlvbih4KXtcbiAgdmFyIG4gID0gMFxuICAgICwgeDIgPSB4O1xuICB3aGlsZSh4MiA+PSA0MDk2KXtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUoeDIgPj0gMil7XG4gICAgbiAgKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoISEkdG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4Li50b0ZpeGVkKDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCdcbikgfHwgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgJHRvRml4ZWQuY2FsbCh7fSk7XG59KSksICdOdW1iZXInLCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpe1xuICAgIHZhciB4ID0gYU51bWJlclZhbHVlKHRoaXMsIEVSUk9SKVxuICAgICAgLCBmID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKVxuICAgICAgLCBzID0gJydcbiAgICAgICwgbSA9IFpFUk9cbiAgICAgICwgZSwgeiwgaiwgaztcbiAgICBpZihmIDwgMCB8fCBmID4gMjApdGhyb3cgUmFuZ2VFcnJvcihFUlJPUik7XG4gICAgaWYoeCAhPSB4KXJldHVybiAnTmFOJztcbiAgICBpZih4IDw9IC0xZTIxIHx8IHggPj0gMWUyMSlyZXR1cm4gU3RyaW5nKHgpO1xuICAgIGlmKHggPCAwKXtcbiAgICAgIHMgPSAnLSc7XG4gICAgICB4ID0gLXg7XG4gICAgfVxuICAgIGlmKHggPiAxZS0yMSl7XG4gICAgICBlID0gbG9nKHggKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8geCAqIHBvdygyLCAtZSwgMSkgOiB4IC8gcG93KDIsIGUsIDEpO1xuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuICAgICAgZSA9IDUyIC0gZTtcbiAgICAgIGlmKGUgPiAwKXtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmO1xuICAgICAgICB3aGlsZShqID49IDcpe1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlKGogPj0gMjMpe1xuICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZSgxIDw8IGopO1xuICAgICAgICBtdWx0aXBseSgxLCAxKTtcbiAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICBtID0gbnVtVG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcbiAgICAgICAgbSA9IG51bVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbChaRVJPLCBmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoZiA+IDApe1xuICAgICAgayA9IG0ubGVuZ3RoO1xuICAgICAgbSA9IHMgKyAoayA8PSBmID8gJzAuJyArIHJlcGVhdC5jYWxsKFpFUk8sIGYgLSBrKSArIG0gOiBtLnNsaWNlKDAsIGsgLSBmKSArICcuJyArIG0uc2xpY2UoayAtIGYpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHMgKyBtO1xuICAgIH0gcmV0dXJuIG07XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qc1xuICoqLyIsInZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIG1zZyl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnbnVtYmVyJyAmJiBjb2YoaXQpICE9ICdOdW1iZXInKXRocm93IFR5cGVFcnJvcihtc2cpO1xuICByZXR1cm4gK2l0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hLW51bWJlci12YWx1ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKVxuICAgICwgcmVzID0gJydcbiAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xuICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZhaWxzICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGFOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4vX2EtbnVtYmVyLXZhbHVlJylcbiAgLCAkdG9QcmVjaXNpb24gPSAxLi50b1ByZWNpc2lvbjtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIElFNy1cbiAgcmV0dXJuICR0b1ByZWNpc2lvbi5jYWxsKDEsIHVuZGVmaW5lZCkgIT09ICcxJztcbn0pIHx8ICEkZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgJHRvUHJlY2lzaW9uLmNhbGwoe30pO1xufSkpLCAnTnVtYmVyJywge1xuICB0b1ByZWNpc2lvbjogZnVuY3Rpb24gdG9QcmVjaXNpb24ocHJlY2lzaW9uKXtcbiAgICB2YXIgdGhhdCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCAnTnVtYmVyI3RvUHJlY2lzaW9uOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgICByZXR1cm4gcHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyAkdG9QcmVjaXNpb24uY2FsbCh0aGF0KSA6ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQsIHByZWNpc2lvbik7IFxuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uLmpzXG4gKiovIiwiLy8gMjAuMS4yLjEgTnVtYmVyLkVQU0lMT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge0VQU0lMT046IE1hdGgucG93KDIsIC01Mil9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qc1xuICoqLyIsIi8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBfaXNGaW5pdGUgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5pc0Zpbml0ZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzXG4gKiovIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc0ludGVnZXI6IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGZsb29yICAgID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KXtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanNcbiAqKi8iLCIvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpe1xuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzXG4gKiovIiwiLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNJbnRlZ2VyID0gcmVxdWlyZSgnLi9faXMtaW50ZWdlcicpXG4gICwgYWJzICAgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcil7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanNcbiAqKi8iLCIvLyAyMC4xLjIuNiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzXG4gKiovIiwidmFyICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4vX3BhcnNlLWZsb2F0Jyk7XG4vLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCAnTnVtYmVyJywge3BhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzXG4gKiovIiwidmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fcGFyc2UtaW50Jyk7XG4vLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VJbnQgIT0gJHBhcnNlSW50KSwgJ051bWJlcicsIHtwYXJzZUludDogJHBhcnNlSW50fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qc1xuICoqLyIsIi8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBsb2cxcCAgID0gcmVxdWlyZSgnLi9fbWF0aC1sb2cxcCcpXG4gICwgc3FydCAgICA9IE1hdGguc3FydFxuICAsICRhY29zaCAgPSBNYXRoLmFjb3NoO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFjb3NoXG4gIC8vIFY4IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM1MDlcbiAgJiYgTWF0aC5mbG9vcigkYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkpID09IDcxMFxuICAvLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYWNvc2goSW5maW5pdHkpIC0+IE5hTiBcbiAgJiYgJGFjb3NoKEluZmluaXR5KSA9PSBJbmZpbml0eVxuKSwgJ01hdGgnLCB7XG4gIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2XG4gICAgICA/IE1hdGgubG9nKHgpICsgTWF0aC5MTjJcbiAgICAgIDogbG9nMXAoeCAtIDEgKyBzcXJ0KHggLSAxKSAqIHNxcnQoeCArIDEpKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qc1xuICoqLyIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1sb2cxcC5qc1xuICoqLyIsIi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkYXNpbmggID0gTWF0aC5hc2luaDtcblxuZnVuY3Rpb24gYXNpbmgoeCl7XG4gIHJldHVybiAhaXNGaW5pdGUoeCA9ICt4KSB8fCB4ID09IDAgPyB4IDogeCA8IDAgPyAtYXNpbmgoLXgpIDogTWF0aC5sb2coeCArIE1hdGguc3FydCh4ICogeCArIDEpKTtcbn1cblxuLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFzaW5oKDApIC0+IC0wIFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhc2luaCAmJiAxIC8gJGFzaW5oKDApID4gMCksICdNYXRoJywge2FzaW5oOiBhc2luaH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanNcbiAqKi8iLCIvLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGF0YW5oICA9IE1hdGguYXRhbmg7XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hdGFuaCgtMCkgLT4gMCBcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXRhbmggJiYgMSAvICRhdGFuaCgtMCkgPCAwKSwgJ01hdGgnLCB7XG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzXG4gKiovIiwiLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgc2lnbiAgICA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNicnQ6IGZ1bmN0aW9uIGNicnQoeCl7XG4gICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qc1xuICoqLyIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zaWduLmpzXG4gKiovIiwiLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpe1xuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qc1xuICoqLyIsIi8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY29zaDogZnVuY3Rpb24gY29zaCh4KXtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNvc2guanNcbiAqKi8iLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRleHBtMSAgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCRleHBtMSAhPSBNYXRoLmV4cG0xKSwgJ01hdGgnLCB7ZXhwbTE6ICRleHBtMX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanNcbiAqKi8iLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBtMSA9IE1hdGguZXhwbTE7XG5tb2R1bGUuZXhwb3J0cyA9ICghJGV4cG0xXG4gIC8vIE9sZCBGRiBidWdcbiAgfHwgJGV4cG0xKDEwKSA+IDIyMDI1LjQ2NTc5NDgwNjcxOSB8fCAkZXhwbTEoMTApIDwgMjIwMjUuNDY1Nzk0ODA2NzE2NTE2OFxuICAvLyBUb3IgQnJvd3NlciBidWdcbiAgfHwgJGV4cG0xKC0yZS0xNykgIT0gLTJlLTE3XG4pID8gZnVuY3Rpb24gZXhwbTEoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59IDogJGV4cG0xO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtZXhwbTEuanNcbiAqKi8iLCIvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHNpZ24gICAgICA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpXG4gICwgcG93ICAgICAgID0gTWF0aC5wb3dcbiAgLCBFUFNJTE9OICAgPSBwb3coMiwgLTUyKVxuICAsIEVQU0lMT04zMiA9IHBvdygyLCAtMjMpXG4gICwgTUFYMzIgICAgID0gcG93KDIsIDEyNykgKiAoMiAtIEVQU0lMT04zMilcbiAgLCBNSU4zMiAgICAgPSBwb3coMiwgLTEyNik7XG5cbnZhciByb3VuZFRpZXNUb0V2ZW4gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGZyb3VuZDogZnVuY3Rpb24gZnJvdW5kKHgpe1xuICAgIHZhciAkYWJzICA9IE1hdGguYWJzKHgpXG4gICAgICAsICRzaWduID0gc2lnbih4KVxuICAgICAgLCBhLCByZXN1bHQ7XG4gICAgaWYoJGFicyA8IE1JTjMyKXJldHVybiAkc2lnbiAqIHJvdW5kVGllc1RvRXZlbigkYWJzIC8gTUlOMzIgLyBFUFNJTE9OMzIpICogTUlOMzIgKiBFUFNJTE9OMzI7XG4gICAgYSA9ICgxICsgRVBTSUxPTjMyIC8gRVBTSUxPTikgKiAkYWJzO1xuICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAgIGlmKHJlc3VsdCA+IE1BWDMyIHx8IHJlc3VsdCAhPSByZXN1bHQpcmV0dXJuICRzaWduICogSW5maW5pdHk7XG4gICAgcmV0dXJuICRzaWduICogcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZC5qc1xuICoqLyIsIi8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFicyAgICAgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBoeXBvdDogZnVuY3Rpb24gaHlwb3QodmFsdWUxLCB2YWx1ZTIpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHN1bSAgPSAwXG4gICAgICAsIGkgICAgPSAwXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIGxhcmcgPSAwXG4gICAgICAsIGFyZywgZGl2O1xuICAgIHdoaWxlKGkgPCBhTGVuKXtcbiAgICAgIGFyZyA9IGFicyhhcmd1bWVudHNbaSsrXSk7XG4gICAgICBpZihsYXJnIDwgYXJnKXtcbiAgICAgICAgZGl2ICA9IGxhcmcgLyBhcmc7XG4gICAgICAgIHN1bSAgPSBzdW0gKiBkaXYgKiBkaXYgKyAxO1xuICAgICAgICBsYXJnID0gYXJnO1xuICAgICAgfSBlbHNlIGlmKGFyZyA+IDApe1xuICAgICAgICBkaXYgID0gYXJnIC8gbGFyZztcbiAgICAgICAgc3VtICs9IGRpdiAqIGRpdjtcbiAgICAgIH0gZWxzZSBzdW0gKz0gYXJnO1xuICAgIH1cbiAgICByZXR1cm4gbGFyZyA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IGxhcmcgKiBNYXRoLnNxcnQoc3VtKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qc1xuICoqLyIsIi8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkaW11bCAgID0gTWF0aC5pbXVsO1xuXG4vLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcbn0pLCAnTWF0aCcsIHtcbiAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsIHhuID0gK3hcbiAgICAgICwgeW4gPSAreVxuICAgICAgLCB4bCA9IFVJTlQxNiAmIHhuXG4gICAgICAsIHlsID0gVUlOVDE2ICYgeW47XG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzXG4gKiovIiwiLy8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHgpe1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMDtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qc1xuICoqLyIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7bG9nMXA6IHJlcXVpcmUoJy4vX21hdGgtbG9nMXAnKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAuanNcbiAqKi8iLCIvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qc1xuICoqLyIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtzaWduOiByZXF1aXJlKCcuL19tYXRoLXNpZ24nKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qc1xuICoqLyIsIi8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBleHBtMSAgID0gcmVxdWlyZSgnLi9fbWF0aC1leHBtMScpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4vLyBWOCBuZWFyIENocm9taXVtIDM4IGhhcyBhIHByb2JsZW0gd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcbn0pLCAnTWF0aCcsIHtcbiAgc2luaDogZnVuY3Rpb24gc2luaCh4KXtcbiAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDFcbiAgICAgID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDJcbiAgICAgIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2luaC5qc1xuICoqLyIsIi8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBleHBtMSAgID0gcmVxdWlyZSgnLi9fbWF0aC1leHBtMScpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRhbmg6IGZ1bmN0aW9uIHRhbmgoeCl7XG4gICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXG4gICAgICAsIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzXG4gKiovIiwiLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KXtcbiAgICByZXR1cm4gKGl0ID4gMCA/IE1hdGguZmxvb3IgOiBNYXRoLmNlaWwpKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qc1xuICoqLyIsInZhciAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9JbmRleCAgICAgICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpXG4gICwgZnJvbUNoYXJDb2RlICAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG4gICwgJGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuLy8gbGVuZ3RoIHNob3VsZCBiZSAxLCBvbGQgRkYgcHJvYmxlbVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoISEkZnJvbUNvZGVQb2ludCAmJiAkZnJvbUNvZGVQb2ludC5sZW5ndGggIT0gMSksICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXG4gIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzICA9IFtdXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIGkgICAgPSAwXG4gICAgICAsIGNvZGU7XG4gICAgd2hpbGUoYUxlbiA+IGkpe1xuICAgICAgY29kZSA9ICthcmd1bWVudHNbaSsrXTtcbiAgICAgIGlmKHRvSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKXRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xuICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcbiAgICAgICAgPyBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgICAgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKVxuICAgICAgKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcbiAgICB2YXIgdHBsICA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpXG4gICAgICAsIGxlbiAgPSB0b0xlbmd0aCh0cGwubGVuZ3RoKVxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXMgID0gW11cbiAgICAgICwgaSAgICA9IDA7XG4gICAgd2hpbGUobGVuID4gaSl7XG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcbiAgICAgIGlmKGkgPCBhTGVuKXJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcbnJlcXVpcmUoJy4vX3N0cmluZy10cmltJykoJ3RyaW0nLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltKCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDMpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGF0ICAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKGZhbHNlKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcbiAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdC5qc1xuICoqLyIsIi8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY29udGV4dCAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKVxuICAsIEVORFNfV0lUSCA9ICdlbmRzV2l0aCdcbiAgLCAkZW5kc1dpdGggPSAnJ1tFTkRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKEVORFNfV0lUSCksICdTdHJpbmcnLCB7XG4gIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKVxuICAgICAgLCBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIGxlbiAgICA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxuICAgICAgLCBlbmQgICAgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pXG4gICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkZW5kc1dpdGhcbiAgICAgID8gJGVuZHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBlbmQpXG4gICAgICA6IHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzXG4gKiovIiwiLy8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKXtcbiAgaWYoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSl0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWNvbnRleHQuanNcbiAqKi8iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgY29mICAgICAgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIE1BVENIICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qc1xuICoqLyIsInZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2goZSl7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoKGYpeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLWlzLXJlZ2V4cC5qc1xuICoqLyIsIi8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvbnRleHQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKVxuICAsIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShJTkNMVURFUyksICdTdHJpbmcnLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuICByZXBlYXQ6IHJlcXVpcmUoJy4vX3N0cmluZy1yZXBlYXQnKVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qc1xuICoqLyIsIi8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjb250ZXh0ICAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1jb250ZXh0JylcbiAgLCBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJ1xuICAsICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgdmFyIHRoYXQgICA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSClcbiAgICAgICwgaW5kZXggID0gdG9MZW5ndGgoTWF0aC5taW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSlcbiAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRzdGFydHNXaXRoXG4gICAgICA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcbiAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4yIFN0cmluZy5wcm90b3R5cGUuYW5jaG9yKG5hbWUpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdhbmNob3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFuY2hvcihuYW1lKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICduYW1lJywgbmFtZSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3IuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgcXVvdCAgICA9IC9cIi9nO1xuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG52YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTICA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpXG4gICAgLCBwMSA9ICc8JyArIHRhZztcbiAgaWYoYXR0cmlidXRlICE9PSAnJylwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIGV4ZWMpe1xuICB2YXIgTyA9IHt9O1xuICBPW05BTUVdID0gZXhlYyhjcmVhdGVIVE1MKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgIHZhciB0ZXN0ID0gJydbTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pLCAnU3RyaW5nJywgTyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1odG1sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMyBTdHJpbmcucHJvdG90eXBlLmJpZygpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdiaWcnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJpZygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNCBTdHJpbmcucHJvdG90eXBlLmJsaW5rKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JsaW5rJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBibGluaygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdibGluaycsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjUgU3RyaW5nLnByb3RvdHlwZS5ib2xkKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JvbGQnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJvbGQoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ib2xkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNiBTdHJpbmcucHJvdG90eXBlLmZpeGVkKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZpeGVkJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBmaXhlZCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICd0dCcsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjcgU3RyaW5nLnByb3RvdHlwZS5mb250Y29sb3IoY29sb3IpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdmb250Y29sb3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRjb2xvcihjb2xvcil7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnY29sb3InLCBjb2xvcik7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250Y29sb3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy44IFN0cmluZy5wcm90b3R5cGUuZm9udHNpemUoc2l6ZSlcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZvbnRzaXplJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBmb250c2l6ZShzaXplKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdzaXplJywgc2l6ZSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250c2l6ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjkgU3RyaW5nLnByb3RvdHlwZS5pdGFsaWNzKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2l0YWxpY3MnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGl0YWxpY3MoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnaScsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTAgU3RyaW5nLnByb3RvdHlwZS5saW5rKHVybClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2xpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxpbmsodXJsKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMSBTdHJpbmcucHJvdG90eXBlLnNtYWxsKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3NtYWxsJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzbWFsbCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzbWFsbCcsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEyIFN0cmluZy5wcm90b3R5cGUuc3RyaWtlKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3N0cmlrZScsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gc3RyaWtlKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N0cmlrZScsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdWInLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1Yigpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5zdXAoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnc3VwJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzdXAoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3VwJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qc1xuICoqLyIsIi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywge25vdzogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG5ldyBEYXRlKE5hTikudG9KU09OKCkgIT09IG51bGwgfHwgRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoe3RvSVNPU3RyaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gMTsgfX0pICE9PSAxO1xufSksICdEYXRlJywge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTihrZXkpe1xuICAgIHZhciBPICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgICAsIHB2ID0gdG9QcmltaXRpdmUoTyk7XG4gICAgcmV0dXJuIHR5cGVvZiBwdiA9PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUocHYpID8gbnVsbCA6IE8udG9JU09TdHJpbmcoKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGdldFRpbWUgPSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuXG52YXIgbHogPSBmdW5jdGlvbihudW0pe1xuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcbn07XG5cbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG5ldyBEYXRlKC01ZTEzIC0gMSkudG9JU09TdHJpbmcoKSAhPSAnMDM4NS0wNy0yNVQwNzowNjozOS45OTlaJztcbn0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICBuZXcgRGF0ZShOYU4pLnRvSVNPU3RyaW5nKCk7XG59KSksICdEYXRlJywge1xuICB0b0lTT1N0cmluZzogZnVuY3Rpb24gdG9JU09TdHJpbmcoKXtcbiAgICBpZighaXNGaW5pdGUoZ2V0VGltZS5jYWxsKHRoaXMpKSl0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgICB2YXIgZCA9IHRoaXNcbiAgICAgICwgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKVxuICAgICAgLCBtID0gZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICAgICAgLCBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuICAgIHJldHVybiBzICsgKCcwMDAwMCcgKyBNYXRoLmFicyh5KSkuc2xpY2UocyA/IC02IDogLTQpICtcbiAgICAgICctJyArIGx6KGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgbHooZC5nZXRVVENEYXRlKCkpICtcbiAgICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xuICAgICAgJzonICsgbHooZC5nZXRVVENTZWNvbmRzKCkpICsgJy4nICsgKG0gPiA5OSA/IG0gOiAnMCcgKyBseihtKSkgKyAnWic7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8taXNvLXN0cmluZy5qc1xuICoqLyIsInZhciBEYXRlUHJvdG8gICAgPSBEYXRlLnByb3RvdHlwZVxuICAsIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnXG4gICwgVE9fU1RSSU5HICAgID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyAgICA9IERhdGVQcm90b1tUT19TVFJJTkddXG4gICwgZ2V0VGltZSAgICAgID0gRGF0ZVByb3RvLmdldFRpbWU7XG5pZihuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qc1xuICoqLyIsInZhciBUT19QUklNSVRJVkUgPSByZXF1aXJlKCcuL193a3MnKSgndG9QcmltaXRpdmUnKVxuICAsIHByb3RvICAgICAgICA9IERhdGUucHJvdG90eXBlO1xuXG5pZighKFRPX1BSSU1JVElWRSBpbiBwcm90bykpcmVxdWlyZSgnLi9faGlkZScpKHByb3RvLCBUT19QUklNSVRJVkUsIHJlcXVpcmUoJy4vX2RhdGUtdG8tcHJpbWl0aXZlJykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tcHJpbWl0aXZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgTlVNQkVSICAgICAgPSAnbnVtYmVyJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihoaW50KXtcbiAgaWYoaGludCAhPT0gJ3N0cmluZycgJiYgaGludCAhPT0gTlVNQkVSICYmIGhpbnQgIT09ICdkZWZhdWx0Jyl0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBoaW50Jyk7XG4gIHJldHVybiB0b1ByaW1pdGl2ZShhbk9iamVjdCh0aGlzKSwgaGludCAhPSBOVU1CRVIpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19kYXRlLXRvLXByaW1pdGl2ZS5qc1xuICoqLyIsIi8vIDIyLjEuMi4yIC8gMTUuNC4zLjIgQXJyYXkuaXNBcnJheShhcmcpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywge2lzQXJyYXk6IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKi8iLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4vLyBXZWJLaXQgQXJyYXkub2YgaXNuJ3QgZ2VuZXJpY1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcbiAgb2Y6IGZ1bmN0aW9uIG9mKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGFMZW4gICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShhTGVuKTtcbiAgICB3aGlsZShhTGVuID4gaW5kZXgpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gYUxlbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUuam9pbihzZXBhcmF0b3IpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUpvaW4gPSBbXS5qb2luO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2Ugc3RyaW5nc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAocmVxdWlyZSgnLi9faW9iamVjdCcpICE9IE9iamVjdCB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKGFycmF5Sm9pbikpLCAnQXJyYXknLCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXtcbiAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwodG9JT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmpvaW4uanNcbiAqKi8iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCwgYXJnKXtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgYXJnID8gbWV0aG9kLmNhbGwobnVsbCwgZnVuY3Rpb24oKXt9LCAxKSA6IG1ldGhvZC5jYWxsKG51bGwpO1xuICB9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBodG1sICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY29mICAgICAgICA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgdG9JbmRleCAgICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCB0b0xlbmd0aCAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhcnJheVNsaWNlID0gW10uc2xpY2U7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICBpZihodG1sKWFycmF5U2xpY2UuY2FsbChodG1sKTtcbn0pLCAnQXJyYXknLCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKXtcbiAgICB2YXIgbGVuICAgPSB0b0xlbmd0aCh0aGlzLmxlbmd0aClcbiAgICAgICwga2xhc3MgPSBjb2YodGhpcyk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgaWYoa2xhc3MgPT0gJ0FycmF5JylyZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXG4gICAgICAsIHVwVG8gICA9IHRvSW5kZXgoZW5kLCBsZW4pXG4gICAgICAsIHNpemUgICA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydClcbiAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcbiAgICAgICwgaSAgICAgID0gMDtcbiAgICBmb3IoOyBpIDwgc2l6ZTsgaSsrKWNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcbiAgICAgIDogdGhpc1tzdGFydCArIGldO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNsaWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgdG9PYmplY3QgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBmYWlscyAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgJHNvcnQgICAgID0gW10uc29ydFxuICAsIHRlc3QgICAgICA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gSUU4LVxuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICAvLyBWOCBidWdcbiAgdGVzdC5zb3J0KG51bGwpO1xuICAvLyBPbGQgV2ViS2l0XG59KSB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKCRzb3J0KSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjI1IEFycmF5LnByb3RvdHlwZS5zb3J0KGNvbXBhcmVmbilcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRmb3JFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgU1RSSUNUICAgPSByZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uZm9yRWFjaCwgdHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIVNUUklDVCwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzXG4gKiovIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanNcbiAqKi8iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkbWFwICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRmaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5maWx0ZXIsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkc29tZSAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDMpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uc29tZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb21lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRldmVyeSAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRldmVyeSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXktcmVkdWNlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5yZWR1Y2UsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xOCAvIDE1LjQuNC4yMSBBcnJheS5wcm90b3R5cGUucmVkdWNlKGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLyl7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzWzFdLCBmYWxzZSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS5qc1xuICoqLyIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCB0b09iamVjdCAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIGNhbGxiYWNrZm4sIGFMZW4sIG1lbW8sIGlzUmlnaHQpe1xuICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGF0KVxuICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcbiAgICAsIGkgICAgICA9IGlzUmlnaHQgPyAtMSA6IDE7XG4gIGlmKGFMZW4gPCAyKWZvcig7Oyl7XG4gICAgaWYoaW5kZXggaW4gc2VsZil7XG4gICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGluZGV4ICs9IGk7XG4gICAgaWYoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCl7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICB9XG4gIH1cbiAgZm9yKDtpc1JpZ2h0ID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKWlmKGluZGV4IGluIHNlbGYpe1xuICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gIH1cbiAgcmV0dXJuIG1lbW87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXktcmVkdWNlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5yZWR1Y2VSaWdodCwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UtcmlnaHQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGluZGV4T2YgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgJG5hdGl2ZSAgICAgICA9IFtdLmluZGV4T2ZcbiAgLCBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaW5kZXgtb2YuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9JT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvSW50ZWdlciAgICAgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCB0b0xlbmd0aCAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCAkbmF0aXZlICAgICAgID0gW10ubGFzdEluZGV4T2ZcbiAgLCBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0ubGFzdEluZGV4T2YoMSwgLTApIDwgMDtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCA9IEBbKi0xXSAqLyl7XG4gICAgLy8gY29udmVydCAtMCB0byArMFxuICAgIGlmKE5FR0FUSVZFX1pFUk8pcmV0dXJuICRuYXRpdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwO1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QodGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IGxlbmd0aCAtIDE7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpO1xuICAgIGlmKGluZGV4IDwgMClpbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgIGZvcig7aW5kZXggPj0gMDsgaW5kZXgtLSlpZihpbmRleCBpbiBPKWlmKE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KXJldHVybiBpbmRleCB8fCAwO1xuICAgIHJldHVybiAtMTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZi5qc1xuICoqLyIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtjb3B5V2l0aGluOiByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdjb3B5V2l0aGluJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanNcbiAqKi8iLCIvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9JbmRleCAgPSByZXF1aXJlKCcuL190by1pbmRleCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0Lyo9IDAqLywgc3RhcnQvKj0gMCwgZW5kID0gQGxlbmd0aCovKXtcbiAgdmFyIE8gICAgID0gdG9PYmplY3QodGhpcylcbiAgICAsIGxlbiAgID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCB0byAgICA9IHRvSW5kZXgodGFyZ2V0LCBsZW4pXG4gICAgLCBmcm9tICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcbiAgICAsIGVuZCAgID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcbiAgICAsIGNvdW50ID0gTWF0aC5taW4oKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pXG4gICAgLCBpbmMgICA9IDE7XG4gIGlmKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCl7XG4gICAgaW5jICA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICAgKz0gY291bnQgLSAxO1xuICB9XG4gIHdoaWxlKGNvdW50LS0gPiAwKXtcbiAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xuICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgIHRvICAgKz0gaW5jO1xuICAgIGZyb20gKz0gaW5jO1xuICB9IHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1jb3B5LXdpdGhpbi5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKi8iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7ZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qc1xuICoqLyIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0luZGV4ICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xuICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcbiAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgYUxlbiAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggID0gdG9JbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKVxuICAgICwgZW5kICAgID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcbiAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZpbGwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZpbmQgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KVxuICAsIEtFWSAgICAgPSAnZmluZCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZmluZCAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDYpXG4gICwgS0VZICAgICA9ICdmaW5kSW5kZXgnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ0FycmF5Jyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJylcbiAgLCBkUCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBnT1BOICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIGlzUmVnRXhwICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJylcbiAgLCAkZmxhZ3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZsYWdzJylcbiAgLCAkUmVnRXhwICAgICAgICAgICA9IGdsb2JhbC5SZWdFeHBcbiAgLCBCYXNlICAgICAgICAgICAgICA9ICRSZWdFeHBcbiAgLCBwcm90byAgICAgICAgICAgICA9ICRSZWdFeHAucHJvdG90eXBlXG4gICwgcmUxICAgICAgICAgICAgICAgPSAvYS9nXG4gICwgcmUyICAgICAgICAgICAgICAgPSAvYS9nXG4gIC8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxuICAsIENPUlJFQ1RfTkVXICAgICAgID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZihyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICghQ09SUkVDVF9ORVcgfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZTJbcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKXtcbiAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKXtcbiAgICB2YXIgdGlSRSA9IHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwXG4gICAgICAsIHBpUkUgPSBpc1JlZ0V4cChwKVxuICAgICAgLCBmaVUgID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uKGtleSl7XG4gICAga2V5IGluICRSZWdFeHAgfHwgZFAoJFJlZ0V4cCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKGl0KXsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlKSwgaSA9IDA7IGtleXMubGVuZ3RoID4gaTsgKXByb3h5KGtleXNbaSsrXSk7XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJFJlZ0V4cDtcbiAgJFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbn1cblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnUmVnRXhwJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCAgID0gYW5PYmplY3QodGhpcylcbiAgICAsIHJlc3VsdCA9ICcnO1xuICBpZih0aGF0Lmdsb2JhbCkgICAgIHJlc3VsdCArPSAnZyc7XG4gIGlmKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYodGhhdC5tdWx0aWxpbmUpICByZXN1bHQgKz0gJ20nO1xuICBpZih0aGF0LnVuaWNvZGUpICAgIHJlc3VsdCArPSAndSc7XG4gIGlmKHRoYXQuc3RpY2t5KSAgICAgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgJGZsYWdzICAgICAgPSByZXF1aXJlKCcuL19mbGFncycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgVE9fU1RSSU5HICAgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nICAgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uKGZuKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmKHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHtzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJ30pICE9ICcvYS9iJzsgfSkpe1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZigkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpe1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcuanNcbiAqKi8iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZihyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKXJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzXG4gKiovIiwiLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpe1xuICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG4gIHJldHVybiBbZnVuY3Rpb24gbWF0Y2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICB9LCAkbWF0Y2hdO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgZmFpbHMgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCB3a3MgICAgICA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgbGVuZ3RoLCBleGVjKXtcbiAgdmFyIFNZTUJPTCAgID0gd2tzKEtFWSlcbiAgICAsIGZucyAgICAgID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pXG4gICAgLCBzdHJmbiAgICA9IGZuc1swXVxuICAgICwgcnhmbiAgICAgPSBmbnNbMV07XG4gIGlmKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbigpeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSl7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbihzdHJpbmcsIGFyZyl7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24oc3RyaW5nKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzXG4gKiovIiwiLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSl7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIFtmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gIH0sICRyZXBsYWNlXTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzXG4gKiovIiwiLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoKXtcbiAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzZWFyY2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRzZWFyY2hdO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qc1xuICoqLyIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBTUExJVCwgJHNwbGl0KXtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgaXNSZWdFeHAgICA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpXG4gICAgLCBfc3BsaXQgICAgID0gJHNwbGl0XG4gICAgLCAkcHVzaCAgICAgID0gW10ucHVzaFxuICAgICwgJFNQTElUICAgICA9ICdzcGxpdCdcbiAgICAsIExFTkdUSCAgICAgPSAnbGVuZ3RoJ1xuICAgICwgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZihcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKXtcbiAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICRzcGxpdCA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgbGltaXQpe1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKXJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZighaXNSZWdFeHAoc2VwYXJhdG9yKSlyZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBpZighTlBDRylzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSl7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZihsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KXtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgIGlmKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKW1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKWlmKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKW1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZihvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KWJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KXNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pe1xuICAgICAgICBpZihsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKW91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZignMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pe1xuICAgICRzcGxpdCA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgbGltaXQpe1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0sICRzcGxpdF07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuICoqLyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4gKiovIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCByZWRlZmluZUFsbCAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgbWV0YSAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGZhaWxzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsICRpdGVyRGV0ZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnICAgID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24oS0VZKXtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSl7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYil7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZih0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlICAgICAgICAgICAgID0gbmV3IENcbiAgICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICAgICwgSEFTTlRfQ0hBSU5JTkcgICAgICAgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlXG4gICAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICAgICwgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbigpeyBpbnN0YW5jZS5oYXMoMSk7IH0pXG4gICAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgICAsIEFDQ0VQVF9JVEVSQUJMRVMgICAgID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7IG5ldyBDKGl0ZXIpOyB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgICAsIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbigpe1xuICAgICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKClcbiAgICAgICAgICAsIGluZGV4ICAgICA9IDU7XG4gICAgICAgIHdoaWxlKGluZGV4LS0pJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgICAgfSk7XG4gICAgaWYoIUFDQ0VQVF9JVEVSQUJMRVMpeyBcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UsIHRhcmdldCwgQyk7XG4gICAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZihUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKXtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGVhY2ggICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIHJlZGVmaW5lICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBtZXRhICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBhc3NpZ24gICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJylcbiAgLCB3ZWFrICAgICAgICAgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZ2V0V2VhayAgICAgID0gbWV0YS5nZXRXZWFrXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZVxuICAsIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmVcbiAgLCB0bXAgICAgICAgICAgPSB7fVxuICAsIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICBpZihpc09iamVjdChrZXkpKXtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnV2Vha01hcCcsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIpO1xuICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBwcm90byAgPSAkV2Vha01hcC5wcm90b3R5cGVcbiAgICAgICwgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKXtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgaWYoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSl7XG4gICAgICAgIGlmKCF0aGlzLl9mKXRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXA7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGdldFdlYWsgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmdldFdlYWtcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKVxuICAsICRoYXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmKGRhdGEgPT09IHRydWUpdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi13ZWFrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKTtcblxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywgdmFsdWUsIHRydWUpO1xuICB9XG59LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkdHlwZWQgICAgICAgPSByZXF1aXJlKCcuL190eXBlZCcpXG4gICwgYnVmZmVyICAgICAgID0gcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJylcbiAgLCBhbk9iamVjdCAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSW5kZXggICAgICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCB0b0xlbmd0aCAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgQXJyYXlCdWZmZXIgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuQXJyYXlCdWZmZXJcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCAkQXJyYXlCdWZmZXIgPSBidWZmZXIuQXJyYXlCdWZmZXJcbiAgLCAkRGF0YVZpZXcgICAgPSBidWZmZXIuRGF0YVZpZXdcbiAgLCAkaXNWaWV3ICAgICAgPSAkdHlwZWQuQUJWICYmIEFycmF5QnVmZmVyLmlzVmlld1xuICAsICRzbGljZSAgICAgICA9ICRBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2VcbiAgLCBWSUVXICAgICAgICAgPSAkdHlwZWQuVklFV1xuICAsIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEFycmF5QnVmZmVyICE9PSAkQXJyYXlCdWZmZXIpLCB7QXJyYXlCdWZmZXI6ICRBcnJheUJ1ZmZlcn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEkdHlwZWQuQ09OU1RSLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS4zLjEgQXJyYXlCdWZmZXIuaXNWaWV3KGFyZylcbiAgaXNWaWV3OiBmdW5jdGlvbiBpc1ZpZXcoaXQpe1xuICAgIHJldHVybiAkaXNWaWV3ICYmICRpc1ZpZXcoaXQpIHx8IGlzT2JqZWN0KGl0KSAmJiBWSUVXIGluIGl0O1xuICB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlUgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhbmV3ICRBcnJheUJ1ZmZlcigyKS5zbGljZSgxLCB1bmRlZmluZWQpLmJ5dGVMZW5ndGg7XG59KSwgQVJSQVlfQlVGRkVSLCB7XG4gIC8vIDI0LjEuNC4zIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZShzdGFydCwgZW5kKVxuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCl7XG4gICAgaWYoJHNsaWNlICE9PSB1bmRlZmluZWQgJiYgZW5kID09PSB1bmRlZmluZWQpcmV0dXJuICRzbGljZS5jYWxsKGFuT2JqZWN0KHRoaXMpLCBzdGFydCk7IC8vIEZGIGZpeFxuICAgIHZhciBsZW4gICAgPSBhbk9iamVjdCh0aGlzKS5ieXRlTGVuZ3RoXG4gICAgICAsIGZpcnN0ICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcbiAgICAgICwgZmluYWwgID0gdG9JbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZCwgbGVuKVxuICAgICAgLCByZXN1bHQgPSBuZXcgKHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkQXJyYXlCdWZmZXIpKSh0b0xlbmd0aChmaW5hbCAtIGZpcnN0KSlcbiAgICAgICwgdmlld1MgID0gbmV3ICREYXRhVmlldyh0aGlzKVxuICAgICAgLCB2aWV3VCAgPSBuZXcgJERhdGFWaWV3KHJlc3VsdClcbiAgICAgICwgaW5kZXggID0gMDtcbiAgICB3aGlsZShmaXJzdCA8IGZpbmFsKXtcbiAgICAgIHZpZXdULnNldFVpbnQ4KGluZGV4KyssIHZpZXdTLmdldFVpbnQ4KGZpcnN0KyspKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKEFSUkFZX0JVRkZFUik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBUWVBFRCAgPSB1aWQoJ3R5cGVkX2FycmF5JylcbiAgLCBWSUVXICAgPSB1aWQoJ3ZpZXcnKVxuICAsIEFCViAgICA9ICEhKGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBnbG9iYWwuRGF0YVZpZXcpXG4gICwgQ09OU1RSID0gQUJWXG4gICwgaSA9IDAsIGwgPSA5LCBUeXBlZDtcblxudmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnMgPSAoXG4gICdJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheSdcbikuc3BsaXQoJywnKTtcblxud2hpbGUoaSA8IGwpe1xuICBpZihUeXBlZCA9IGdsb2JhbFtUeXBlZEFycmF5Q29uc3RydWN0b3JzW2krK11dKXtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVFlQRUQsIHRydWUpO1xuICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgfSBlbHNlIENPTlNUUiA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUJWOiAgICBBQlYsXG4gIENPTlNUUjogQ09OU1RSLFxuICBUWVBFRDogIFRZUEVELFxuICBWSUVXOiAgIFZJRVdcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJHR5cGVkICAgICAgICAgPSByZXF1aXJlKCcuL190eXBlZCcpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgdG9JbnRlZ2VyICAgICAgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ09QTiAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBhcnJheUZpbGwgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZpbGwnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEFSUkFZX0JVRkZFUiAgID0gJ0FycmF5QnVmZmVyJ1xuICAsIERBVEFfVklFVyAgICAgID0gJ0RhdGFWaWV3J1xuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBXUk9OR19MRU5HVEggICA9ICdXcm9uZyBsZW5ndGghJ1xuICAsIFdST05HX0lOREVYICAgID0gJ1dyb25nIGluZGV4ISdcbiAgLCAkQXJyYXlCdWZmZXIgICA9IGdsb2JhbFtBUlJBWV9CVUZGRVJdXG4gICwgJERhdGFWaWV3ICAgICAgPSBnbG9iYWxbREFUQV9WSUVXXVxuICAsIE1hdGggICAgICAgICAgID0gZ2xvYmFsLk1hdGhcbiAgLCBSYW5nZUVycm9yICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXG4gICwgSW5maW5pdHkgICAgICAgPSBnbG9iYWwuSW5maW5pdHlcbiAgLCBCYXNlQnVmZmVyICAgICA9ICRBcnJheUJ1ZmZlclxuICAsIGFicyAgICAgICAgICAgID0gTWF0aC5hYnNcbiAgLCBwb3cgICAgICAgICAgICA9IE1hdGgucG93XG4gICwgZmxvb3IgICAgICAgICAgPSBNYXRoLmZsb29yXG4gICwgbG9nICAgICAgICAgICAgPSBNYXRoLmxvZ1xuICAsIExOMiAgICAgICAgICAgID0gTWF0aC5MTjJcbiAgLCBCVUZGRVIgICAgICAgICA9ICdidWZmZXInXG4gICwgQllURV9MRU5HVEggICAgPSAnYnl0ZUxlbmd0aCdcbiAgLCBCWVRFX09GRlNFVCAgICA9ICdieXRlT2Zmc2V0J1xuICAsICRCVUZGRVIgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX2InIDogQlVGRkVSXG4gICwgJExFTkdUSCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbCcgOiBCWVRFX0xFTkdUSFxuICAsICRPRkZTRVQgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX28nIDogQllURV9PRkZTRVQ7XG5cbi8vIElFRUU3NTQgY29udmVyc2lvbnMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG52YXIgcGFja0lFRUU3NTQgPSBmdW5jdGlvbih2YWx1ZSwgbUxlbiwgbkJ5dGVzKXtcbiAgdmFyIGJ1ZmZlciA9IEFycmF5KG5CeXRlcylcbiAgICAsIGVMZW4gICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICAgICwgZU1heCAgID0gKDEgPDwgZUxlbikgLSAxXG4gICAgLCBlQmlhcyAgPSBlTWF4ID4+IDFcbiAgICAsIHJ0ICAgICA9IG1MZW4gPT09IDIzID8gcG93KDIsIC0yNCkgLSBwb3coMiwgLTc3KSA6IDBcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHMgICAgICA9IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwID8gMSA6IDBcbiAgICAsIGUsIG0sIGM7XG4gIHZhbHVlID0gYWJzKHZhbHVlKVxuICBpZih2YWx1ZSAhPSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpe1xuICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcbiAgICBpZih2YWx1ZSAqIChjID0gcG93KDIsIC1lKSkgPCAxKXtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYoZSArIGVCaWFzID49IDEpe1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIHBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZih2YWx1ZSAqIGMgPj0gMil7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmKGUgKyBlQmlhcyA+PSBlTWF4KXtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmKGUgKyBlQmlhcyA+PSAxKXtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBwb3coMiwgZUJpYXMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuICBmb3IoOyBtTGVuID49IDg7IGJ1ZmZlcltpKytdID0gbSAmIDI1NSwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG4gIGUgPSBlIDw8IG1MZW4gfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvcig7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuICByZXR1cm4gYnVmZmVyO1xufTtcbnZhciB1bnBhY2tJRUVFNzU0ID0gZnVuY3Rpb24oYnVmZmVyLCBtTGVuLCBuQnl0ZXMpe1xuICB2YXIgZUxlbiAgPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgICAsIGVNYXggID0gKDEgPDwgZUxlbikgLSAxXG4gICAgLCBlQmlhcyA9IGVNYXggPj4gMVxuICAgICwgbkJpdHMgPSBlTGVuIC0gN1xuICAgICwgaSAgICAgPSBuQnl0ZXMgLSAxXG4gICAgLCBzICAgICA9IGJ1ZmZlcltpLS1dXG4gICAgLCBlICAgICA9IHMgJiAxMjdcbiAgICAsIG07XG4gIHMgPj49IDc7XG4gIGZvcig7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIG0gPSBlICYgKDEgPDwgLW5CaXRzKSAtIDE7XG4gIGUgPj49IC1uQml0cztcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgaWYoZSA9PT0gMCl7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmKGUgPT09IGVNYXgpe1xuICAgIHJldHVybiBtID8gTmFOIDogcyA/IC1JbmZpbml0eSA6IEluZmluaXR5O1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgcG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH0gcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBwb3coMiwgZSAtIG1MZW4pO1xufTtcblxudmFyIHVucGFja0kzMiA9IGZ1bmN0aW9uKGJ5dGVzKXtcbiAgcmV0dXJuIGJ5dGVzWzNdIDw8IDI0IHwgYnl0ZXNbMl0gPDwgMTYgfCBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG59O1xudmFyIHBhY2tJOCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIFtpdCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrSTE2ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrSTMyID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmYsIGl0ID4+IDE2ICYgMHhmZiwgaXQgPj4gMjQgJiAweGZmXTtcbn07XG52YXIgcGFja0Y2NCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCA1MiwgOCk7XG59O1xudmFyIHBhY2tGMzIgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBwYWNrSUVFRTc1NChpdCwgMjMsIDQpO1xufTtcblxudmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKEMsIGtleSwgaW50ZXJuYWwpe1xuICBkUChDW1BST1RPVFlQRV0sIGtleSwge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbaW50ZXJuYWxdOyB9fSk7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24odmlldywgYnl0ZXMsIGluZGV4LCBpc0xpdHRsZUVuZGlhbil7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleFxuICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2JcbiAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG4gICAgLCBwYWNrICA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBzdGFydCArIGJ5dGVzKTtcbiAgcmV0dXJuIGlzTGl0dGxlRW5kaWFuID8gcGFjayA6IHBhY2sucmV2ZXJzZSgpO1xufTtcbnZhciBzZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbil7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleFxuICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2JcbiAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG4gICAgLCBwYWNrICA9IGNvbnZlcnNpb24oK3ZhbHVlKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpKyspc3RvcmVbc3RhcnQgKyBpXSA9IHBhY2tbaXNMaXR0bGVFbmRpYW4gPyBpIDogYnl0ZXMgLSBpIC0gMV07XG59O1xuXG52YXIgdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyA9IGZ1bmN0aW9uKHRoYXQsIGxlbmd0aCl7XG4gIGFuSW5zdGFuY2UodGhhdCwgJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuICB2YXIgbnVtYmVyTGVuZ3RoID0gK2xlbmd0aFxuICAgICwgYnl0ZUxlbmd0aCAgID0gdG9MZW5ndGgobnVtYmVyTGVuZ3RoKTtcbiAgaWYobnVtYmVyTGVuZ3RoICE9IGJ5dGVMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICByZXR1cm4gYnl0ZUxlbmd0aDtcbn07XG5cbmlmKCEkdHlwZWQuQUJWKXtcbiAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHModGhpcywgbGVuZ3RoKTtcbiAgICB0aGlzLl9iICAgICAgID0gYXJyYXlGaWxsLmNhbGwoQXJyYXkoYnl0ZUxlbmd0aCksIDApO1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gICREYXRhVmlldyA9IGZ1bmN0aW9uIERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCl7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG4gICAgYW5JbnN0YW5jZShidWZmZXIsICRBcnJheUJ1ZmZlciwgREFUQV9WSUVXKTtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyWyRMRU5HVEhdXG4gICAgICAsIG9mZnNldCAgICAgICA9IHRvSW50ZWdlcihieXRlT2Zmc2V0KTtcbiAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmKG9mZnNldCArIGJ5dGVMZW5ndGggPiBidWZmZXJMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHRoaXNbJEJVRkZFUl0gPSBidWZmZXI7XG4gICAgdGhpc1skT0ZGU0VUXSA9IG9mZnNldDtcbiAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcbiAgfTtcblxuICBpZihERVNDUklQVE9SUyl7XG4gICAgYWRkR2V0dGVyKCRBcnJheUJ1ZmZlciwgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJVRkZFUiwgJ19iJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfT0ZGU0VULCAnX28nKTtcbiAgfVxuXG4gIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgZ2V0SW50ODogZnVuY3Rpb24gZ2V0SW50OChieXRlT2Zmc2V0KXtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF0gPDwgMjQgPj4gMjQ7XG4gICAgfSxcbiAgICBnZXRVaW50ODogZnVuY3Rpb24gZ2V0VWludDgoYnl0ZU9mZnNldCl7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiAoYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdKSA8PCAxNiA+PiAxNjtcbiAgICB9LFxuICAgIGdldFVpbnQxNjogZnVuY3Rpb24gZ2V0VWludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG4gICAgfSxcbiAgICBnZXRJbnQzMjogZnVuY3Rpb24gZ2V0SW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuICAgIH0sXG4gICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpID4+PiAwO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQzMjogZnVuY3Rpb24gZ2V0RmxvYXQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDIzLCA0KTtcbiAgICB9LFxuICAgIGdldEZsb2F0NjQ6IGZ1bmN0aW9uIGdldEZsb2F0NjQoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG4gICAgfSxcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRJbnQxNjogZnVuY3Rpb24gc2V0SW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldFVpbnQzMjogZnVuY3Rpb24gc2V0VWludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRjMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0NjQ6IGZ1bmN0aW9uIHNldEZsb2F0NjQoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgcGFja0Y2NCwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIGlmKCFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyAkQXJyYXlCdWZmZXI7ICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgJEFycmF5QnVmZmVyKC41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgfSkpe1xuICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCl7XG4gICAgICByZXR1cm4gbmV3IEJhc2VCdWZmZXIodmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpKTtcbiAgICB9O1xuICAgIHZhciBBcnJheUJ1ZmZlclByb3RvID0gJEFycmF5QnVmZmVyW1BST1RPVFlQRV0gPSBCYXNlQnVmZmVyW1BST1RPVFlQRV07XG4gICAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlQnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyApe1xuICAgICAgaWYoISgoa2V5ID0ga2V5c1tqKytdKSBpbiAkQXJyYXlCdWZmZXIpKWhpZGUoJEFycmF5QnVmZmVyLCBrZXksIEJhc2VCdWZmZXJba2V5XSk7XG4gICAgfTtcbiAgICBpZighTElCUkFSWSlBcnJheUJ1ZmZlclByb3RvLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuICB9XG4gIC8vIGlPUyBTYWZhcmkgNy54IGJ1Z1xuICB2YXIgdmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSlcbiAgICAsICRzZXRJbnQ4ID0gJERhdGFWaWV3W1BST1RPVFlQRV0uc2V0SW50ODtcbiAgdmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuICB2aWV3LnNldEludDgoMSwgMjE0NzQ4MzY0OSk7XG4gIGlmKHZpZXcuZ2V0SW50OCgwKSB8fCAhdmlldy5nZXRJbnQ4KDEpKXJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxuc2V0VG9TdHJpbmdUYWcoJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuc2V0VG9TdHJpbmdUYWcoJERhdGFWaWV3LCBEQVRBX1ZJRVcpO1xuaGlkZSgkRGF0YVZpZXdbUFJPVE9UWVBFXSwgJHR5cGVkLlZJRVcsIHRydWUpO1xuZXhwb3J0c1tBUlJBWV9CVUZGRVJdID0gJEFycmF5QnVmZmVyO1xuZXhwb3J0c1tEQVRBX1ZJRVddID0gJERhdGFWaWV3O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWJ1ZmZlci5qc1xuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL190eXBlZCcpLkFCViwge1xuICBEYXRhVmlldzogcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJykuRGF0YVZpZXdcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldy5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0ludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuaWYocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSl7XG4gIHZhciBMSUJSQVJZICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICAgLCBnbG9iYWwgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgICAsIGZhaWxzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICAgLCAkZXhwb3J0ICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgICAsICR0eXBlZCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190eXBlZCcpXG4gICAgLCAkYnVmZmVyICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJylcbiAgICAsIGN0eCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAgICwgYW5JbnN0YW5jZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgICAsIHByb3BlcnR5RGVzYyAgICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgICAsIGhpZGUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgICAsIHJlZGVmaW5lQWxsICAgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAgICwgdG9JbnRlZ2VyICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAgICwgdG9MZW5ndGggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICAgLCB0b0luZGV4ICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAgICwgdG9QcmltaXRpdmUgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICAgLCBoYXMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgICAsIHNhbWUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19zYW1lLXZhbHVlJylcbiAgICAsIGNsYXNzb2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgICAsIGlzT2JqZWN0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAgICwgdG9PYmplY3QgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICAgLCBpc0FycmF5SXRlciAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICAgLCBjcmVhdGUgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICAgLCBnZXRQcm90b3R5cGVPZiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICAgLCBnT1BOICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICAgLCBnZXRJdGVyRm4gICAgICAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAgICwgdWlkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICAgLCB3a3MgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgICAsIGNyZWF0ZUFycmF5TWV0aG9kICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJylcbiAgICAsIGNyZWF0ZUFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpXG4gICAgLCBzcGVjaWVzQ29uc3RydWN0b3IgID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICAgLCBBcnJheUl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKVxuICAgICwgSXRlcmF0b3JzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICAgLCAkaXRlckRldGVjdCAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKVxuICAgICwgc2V0U3BlY2llcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgICAsIGFycmF5RmlsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1maWxsJylcbiAgICAsIGFycmF5Q29weVdpdGhpbiAgICAgPSByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpXG4gICAgLCAkRFAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgICAsICRHT1BEICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICAgLCBkUCAgICAgICAgICAgICAgICAgID0gJERQLmZcbiAgICAsIGdPUEQgICAgICAgICAgICAgICAgPSAkR09QRC5mXG4gICAgLCBSYW5nZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcbiAgICAsIFR5cGVFcnJvciAgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICAgLCBVaW50OEFycmF5ICAgICAgICAgID0gZ2xvYmFsLlVpbnQ4QXJyYXlcbiAgICAsIEFSUkFZX0JVRkZFUiAgICAgICAgPSAnQXJyYXlCdWZmZXInXG4gICAgLCBTSEFSRURfQlVGRkVSICAgICAgID0gJ1NoYXJlZCcgKyBBUlJBWV9CVUZGRVJcbiAgICAsIEJZVEVTX1BFUl9FTEVNRU5UICAgPSAnQllURVNfUEVSX0VMRU1FTlQnXG4gICAgLCBQUk9UT1RZUEUgICAgICAgICAgID0gJ3Byb3RvdHlwZSdcbiAgICAsIEFycmF5UHJvdG8gICAgICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXG4gICAgLCAkQXJyYXlCdWZmZXIgICAgICAgID0gJGJ1ZmZlci5BcnJheUJ1ZmZlclxuICAgICwgJERhdGFWaWV3ICAgICAgICAgICA9ICRidWZmZXIuRGF0YVZpZXdcbiAgICAsIGFycmF5Rm9yRWFjaCAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgwKVxuICAgICwgYXJyYXlGaWx0ZXIgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDIpXG4gICAgLCBhcnJheVNvbWUgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMylcbiAgICAsIGFycmF5RXZlcnkgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg0KVxuICAgICwgYXJyYXlGaW5kICAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICAgLCBhcnJheUZpbmRJbmRleCAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgICAsIGFycmF5SW5jbHVkZXMgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKHRydWUpXG4gICAgLCBhcnJheUluZGV4T2YgICAgICAgID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSlcbiAgICAsIGFycmF5VmFsdWVzICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy52YWx1ZXNcbiAgICAsIGFycmF5S2V5cyAgICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5rZXlzXG4gICAgLCBhcnJheUVudHJpZXMgICAgICAgID0gQXJyYXlJdGVyYXRvcnMuZW50cmllc1xuICAgICwgYXJyYXlMYXN0SW5kZXhPZiAgICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2ZcbiAgICAsIGFycmF5UmVkdWNlICAgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZVxuICAgICwgYXJyYXlSZWR1Y2VSaWdodCAgICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHRcbiAgICAsIGFycmF5Sm9pbiAgICAgICAgICAgPSBBcnJheVByb3RvLmpvaW5cbiAgICAsIGFycmF5U29ydCAgICAgICAgICAgPSBBcnJheVByb3RvLnNvcnRcbiAgICAsIGFycmF5U2xpY2UgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlXG4gICAgLCBhcnJheVRvU3RyaW5nICAgICAgID0gQXJyYXlQcm90by50b1N0cmluZ1xuICAgICwgYXJyYXlUb0xvY2FsZVN0cmluZyA9IEFycmF5UHJvdG8udG9Mb2NhbGVTdHJpbmdcbiAgICAsIElURVJBVE9SICAgICAgICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgICAsIFRBRyAgICAgICAgICAgICAgICAgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgICAsIFRZUEVEX0NPTlNUUlVDVE9SICAgPSB1aWQoJ3R5cGVkX2NvbnN0cnVjdG9yJylcbiAgICAsIERFRl9DT05TVFJVQ1RPUiAgICAgPSB1aWQoJ2RlZl9jb25zdHJ1Y3RvcicpXG4gICAgLCBBTExfQ09OU1RSVUNUT1JTICAgID0gJHR5cGVkLkNPTlNUUlxuICAgICwgVFlQRURfQVJSQVkgICAgICAgICA9ICR0eXBlZC5UWVBFRFxuICAgICwgVklFVyAgICAgICAgICAgICAgICA9ICR0eXBlZC5WSUVXXG4gICAgLCBXUk9OR19MRU5HVEggICAgICAgID0gJ1dyb25nIGxlbmd0aCEnO1xuXG4gIHZhciAkbWFwID0gY3JlYXRlQXJyYXlNZXRob2QoMSwgZnVuY3Rpb24oTywgbGVuZ3RoKXtcbiAgICByZXR1cm4gYWxsb2NhdGUoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxlbmd0aCk7XG4gIH0pO1xuXG4gIHZhciBMSVRUTEVfRU5ESUFOID0gZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcbiAgfSk7XG5cbiAgdmFyIEZPUkNFRF9TRVQgPSAhIVVpbnQ4QXJyYXkgJiYgISFVaW50OEFycmF5W1BST1RPVFlQRV0uc2V0ICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IFVpbnQ4QXJyYXkoMSkuc2V0KHt9KTtcbiAgfSk7XG5cbiAgdmFyIHN0cmljdFRvTGVuZ3RoID0gZnVuY3Rpb24oaXQsIFNBTUUpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdmFyIG51bWJlciA9ICtpdFxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChpdCk7XG4gICAgaWYoU0FNRSAmJiAhc2FtZShudW1iZXIsIGxlbmd0aCkpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG5cbiAgdmFyIHRvT2Zmc2V0ID0gZnVuY3Rpb24oaXQsIEJZVEVTKXtcbiAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGl0KTtcbiAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9O1xuXG4gIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgICBpZihpc09iamVjdChpdCkgJiYgVFlQRURfQVJSQVkgaW4gaXQpcmV0dXJuIGl0O1xuICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgdHlwZWQgYXJyYXkhJyk7XG4gIH07XG5cbiAgdmFyIGFsbG9jYXRlID0gZnVuY3Rpb24oQywgbGVuZ3RoKXtcbiAgICBpZighKGlzT2JqZWN0KEMpICYmIFRZUEVEX0NPTlNUUlVDVE9SIGluIEMpKXtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSXQgaXMgbm90IGEgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IhJyk7XG4gICAgfSByZXR1cm4gbmV3IEMobGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgc3BlY2llc0Zyb21MaXN0ID0gZnVuY3Rpb24oTywgbGlzdCl7XG4gICAgcmV0dXJuIGZyb21MaXN0KHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsaXN0KTtcbiAgfTtcblxuICB2YXIgZnJvbUxpc3QgPSBmdW5jdGlvbihDLCBsaXN0KXtcbiAgICB2YXIgaW5kZXggID0gMFxuICAgICAgLCBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZShDLCBsZW5ndGgpO1xuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKGl0LCBrZXksIGludGVybmFsKXtcbiAgICBkUChpdCwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5fZFtpbnRlcm5hbF07IH19KTtcbiAgfTtcblxuICB2YXIgJGZyb20gPSBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiwgbWFwZm4sIHRoaXNBcmcgKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3Qoc291cmNlKVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBpLCBsZW5ndGgsIHZhbHVlcywgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCB2YWx1ZXMgPSBbXSwgaSA9IDA7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaSsrKXtcbiAgICAgICAgdmFsdWVzLnB1c2goc3RlcC52YWx1ZSk7XG4gICAgICB9IE8gPSB2YWx1ZXM7XG4gICAgfVxuICAgIGlmKG1hcHBpbmcgJiYgYUxlbiA+IDIpbWFwZm4gPSBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7IGxlbmd0aCA+IGk7IGkrKyl7XG4gICAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciAkb2YgPSBmdW5jdGlvbiBvZigvKi4uLml0ZW1zKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcbiAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gaU9TIFNhZmFyaSA2LnggZmFpbHMgaGVyZVxuICB2YXIgVE9fTE9DQUxFX0JVRyA9ICEhVWludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvTG9jYWxlU3RyaW5nLmNhbGwobmV3IFVpbnQ4QXJyYXkoMSkpOyB9KTtcblxuICB2YXIgJHRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKXtcbiAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseShUT19MT0NBTEVfQlVHID8gYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpKSA6IHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBwcm90byA9IHtcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQgLyosIGVuZCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlDb3B5V2l0aGluLmNhbGwodmFsaWRhdGUodGhpcyksIHRhcmdldCwgc3RhcnQsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUV2ZXJ5KHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCwgZW5kICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5RmlsbC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheUZpbHRlcih2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbixcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgYXJyYXlGb3JFYWNoKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcbiAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUpvaW4uYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5TGFzdEluZGV4T2YuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIG1hcChtYXBmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gJG1hcCh2YWxpZGF0ZSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZS5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qLCBpbml0aWFsVmFsdWUgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2VSaWdodC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKXtcbiAgICAgIHZhciB0aGF0ICAgPSB0aGlzXG4gICAgICAgICwgbGVuZ3RoID0gdmFsaWRhdGUodGhhdCkubGVuZ3RoXG4gICAgICAgICwgbWlkZGxlID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKVxuICAgICAgICAsIGluZGV4ICA9IDBcbiAgICAgICAgLCB2YWx1ZTtcbiAgICAgIHdoaWxlKGluZGV4IDwgbWlkZGxlKXtcbiAgICAgICAgdmFsdWUgICAgICAgICA9IHRoYXRbaW5kZXhdO1xuICAgICAgICB0aGF0W2luZGV4KytdID0gdGhhdFstLWxlbmd0aF07XG4gICAgICAgIHRoYXRbbGVuZ3RoXSAgPSB2YWx1ZTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfSxcbiAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5U29tZSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuICAgICAgcmV0dXJuIGFycmF5U29ydC5jYWxsKHZhbGlkYXRlKHRoaXMpLCBjb21wYXJlZm4pO1xuICAgIH0sXG4gICAgc3ViYXJyYXk6IGZ1bmN0aW9uIHN1YmFycmF5KGJlZ2luLCBlbmQpe1xuICAgICAgdmFyIE8gICAgICA9IHZhbGlkYXRlKHRoaXMpXG4gICAgICAgICwgbGVuZ3RoID0gTy5sZW5ndGhcbiAgICAgICAgLCAkYmVnaW4gPSB0b0luZGV4KGJlZ2luLCBsZW5ndGgpO1xuICAgICAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSkpKFxuICAgICAgICBPLmJ1ZmZlcixcbiAgICAgICAgTy5ieXRlT2Zmc2V0ICsgJGJlZ2luICogTy5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgICAgdG9MZW5ndGgoKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCkpIC0gJGJlZ2luKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyICRzbGljZSA9IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpe1xuICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG4gIH07XG5cbiAgdmFyICRzZXQgPSBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qLCBvZmZzZXQgKi8pe1xuICAgIHZhbGlkYXRlKHRoaXMpO1xuICAgIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHNbMV0sIDEpXG4gICAgICAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgICAsIHNyYyAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgbGVuICAgID0gdG9MZW5ndGgoc3JjLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMDtcbiAgICBpZihsZW4gKyBvZmZzZXQgPiBsZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHdoaWxlKGluZGV4IDwgbGVuKXRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xuICB9O1xuXG4gIHZhciAkaXRlcmF0b3JzID0ge1xuICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKXtcbiAgICAgIHJldHVybiBhcnJheUVudHJpZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCl7XG4gICAgICByZXR1cm4gYXJyYXlLZXlzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKXtcbiAgICAgIHJldHVybiBhcnJheVZhbHVlcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzVEFJbmRleCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KXtcbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KVxuICAgICAgJiYgdGFyZ2V0W1RZUEVEX0FSUkFZXVxuICAgICAgJiYgdHlwZW9mIGtleSAhPSAnc3ltYm9sJ1xuICAgICAgJiYga2V5IGluIHRhcmdldFxuICAgICAgJiYgU3RyaW5nKCtrZXkpID09IFN0cmluZyhrZXkpO1xuICB9O1xuICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpe1xuICAgIHJldHVybiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgPyBwcm9wZXJ0eURlc2MoMiwgdGFyZ2V0W2tleV0pXG4gICAgICA6IGdPUEQodGFyZ2V0LCBrZXkpO1xuICB9O1xuICB2YXIgJHNldERlc2MgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzYyl7XG4gICAgaWYoaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcbiAgICAgICYmIGlzT2JqZWN0KGRlc2MpXG4gICAgICAmJiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICAgICYmICFoYXMoZGVzYywgJ2dldCcpXG4gICAgICAmJiAhaGFzKGRlc2MsICdzZXQnKVxuICAgICAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZGVzY3JpcHRvciB3L28gY2FsbGluZyBhY2Nlc3NvcnNcbiAgICAgICYmICFkZXNjLmNvbmZpZ3VyYWJsZVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ3dyaXRhYmxlJykgfHwgZGVzYy53cml0YWJsZSlcbiAgICAgICYmICghaGFzKGRlc2MsICdlbnVtZXJhYmxlJykgfHwgZGVzYy5lbnVtZXJhYmxlKVxuICAgICl7XG4gICAgICB0YXJnZXRba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSByZXR1cm4gZFAodGFyZ2V0LCBrZXksIGRlc2MpO1xuICB9O1xuXG4gIGlmKCFBTExfQ09OU1RSVUNUT1JTKXtcbiAgICAkR09QRC5mID0gJGdldERlc2M7XG4gICAgJERQLmYgICA9ICRzZXREZXNjO1xuICB9XG5cbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhQUxMX0NPTlNUUlVDVE9SUywgJ09iamVjdCcsIHtcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXREZXNjLFxuICAgIGRlZmluZVByb3BlcnR5OiAgICAgICAgICAgJHNldERlc2NcbiAgfSk7XG5cbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXsgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTsgfSkpe1xuICAgIGFycmF5VG9TdHJpbmcgPSBhcnJheVRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAkaXRlcmF0b3JzKTtcbiAgaGlkZSgkVHlwZWRBcnJheVByb3RvdHlwZSQsIElURVJBVE9SLCAkaXRlcmF0b3JzLnZhbHVlcyk7XG4gIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwge1xuICAgIHNsaWNlOiAgICAgICAgICAkc2xpY2UsXG4gICAgc2V0OiAgICAgICAgICAgICRzZXQsXG4gICAgY29uc3RydWN0b3I6ICAgIGZ1bmN0aW9uKCl7IC8qIG5vb3AgKi8gfSxcbiAgICB0b1N0cmluZzogICAgICAgYXJyYXlUb1N0cmluZyxcbiAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG4gIH0pO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnVmZmVyJywgJ2InKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVPZmZzZXQnLCAnbycpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZUxlbmd0aCcsICdsJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdsZW5ndGgnLCAnZScpO1xuICBkUCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIFRBRywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbVFlQRURfQVJSQVldOyB9XG4gIH0pO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCl7XG4gICAgQ0xBTVBFRCA9ICEhQ0xBTVBFRDtcbiAgICB2YXIgTkFNRSAgICAgICA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5J1xuICAgICAgLCBJU05UX1VJTlQ4ID0gTkFNRSAhPSAnVWludDhBcnJheSdcbiAgICAgICwgR0VUVEVSICAgICA9ICdnZXQnICsgS0VZXG4gICAgICAsIFNFVFRFUiAgICAgPSAnc2V0JyArIEtFWVxuICAgICAgLCBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdXG4gICAgICAsIEJhc2UgICAgICAgPSBUeXBlZEFycmF5IHx8IHt9XG4gICAgICAsIFRBQyAgICAgICAgPSBUeXBlZEFycmF5ICYmIGdldFByb3RvdHlwZU9mKFR5cGVkQXJyYXkpXG4gICAgICAsIEZPUkNFRCAgICAgPSAhVHlwZWRBcnJheSB8fCAhJHR5cGVkLkFCVlxuICAgICAgLCBPICAgICAgICAgID0ge31cbiAgICAgICwgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkgJiYgVHlwZWRBcnJheVtQUk9UT1RZUEVdO1xuICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCl7XG4gICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICByZXR1cm4gZGF0YS52W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24odGhhdCwgaW5kZXgsIHZhbHVlKXtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIGlmKENMQU1QRUQpdmFsdWUgPSAodmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKSkgPCAwID8gMCA6IHZhbHVlID4gMHhmZiA/IDB4ZmYgOiB2YWx1ZSAmIDB4ZmY7XG4gICAgICBkYXRhLnZbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCB2YWx1ZSwgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcbiAgICAgIGRQKHRoYXQsIGluZGV4LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmKEZPUkNFRCl7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FLCAnX2QnKTtcbiAgICAgICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICAgICAsIG9mZnNldCA9IDBcbiAgICAgICAgICAsIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoLCBrbGFzcztcbiAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXtcbiAgICAgICAgICBsZW5ndGggICAgID0gc3RyaWN0VG9MZW5ndGgoZGF0YSwgdHJ1ZSlcbiAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG4gICAgICAgICAgYnVmZmVyICAgICA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcbiAgICAgICAgICBidWZmZXIgPSBkYXRhO1xuICAgICAgICAgIG9mZnNldCA9IHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKTtcbiAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICBpZigkbGVuZ3RoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYoJGxlbiAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCA8IDApdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gdG9MZW5ndGgoJGxlbmd0aCkgKiBCWVRFUztcbiAgICAgICAgICAgIGlmKGJ5dGVMZW5ndGggKyBvZmZzZXQgPiAkbGVuKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuICAgICAgICB9IGVsc2UgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSl7XG4gICAgICAgICAgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGUodGhhdCwgJ19kJywge1xuICAgICAgICAgIGI6IGJ1ZmZlcixcbiAgICAgICAgICBvOiBvZmZzZXQsXG4gICAgICAgICAgbDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBlOiBsZW5ndGgsXG4gICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZShpbmRleCA8IGxlbmd0aClhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gY3JlYXRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCk7XG4gICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIFR5cGVkQXJyYXkpO1xuICAgIH0gZWxzZSBpZighJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7XG4gICAgICAvLyBWOCB3b3JrcyB3aXRoIGl0ZXJhdG9ycywgYnV0IGZhaWxzIGluIG1hbnkgb3RoZXIgY2FzZXNcbiAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00NTUyXG4gICAgICBuZXcgVHlwZWRBcnJheShudWxsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0sIHRydWUpKXtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICB2YXIga2xhc3M7XG4gICAgICAgIC8vIGB3c2AgbW9kdWxlIGJ1ZywgdGVtcG9yYXJpbHkgcmVtb3ZlIHZhbGlkYXRpb24gbGVuZ3RoIGZvciBVaW50OEFycmF5XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL3B1bGwvNjQ1XG4gICAgICAgIGlmKCFpc09iamVjdChkYXRhKSlyZXR1cm4gbmV3IEJhc2Uoc3RyaWN0VG9MZW5ndGgoZGF0YSwgSVNOVF9VSU5UOCkpO1xuICAgICAgICBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcbiAgICAgICAgICByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSwgJGxlbmd0aClcbiAgICAgICAgICAgIDogJG9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpKVxuICAgICAgICAgICAgICA6IG5ldyBCYXNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKFRZUEVEX0FSUkFZIGluIGRhdGEpcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgYXJyYXlGb3JFYWNoKFRBQyAhPT0gRnVuY3Rpb24ucHJvdG90eXBlID8gZ09QTihCYXNlKS5jb25jYXQoZ09QTihUQUMpKSA6IGdPUE4oQmFzZSksIGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCEoa2V5IGluIFR5cGVkQXJyYXkpKWhpZGUoVHlwZWRBcnJheSwga2V5LCBCYXNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBUeXBlZEFycmF5UHJvdG90eXBlO1xuICAgICAgaWYoIUxJQlJBUlkpVHlwZWRBcnJheVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXk7XG4gICAgfVxuICAgIHZhciAkbmF0aXZlSXRlcmF0b3IgICA9IFR5cGVkQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgICAsIENPUlJFQ1RfSVRFUl9OQU1FID0gISEkbmF0aXZlSXRlcmF0b3IgJiYgKCRuYXRpdmVJdGVyYXRvci5uYW1lID09ICd2YWx1ZXMnIHx8ICRuYXRpdmVJdGVyYXRvci5uYW1lID09IHVuZGVmaW5lZClcbiAgICAgICwgJGl0ZXJhdG9yICAgICAgICAgPSAkaXRlcmF0b3JzLnZhbHVlcztcbiAgICBoaWRlKFR5cGVkQXJyYXksIFRZUEVEX0NPTlNUUlVDVE9SLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRZUEVEX0FSUkFZLCBOQU1FKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgREVGX0NPTlNUUlVDVE9SLCBUeXBlZEFycmF5KTtcblxuICAgIGlmKENMQU1QRUQgPyBuZXcgVHlwZWRBcnJheSgxKVtUQUddICE9IE5BTUUgOiAhKFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSl7XG4gICAgICBkUChUeXBlZEFycmF5UHJvdG90eXBlLCBUQUcsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gTkFNRTsgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT1tOQU1FXSA9IFR5cGVkQXJyYXk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBPKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCBOQU1FLCB7XG4gICAgICBCWVRFU19QRVJfRUxFTUVOVDogQllURVMsXG4gICAgICBmcm9tOiAkZnJvbSxcbiAgICAgIG9mOiAkb2ZcbiAgICB9KTtcblxuICAgIGlmKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsIE5BTUUsIHByb3RvKTtcblxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFRF9TRVQsIE5BTUUsIHtzZXQ6ICRzZXR9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIUNPUlJFQ1RfSVRFUl9OQU1FLCBOQU1FLCAkaXRlcmF0b3JzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT0gYXJyYXlUb1N0cmluZyksIE5BTUUsIHt0b1N0cmluZzogYXJyYXlUb1N0cmluZ30pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgICAgbmV3IFR5cGVkQXJyYXkoMSkuc2xpY2UoKTtcbiAgICB9KSwgTkFNRSwge3NsaWNlOiAkc2xpY2V9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT0gbmV3IFR5cGVkQXJyYXkoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcbiAgICB9KSksIE5BTUUsIHt0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nfSk7XG5cbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBDT1JSRUNUX0lURVJfTkFNRSA/ICRuYXRpdmVJdGVyYXRvciA6ICRpdGVyYXRvcjtcbiAgICBpZighTElCUkFSWSAmJiAhQ09SUkVDVF9JVEVSX05BTUUpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBJVEVSQVRPUiwgJGl0ZXJhdG9yKTtcbiAgfTtcbn0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYXJyYXkuanNcbiAqKi8iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1hcnJheS5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OENsYW1wZWRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59LCB0cnVlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1jbGFtcGVkLWFycmF5LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXkuanNcbiAqKi8iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQxNi1hcnJheS5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0ludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnVWludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXkuanNcbiAqKi8iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdGbG9hdDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQzMi1hcnJheS5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0Zsb2F0NjQnLCA4LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0NjRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDY0LWFycmF5LmpzXG4gKiovIiwiLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHJBcHBseSAgICA9IChyZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0IHx8IHt9KS5hcHBseVxuICAsIGZBcHBseSAgICA9IEZ1bmN0aW9uLmFwcGx5O1xuLy8gTVMgRWRnZSBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJBcHBseShmdW5jdGlvbigpe30pO1xufSksICdSZWZsZWN0Jywge1xuICBhcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3Qpe1xuICAgIHZhciBUID0gYUZ1bmN0aW9uKHRhcmdldClcbiAgICAgICwgTCA9IGFuT2JqZWN0KGFyZ3VtZW50c0xpc3QpO1xuICAgIHJldHVybiByQXBwbHkgPyByQXBwbHkoVCwgdGhpc0FyZ3VtZW50LCBMKSA6IGZBcHBseS5jYWxsKFQsIHRoaXNBcmd1bWVudCwgTCk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanNcbiAqKi8iLCIvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXG52YXIgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY3JlYXRlICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGFGdW5jdGlvbiAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbk9iamVjdCAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBmYWlscyAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGJpbmQgICAgICAgPSByZXF1aXJlKCcuL19iaW5kJylcbiAgLCByQ29uc3RydWN0ID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmNvbnN0cnVjdDtcblxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBGKCl7fVxuICByZXR1cm4gIShyQ29uc3RydWN0KGZ1bmN0aW9uKCl7fSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KTtcbnZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbigpe1xuICByQ29uc3RydWN0KGZ1bmN0aW9uKCl7fSk7XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUcpLCAnUmVmbGVjdCcsIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qLCBuZXdUYXJnZXQqLyl7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgYW5PYmplY3QoYXJncyk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYoQVJHU19CVUcgJiYgIU5FV19UQVJHRVRfQlVHKXJldHVybiByQ29uc3RydWN0KFRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTtcbiAgICBpZihUYXJnZXQgPT0gbmV3VGFyZ2V0KXtcbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG4gICAgICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0O1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2VcbiAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcbiAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSk7XG4gICAgfVxuICAgIC8vIHdpdGggYWx0ZXJlZCBuZXdUYXJnZXQsIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGNvbnN0cnVjdG9yc1xuICAgIHZhciBwcm90byAgICA9IG5ld1RhcmdldC5wcm90b3R5cGVcbiAgICAgICwgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxuICAgICAgLCByZXN1bHQgICA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanNcbiAqKi8iLCIvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG5cbi8vIE1TIEVkZ2UgaGFzIGJyb2tlbiBSZWZsZWN0LmRlZmluZVByb3BlcnR5IC0gdGhyb3dpbmcgaW5zdGVhZCBvZiByZXR1cm5pbmcgZmFsc2VcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGRQLmYoe30sIDEsIHt2YWx1ZTogMX0pLCAxLCB7dmFsdWU6IDJ9KTtcbn0pLCAnUmVmbGVjdCcsIHtcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShwcm9wZXJ0eUtleSwgdHJ1ZSk7XG4gICAgYW5PYmplY3QoYXR0cmlidXRlcyk7XG4gICAgdHJ5IHtcbiAgICAgIGRQLmYodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanNcbiAqKi8iLCIvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBnT1BEICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZlxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHZhciBkZXNjID0gZ09QRChhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIEVudW1lcmF0ZSA9IGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IGFuT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdmFyIGtleXMgPSB0aGlzLl9rID0gW10gICAgICAgLy8ga2V5c1xuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIGl0ZXJhdGVkKWtleXMucHVzaChrZXkpO1xufTtcbnJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJykoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gICAgLCBrZXlzID0gdGhhdC5fa1xuICAgICwga2V5O1xuICBkbyB7XG4gICAgaWYodGhhdC5faSA+PSBrZXlzLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICB9IHdoaWxlKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuICByZXR1cm4ge3ZhbHVlOiBrZXksIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGVudW1lcmF0ZTogZnVuY3Rpb24gZW51bWVyYXRlKHRhcmdldCl7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanNcbiAqKi8iLCIvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgZ09QRCAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleS8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cbiAgICAsIGRlc2MsIHByb3RvO1xuICBpZihhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcilyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSlyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgPyBkZXNjLnZhbHVlXG4gICAgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSlyZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7Z2V0OiBnZXR9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qc1xuICoqLyIsIi8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyIGdPUEQgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqLyIsIi8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgZ2V0UHJvdG8gPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpe1xuICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiovIiwiLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzXG4gKiovIiwiLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlLmpzXG4gKiovIiwiLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge293bktleXM6IHJlcXVpcmUoJy4vX293bi1rZXlzJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzXG4gKiovIiwiLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xudmFyIGdPUE4gICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBSZWZsZWN0ICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpe1xuICB2YXIga2V5cyAgICAgICA9IGdPUE4uZihhbk9iamVjdChpdCkpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX293bi1rZXlzLmpzXG4gKiovIiwiLy8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCRwcmV2ZW50RXh0ZW5zaW9ucykkcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qc1xuICoqLyIsIi8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG52YXIgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGdPUEQgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM11cbiAgICAsIG93bkRlc2MgID0gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxuICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcbiAgaWYoIW93bkRlc2Mpe1xuICAgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpe1xuICAgICAgcmV0dXJuIHNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG4gIH1cbiAgaWYoaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcbiAgICBpZihvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSBnT1BELmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5KSB8fCBjcmVhdGVEZXNjKDApO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XG4gICAgZFAuZihyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtzZXQ6IHNldH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzXG4gKiovIiwiLy8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHNldFByb3RvID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJyk7XG5cbmlmKHNldFByb3RvKSRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pe1xuICAgIHNldFByb3RvLmNoZWNrKHRhcmdldCwgcHJvdG8pO1xuICAgIHRyeSB7XG4gICAgICBzZXRQcm90by5zZXQodGFyZ2V0LCBwcm90byk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRhdCAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIGF0OiBmdW5jdGlvbiBhdChwb3Mpe1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcGFkICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXBhZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgcGFkU3RhcnQ6IGZ1bmN0aW9uIHBhZFN0YXJ0KG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtc3RhcnQuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCByZXBlYXQgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1yZXBlYXQnKVxuICAsIGRlZmluZWQgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCl7XG4gIHZhciBTICAgICAgICAgICAgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAsIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoXG4gICAgLCBmaWxsU3RyICAgICAgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZylcbiAgICAsIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIGlmKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJylyZXR1cm4gUztcbiAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGhcbiAgICAsIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1wYWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYWQgICAgPSByZXF1aXJlKCcuL19zdHJpbmctcGFkJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRFbmQ6IGZ1bmN0aW9uIHBhZEVuZChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1lbmQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5yZXF1aXJlKCcuL19zdHJpbmctdHJpbScpKCd0cmltTGVmdCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDEpO1xuICB9O1xufSwgJ3RyaW1TdGFydCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5yZXF1aXJlKCcuL19zdHJpbmctdHJpbScpKCd0cmltUmlnaHQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG4gIH07XG59LCAndHJpbUVuZCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9TdHJpbmcucHJvdG90eXBlLm1hdGNoQWxsL1xudmFyICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBpc1JlZ0V4cCAgICA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpXG4gICwgZ2V0RmxhZ3MgICAgPSByZXF1aXJlKCcuL19mbGFncycpXG4gICwgUmVnRXhwUHJvdG8gPSBSZWdFeHAucHJvdG90eXBlO1xuXG52YXIgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yID0gZnVuY3Rpb24ocmVnZXhwLCBzdHJpbmcpe1xuICB0aGlzLl9yID0gcmVnZXhwO1xuICB0aGlzLl9zID0gc3RyaW5nO1xufTtcblxucmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKSgkUmVnRXhwU3RyaW5nSXRlcmF0b3IsICdSZWdFeHAgU3RyaW5nJywgZnVuY3Rpb24gbmV4dCgpe1xuICB2YXIgbWF0Y2ggPSB0aGlzLl9yLmV4ZWModGhpcy5fcyk7XG4gIHJldHVybiB7dmFsdWU6IG1hdGNoLCBkb25lOiBtYXRjaCA9PT0gbnVsbH07XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIG1hdGNoQWxsOiBmdW5jdGlvbiBtYXRjaEFsbChyZWdleHApe1xuICAgIGRlZmluZWQodGhpcyk7XG4gICAgaWYoIWlzUmVnRXhwKHJlZ2V4cCkpdGhyb3cgVHlwZUVycm9yKHJlZ2V4cCArICcgaXMgbm90IGEgcmVnZXhwIScpO1xuICAgIHZhciBTICAgICA9IFN0cmluZyh0aGlzKVxuICAgICAgLCBmbGFncyA9ICdmbGFncycgaW4gUmVnRXhwUHJvdG8gPyBTdHJpbmcocmVnZXhwLmZsYWdzKSA6IGdldEZsYWdzLmNhbGwocmVnZXhwKVxuICAgICAgLCByeCAgICA9IG5ldyBSZWdFeHAocmVnZXhwLnNvdXJjZSwgfmZsYWdzLmluZGV4T2YoJ2cnKSA/IGZsYWdzIDogJ2cnICsgZmxhZ3MpO1xuICAgIHJ4Lmxhc3RJbmRleCA9IHRvTGVuZ3RoKHJlZ2V4cC5sYXN0SW5kZXgpO1xuICAgIHJldHVybiBuZXcgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yKHJ4LCBTKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLm1hdGNoLWFsbC5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbnZhciAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgb3duS2V5cyAgICAgICAgPSByZXF1aXJlKCcuL19vd24ta2V5cycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BEICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3Qpe1xuICAgIHZhciBPICAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAgICwgZ2V0RGVzYyA9IGdPUEQuZlxuICAgICAgLCBrZXlzICAgID0gb3duS2V5cyhPKVxuICAgICAgLCByZXN1bHQgID0ge31cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGtleXMubGVuZ3RoID4gaSljcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSA9IGtleXNbaSsrXSwgZ2V0RGVzYyhPLCBrZXkpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCl7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4gKiovIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBpc0VudW0gICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZW50cmllcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xuXG4vLyBCLjIuMi4yIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpXG5yZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICRleHBvcnQoJGV4cG9ydC5QICsgcmVxdWlyZSgnLi9fb2JqZWN0LWZvcmNlZC1wYW0nKSwgJ09iamVjdCcsIHtcbiAgX19kZWZpbmVHZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpe1xuICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7Z2V0OiBhRnVuY3Rpb24oZ2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtZ2V0dGVyLmpzXG4gKiovIiwiLy8gRm9yY2VkIHJlcGxhY2VtZW50IHByb3RvdHlwZSBhY2Nlc3NvcnMgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyl8fCAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBLLCBmdW5jdGlvbigpeyAvKiBlbXB0eSAqL30pO1xuICBkZWxldGUgcmVxdWlyZSgnLi9fZ2xvYmFsJylbS107XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZm9yY2VkLXBhbS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG5cbi8vIEIuMi4yLjMgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcilcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZVNldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcil7XG4gICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtzZXQ6IGFGdW5jdGlvbihzZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmRlZmluZS1zZXR0ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG4vLyBCLjIuMi40IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBHZXR0ZXJfXyhQKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fbG9va3VwR2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwR2V0dGVyX18oUCl7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKVxuICAgICAgLCBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSlcbiAgICAgICwgRDtcbiAgICBkbyB7XG4gICAgICBpZihEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKXJldHVybiBELmdldDtcbiAgICB9IHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxuLy8gQi4yLjIuNSBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwU2V0dGVyX18oUClcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cFNldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cFNldHRlcl9fKFApe1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG4gICAgICAsIEQ7XG4gICAgZG8ge1xuICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5zZXQ7XG4gICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLXNldHRlci5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanNcbiAqKi8iLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LnRvLWpzb24uanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWdsb2JhbFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeXN0ZW0nLCB7Z2xvYmFsOiByZXF1aXJlKCcuL19nbG9iYWwnKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5c3RlbS5nbG9iYWwuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWlzLWVycm9yXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29mICAgICA9IHJlcXVpcmUoJy4vX2NvZicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0Vycm9yJywge1xuICBpc0Vycm9yOiBmdW5jdGlvbiBpc0Vycm9yKGl0KXtcbiAgICByZXR1cm4gY29mKGl0KSA9PT0gJ0Vycm9yJztcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuZXJyb3IuaXMtZXJyb3IuanNcbiAqKi8iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpYWRkaDogZnVuY3Rpb24gaWFkZGgoeDAsIHgxLCB5MCwgeTEpe1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMFxuICAgICAgLCAkeDEgPSB4MSA+Pj4gMFxuICAgICAgLCAkeTAgPSB5MCA+Pj4gMDtcbiAgICByZXR1cm4gJHgxICsgKHkxID4+PiAwKSArICgoJHgwICYgJHkwIHwgKCR4MCB8ICR5MCkgJiB+KCR4MCArICR5MCA+Pj4gMCkpID4+PiAzMSkgfCAwO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmlhZGRoLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaXN1Ymg6IGZ1bmN0aW9uIGlzdWJoKHgwLCB4MSwgeTAsIHkxKXtcbiAgICB2YXIgJHgwID0geDAgPj4+IDBcbiAgICAgICwgJHgxID0geDEgPj4+IDBcbiAgICAgICwgJHkwID0geTAgPj4+IDA7XG4gICAgcmV0dXJuICR4MSAtICh5MSA+Pj4gMCkgLSAoKH4keDAgJiAkeTAgfCB+KCR4MCBeICR5MCkgJiAkeDAgLSAkeTAgPj4+IDApID4+PiAzMSkgfCAwO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmlzdWJoLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaW11bGg6IGZ1bmN0aW9uIGltdWxoKHUsIHYpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgJHUgPSArdVxuICAgICAgLCAkdiA9ICt2XG4gICAgICAsIHUwID0gJHUgJiBVSU5UMTZcbiAgICAgICwgdjAgPSAkdiAmIFVJTlQxNlxuICAgICAgLCB1MSA9ICR1ID4+IDE2XG4gICAgICAsIHYxID0gJHYgPj4gMTZcbiAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+PiAxNik7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguaW11bGguanNcbiAqKi8iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB1bXVsaDogZnVuY3Rpb24gdW11bGgodSwgdil7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuICAgICAgLCAkdSA9ICt1XG4gICAgICAsICR2ID0gK3ZcbiAgICAgICwgdTAgPSAkdSAmIFVJTlQxNlxuICAgICAgLCB2MCA9ICR2ICYgVUlOVDE2XG4gICAgICAsIHUxID0gJHUgPj4+IDE2XG4gICAgICAsIHYxID0gJHYgPj4+IDE2XG4gICAgICAsIHQgID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcbiAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+PiAxNik7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGgudW11bGguanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG4gICwgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxubWV0YWRhdGEuZXhwKHtkZWZpbmVNZXRhZGF0YTogZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgYW5PYmplY3QodGFyZ2V0KSwgdG9NZXRhS2V5KHRhcmdldEtleSkpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVmaW5lLW1ldGFkYXRhLmpzXG4gKiovIiwidmFyIE1hcCAgICAgPSByZXF1aXJlKCcuL2VzNi5tYXAnKVxuICAsICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHNoYXJlZCAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbWV0YWRhdGEnKVxuICAsIHN0b3JlICAgPSBzaGFyZWQuc3RvcmUgfHwgKHNoYXJlZC5zdG9yZSA9IG5ldyAocmVxdWlyZSgnLi9lczYud2Vhay1tYXAnKSkpO1xuXG52YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5LCBjcmVhdGUpe1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgaWYoIXRhcmdldE1ldGFkYXRhKXtcbiAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG4gICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKTtcbiAgfVxuICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcbiAgaWYoIWtleU1ldGFkYXRhKXtcbiAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKTtcbiAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG59O1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogbWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKXtcbiAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xufTtcbnZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgZmFsc2UpXG4gICAgLCBrZXlzICAgICAgICA9IFtdO1xuICBpZihtZXRhZGF0YU1hcCltZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uKF8sIGtleSl7IGtleXMucHVzaChrZXkpOyB9KTtcbiAgcmV0dXJuIGtleXM7XG59O1xudmFyIHRvTWV0YUtleSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcbnZhciBleHAgPSBmdW5jdGlvbihPKXtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgTyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RvcmU6IHN0b3JlLFxuICBtYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG4gIGhhczogb3JkaW5hcnlIYXNPd25NZXRhZGF0YSxcbiAgZ2V0OiBvcmRpbmFyeUdldE93bk1ldGFkYXRhLFxuICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG4gIGtleXM6IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzLFxuICBrZXk6IHRvTWV0YUtleSxcbiAgZXhwOiBleHBcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbWV0YWRhdGEuanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG4gICwgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IG1ldGFkYXRhLm1hcFxuICAsIHN0b3JlICAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5zdG9yZTtcblxubWV0YWRhdGEuZXhwKHtkZWxldGVNZXRhZGF0YTogZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgdmFyIHRhcmdldEtleSAgID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKVxuICAgICwgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSwgZmFsc2UpO1xuICBpZihtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkIHx8ICFtZXRhZGF0YU1hcFsnZGVsZXRlJ10obWV0YWRhdGFLZXkpKXJldHVybiBmYWxzZTtcbiAgaWYobWV0YWRhdGFNYXAuc2l6ZSlyZXR1cm4gdHJ1ZTtcbiAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG4gIHRhcmdldE1ldGFkYXRhWydkZWxldGUnXSh0YXJnZXRLZXkpO1xuICByZXR1cm4gISF0YXJnZXRNZXRhZGF0YS5zaXplIHx8IHN0b3JlWydkZWxldGUnXSh0YXJnZXQpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhLmpzXG4gKiovIiwidmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcbiAgLCBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0XG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5R2V0TWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgaWYoaGFzT3duKXJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IHVuZGVmaW5lZDtcbn07XG5cbm1ldGFkYXRhLmV4cCh7Z2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn19KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qc1xuICoqLyIsInZhciBTZXQgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vZXM2LnNldCcpXG4gICwgZnJvbSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJylcbiAgLCBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24oTywgUCl7XG4gIHZhciBvS2V5cyAgPSBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICwgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIGlmKHBhcmVudCA9PT0gbnVsbClyZXR1cm4gb0tleXM7XG4gIHZhciBwS2V5cyAgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gZnJvbShuZXcgU2V0KG9LZXlzLmNvbmNhdChwS2V5cykpKSA6IHBLZXlzIDogb0tleXM7XG59O1xuXG5tZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0XG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtnZXRPd25NZXRhZGF0YTogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcbiAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qc1xuICoqLyIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7Z2V0T3duTWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeUhhc01ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIGlmKGhhc093bilyZXR1cm4gdHJ1ZTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xufTtcblxubWV0YWRhdGEuZXhwKHtoYXNNZXRhZGF0YTogZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhLmpzXG4gKiovIiwidmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7aGFzT3duTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpXG4gICAgLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn19KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEuanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuICAsIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cbm1ldGFkYXRhLmV4cCh7bWV0YWRhdGE6IGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHRhcmdldEtleSl7XG4gICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShcbiAgICAgIG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLFxuICAgICAgKHRhcmdldEtleSAhPT0gdW5kZWZpbmVkID8gYW5PYmplY3QgOiBhRnVuY3Rpb24pKHRhcmdldCksXG4gICAgICB0b01ldGFLZXkodGFyZ2V0S2V5KVxuICAgICk7XG4gIH07XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YS5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA5L3NlcHQtMjUubWQjNTEwLWdsb2JhbGFzYXAtZm9yLWVucXVldWluZy1hLW1pY3JvdGFza1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIHByb2Nlc3MgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7XG4gIGFzYXA6IGZ1bmN0aW9uIGFzYXAoZm4pe1xuICAgIHZhciBkb21haW4gPSBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW47XG4gICAgbWljcm90YXNrKGRvbWFpbiA/IGRvbWFpbi5iaW5kKGZuKSA6IGZuKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXNhcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbnZhciAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgbWljcm90YXNrICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgT0JTRVJWQUJMRSAgPSByZXF1aXJlKCcuL193a3MnKSgnb2JzZXJ2YWJsZScpXG4gICwgYUZ1bmN0aW9uICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGhpZGUgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIFJFVFVSTiAgICAgID0gZm9yT2YuUkVUVVJOO1xuXG52YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oZm4pe1xuICByZXR1cm4gZm4gPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGFGdW5jdGlvbihmbik7XG59O1xuXG52YXIgY2xlYW51cFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIHZhciBjbGVhbnVwID0gc3Vic2NyaXB0aW9uLl9jO1xuICBpZihjbGVhbnVwKXtcbiAgICBzdWJzY3JpcHRpb24uX2MgPSB1bmRlZmluZWQ7XG4gICAgY2xlYW51cCgpO1xuICB9XG59O1xuXG52YXIgc3Vic2NyaXB0aW9uQ2xvc2VkID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbi5fbyA9PT0gdW5kZWZpbmVkO1xufTtcblxudmFyIGNsb3NlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcbiAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG4gICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICB9XG59O1xuXG52YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24ob2JzZXJ2ZXIsIHN1YnNjcmliZXIpe1xuICBhbk9iamVjdChvYnNlcnZlcik7XG4gIHRoaXMuX2MgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX28gPSBvYnNlcnZlcjtcbiAgb2JzZXJ2ZXIgPSBuZXcgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIodGhpcyk7XG4gIHRyeSB7XG4gICAgdmFyIGNsZWFudXAgICAgICA9IHN1YnNjcmliZXIob2JzZXJ2ZXIpXG4gICAgICAsIHN1YnNjcmlwdGlvbiA9IGNsZWFudXA7XG4gICAgaWYoY2xlYW51cCAhPSBudWxsKXtcbiAgICAgIGlmKHR5cGVvZiBjbGVhbnVwLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKWNsZWFudXAgPSBmdW5jdGlvbigpeyBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgIGVsc2UgYUZ1bmN0aW9uKGNsZWFudXApO1xuICAgICAgdGhpcy5fYyA9IGNsZWFudXA7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgIHJldHVybjtcbiAgfSBpZihzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpY2xlYW51cFN1YnNjcmlwdGlvbih0aGlzKTtcbn07XG5cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKXsgY2xvc2VTdWJzY3JpcHRpb24odGhpcyk7IH1cbn0pO1xuXG52YXIgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICB0aGlzLl9zID0gc3Vic2NyaXB0aW9uO1xufTtcblxuU3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcbiAgbmV4dDogZnVuY3Rpb24gbmV4dCh2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcbiAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLm5leHQpO1xuICAgICAgICBpZihtKXJldHVybiBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xvc2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IodmFsdWUpe1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmKHN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXRocm93IHZhbHVlO1xuICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmVycm9yKTtcbiAgICAgIGlmKCFtKXRocm93IHZhbHVlO1xuICAgICAgdmFsdWUgPSBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcbiAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmNvbXBsZXRlKTtcbiAgICAgICAgdmFsdWUgPSBtID8gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgJE9ic2VydmFibGUgPSBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZXIpe1xuICBhbkluc3RhbmNlKHRoaXMsICRPYnNlcnZhYmxlLCAnT2JzZXJ2YWJsZScsICdfZicpLl9mID0gYUZ1bmN0aW9uKHN1YnNjcmliZXIpO1xufTtcblxucmVkZWZpbmVBbGwoJE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKXtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihvYnNlcnZlciwgdGhpcy5fZik7XG4gIH0sXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IChjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBhRnVuY3Rpb24oZm4pO1xuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoYXQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dCA6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZSwge1xuICBmcm9tOiBmdW5jdGlvbiBmcm9tKHgpe1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGU7XG4gICAgdmFyIG1ldGhvZCA9IGdldE1ldGhvZChhbk9iamVjdCh4KVtPQlNFUlZBQkxFXSk7XG4gICAgaWYobWV0aG9kKXtcbiAgICAgIHZhciBvYnNlcnZhYmxlID0gYW5PYmplY3QobWV0aG9kLmNhbGwoeCkpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGUuY29uc3RydWN0b3IgPT09IEMgPyBvYnNlcnZhYmxlIDogbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG4gICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFkb25lKXtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYoZm9yT2YoeCwgZmFsc2UsIGZ1bmN0aW9uKGl0KXtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdCk7XG4gICAgICAgICAgICAgIGlmKGRvbmUpcmV0dXJuIFJFVFVSTjtcbiAgICAgICAgICAgIH0pID09PSBSRVRVUk4pcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICBpZihkb25lKXRocm93IGU7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IGRvbmUgPSB0cnVlOyB9O1xuICAgIH0pO1xuICB9LFxuICBvZjogZnVuY3Rpb24gb2YoKXtcbiAgICBmb3IodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aCwgaXRlbXMgPSBBcnJheShsKTsgaSA8IGw7KWl0ZW1zW2ldID0gYXJndW1lbnRzW2krK107XG4gICAgcmV0dXJuIG5ldyAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGUpKGZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWRvbmUpe1xuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIGlmKGRvbmUpcmV0dXJuO1xuICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5oaWRlKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwgT0JTRVJWQUJMRSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuRywge09ic2VydmFibGU6ICRPYnNlcnZhYmxlfSk7XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ09ic2VydmFibGUnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYnNlcnZhYmxlLmpzXG4gKiovIiwiLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxudmFyIGdsb2JhbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGludm9rZSAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIHBhcnRpYWwgICAgPSByZXF1aXJlKCcuL19wYXJ0aWFsJylcbiAgLCBuYXZpZ2F0b3IgID0gZ2xvYmFsLm5hdmlnYXRvclxuICAsIE1TSUUgICAgICAgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHNldCl7XG4gIHJldHVybiBNU0lFID8gZnVuY3Rpb24oZm4sIHRpbWUgLyosIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBzZXQoaW52b2tlKFxuICAgICAgcGFydGlhbCxcbiAgICAgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSxcbiAgICAgIHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbilcbiAgICApLCB0aW1lKTtcbiAgfSA6IHNldDtcbn07XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiArICRleHBvcnQuRiAqIE1TSUUsIHtcbiAgc2V0VGltZW91dDogIHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgcGF0aCAgICAgID0gcmVxdWlyZSgnLi9fcGF0aCcpXG4gICwgaW52b2tlICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcbiAgdmFyIGZuICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgcGFyZ3MgID0gQXJyYXkobGVuZ3RoKVxuICAgICwgaSAgICAgID0gMFxuICAgICwgXyAgICAgID0gcGF0aC5fXG4gICAgLCBob2xkZXIgPSBmYWxzZTtcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBqID0gMCwgayA9IDAsIGFyZ3M7XG4gICAgaWYoIWhvbGRlciAmJiAhYUxlbilyZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG4gICAgaWYoaG9sZGVyKWZvcig7bGVuZ3RoID4gajsgaisrKWlmKGFyZ3Nbal0gPT09IF8pYXJnc1tqXSA9IGFyZ3VtZW50c1trKytdO1xuICAgIHdoaWxlKGFMZW4gPiBrKWFyZ3MucHVzaChhcmd1bWVudHNbaysrXSk7XG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3BhcnRpYWwuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3BhdGguanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHRhc2sgICA9IHJlcXVpcmUoJy4vX3Rhc2snKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG4gIHNldEltbWVkaWF0ZTogICAkdGFzay5zZXQsXG4gIGNsZWFySW1tZWRpYXRlOiAkdGFzay5jbGVhclxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID0gR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbn0gKCkpXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5yZWdleHAuZXNjYXBlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5SZWdFeHAuZXNjYXBlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL2ZuL3JlZ2V4cC9lc2NhcGUuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHJlICAgICA9IHJlcXVpcmUoJy4vX3JlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVnRXhwJywge2VzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KXsgcmV0dXJuICRyZShpdCk7IH19KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvY29yZS5yZWdleHAuZXNjYXBlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVwbGFjZXIuanNcbiAqKi8iLCIrIX4tKCh3LCBkLCB1bmRlZmluZWQpID0+IHtcblxuICAgIG1vZHVsZS5leHBvcnRzLnBhZ2VzID0gYm9vay5wYWdlcztcblxufSkod2luZG93LCBkb2N1bWVudCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9wYWdlcy5qc1xuICoqLyIsIishfi0oKHcsIGQsIHVuZGVmaW5lZCkgPT4ge1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBncmFwaDtcblxuICAgIGxldCBncmFwaCA9IHt9O1xuXG5cbiAgICAvLyAgMS5cbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldERpbWVuc2lvbnMpO1xuICAgIHcub25sb2FkID0gZ2V0RGltZW5zaW9ucztcblxuICAgIGZ1bmN0aW9uIGdldERpbWVuc2lvbnMoKSB7XG5cbiAgICAgICAgbGV0IGJvb2sgPSB7fTtcblxuXG4gICAgICAgIGJvb2suYm91bmRzID0gZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Z2V0Ym91bmRpbmdjbGllbnRyZWN0XG5cbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInB3aWR0aFwiKS50ZXh0Q29udGVudCA9IGJvb2suYm91bmRzLndpZHRoO1xuICAgICAgICBkLmdldEVsZW1lbnRCeUlkKFwicGhlaWdodFwiKS50ZXh0Q29udGVudCA9IGJvb2suYm91bmRzLmhlaWdodDtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInB0b3BcIikudGV4dENvbnRlbnQgPSBib29rLmJvdW5kcy50b3A7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoXCJwbGVmdFwiKS50ZXh0Q29udGVudCA9IGJvb2suYm91bmRzLmxlZnQ7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlnaHRcIikudGV4dENvbnRlbnQgPSBib29rLmJvdW5kcy5yaWdodDtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInBib3R0b21cIikudGV4dENvbnRlbnQgPSBib29rLmJvdW5kcy5ib3R0b207XG5cbiAgICAgICAgLy8gb3JpZ2luID0gZC5nZXRFbGVtZW50QnlJZCgnb3JpZ2luJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgbGV0IG9yaWdpbiA9IHt9O1xuXG4gICAgICAgIG9yaWdpbi5ib3VuZHMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcIm9yaWdpblhcIikudGV4dENvbnRlbnQgPSBwYXJzZUludChvcmlnaW4uYm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoXCJvcmlnaW5ZXCIpLnRleHRDb250ZW50ID0gcGFyc2VJbnQob3JpZ2luLmJvdW5kcy5oZWlnaHQpIC8gMjtcblxuICAgIH1cblxuICAgIC8vIDIuXG4gICAgZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpLm9ubW91c2Vtb3ZlID0gaGFuZGxlTW91c2VNb3ZlO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50RG9jLCBkb2MsIGJvZHksIHBhZ2VYLCBwYWdlWTtcblxuICAgICAgICBlID0gZSB8fCB3LmU7XG5cbiAgICAgICAgaWYgKGUucGFnZVggPT09IG51bGwgJiYgZS5jbGllbnRYICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGV2ZW50RG9jID0gKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQpIHx8IGRvY3VtZW50O1xuXG4gICAgICAgICAgICBkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJvZHkgPSBldmVudERvYy5ib2R5O1xuXG4gICAgICAgICAgICBlLnBhZ2VYID0gZS5jbGllbnRYICtcbiAgICAgICAgICAgICAgICAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC1cbiAgICAgICAgICAgICAgICAoZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgICAgICAgZS5wYWdlWSA9IGUuY2xpZW50WSArXG4gICAgICAgICAgICAgICAgKGRvYyAmJiBkb2Muc2Nyb2xsVG9wIHx8IGJvZHkgJiYgYm9keS5zY3JvbGxUb3AgfHwgMCkgLVxuICAgICAgICAgICAgICAgIChkb2MgJiYgZG9jLmNsaWVudFRvcCB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wIHx8IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInhheGlzXCIpLnRleHRDb250ZW50ID0gZS5wYWdlWDtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInlheGlzXCIpLnRleHRDb250ZW50ID0gZS5wYWdlWTtcbiAgICB9XG5cblxuICAgIC8vIDMuXG5cbiAgICAvLyAoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBlbGVtID0gZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpO1xuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZUxvZyh4LCB5KSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnWDogJyArIHggKyAnOyBZOiAnICsgeSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgLy8gICAgICAgICB1cGRhdGVMb2coZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCwgZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSk7XG4gICAgLy8gICAgIH0sIGZhbHNlKTtcblxuICAgIC8vICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICAgIHVwZGF0ZUxvZyhlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsIGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSk7XG4gICAgLy8gICAgIH0sIGZhbHNlKTtcbiAgICAvLyB9KShkKTtcblxuXG59KSh3aW5kb3csIGRvY3VtZW50KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9ncmFwaC5qc1xuICoqLyIsIishfi0oKHcsIGQsIHVuZGVmaW5lZCkgPT4ge1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGdldE1hdGNoKHF1ZXJ5LCB1c2VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRlc3RNZWRpYShxdWVyeSwgdXNlUG9seWZpbGwpLm1hdGNoZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DaGFuZ2UocXVlcnksIGNiLCB1c2VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IHRlc3RNZWRpYShxdWVyeSwgdXNlUG9seWZpbGwpO1xuXG4gICAgICAgICAgICByZXMuYWRkTGlzdGVuZXIoY2hhbmdlZCA9PiB7XG4gICAgICAgICAgICAgICAgY2IuYXBwbHkoe30sIFtjaGFuZ2VkLm1hdGNoZXMsIGNoYW5nZWQubWVkaWFdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8vIFByaXZhdGVcbiAgICBmdW5jdGlvbiB0ZXN0TWVkaWEocXVlcnksIHVzZVBvbHlmaWxsKSB7XG4gICAgICAgIGNvbnN0IGlzTWF0Y2hNZWRpYVN1cHBvcnRlZCA9ICEhKHcgJiYgdy5tYXRjaE1lZGlhKSAmJiAhdXNlUG9seWZpbGw7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gLi4uIHBvbHlmaWxsXG4gICAgICAgIH1cblxuICAgIH1cbn0pKHdpbmRvdywgZG9jdW1lbnQpO1xuXG5cbi8vIDEuXG4vLyBjb25zdCBtcSA9IChxdWVyeSwgY2IsIHVzZVBvbHlmaWxsKSA9PiB7XG4vLyAgICAgY29uc3QgaG9zdCA9IHt9O1xuLy8gICAgIGNvbnN0IGlzTWF0Y2hNZWRpYVN1cHBvcnRlZCA9ICEhKHcgJiYgdy5tYXRjaE1lZGlhKSAmJiAhdXNlUG9seWZpbGw7XG5cbi8vICAgICBpZiAoaXNNYXRjaE1lZGlhU3VwcG9ydGVkKSB7XG4vLyAgICAgICAgIGNvbnN0IHJlcyA9IHcubWF0Y2hNZWRpYShxdWVyeSk7XG5cbi8vICAgICAgICAgY2IuYXBwbHkoaG9zdCwgW3Jlcy5tYXRjaGVzLCByZXMubWVkaWFdKTtcblxuLy8gICAgICAgICByZXMuYWRkTGlzdGVuZXIoY2hhbmdlZCA9PiB7XG4vLyAgICAgICAgICAgICBjYi5hcHBseShob3N0LCBbY2hhbmdlZC5tYXRjaGVzLCBjaGFuZ2VkLm1lZGlhXSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIC8vIC4uLiBwb2x5ZmlsbFxuLy8gICAgIH1cbi8vIH07XG5cbi8vIG1xKCdhbGwgYW5kIChtaW4td2lkdGg6IDg3MHB4KScsIGZ1bmN0aW9uKG1hdGNoKSB7XG4vLyAgICAgbW9kZSA9IG1hdGNoID8gJ2RvdWJsZScgOiAnc2luZ2xlJztcbi8vICAgICBjb25zb2xlLmxvZyhtb2RlKTsgXG4vLyB9KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL21vZGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9