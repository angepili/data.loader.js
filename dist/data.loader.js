/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/demo.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/demo.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inter:300,400,700,900&display=swap);"]);
// Module
exports.push([module.i, "html body {\n  font-family: 'Inter', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  background: #fff; }\n  html body .button, html body #Filters button, html body #LoadMore {\n    display: inline-block;\n    background: #fff;\n    border: 0 none;\n    color: #000;\n    font-weight: bold;\n    padding: 8px 20px;\n    cursor: pointer;\n    border: 2px solid #000;\n    -webkit-box-shadow: none;\n    outline: none;\n    box-shadow: none;\n    -webkit-transition: all 0.25s ease-in-out;\n    -moz-transition: all 0.25s ease-in-out;\n    -o-transition: all 0.25s ease-in-out;\n    transition: all 0.25s ease-in-out; }\n    html body .button.active, html body #Filters button.active, html body .active#LoadMore, html body .button:hover, html body #Filters button:hover, html body #LoadMore:hover {\n      background: #000;\n      color: #fff; }\n  html body #logo {\n    margin: 100px auto 60px;\n    width: 300px;\n    text-align: center; }\n    html body #logo img {\n      width: 100%;\n      height: auto; }\n  html body #Filters {\n    text-align: center;\n    margin-bottom: 100px; }\n  html body #DataLoaderContent:after {\n    content: '';\n    display: table;\n    clear: both;\n    height: 1px; }\n  html body #DataLoaderContent .item {\n    width: 25%;\n    float: left;\n    position: relative;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    -webkit-transition: all 0.25s ease-in-out;\n    -moz-transition: all 0.25s ease-in-out;\n    -o-transition: all 0.25s ease-in-out;\n    transition: all 0.25s ease-in-out; }\n    html body #DataLoaderContent .item h2 {\n      position: absolute;\n      top: 15px;\n      left: 15px;\n      color: #fff;\n      margin: 0;\n      padding: 0;\n      font-size: 22px;\n      line-height: 22px;\n      z-index: 2;\n      -webkit-transition: all 0.25s ease-in-out;\n      -moz-transition: all 0.25s ease-in-out;\n      -o-transition: all 0.25s ease-in-out;\n      transition: all 0.25s ease-in-out; }\n    html body #DataLoaderContent .item:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      background: rgba(0, 0, 0, 0.5);\n      -webkit-transition: all 0.25s ease-in-out;\n      -moz-transition: all 0.25s ease-in-out;\n      -o-transition: all 0.25s ease-in-out;\n      transition: all 0.25s ease-in-out; }\n    html body #DataLoaderContent .item a {\n      display: block;\n      position: relative;\n      z-index: 10; }\n      html body #DataLoaderContent .item a img {\n        width: 100%;\n        height: auto; }\n    html body #DataLoaderContent .item:hover {\n      z-index: 9;\n      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5); }\n      html body #DataLoaderContent .item:hover:after {\n        background: rgba(0, 0, 0, 0); }\n      html body #DataLoaderContent .item:hover h2 {\n        transform: translateY(-200%); }\n  html body #LoadMore {\n    margin: 100px auto;\n    text-align: center; }\n  @media only screen and (max-width: 767px) {\n    html body #DataLoaderContent .item h2 {\n      font-size: 14px; } }\n  @media only screen and (max-width: 480px) {\n    html body #DataLoaderContent .item {\n      width: 50%; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo.svg");

/***/ }),

/***/ "./src/assets/pixel.svg":
/*!******************************!*\
  !*** ./src/assets/pixel.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/pixel.svg");

/***/ }),

/***/ "./src/data.loader.ts":
/*!****************************!*\
  !*** ./src/data.loader.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataLoader; });
function DataLoader(obj) {
  var DATA;
  var Options = {
    endpoint: obj.endpoint ? obj.endpoint : '',
    params: obj.data ? Object.keys(obj.data).map(function (key) {
      return key + '=' + obj.data[key];
    }).join('&') : '',
    show: obj.show ? obj.show : 10,
    container: obj.container ? obj.container : 'DataLoaderContent',
    loadMore: obj.loadMore ? obj.loadMore : 'LoadMore',
    noResMsg: obj.noResMsg ? obj.noResMsg : '<p style="clear:both">Nessun contenuto per questa selezione di filtri</p>',
    template: obj.template
  };
  var Proprieties = {
    offset: 0,
    filters: {},
    findObjectByKey: function findObjectByKey(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }

      return null;
    },
    setFilter: function setFilter(key, value) {
      Proprieties.filters[key] = value;
    },
    removeFilter: function removeFilter(key) {
      delete Proprieties.filters[key];
    },
    applyFilters: function applyFilters(data) {
      if (Object.keys(data).length != 0) {
        Proprieties.result = data.filter(function (obj) {
          return Object.keys(Proprieties.filters).every(function (c) {
            return obj[c] == Proprieties.filters[c];
          });
        });
      }
    }
  };

  var BuildTemplate = function BuildTemplate(template, data) {
    var pattern = /{\s*(\w+?)\s*}/g;
    return template.replace(pattern, function (_, token) {
      return data[token] || '';
    });
  };

  var Load = function Load() {
    var endpoint = Options.endpoint,
        params = Options.params;
    fetch(endpoint + params).then(function (response) {
      if (response.status === 200) {
        response.json().then(function (data) {
          DATA = data;
          GetContent();
          LoadMore();
          Filters();
        });
      }
    });
  };

  var GetContent = function GetContent() {
    var container = Options.container,
        template = Options.template,
        show = Options.show,
        ContainerElement = document.getElementById(container),
        total = DATA.length,
        totalNow = Proprieties.result ? Object.keys(Proprieties.result).length : total;
    var tmp = null;
    if (Proprieties.offset == 0) Proprieties.offset = show;

    if (Object.keys(Proprieties.filters).length == 0) {
      tmp = DATA.slice(0, Proprieties.offset);
    } else {
      tmp = Proprieties.result.slice(0, Proprieties.offset);
    }

    if (total == 0) {
      ContainerElement.innerHTML = Options.noResMsg;
    }

    if (tmp.length == totalNow) {
      document.getElementById(Options.loadMore).style.display = 'none';
    } else {
      document.getElementById(Options.loadMore).style.display = 'block';
    }

    ContainerElement.innerHTML = '';
    tmp.map(function (item) {
      ContainerElement.innerHTML += BuildTemplate(template, item);
    });
  };

  var LoadMore = function LoadMore() {
    document.getElementById(Options.loadMore).addEventListener('click', function (e) {
      e.preventDefault();
      Proprieties.offset += Options.show;
      GetContent();
    });
  };

  var Filters = function Filters() {
    var buttons = document.querySelectorAll('button[data-filter]');

    var _loop = function _loop(i, buttons) {
      var that = buttons[i];
      that.addEventListener('click', function (e) {
        e.preventDefault();
        var key = that.getAttribute('data-type');
        var value = that.getAttribute('data-filter');
        Proprieties.offset = 0;

        if (!hasClass(that, 'active')) {
          removeClass();
          that.classList.add('active');
          Proprieties.setFilter(key, value);

          if (value == '*') {
            Proprieties.removeFilter(key);
          }
        } else {
          that.classList.remove('active');

          if (key in Proprieties.filters) {
            Proprieties.removeFilter(key);
          }
        }

        Proprieties.applyFilters(DATA);
        GetContent();
      });
    };

    for (var i = 0; i < buttons.length; i++) {
      _loop(i, buttons);
    }

    var removeClass = function removeClass() {
      for (var _i = 0; _i < buttons.length; _i++) {
        buttons[_i].classList.remove('active');
      }
    };

    var hasClass = function hasClass(element, className) {
      return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    };
  };

  return Load();
}
;

/***/ }),

/***/ "./src/demo.scss":
/*!***********************!*\
  !*** ./src/demo.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./demo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/demo.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.scss */ "./src/demo.scss");
/* harmony import */ var _demo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_demo_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_pixel_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pixel.svg */ "./src/assets/pixel.svg");
/* harmony import */ var _data_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.loader */ "./src/data.loader.ts");




var Opt = {
  endpoint: 'https://picsum.photos/v2/list?page=1&limit=48',
  show: 4,
  template: "\n        <div class=\"item\" style=\"background-image: url({download_url})\">\n            <h2>{author}</h2>\n            <a href=\"{url}\" target=\"_blank\">\n                <img src=\"./assets/pixel.svg\" alt=\"pixel\" />\n            </a>\n        </div>\n        "
};
new _data_loader__WEBPACK_IMPORTED_MODULE_3__["default"](Opt);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGl4ZWwuc3ZnIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby5zY3NzPzZlNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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QUEzQixFQUFtQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFdBQUssQ0FBQyxDQUFELEVBQUcsT0FBSCxDQUFMO0FBQ0g7O0FBRUQsUUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFjO0FBQ2hCLFdBQUssSUFBSSxFQUFFLEdBQUcsQ0FBZCxFQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQTlCLEVBQXNDLEVBQUUsRUFBeEMsRUFBNEM7QUFDeEMsZUFBTyxDQUFDLEVBQUQsQ0FBUCxDQUFZLFNBQVosQ0FBc0IsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDSDtBQUNKLEtBSkQ7O0FBTUEsUUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFXLENBQUMsT0FBRCxFQUE0QixTQUE1QixFQUE2QztBQUMxRCxhQUFPLENBQUMsTUFBTSxPQUFPLENBQUMsU0FBZCxHQUEwQixHQUEzQixFQUFnQyxPQUFoQyxDQUF3QyxNQUFNLFNBQU4sR0FBa0IsR0FBMUQsSUFBaUUsQ0FBQyxDQUF6RTtBQUNILEtBRkQ7QUFHSCxHQTdDRDs7QUErQ0EsU0FBTyxJQUFJLEVBQVg7QUFDSDtBQUFBLEM7Ozs7Ozs7Ozs7O0FDNUtELFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsaU1BQThGOztBQUVoSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSxHQUFHLEdBQWE7QUFDbEIsVUFBUSxFQUFHLCtDQURPO0FBRWxCLE1BQUksRUFBRyxDQUZXO0FBR2xCLFVBQVEsRUFBSTtBQUhNLENBQXRCO0FBYUEsSUFBSSxvREFBSixDQUFlLEdBQWYsRSIsImZpbGUiOiJkYXRhLmxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW50ZXI6MzAwLDQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gIGh0bWwgYm9keSAuYnV0dG9uLCBodG1sIGJvZHkgI0ZpbHRlcnMgYnV0dG9uLCBodG1sIGJvZHkgI0xvYWRNb3JlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgaHRtbCBib2R5IC5idXR0b24uYWN0aXZlLCBodG1sIGJvZHkgI0ZpbHRlcnMgYnV0dG9uLmFjdGl2ZSwgaHRtbCBib2R5IC5hY3RpdmUjTG9hZE1vcmUsIGh0bWwgYm9keSAuYnV0dG9uOmhvdmVyLCBodG1sIGJvZHkgI0ZpbHRlcnMgYnV0dG9uOmhvdmVyLCBodG1sIGJvZHkgI0xvYWRNb3JlOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICBodG1sIGJvZHkgI2xvZ28ge1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gNjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgaHRtbCBib2R5ICNsb2dvIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuICBodG1sIGJvZHkgI0ZpbHRlcnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4OyB9XFxuICBodG1sIGJvZHkgI0RhdGFMb2FkZXJDb250ZW50OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgaGVpZ2h0OiAxcHg7IH1cXG4gIGh0bWwgYm9keSAjRGF0YUxvYWRlckNvbnRlbnQgLml0ZW0ge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgaHRtbCBib2R5ICNEYXRhTG9hZGVyQ29udGVudCAuaXRlbSBoMiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTVweDtcXG4gICAgICBsZWZ0OiAxNXB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7IH1cXG4gICAgaHRtbCBib2R5ICNEYXRhTG9hZGVyQ29udGVudCAuaXRlbTphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDsgfVxcbiAgICBodG1sIGJvZHkgI0RhdGFMb2FkZXJDb250ZW50IC5pdGVtIGEge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxMDsgfVxcbiAgICAgIGh0bWwgYm9keSAjRGF0YUxvYWRlckNvbnRlbnQgLml0ZW0gYSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87IH1cXG4gICAgaHRtbCBib2R5ICNEYXRhTG9hZGVyQ29udGVudCAuaXRlbTpob3ZlciB7XFxuICAgICAgei1pbmRleDogOTtcXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgICAgIGh0bWwgYm9keSAjRGF0YUxvYWRlckNvbnRlbnQgLml0ZW06aG92ZXI6YWZ0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTsgfVxcbiAgICAgIGh0bWwgYm9keSAjRGF0YUxvYWRlckNvbnRlbnQgLml0ZW06aG92ZXIgaDIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTsgfVxcbiAgaHRtbCBib2R5ICNMb2FkTW9yZSB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIGh0bWwgYm9keSAjRGF0YUxvYWRlckNvbnRlbnQgLml0ZW0gaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfSB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIGh0bWwgYm9keSAjRGF0YUxvYWRlckNvbnRlbnQgLml0ZW0ge1xcbiAgICAgIHdpZHRoOiA1MCU7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2xvZ28uc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9waXhlbC5zdmdcIjsiLCJleHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgc2hvdz86IG51bWJlcixcbiAgICB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgIGNvbnRhaW5lcj86IHN0cmluZyxcbiAgICBsb2FkTW9yZT86IHN0cmluZyxcbiAgICBub1Jlc01zZz86IHN0cmluZyxcbiAgICBkYXRhPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcmlldGllcyB7XG4gICAgb2Zmc2V0IDogbnVtYmVyLFxuICAgIGZpbHRlcnMgOiBPYmplY3QsXG4gICAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFMb2FkZXIob2JqOiBPcHRpb25zKSB7XG5cbiAgICBsZXQgREFUQTpbXTtcblxuICAgIGxldCBPcHRpb25zID0ge1xuICAgICAgICBlbmRwb2ludCAgICA6IG9iai5lbmRwb2ludCA/IG9iai5lbmRwb2ludCA6ICcnLFxuICAgICAgICBwYXJhbXMgICAgICA6IG9iai5kYXRhID8gT2JqZWN0LmtleXMob2JqLmRhdGEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIG9iai5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcmJykgOiAnJyxcbiAgICAgICAgc2hvdyAgICAgICAgOiBvYmouc2hvdyA/IG9iai5zaG93IDogMTAsXG4gICAgICAgIGNvbnRhaW5lciAgIDogb2JqLmNvbnRhaW5lciA/IG9iai5jb250YWluZXIgOiAnRGF0YUxvYWRlckNvbnRlbnQnLFxuICAgICAgICBsb2FkTW9yZSAgICA6IG9iai5sb2FkTW9yZSA/IG9iai5sb2FkTW9yZSA6ICdMb2FkTW9yZScsXG4gICAgICAgIG5vUmVzTXNnICAgIDogb2JqLm5vUmVzTXNnID8gb2JqLm5vUmVzTXNnIDogJzxwIHN0eWxlPVwiY2xlYXI6Ym90aFwiPk5lc3N1biBjb250ZW51dG8gcGVyIHF1ZXN0YSBzZWxlemlvbmUgZGkgZmlsdHJpPC9wPicsXG4gICAgICAgIHRlbXBsYXRlICAgIDogb2JqLnRlbXBsYXRlXG4gICAgfTtcblxuICAgIGxldCBQcm9wcmlldGllcyA6IFByb3ByaWV0aWVzID0ge1xuICAgICAgICBvZmZzZXQgOiAwLFxuICAgICAgICBmaWx0ZXJzIDoge30sXG4gICAgICAgIGZpbmRPYmplY3RCeUtleTogKGFycmF5LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RmlsdGVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIFByb3ByaWV0aWVzLmZpbHRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVGaWx0ZXI6IChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIFByb3ByaWV0aWVzLmZpbHRlcnNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwbHlGaWx0ZXJzOiAoZGF0YTogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgUHJvcHJpZXRpZXMucmVzdWx0ID0gZGF0YS5maWx0ZXIoKG9iaikgPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhQcm9wcmlldGllcy5maWx0ZXJzKS5ldmVyeShmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialtjXSA9PSBQcm9wcmlldGllcy5maWx0ZXJzW2NdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IEJ1aWxkVGVtcGxhdGUgPSAodGVtcGxhdGUsIGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IC97XFxzKihcXHcrPylcXHMqfS9nO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShwYXR0ZXJuLCAoXywgdG9rZW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhW3Rva2VuXSB8fCAnJztcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IExvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbmRwb2ludCA9IE9wdGlvbnMuZW5kcG9pbnQsXG4gICAgICAgICAgICBwYXJhbXMgPSBPcHRpb25zLnBhcmFtcztcbiAgICAgICAgICAgIGZldGNoKGVuZHBvaW50ICsgcGFyYW1zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgREFUQSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBHZXRDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkTW9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVycygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgR2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgICBjb250YWluZXIgICA9IE9wdGlvbnMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICAgID0gT3B0aW9ucy50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBzaG93ICAgICAgICA9IE9wdGlvbnMuc2hvdyxcbiAgICAgICAgICAgICAgICBDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lciksXG4gICAgICAgICAgICAgICAgdG90YWwgICAgICAgPSBEQVRBLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB0b3RhbE5vdyAgICA9IFByb3ByaWV0aWVzLnJlc3VsdCA/IE9iamVjdC5rZXlzKFByb3ByaWV0aWVzLnJlc3VsdCkubGVuZ3RoIDogdG90YWxcblxuICAgICAgICBsZXQgdG1wIDogYW55ID0gbnVsbDtcblxuICAgICAgICBpZihQcm9wcmlldGllcy5vZmZzZXQgPT0gMCkgUHJvcHJpZXRpZXMub2Zmc2V0ID0gc2hvdztcblxuICAgICAgICBpZihPYmplY3Qua2V5cyhQcm9wcmlldGllcy5maWx0ZXJzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdG1wID0gREFUQS5zbGljZSgwLCBQcm9wcmlldGllcy5vZmZzZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG1wID0gUHJvcHJpZXRpZXMucmVzdWx0LnNsaWNlKDAsIFByb3ByaWV0aWVzLm9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0b3RhbCA9PSAwKSB7XG4gICAgICAgICAgICBDb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IE9wdGlvbnMubm9SZXNNc2c7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0bXAubGVuZ3RoID09IHRvdGFsTm93KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPcHRpb25zLmxvYWRNb3JlKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT3B0aW9ucy5sb2FkTW9yZSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cblxuICAgICAgICBDb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0bXAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBDb250YWluZXJFbGVtZW50LmlubmVySFRNTCArPSBCdWlsZFRlbXBsYXRlKHRlbXBsYXRlLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IExvYWRNb3JlID0gZnVuY3Rpb24gTG9hZE1vcmUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9wdGlvbnMubG9hZE1vcmUpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFByb3ByaWV0aWVzLm9mZnNldCArPSBPcHRpb25zLnNob3c7XG4gICAgICAgICAgICBHZXRDb250ZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtZmlsdGVyXScpO1xuXG4gICAgICAgIGNvbnN0IF9sb29wID0gKGk6bnVtYmVyLGJ1dHRvbnMpID0+IHtcbiAgICAgICAgICAgIGxldCB0aGF0OkhUTUxCb2R5RWxlbWVudCA9IGJ1dHRvbnNbaV07XG4gICAgICAgICAgICB0aGF0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHRoYXQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGF0LmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICBQcm9wcmlldGllcy5vZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDbGFzcyh0aGF0LCAnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgUHJvcHJpZXRpZXMuc2V0RmlsdGVyKGtleSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3ByaWV0aWVzLnJlbW92ZUZpbHRlcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IGluIFByb3ByaWV0aWVzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3ByaWV0aWVzLnJlbW92ZUZpbHRlcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJvcHJpZXRpZXMuYXBwbHlGaWx0ZXJzKERBVEEpO1xuICAgICAgICAgICAgICAgIEdldENvbnRlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcChpLGJ1dHRvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYnV0dG9ucy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBidXR0b25zW19pXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc0NsYXNzID0gKGVsZW1lbnQgOiBIVE1MQm9keUVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPiAtMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gTG9hZCgpO1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vZGVtby5zY3NzJztcbmltcG9ydCAnLi9hc3NldHMvbG9nby5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9waXhlbC5zdmcnO1xuaW1wb3J0IERhdGFMb2FkZXIseyBPcHRpb25zIH0gZnJvbSAnLi9kYXRhLmxvYWRlcic7XG5cbmNvbnN0IE9wdCA6IE9wdGlvbnMgPSB7XG4gICAgZW5kcG9pbnQgOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3YyL2xpc3Q/cGFnZT0xJmxpbWl0PTQ4JyxcbiAgICBzaG93IDogNCxcbiAgICB0ZW1wbGF0ZSA6ICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoe2Rvd25sb2FkX3VybH0pXCI+XG4gICAgICAgICAgICA8aDI+e2F1dGhvcn08L2gyPlxuICAgICAgICAgICAgPGEgaHJlZj1cInt1cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9waXhlbC5zdmdcIiBhbHQ9XCJwaXhlbFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG59O1xuXG5uZXcgRGF0YUxvYWRlcihPcHQpOyJdLCJzb3VyY2VSb290IjoiIn0=