"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/tasks.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* task Item(s) */\r\n\r\n\r\n.task-completed{\r\n    text-decoration: line-through;\r\n    color:black;\r\n    background-color: grey;\r\n}\r\n\r\n.task-completed-background{\r\nbackground-color: grey;\r\n}\r\n\r\n\r\n.delete-icon {\r\n    text-decoration: none;\r\n    align-self: center;\r\n}\r\n\r\n.todo{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    padding:.5rem 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n/* add task form */\r\n\r\n.add-task-form{\r\n    /* color:green; */\r\n}\r\n\r\n.task-form-hidden{\r\n    display:none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/tasks.css"],"names":[],"mappings":";AACA,iBAAiB;;;AAGjB;IACI,6BAA6B;IAC7B,WAAW;IACX,sBAAsB;AAC1B;;AAEA;AACA,sBAAsB;AACtB;;;AAGA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;AACtB;;;;;AAKA,kBAAkB;;AAElB;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["\r\n/* task Item(s) */\r\n\r\n\r\n.task-completed{\r\n    text-decoration: line-through;\r\n    color:black;\r\n    background-color: grey;\r\n}\r\n\r\n.task-completed-background{\r\nbackground-color: grey;\r\n}\r\n\r\n\r\n.delete-icon {\r\n    text-decoration: none;\r\n    align-self: center;\r\n}\r\n\r\n.todo{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    padding:.5rem 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n/* add task form */\r\n\r\n.add-task-form{\r\n    /* color:green; */\r\n}\r\n\r\n.task-form-hidden{\r\n    display:none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content{\r\n    display:grid;\r\n\r\n}\r\n\r\n.sidebar{\r\n    width:70%;\r\n    display:flex;\r\n    justify-content: center;\r\n    gap: 10%;\r\n    margin:0 auto;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,YAAY;;AAEhB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,QAAQ;IACR,aAAa;AACjB","sourcesContent":[".content{\r\n    display:grid;\r\n\r\n}\r\n\r\n.sidebar{\r\n    width:70%;\r\n    display:flex;\r\n    justify-content: center;\r\n    gap: 10%;\r\n    margin:0 auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/tasks.css":
/*!**********************************!*\
  !*** ./src/components/tasks.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/addTaskForm.js":
/*!***************************************!*\
  !*** ./src/components/addTaskForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/todos */ "./src/logic/todos.js");
/* harmony import */ var _tasksDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksDisplay */ "./src/components/tasksDisplay.js");
/* harmony import */ var _tasks_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.css */ "./src/components/tasks.css");





const addTaskForm = () => {
console.log("work???")
    let {refreshTaskList} = (0,_logic_todos__WEBPACK_IMPORTED_MODULE_0__.manageTodos)()
    const contentDiv = document.querySelector(".content")

    // Creating form elements and adding content
    let taskForm = document.createElement("form")
    taskForm.classList.add("add-task-form","task-form-hidden")
    let titleLabel = document.createElement("label")
    titleLabel.setAttribute("for","title") 
    titleLabel.textContent = "Task Title:"
    let titleInput = document.createElement("input")
    titleInput.required = true;
    titleInput.type = "text"
    titleInput.id = "title"
    titleInput.name="title"
    let descLabel = document.createElement("label")
    descLabel.setAttribute("for","desc") 
    descLabel.textContent = "Task Description:"
    let descInput = document.createElement("input")
    descInput.type = "text"
    descInput.id = "desc"
    descInput.name="desc"
    let priorityLabel = document.createElement("label")
    priorityLabel.setAttribute("for","priority") 
    priorityLabel.textContent = "Task Priority:"
    let priorityInput = document.createElement("input")
    priorityInput.type = "range"
    priorityInput.id = "priority"
    priorityInput.name="priority"
    priorityInput.setAttribute("value","1")
    priorityInput.setAttribute("min","1")
    priorityInput.setAttribute("max","5")
    let dueByLabel = document.createElement("label")
    dueByLabel.setAttribute("for","dueBy") 
    dueByLabel.textContent = "Task DueDate:"
    let dueByInput = document.createElement("input")
    dueByInput.type = "datetime-local"
    dueByInput.id = "dueBy"
    dueByInput.name="dueBy"
    let completeLabel = document.createElement("label")
    completeLabel.setAttribute("for","complete") 
    completeLabel.textContent = "Task completed:"
    let completeInput = document.createElement("input")
    completeInput.type = "checkbox"
    completeInput.id = "complete"
    completeInput.name="complete"
    let submitButton = document.createElement("button");
    submitButton.classList.add("submit-task-button")
    submitButton.textContent = "Submit Task"

    // appending form elements and form
    taskForm.appendChild(titleLabel)
    taskForm.appendChild(titleInput)
    taskForm.appendChild(descLabel)
    taskForm.appendChild(descInput)
    taskForm.appendChild(dueByLabel)
    taskForm.appendChild(dueByInput)
    taskForm.appendChild(priorityLabel)
    taskForm.appendChild(priorityInput)
    taskForm.appendChild(completeLabel)
    taskForm.appendChild(completeInput)
    taskForm.appendChild(submitButton)
    contentDiv.appendChild(taskForm)

    function createTask(e){
        let task = (0,_logic_todos__WEBPACK_IMPORTED_MODULE_0__.Todo)(`${titleInput.value}`,`${descInput.value}`,`${dueByInput.value}`,`${priorityInput.value}`,`${completeInput.checked}`);
        task.addTodo(e)
        refreshTaskList()
        clearForm()

    }

    function clearForm(){
        taskForm.classList.toggle("task-form-hidden")
        titleInput.value = ''
        descInput.value=''
        dueByInput.value=''
        priorityInput.value = 1
        completeInput.checked = false
    }

    submitButton.addEventListener("click",createTask)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskForm);

/***/ }),

/***/ "./src/components/sideNav.js":
/*!***********************************!*\
  !*** ./src/components/sideNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const sideNav = () => {
    const contentDiv = document.querySelector(".content")
    let addTaskForm = document.querySelector(".add-task-form")
    console.log(addTaskForm)
    
    const sideBar = document.createElement("div")
    sideBar.classList.add("sidebar")
    let taskLink = document.createElement("p")
    taskLink.textContent="Tasks"
    let projectLink = document.createElement("p")
    projectLink.textContent="Projects"
    
    let addIcon = document.createElement("p")
    addIcon.classList.add("addIcon")
    addIcon.textContent = "+";

    sideBar.appendChild(taskLink)
    sideBar.appendChild(projectLink)
    sideBar.appendChild(addIcon)
    contentDiv.appendChild(sideBar)

    addIcon.addEventListener("click",function() {
        addTaskForm.classList.toggle("task-form-hidden")
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideNav);

/***/ }),

/***/ "./src/components/tasksDisplay.js":
/*!****************************************!*\
  !*** ./src/components/tasksDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/todos */ "./src/logic/todos.js");
/* harmony import */ var _tasks_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.css */ "./src/components/tasks.css");




const tasksDisplay = () => {
    let {refreshTaskList} = (0,_logic_todos__WEBPACK_IMPORTED_MODULE_0__.manageTodos)()

    const contentDiv = document.querySelector(".content")

    let todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    contentDiv.appendChild(todoContainer)

    refreshTaskList()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksDisplay);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sideNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sideNav */ "./src/components/sideNav.js");
/* harmony import */ var _logic_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/todos */ "./src/logic/todos.js");
/* harmony import */ var _logic_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/projects */ "./src/logic/projects.js");
/* harmony import */ var _components_tasksDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tasksDisplay */ "./src/components/tasksDisplay.js");
/* harmony import */ var _components_addTaskForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addTaskForm */ "./src/components/addTaskForm.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");







let {refreshTaskList} = (0,_logic_todos__WEBPACK_IMPORTED_MODULE_1__.manageTodos)()

let body = document.querySelector("body")
const contentDiv = document.createElement("div")
contentDiv.classList.add("content")
body.appendChild(contentDiv)

// let todoOne = Todo("Clean Room","I was gonna grab the broom","tomorrow",5,true)
// todoOne.addTodo()

// let todoTwo = Todo("code","I was gonna grab the computer","todaymorrow",1,false)
// todoTwo.addTodo()

// let todoThree = Todo("work","work","work",1,false)
// todoThree.addTodo()

// todo


    // single page app
    // home screen will have inputs for adding todos and projects that will hold todos. Choose which project your todo goes into
    // Factories to create todos and projects
    // todos will have title,desc,duedate,priority.....etc
    // Keep logic seperated and Dom related stuff seperate.
    // interface should be able to view all projects,view all todays in each project,expand a single todo to see/edit its details,and delete a todo.
    // checkout date-fns package 
    // use local storage to keep the session of the user

    


    const renderDisplays = () =>{
        ;(0,_components_addTaskForm__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_components_sideNav__WEBPACK_IMPORTED_MODULE_0__["default"])()
        
        ;(0,_components_tasksDisplay__WEBPACK_IMPORTED_MODULE_3__["default"])()
        
    }
    
    renderDisplays()

/***/ }),

/***/ "./src/logic/projects.js":
/*!*******************************!*\
  !*** ./src/logic/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

 function Project(title,desc,dueBy,priority,complete){
    title
    desc
    dueBy
    priority
    complete

    let projects = []
    let addProject = function(){
        projects.push(this)
    }
    let toggleComplete = function(){
        this.classList.toggle('complete')
    }

    // let addTodoProject = function(){
    //     // click on project 
    //     // brings up todos
    // }

    let deleteProject = function(){
        if(projects.length === 0){
            return
        }else{
            let updatedProjects = projects.filter((project) => {
                // project.id === e.target.id
            })
            // projects = updatedProjects;
        }
    }
    return {addProject,toggleComplete,deleteProject}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/logic/todos.js":
/*!****************************!*\
  !*** ./src/logic/todos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "manageTodos": () => (/* binding */ manageTodos),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
let todos = []
let ID = 0
function manageTodos(){
    
    let addTodo = function(e){
        if(e){
            e.preventDefault()
        }
        this.id = ID
        todos = [...todos,this]
        console.log(todos)
        ID++
        saveTasksInLocalStorage()
        
    }

    let saveTasksInLocalStorage = function(){
        window.localStorage.setItem("tasks",JSON.stringify(todos))
        window.localStorage.setItem("id",ID)
    }
    let getTasksFromLocalStorage = function(){
        let savedTasks = JSON.parse(window.localStorage.getItem("tasks"))
        let savedID = window.localStorage.getItem("id")
        todos = savedTasks
        ID = savedID
    }

    let refreshTaskList = function(){
        getTasksFromLocalStorage()
        const contentDiv = document.querySelector(".content")
        let todoContainer = document.querySelector(".todo-container")
        todoContainer.replaceChildren()
       
        todos.map(todo => {
            console.log(todo)
            let taskDetails = document.createElement("div")
            taskDetails.classList.add("task-details")
            let taskItem = document.createElement("div")  
            let taskTitle = document.createElement("h2")
            let taskDueBy = document.createElement("p")
            let taskDelete = document.createElement("p")
            taskDelete.classList.add("delete-icon")
            
            taskItem.classList.add(`todo`,`todo-${todo.id}`)
            if(todo.complete === true || todo.complete === "true"){
                console.log("IM CHECKED")
                taskItem.classList.toggle("task-completed-background")
                taskTitle.classList.toggle("task-completed")
                taskDueBy.classList.toggle("task-completed")
            }
            taskTitle.textContent=`${todo.title}`
            taskDueBy.textContent=`${todo.dueBy}`
            taskDelete.textContent="DELETE"
            taskItem.addEventListener("click",toggleComplete)
            taskDelete.addEventListener("click",deleteTodo)
    
            todoContainer.appendChild(taskItem)
            taskItem.appendChild(taskDetails)
            taskDetails.appendChild(taskTitle)
            taskDetails.appendChild(taskDueBy)
            taskItem.appendChild(taskDelete)
        }) 
        
        contentDiv.appendChild(todoContainer)
    }

    let toggleComplete = function(e){
        e.stopPropagation()
        console.log(e)
        for(let i = 0; i<todos.length; i++){
            let split = e.target.classList[1].split("")
            let lastChar = split.length - 1
            if(todos[i].id === parseInt(split[lastChar])){
                e.target.classList.toggle("task-completed-background")
                e.target.children[0].classList.toggle('task-completed')
                
                todos[i].complete ? todos[i].complete = false : todos[i].complete = true
            }else{
                console.log("nowork")
            }
            saveTasksInLocalStorage()
        }
        console.log(todos)
        
    }


    let deleteTodo = function(e){
        e.stopPropagation()
        console.log(e)
        if(todos.length === 0){
            return
        }else{
            let parentId = e.target.parentElement.classList[1].split("")
            console.log(parentId)
            let IdLastChar = parentId.length-1
            
            let updatedTodos = todos.filter((todo) => {
                console.log(parentId[IdLastChar])
            console.log(todo.id)
               if( todo.id != parentId[IdLastChar]){
                   return todo
               }
            })
            todos = updatedTodos;
            saveTasksInLocalStorage()
            refreshTaskList()
        }
    }
    return {addTodo,toggleComplete,deleteTodo,refreshTaskList}
}

// Todo Factory
 function Todo(title,desc,dueBy,priority,complete){

        title,
        desc,
        dueBy,
        priority,
        complete,
        ID

    let {addTodo} = manageTodos();
        ID++
    return {title,desc,dueBy,priority,complete,addTodo}
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUztBQUNsQjtBQUNBLFlBQVk7QUFDWjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza3MuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrcy5jc3M/MmQ4MiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlTmF2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy90b2Rvcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIHRhc2sgSXRlbShzKSAqL1xcclxcblxcclxcblxcclxcbi50YXNrLWNvbXBsZXRlZHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZHtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG97XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOi41cmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIGFkZCB0YXNrIGZvcm0gKi9cXHJcXG5cXHJcXG4uYWRkLXRhc2stZm9ybXtcXHJcXG4gICAgLyogY29sb3I6Z3JlZW47ICovXFxyXFxufVxcclxcblxcclxcbi50YXNrLWZvcm0taGlkZGVue1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Rhc2tzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0EsaUJBQWlCOzs7QUFHakI7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7Ozs7O0FBS0Esa0JBQWtCOztBQUVsQjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLyogdGFzayBJdGVtKHMpICovXFxyXFxuXFxyXFxuXFxyXFxuLnRhc2stY29tcGxldGVke1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbXBsZXRlZC1iYWNrZ3JvdW5ke1xcclxcbmJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6LjVyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogYWRkIHRhc2sgZm9ybSAqL1xcclxcblxcclxcbi5hZGQtdGFzay1mb3Jte1xcclxcbiAgICAvKiBjb2xvcjpncmVlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybS1oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXJ7XFxyXFxuICAgIHdpZHRoOjcwJTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMCU7XFxyXFxuICAgIG1hcmdpbjowIGF1dG87XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICB3aWR0aDo3MCU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgICBtYXJnaW46MCBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5pbXBvcnQgeyBtYW5hZ2VUb2RvcyxUb2RvIH0gZnJvbSBcIi4uL2xvZ2ljL3RvZG9zXCJcclxuaW1wb3J0IHRhc2tzRGlzcGxheSBmcm9tIFwiLi90YXNrc0Rpc3BsYXlcIlxyXG5pbXBvcnQgXCIuL3Rhc2tzLmNzc1wiXHJcblxyXG5jb25zdCBhZGRUYXNrRm9ybSA9ICgpID0+IHtcclxuY29uc29sZS5sb2coXCJ3b3JrPz8/XCIpXHJcbiAgICBsZXQge3JlZnJlc2hUYXNrTGlzdH0gPSBtYW5hZ2VUb2RvcygpXHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXHJcblxyXG4gICAgLy8gQ3JlYXRpbmcgZm9ybSBlbGVtZW50cyBhbmQgYWRkaW5nIGNvbnRlbnRcclxuICAgIGxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stZm9ybVwiLFwidGFzay1mb3JtLWhpZGRlblwiKVxyXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJ0aXRsZVwiKSBcclxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgVGl0bGU6XCJcclxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiXHJcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiXHJcbiAgICB0aXRsZUlucHV0Lm5hbWU9XCJ0aXRsZVwiXHJcbiAgICBsZXQgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJkZXNjXCIpIFxyXG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIERlc2NyaXB0aW9uOlwiXHJcbiAgICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBkZXNjSW5wdXQudHlwZSA9IFwidGV4dFwiXHJcbiAgICBkZXNjSW5wdXQuaWQgPSBcImRlc2NcIlxyXG4gICAgZGVzY0lucHV0Lm5hbWU9XCJkZXNjXCJcclxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwicHJpb3JpdHlcIikgXHJcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIFByaW9yaXR5OlwiXHJcbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcHJpb3JpdHlJbnB1dC50eXBlID0gXCJyYW5nZVwiXHJcbiAgICBwcmlvcml0eUlucHV0LmlkID0gXCJwcmlvcml0eVwiXHJcbiAgICBwcmlvcml0eUlucHV0Lm5hbWU9XCJwcmlvcml0eVwiXHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCIxXCIpXHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLFwiMVwiKVxyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIixcIjVcIilcclxuICAgIGxldCBkdWVCeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBkdWVCeUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiZHVlQnlcIikgXHJcbiAgICBkdWVCeUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIER1ZURhdGU6XCJcclxuICAgIGxldCBkdWVCeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBkdWVCeUlucHV0LnR5cGUgPSBcImRhdGV0aW1lLWxvY2FsXCJcclxuICAgIGR1ZUJ5SW5wdXQuaWQgPSBcImR1ZUJ5XCJcclxuICAgIGR1ZUJ5SW5wdXQubmFtZT1cImR1ZUJ5XCJcclxuICAgIGxldCBjb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBjb21wbGV0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLFwiY29tcGxldGVcIikgXHJcbiAgICBjb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIGNvbXBsZXRlZDpcIlxyXG4gICAgbGV0IGNvbXBsZXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGNvbXBsZXRlSW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxyXG4gICAgY29tcGxldGVJbnB1dC5pZCA9IFwiY29tcGxldGVcIlxyXG4gICAgY29tcGxldGVJbnB1dC5uYW1lPVwiY29tcGxldGVcIlxyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ1dHRvblwiKVxyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXQgVGFza1wiXHJcblxyXG4gICAgLy8gYXBwZW5kaW5nIGZvcm0gZWxlbWVudHMgYW5kIGZvcm1cclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKVxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KVxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZHVlQnlMYWJlbClcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGR1ZUJ5SW5wdXQpXHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dClcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGNvbXBsZXRlTGFiZWwpXHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KVxyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrRm9ybSlcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKGUpe1xyXG4gICAgICAgIGxldCB0YXNrID0gVG9kbyhgJHt0aXRsZUlucHV0LnZhbHVlfWAsYCR7ZGVzY0lucHV0LnZhbHVlfWAsYCR7ZHVlQnlJbnB1dC52YWx1ZX1gLGAke3ByaW9yaXR5SW5wdXQudmFsdWV9YCxgJHtjb21wbGV0ZUlucHV0LmNoZWNrZWR9YCk7XHJcbiAgICAgICAgdGFzay5hZGRUb2RvKGUpXHJcbiAgICAgICAgcmVmcmVzaFRhc2tMaXN0KClcclxuICAgICAgICBjbGVhckZvcm0oKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckZvcm0oKXtcclxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1mb3JtLWhpZGRlblwiKVxyXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICAgIGRlc2NJbnB1dC52YWx1ZT0nJ1xyXG4gICAgICAgIGR1ZUJ5SW5wdXQudmFsdWU9JydcclxuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gMVxyXG4gICAgICAgIGNvbXBsZXRlSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZVRhc2spXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2tGb3JtIiwiXHJcblxyXG5jb25zdCBzaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxyXG4gICAgbGV0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpXHJcbiAgICBjb25zb2xlLmxvZyhhZGRUYXNrRm9ybSlcclxuICAgIFxyXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIilcclxuICAgIGxldCB0YXNrTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICB0YXNrTGluay50ZXh0Q29udGVudD1cIlRhc2tzXCJcclxuICAgIGxldCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudD1cIlByb2plY3RzXCJcclxuICAgIFxyXG4gICAgbGV0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkSWNvblwiKVxyXG4gICAgYWRkSWNvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQodGFza0xpbmspXHJcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKVxyXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChhZGRJY29uKVxyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzaWRlQmFyKVxyXG5cclxuICAgIGFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInRhc2stZm9ybS1oaWRkZW5cIilcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlTmF2IiwiaW1wb3J0IHtUb2RvLHRvZG9zfSBmcm9tIFwiLi4vbG9naWMvdG9kb3NcIlxyXG5pbXBvcnQge21hbmFnZVRvZG9zfSBmcm9tIFwiLi4vbG9naWMvdG9kb3NcIlxyXG5pbXBvcnQgXCIuL3Rhc2tzLmNzc1wiXHJcblxyXG5jb25zdCB0YXNrc0Rpc3BsYXkgPSAoKSA9PiB7XHJcbiAgICBsZXQge3JlZnJlc2hUYXNrTGlzdH0gPSBtYW5hZ2VUb2RvcygpXHJcblxyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxyXG5cclxuICAgIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIilcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcilcclxuXHJcbiAgICByZWZyZXNoVGFza0xpc3QoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc0Rpc3BsYXkiLCJpbXBvcnQgc2lkZU5hdiBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVOYXZcIlxyXG5pbXBvcnQge1RvZG8sbWFuYWdlVG9kb3N9IGZyb20gXCIuL2xvZ2ljL3RvZG9zXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9sb2dpYy9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgdGFza3NEaXNwbGF5IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza3NEaXNwbGF5XCJcclxuaW1wb3J0IGFkZFRhc2tGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvYWRkVGFza0Zvcm1cIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIlxyXG5cclxubGV0IHtyZWZyZXNoVGFza0xpc3R9ID0gbWFuYWdlVG9kb3MoKVxyXG5cclxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5jb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpXHJcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdilcclxuXHJcbi8vIGxldCB0b2RvT25lID0gVG9kbyhcIkNsZWFuIFJvb21cIixcIkkgd2FzIGdvbm5hIGdyYWIgdGhlIGJyb29tXCIsXCJ0b21vcnJvd1wiLDUsdHJ1ZSlcclxuLy8gdG9kb09uZS5hZGRUb2RvKClcclxuXHJcbi8vIGxldCB0b2RvVHdvID0gVG9kbyhcImNvZGVcIixcIkkgd2FzIGdvbm5hIGdyYWIgdGhlIGNvbXB1dGVyXCIsXCJ0b2RheW1vcnJvd1wiLDEsZmFsc2UpXHJcbi8vIHRvZG9Ud28uYWRkVG9kbygpXHJcblxyXG4vLyBsZXQgdG9kb1RocmVlID0gVG9kbyhcIndvcmtcIixcIndvcmtcIixcIndvcmtcIiwxLGZhbHNlKVxyXG4vLyB0b2RvVGhyZWUuYWRkVG9kbygpXHJcblxyXG4vLyB0b2RvXHJcblxyXG5cclxuICAgIC8vIHNpbmdsZSBwYWdlIGFwcFxyXG4gICAgLy8gaG9tZSBzY3JlZW4gd2lsbCBoYXZlIGlucHV0cyBmb3IgYWRkaW5nIHRvZG9zIGFuZCBwcm9qZWN0cyB0aGF0IHdpbGwgaG9sZCB0b2Rvcy4gQ2hvb3NlIHdoaWNoIHByb2plY3QgeW91ciB0b2RvIGdvZXMgaW50b1xyXG4gICAgLy8gRmFjdG9yaWVzIHRvIGNyZWF0ZSB0b2RvcyBhbmQgcHJvamVjdHNcclxuICAgIC8vIHRvZG9zIHdpbGwgaGF2ZSB0aXRsZSxkZXNjLGR1ZWRhdGUscHJpb3JpdHkuLi4uLmV0Y1xyXG4gICAgLy8gS2VlcCBsb2dpYyBzZXBlcmF0ZWQgYW5kIERvbSByZWxhdGVkIHN0dWZmIHNlcGVyYXRlLlxyXG4gICAgLy8gaW50ZXJmYWNlIHNob3VsZCBiZSBhYmxlIHRvIHZpZXcgYWxsIHByb2plY3RzLHZpZXcgYWxsIHRvZGF5cyBpbiBlYWNoIHByb2plY3QsZXhwYW5kIGEgc2luZ2xlIHRvZG8gdG8gc2VlL2VkaXQgaXRzIGRldGFpbHMsYW5kIGRlbGV0ZSBhIHRvZG8uXHJcbiAgICAvLyBjaGVja291dCBkYXRlLWZucyBwYWNrYWdlIFxyXG4gICAgLy8gdXNlIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB0aGUgc2Vzc2lvbiBvZiB0aGUgdXNlclxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCByZW5kZXJEaXNwbGF5cyA9ICgpID0+e1xyXG4gICAgICAgIGFkZFRhc2tGb3JtKClcclxuICAgICAgICBzaWRlTmF2KClcclxuICAgICAgICBcclxuICAgICAgICB0YXNrc0Rpc3BsYXkoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXJEaXNwbGF5cygpIiwiXHJcbiBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlLGRlc2MsZHVlQnkscHJpb3JpdHksY29tcGxldGUpe1xyXG4gICAgdGl0bGVcclxuICAgIGRlc2NcclxuICAgIGR1ZUJ5XHJcbiAgICBwcmlvcml0eVxyXG4gICAgY29tcGxldGVcclxuXHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXVxyXG4gICAgbGV0IGFkZFByb2plY3QgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHByb2plY3RzLnB1c2godGhpcylcclxuICAgIH1cclxuICAgIGxldCB0b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IGFkZFRvZG9Qcm9qZWN0ID0gZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICAvLyBjbGljayBvbiBwcm9qZWN0IFxyXG4gICAgLy8gICAgIC8vIGJyaW5ncyB1cCB0b2Rvc1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGxldCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdC5pZCA9PT0gZS50YXJnZXQuaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gcHJvamVjdHMgPSB1cGRhdGVkUHJvamVjdHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHthZGRQcm9qZWN0LHRvZ2dsZUNvbXBsZXRlLGRlbGV0ZVByb2plY3R9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJsZXQgdG9kb3MgPSBbXVxyXG5sZXQgSUQgPSAwXHJcbmZ1bmN0aW9uIG1hbmFnZVRvZG9zKCl7XHJcbiAgICBcclxuICAgIGxldCBhZGRUb2RvID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkID0gSURcclxuICAgICAgICB0b2RvcyA9IFsuLi50b2Rvcyx0aGlzXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICAgIElEKytcclxuICAgICAgICBzYXZlVGFza3NJbkxvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNhdmVUYXNrc0luTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLElEKVxyXG4gICAgfVxyXG4gICAgbGV0IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHNhdmVkVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKVxyXG4gICAgICAgIGxldCBzYXZlZElEID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIilcclxuICAgICAgICB0b2RvcyA9IHNhdmVkVGFza3NcclxuICAgICAgICBJRCA9IHNhdmVkSURcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVmcmVzaFRhc2tMaXN0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcclxuICAgICAgICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIilcclxuICAgICAgICB0b2RvQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgICAgICBcclxuICAgICAgICB0b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXHJcbiAgICAgICAgICAgIGxldCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlsc1wiKVxyXG4gICAgICAgICAgICBsZXQgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpICBcclxuICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgICAgICAgICBsZXQgdGFza0R1ZUJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgbGV0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChgdG9kb2AsYHRvZG8tJHt0b2RvLmlkfWApXHJcbiAgICAgICAgICAgIGlmKHRvZG8uY29tcGxldGUgPT09IHRydWUgfHwgdG9kby5jb21wbGV0ZSA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTSBDSEVDS0VEXCIpXHJcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWNvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICAgICAgdGFza0R1ZUJ5LmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWNvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudD1gJHt0b2RvLnRpdGxlfWBcclxuICAgICAgICAgICAgdGFza0R1ZUJ5LnRleHRDb250ZW50PWAke3RvZG8uZHVlQnl9YFxyXG4gICAgICAgICAgICB0YXNrRGVsZXRlLnRleHRDb250ZW50PVwiREVMRVRFXCJcclxuICAgICAgICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdG9nZ2xlQ29tcGxldGUpXHJcbiAgICAgICAgICAgIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZGVsZXRlVG9kbylcclxuICAgIFxyXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtKVxyXG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcclxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxyXG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRHVlQnkpXHJcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b2dnbGVDb21wbGV0ZSA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8dG9kb3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBlLnRhcmdldC5jbGFzc0xpc3RbMV0uc3BsaXQoXCJcIilcclxuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gc3BsaXQubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBpZih0b2Rvc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3BsaXRbbGFzdENoYXJdKSl7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1jb21wbGV0ZWQtYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1jb21wbGV0ZWQnKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2Rvc1tpXS5jb21wbGV0ZSA/IHRvZG9zW2ldLmNvbXBsZXRlID0gZmFsc2UgOiB0b2Rvc1tpXS5jb21wbGV0ZSA9IHRydWVcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vd29ya1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNhdmVUYXNrc0luTG9jYWxTdG9yYWdlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBkZWxldGVUb2RvID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgaWYodG9kb3MubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmVudElkKVxyXG4gICAgICAgICAgICBsZXQgSWRMYXN0Q2hhciA9IHBhcmVudElkLmxlbmd0aC0xXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRJZFtJZExhc3RDaGFyXSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kby5pZClcclxuICAgICAgICAgICAgICAgaWYoIHRvZG8uaWQgIT0gcGFyZW50SWRbSWRMYXN0Q2hhcl0pe1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0b2RvcyA9IHVwZGF0ZWRUb2RvcztcclxuICAgICAgICAgICAgc2F2ZVRhc2tzSW5Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgICAgICByZWZyZXNoVGFza0xpc3QoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7YWRkVG9kbyx0b2dnbGVDb21wbGV0ZSxkZWxldGVUb2RvLHJlZnJlc2hUYXNrTGlzdH1cclxufVxyXG5cclxuLy8gVG9kbyBGYWN0b3J5XHJcbiBmdW5jdGlvbiBUb2RvKHRpdGxlLGRlc2MsZHVlQnkscHJpb3JpdHksY29tcGxldGUpe1xyXG5cclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGR1ZUJ5LFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGNvbXBsZXRlLFxyXG4gICAgICAgIElEXHJcblxyXG4gICAgbGV0IHthZGRUb2RvfSA9IG1hbmFnZVRvZG9zKCk7XHJcbiAgICAgICAgSUQrK1xyXG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjLGR1ZUJ5LHByaW9yaXR5LGNvbXBsZXRlLGFkZFRvZG99XHJcbn1cclxuXHJcbmV4cG9ydCB7VG9kbywgbWFuYWdlVG9kb3MsdG9kb3MsfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==