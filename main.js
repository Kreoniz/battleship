/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background-color: rgb(255, 255, 255);
  --text-color: grey;
  --border-color: grey;
  --ship-color: grey;
  --missile-color: #030104;
}

.dark {
  --background-color: rgb(0, 0, 0);
  --text-color: rgb(255, 255, 255);
  --border-color: rgb(255, 255, 255);
  --ship-color: rgb(255, 255, 255);
  --missile-color: yellow;
}

body {
  font-family: system-ui, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);

  transition: 0.5s ease;
}

.row {
  display: flex;
}

.cell {
  margin: 2px;
  height: 30px;
  width: 30px;
  border: 2px solid var(--border-color);

  transition: 0.3s;
}

.shootable:hover {
  cursor: pointer;
  background-color: salmon;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.title {
  text-align: center;
  margin: 1rem 0;
  font-size: 2rem;
}

.ship {
  background-color: var(--ship-color);
}

.hit {
  background-color: var(--ship-color);
  position: relative;
}

.hit::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: red;

  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hit::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: red;

  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.missed {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.missed::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: var(--ship-color);
}

.missile {
  fill: var(--missile-color);
}

.target {
  border-color: red;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,gCAAgC;EAChC,gCAAgC;EAChC,kCAAkC;EAClC,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,yCAAyC;EACzC,wBAAwB;;EAExB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,qCAAqC;;EAErC,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,qBAAqB;;EAErB,QAAQ;EACR,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,qBAAqB;;EAErB,QAAQ;EACR,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[":root {\n  --background-color: rgb(255, 255, 255);\n  --text-color: grey;\n  --border-color: grey;\n  --ship-color: grey;\n  --missile-color: #030104;\n}\n\n.dark {\n  --background-color: rgb(0, 0, 0);\n  --text-color: rgb(255, 255, 255);\n  --border-color: rgb(255, 255, 255);\n  --ship-color: rgb(255, 255, 255);\n  --missile-color: yellow;\n}\n\nbody {\n  font-family: system-ui, sans-serif;\n  background-color: var(--background-color);\n  color: var(--text-color);\n\n  transition: 0.5s ease;\n}\n\n.row {\n  display: flex;\n}\n\n.cell {\n  margin: 2px;\n  height: 30px;\n  width: 30px;\n  border: 2px solid var(--border-color);\n\n  transition: 0.3s;\n}\n\n.shootable:hover {\n  cursor: pointer;\n  background-color: salmon;\n}\n\n.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.title {\n  text-align: center;\n  margin: 1rem 0;\n  font-size: 2rem;\n}\n\n.ship {\n  background-color: var(--ship-color);\n}\n\n.hit {\n  background-color: var(--ship-color);\n  position: relative;\n}\n\n.hit::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: red;\n\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n.hit::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: red;\n\n  top: 50%;\n  transform: translateY(-50%) rotate(-45deg);\n}\n\n.missed {\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.missed::before {\n  content: '';\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  background-color: var(--ship-color);\n}\n\n.missile {\n  fill: var(--missile-color);\n}\n\n.target {\n  border-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_91_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_91_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.91.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/assets/missile.svg":
/*!********************************!*\
  !*** ./src/assets/missile.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.979 25.979\" xml:space=\"preserve\"><g><path d=\"M25.744,6.604C26.08,6.267,26.107,6.02,25.48,6.02c-0.628,0-4.556,0-5.068,0 c-0.512,0-0.533,0.016-0.814,0.297c-0.281,0.281-4.604,4.607-4.604,4.607s5.413,0,5.877,0c0.465,0,0.633-0.037,0.912-0.318 C22.063,10.326,25.408,6.94,25.744,6.604z\"></path><path d=\"M19.375,0.235c0.336-0.335,0.584-0.363,0.584,0.264s0,4.555,0,5.067S19.943,6.1,19.662,6.381 s-4.607,4.604-4.607,4.604s0-5.414,0-5.878c0-0.464,0.037-0.632,0.318-0.912C15.653,3.916,19.039,0.571,19.375,0.235z\"></path><path d=\"M1.621,16.53c-2.161,2.162-2.162,5.666-0.001,7.828c2.161,2.161,5.667,2.161,7.828,0 c0.93-0.931,6.001-6,6.931-6.93c2.161-2.161,2.161-5.666,0-7.829c-2.162-2.162-5.666-2.161-7.828,0 C7.621,10.531,2.551,15.6,1.621,16.53z\"></path></g></svg>"

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");


class Cell {
  constructor(x, y) {
    this.status = 'empty';
    this.ship = null;
    this.x = x;
    this.y = y;
  }

  placeShip(ship) {
    this.ship = ship;
  }

  isHit() {
    return this.hit;
  }
}

class Gameboard {
  #ships = [];
  #coordinates = [];

  constructor(w = 10, h = 10) {
    this.initializeBoard(w, h);
  }

  initializeBoard(w = 10, h = 10) {
    this.#coordinates = [];
    for (let r = 0; r < h; r += 1) {
      this.#coordinates[r] = [];
      for (let c = 0; c < w; c += 1) {
        this.#coordinates[r][c] = new Cell(c, r);
      }
    }
  }

  checkAllShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk());
  }

  placeShip(shipCoords) {
    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipCoords.length);

    const { w, h } = this.getBoardDimensions();

    if (shipCoords.some((coords) => coords.x >= w || coords.y >= h)) {
      return false;
    }

    const adjacentCells = shipCoords
      .map((c) => this.getShipAdjacentCells(c.x, c.y))
      .flat();

    const occupiedAdjacentCells = adjacentCells.filter(
      (c) => this.getCell(c.x, c.y).status !== 'empty',
    );

    if (occupiedAdjacentCells.length > 0) {
      return false;
    }

    const cells = [];
    for (let i = 0; i < shipCoords.length; i += 1) {
      const coords = shipCoords[i];
      const cell = this.#coordinates[coords.y][coords.x];

      if (!cell.ship) {
        cells.push(cell);
      } else if (cell.ship) {
        return false;
      }
    }

    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];
      cell.ship = ship;
      cell.status = 'occupied';
      this.#ships.push(ship);
    }
    return true;
  }

  receiveAttack(x, y) {
    const cell = this.#coordinates[y][x];

    if (cell.ship || cell.status === 'occupied') {
      cell.ship.hit();
      cell.status = 'hit';

      if (cell.ship.isSunk()) {
        return 'destroyed';
      } else {
        return 'hit';
      }
    }

    if (cell.status === 'empty') {
      cell.status = 'missed';
      return 'missed';
    }
  }

  printBoard() {
    for (let r = 0; r < this.#coordinates.length; r += 1) {
      const row = this.#coordinates[r];
      const line = [];

      for (let c = 0; c < row.length; c += 1) {
        const cell = row[c];

        if (cell.status === 'hit') {
          line.push('X');
        } else if (cell.status === 'occupied') {
          line.push(cell.ship.length);
        } else if (cell.status === 'missed') {
          line.push('.');
        } else if (cell.status === 'empty') {
          line.push('0');
        }
      }
      console.log(line.join(' '));
    }
  }

  getCell(x, y) {
    const cell = this.#coordinates[y][x];

    return cell;
  }

  getShipAdjacentCells(x, y) {
    const { w, h } = this.getBoardDimensions();

    const cells = [];
    const queue = [{ x, y }];
    const visited = [];

    const deltas = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
    ];

    while (queue.length > 0) {
      const currentCoords = queue.shift();
      visited.push(currentCoords);

      const currentX = +currentCoords.x;
      const currentY = +currentCoords.y;

      for (let i = 0; i < deltas.length; i += 1) {
        const changedX = currentX + deltas[i][0];
        const changedY = currentY + deltas[i][1];

        if (
          changedX >= 0 &&
          changedX <= w - 1 &&
          changedY >= 0 &&
          changedY <= h - 1
        ) {
          const changedCoords = { x: changedX, y: changedY };

          if (
            visited.filter((c) => +c.x === changedX && +c.y === changedY)
              .length !== 0
          ) {
            continue;
          }

          const status = this.getCell(changedX, changedY).status;

          if (status === 'hit' || status === 'occupied') {
            queue.push(changedCoords);
            cells.push(changedCoords);
          } else {
            cells.push(changedCoords);
          }
        }
      }
    }

    return cells;
  }

  getBoardDimensions() {
    return { w: this.#coordinates[0].length, h: this.#coordinates.length };
  }

  getShootableCells() {
    return this.#coordinates
      .flat()
      .filter(
        (cell) =>
          cell.status !== 'hit' &&
          cell.status !== 'missed' &&
          cell.status !== 'destroyed',
      );
  }

  randomPlacement(shipSizes) {
    this.initializeBoard();
    const { w, h } = this.getBoardDimensions();

    for (let i = 0; i < shipSizes.length; i += 1) {
      let placed = false;

      while (!placed) {
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const startRow = Math.floor(Math.random() * w);
        const startCol = Math.floor(Math.random() * h);

        const coords = [];

        if (direction === 'horizontal') {
          for (let x = startCol; x < startCol + shipSizes[i]; x++) {
            coords.push({ x: x, y: startRow });
          }
        } else if (direction === 'vertical') {
          for (let y = startRow; y < startRow + shipSizes[i]; y++) {
            coords.push({ x: startCol, y: y });
          }
        }

        if (this.placeShip(coords)) {
          placed = true;
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/scripts/gameboard.js");


class Player {
  constructor() {
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
  }

  shootRandomCell() {
    const shootableCells = this.gameboard.getShootableCells();

    const randomIndex = Math.floor(Math.random() * shootableCells.length);
    const { x, y } = shootableCells[randomIndex];

    return { x, y };
  }
}


/***/ }),

/***/ "./src/scripts/render.js":
/*!*******************************!*\
  !*** ./src/scripts/render.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardRenderer: () => (/* binding */ BoardRenderer)
/* harmony export */ });
/* harmony import */ var _assets_missile_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/missile.svg */ "./src/assets/missile.svg");


class BoardRenderer {
  isPlayerTurn;
  player;
  opponent;
  animationDuration = 750;

  constructor(isPlayerTurn, playerRoot, player, opponentRoot, opponent) {
    this.isPlayerTurn = isPlayerTurn;
    this.player = player;
    this.playerRoot = playerRoot;
    this.opponent = opponent;
    this.opponentRoot = opponentRoot;
  }

  renderPlayerBoard() {
    this.playerRoot.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');

      for (let j = 0; j < 10; j += 1) {
        const cellDiv = document.createElement('div');
        cellDiv.dataset.x = j;
        cellDiv.dataset.y = i;
        cellDiv.classList.add('opponent');

        const cell = this.player.gameboard.getCell(j, i);
        cellDiv.classList.add('cell');
        if (cell.status === 'occupied') {
          cellDiv.classList.add('ship');
        } else {
          cellDiv.classList.add(cell.status);
        }

        rowDiv.appendChild(cellDiv);
      }

      this.playerRoot.appendChild(rowDiv);
    }
  }

  renderOpponentBoard() {
    this.opponentRoot.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');

      for (let j = 0; j < 10; j += 1) {
        const cellDiv = document.createElement('div');
        cellDiv.dataset.x = j;
        cellDiv.dataset.y = i;

        const cell = this.opponent.gameboard.getCell(j, i);
        cellDiv.classList.add('cell');
        cellDiv.classList.add(cell.status);

        if (
          this.isPlayerTurn &&
          (cell.status === 'occupied' || cell.status === 'empty')
        ) {
          if (cell.status !== 'hit' && cell.status !== 'missed') {
            cellDiv.classList.add('shootable');
          }

          cellDiv.addEventListener('click', () => {
            const x = cellDiv.dataset.x;
            const y = cellDiv.dataset.y;
            cellDiv.classList.add(cell.status);

            const attackResult = this.opponent.gameboard.receiveAttack(x, y);

            this.animateAttack(cellDiv);

            setTimeout(() => {
              if (attackResult === 'destroyed') {
                const adjacentCells =
                  this.opponent.gameboard.getShipAdjacentCells(x, y);

                for (let i = 0; i < adjacentCells.length; i += 1) {
                  const adjacentX = adjacentCells[i].x;
                  const adjacentY = adjacentCells[i].y;

                  this.opponent.gameboard.receiveAttack(adjacentX, adjacentY);
                }
              }

              if (attackResult === 'missed') {
                this.isPlayerTurn = false;
                this.makeOpponentMove(this.opponent, this.player);
              } else if (
                attackResult === 'hit' ||
                attackResult === 'destroyed'
              ) {
                this.isPlayerTurn = true;
              }

              if (this.opponent.gameboard.checkAllShipsSunk()) {
                document.querySelector('#status').textContent = 'YOU WIN!';
              }

              this.renderOpponentBoard();
            }, this.animationDuration);
          });
        }

        rowDiv.appendChild(cellDiv);
      }

      this.opponentRoot.appendChild(rowDiv);
    }
  }

  renderBoards() {
    this.renderPlayerBoard();
    this.renderOpponentBoard();
  }

  makeOpponentMove(attacker, defender) {
    let randomMove = defender.shootRandomCell();
    let x = randomMove.x;
    let y = randomMove.y;

    const attackResult = defender.gameboard.receiveAttack(x, y);
    const cellDiv = document.querySelector(
      `.opponent[data-x="${x}"][data-y="${y}"]`,
    );

    this.animateAttack(cellDiv);

    setTimeout(() => {
      if (attackResult === 'hit') {
        this.isPlayerTurn = false;
      } else if (attackResult === 'destroyed') {
        const adjacentCells = defender.gameboard.getShipAdjacentCells(x, y);

        for (let i = 0; i < adjacentCells.length; i += 1) {
          const adjacentX = adjacentCells[i].x;
          const adjacentY = adjacentCells[i].y;

          defender.gameboard.receiveAttack(adjacentX, adjacentY);
        }

        this.isPlayerTurn = false;
      } else if (attackResult === 'missed') {
        this.isPlayerTurn = true;
      }

      if (defender.gameboard.checkAllShipsSunk()) {
        this.isPlayerTurn = true;
        document.querySelector('#status').textContent = 'OPPONENT WINS!';
        this.renderOpponentBoard();
      }

      if (!this.isPlayerTurn) {
        this.makeOpponentMove(attacker, defender);
      }
      this.renderBoards();
    }, this.animationDuration);
  }

  animateAttack(cellDiv) {
    const missileFalling = [
      { top: 0 },
      { top: `${cellDiv.getBoundingClientRect().top + 5}px` },
    ];

    this.isPlayerTurn = false;

    const missileTiming = {
      duration: this.animationDuration,
      iterations: 1,
    };

    const svg = document.createElement('div');
    svg.innerHTML = _assets_missile_svg__WEBPACK_IMPORTED_MODULE_0__;
    svg.classList.add('missile');
    svg.style.position = 'absolute';
    svg.style.top = `-${cellDiv.getBoundingClientRect().height}px`;
    svg.style.left = `${cellDiv.getBoundingClientRect().left + 5}px`;
    svg.style.width = '30px';
    svg.style.height = '30px';
    svg.animate(missileFalling, missileTiming);
    document.body.appendChild(svg);

    this.renderBoards();
    cellDiv.classList.add('target');

    setTimeout(() => {
      cellDiv.classList.remove('target');
      svg.remove();
    }, this.animationDuration);
  }
}


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ "./src/scripts/player.js");
/* harmony import */ var _scripts_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/render.js */ "./src/scripts/render.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");




const player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__.Player();
const opponent = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__.Player();

const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

player.gameboard.randomPlacement(shipSizes);
opponent.gameboard.randomPlacement(shipSizes);

// Randomly decide which player moves first
const PlayerFirstTurn = Boolean(Math.round(Math.random()));

const boardRenderer = new _scripts_render_js__WEBPACK_IMPORTED_MODULE_1__.BoardRenderer(
  PlayerFirstTurn,
  document.querySelector('#playerBoard'),
  player,
  document.querySelector('#opponentBoard'),
  opponent,
);

boardRenderer.renderPlayerBoard();
boardRenderer.renderOpponentBoard();

const randomizeBtn = document.querySelector('#randomize');
randomizeBtn.addEventListener('click', () => {
  player.gameboard.randomPlacement(shipSizes);
  boardRenderer.renderPlayerBoard();
});

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
  randomizeBtn.style.display = 'none';
  startBtn.disabled = true;

  if (!boardRenderer.isPlayerTurn) {
    boardRenderer.makeOpponentMove(opponent, player);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVDO0FBQy9ELHdCQUF3Qix5Q0FBeUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDTztBQUN2Qjs7QUFFN0IsbUJBQW1CLHNEQUFNO0FBQ3pCLHFCQUFxQixzREFBTTs7QUFFM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQiw2REFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS45MS4wX3dlYnBhY2stY2xpQDUuMS40Xy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuOTEuMF93ZWJwYWNrLWNsaUA1LjEuNF8vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9hNWUxIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS45MS4wX3dlYnBhY2stY2xpQDUuMS40Xy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuOTEuMF93ZWJwYWNrLWNsaUA1LjEuNF8vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS45MS4wX3dlYnBhY2stY2xpQDUuMS40Xy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuOTEuMF93ZWJwYWNrLWNsaUA1LjEuNF8vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvbWlzc2lsZS5zdmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuOTEuMF93ZWJwYWNrLWNsaUA1LjEuNF8vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLXRleHQtY29sb3I6IGdyZXk7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmV5O1xuICAtLXNoaXAtY29sb3I6IGdyZXk7XG4gIC0tbWlzc2lsZS1jb2xvcjogIzAzMDEwNDtcbn1cblxuLmRhcmsge1xuICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgLS10ZXh0LWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tc2hpcC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLW1pc3NpbGUtY29sb3I6IHllbGxvdztcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG5cbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNlbGwge1xuICBtYXJnaW46IDJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2hvb3RhYmxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oaXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmhpdDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcblxuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubWlzc2VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWlzc2VkOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xufVxuXG4ubWlzc2lsZSB7XG4gIGZpbGw6IHZhcigtLW1pc3NpbGUtY29sb3IpO1xufVxuXG4udGFyZ2V0IHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlDQUF5QztFQUN6Qyx3QkFBd0I7O0VBRXhCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHFDQUFxQzs7RUFFckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7O0VBRXJCLFFBQVE7RUFDUix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCOztFQUVyQixRQUFRO0VBQ1IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS10ZXh0LWNvbG9yOiBncmV5O1xcbiAgLS1ib3JkZXItY29sb3I6IGdyZXk7XFxuICAtLXNoaXAtY29sb3I6IGdyZXk7XFxuICAtLW1pc3NpbGUtY29sb3I6ICMwMzAxMDQ7XFxufVxcblxcbi5kYXJrIHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgLS10ZXh0LWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1zaGlwLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLW1pc3NpbGUtY29sb3I6IHllbGxvdztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNlbGwge1xcbiAgbWFyZ2luOiAycHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uc2hvb3RhYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taXNzZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5taXNzaWxlIHtcXG4gIGZpbGw6IHZhcigtLW1pc3NpbGUtY29sb3IpO1xcbn1cXG5cXG4udGFyZ2V0IHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS45MS4wX3dlYnBhY2stY2xpQDUuMS40Xy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS45MS4wX3dlYnBhY2stY2xpQDUuMS40Xy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjkxLjBfd2VicGFjay1jbGlANS4xLjRfL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuOTEuMF93ZWJwYWNrLWNsaUA1LjEuNF8vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNS45NzkgMjUuOTc5XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMjUuNzQ0LDYuNjA0QzI2LjA4LDYuMjY3LDI2LjEwNyw2LjAyLDI1LjQ4LDYuMDJjLTAuNjI4LDAtNC41NTYsMC01LjA2OCwwIGMtMC41MTIsMC0wLjUzMywwLjAxNi0wLjgxNCwwLjI5N2MtMC4yODEsMC4yODEtNC42MDQsNC42MDctNC42MDQsNC42MDdzNS40MTMsMCw1Ljg3NywwYzAuNDY1LDAsMC42MzMtMC4wMzcsMC45MTItMC4zMTggQzIyLjA2MywxMC4zMjYsMjUuNDA4LDYuOTQsMjUuNzQ0LDYuNjA0elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOS4zNzUsMC4yMzVjMC4zMzYtMC4zMzUsMC41ODQtMC4zNjMsMC41ODQsMC4yNjRzMCw0LjU1NSwwLDUuMDY3UzE5Ljk0Myw2LjEsMTkuNjYyLDYuMzgxIHMtNC42MDcsNC42MDQtNC42MDcsNC42MDRzMC01LjQxNCwwLTUuODc4YzAtMC40NjQsMC4wMzctMC42MzIsMC4zMTgtMC45MTJDMTUuNjUzLDMuOTE2LDE5LjAzOSwwLjU3MSwxOS4zNzUsMC4yMzV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEuNjIxLDE2LjUzYy0yLjE2MSwyLjE2Mi0yLjE2Miw1LjY2Ni0wLjAwMSw3LjgyOGMyLjE2MSwyLjE2MSw1LjY2NywyLjE2MSw3LjgyOCwwIGMwLjkzLTAuOTMxLDYuMDAxLTYsNi45MzEtNi45M2MyLjE2MS0yLjE2MSwyLjE2MS01LjY2NiwwLTcuODI5Yy0yLjE2Mi0yLjE2Mi01LjY2Ni0yLjE2MS03LjgyOCwwIEM3LjYyMSwxMC41MzEsMi41NTEsMTUuNiwxLjYyMSwxNi41M3pcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcblxuY2xhc3MgQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnN0YXR1cyA9ICdlbXB0eSc7XG4gICAgdGhpcy5zaGlwID0gbnVsbDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCkge1xuICAgIHRoaXMuc2hpcCA9IHNoaXA7XG4gIH1cblxuICBpc0hpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICNzaGlwcyA9IFtdO1xuICAjY29vcmRpbmF0ZXMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih3ID0gMTAsIGggPSAxMCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKHcsIGgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUJvYXJkKHcgPSAxMCwgaCA9IDEwKSB7XG4gICAgdGhpcy4jY29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IGg7IHIgKz0gMSkge1xuICAgICAgdGhpcy4jY29vcmRpbmF0ZXNbcl0gPSBbXTtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdzsgYyArPSAxKSB7XG4gICAgICAgIHRoaXMuI2Nvb3JkaW5hdGVzW3JdW2NdID0gbmV3IENlbGwoYywgcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tBbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwQ29vcmRzKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBDb29yZHMubGVuZ3RoKTtcblxuICAgIGNvbnN0IHsgdywgaCB9ID0gdGhpcy5nZXRCb2FyZERpbWVuc2lvbnMoKTtcblxuICAgIGlmIChzaGlwQ29vcmRzLnNvbWUoKGNvb3JkcykgPT4gY29vcmRzLnggPj0gdyB8fCBjb29yZHMueSA+PSBoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBzaGlwQ29vcmRzXG4gICAgICAubWFwKChjKSA9PiB0aGlzLmdldFNoaXBBZGphY2VudENlbGxzKGMueCwgYy55KSlcbiAgICAgIC5mbGF0KCk7XG5cbiAgICBjb25zdCBvY2N1cGllZEFkamFjZW50Q2VsbHMgPSBhZGphY2VudENlbGxzLmZpbHRlcihcbiAgICAgIChjKSA9PiB0aGlzLmdldENlbGwoYy54LCBjLnkpLnN0YXR1cyAhPT0gJ2VtcHR5JyxcbiAgICApO1xuXG4gICAgaWYgKG9jY3VwaWVkQWRqYWNlbnRDZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXBDb29yZHNbaV07XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy4jY29vcmRpbmF0ZXNbY29vcmRzLnldW2Nvb3Jkcy54XTtcblxuICAgICAgaWYgKCFjZWxsLnNoaXApIHtcbiAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5zaGlwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gY2VsbHNbaV07XG4gICAgICBjZWxsLnNoaXAgPSBzaGlwO1xuICAgICAgY2VsbC5zdGF0dXMgPSAnb2NjdXBpZWQnO1xuICAgICAgdGhpcy4jc2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBjZWxsID0gdGhpcy4jY29vcmRpbmF0ZXNbeV1beF07XG5cbiAgICBpZiAoY2VsbC5zaGlwIHx8IGNlbGwuc3RhdHVzID09PSAnb2NjdXBpZWQnKSB7XG4gICAgICBjZWxsLnNoaXAuaGl0KCk7XG4gICAgICBjZWxsLnN0YXR1cyA9ICdoaXQnO1xuXG4gICAgICBpZiAoY2VsbC5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnZGVzdHJveWVkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2VsbC5zdGF0dXMgPT09ICdlbXB0eScpIHtcbiAgICAgIGNlbGwuc3RhdHVzID0gJ21pc3NlZCc7XG4gICAgICByZXR1cm4gJ21pc3NlZCc7XG4gICAgfVxuICB9XG5cbiAgcHJpbnRCb2FyZCgpIHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuI2Nvb3JkaW5hdGVzLmxlbmd0aDsgciArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLiNjb29yZGluYXRlc1tyXTtcbiAgICAgIGNvbnN0IGxpbmUgPSBbXTtcblxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCByb3cubGVuZ3RoOyBjICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvd1tjXTtcblxuICAgICAgICBpZiAoY2VsbC5zdGF0dXMgPT09ICdoaXQnKSB7XG4gICAgICAgICAgbGluZS5wdXNoKCdYJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5zdGF0dXMgPT09ICdvY2N1cGllZCcpIHtcbiAgICAgICAgICBsaW5lLnB1c2goY2VsbC5zaGlwLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5zdGF0dXMgPT09ICdtaXNzZWQnKSB7XG4gICAgICAgICAgbGluZS5wdXNoKCcuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5zdGF0dXMgPT09ICdlbXB0eScpIHtcbiAgICAgICAgICBsaW5lLnB1c2goJzAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cobGluZS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLiNjb29yZGluYXRlc1t5XVt4XTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgZ2V0U2hpcEFkamFjZW50Q2VsbHMoeCwgeSkge1xuICAgIGNvbnN0IHsgdywgaCB9ID0gdGhpcy5nZXRCb2FyZERpbWVuc2lvbnMoKTtcblxuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgY29uc3QgcXVldWUgPSBbeyB4LCB5IH1dO1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBbXTtcblxuICAgIGNvbnN0IGRlbHRhcyA9IFtcbiAgICAgIFstMSwgLTFdLFxuICAgICAgWzAsIC0xXSxcbiAgICAgIFsxLCAtMV0sXG4gICAgICBbMSwgMF0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMV0sXG4gICAgICBbLTEsIDFdLFxuICAgICAgWy0xLCAwXSxcbiAgICBdO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDb29yZHMgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgdmlzaXRlZC5wdXNoKGN1cnJlbnRDb29yZHMpO1xuXG4gICAgICBjb25zdCBjdXJyZW50WCA9ICtjdXJyZW50Q29vcmRzLng7XG4gICAgICBjb25zdCBjdXJyZW50WSA9ICtjdXJyZW50Q29vcmRzLnk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGFzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRYID0gY3VycmVudFggKyBkZWx0YXNbaV1bMF07XG4gICAgICAgIGNvbnN0IGNoYW5nZWRZID0gY3VycmVudFkgKyBkZWx0YXNbaV1bMV07XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNoYW5nZWRYID49IDAgJiZcbiAgICAgICAgICBjaGFuZ2VkWCA8PSB3IC0gMSAmJlxuICAgICAgICAgIGNoYW5nZWRZID49IDAgJiZcbiAgICAgICAgICBjaGFuZ2VkWSA8PSBoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkQ29vcmRzID0geyB4OiBjaGFuZ2VkWCwgeTogY2hhbmdlZFkgfTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHZpc2l0ZWQuZmlsdGVyKChjKSA9PiArYy54ID09PSBjaGFuZ2VkWCAmJiArYy55ID09PSBjaGFuZ2VkWSlcbiAgICAgICAgICAgICAgLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5nZXRDZWxsKGNoYW5nZWRYLCBjaGFuZ2VkWSkuc3RhdHVzO1xuXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2hpdCcgfHwgc3RhdHVzID09PSAnb2NjdXBpZWQnKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGNoYW5nZWRDb29yZHMpO1xuICAgICAgICAgICAgY2VsbHMucHVzaChjaGFuZ2VkQ29vcmRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbHMucHVzaChjaGFuZ2VkQ29vcmRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2VsbHM7XG4gIH1cblxuICBnZXRCb2FyZERpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHsgdzogdGhpcy4jY29vcmRpbmF0ZXNbMF0ubGVuZ3RoLCBoOiB0aGlzLiNjb29yZGluYXRlcy5sZW5ndGggfTtcbiAgfVxuXG4gIGdldFNob290YWJsZUNlbGxzKCkge1xuICAgIHJldHVybiB0aGlzLiNjb29yZGluYXRlc1xuICAgICAgLmZsYXQoKVxuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGNlbGwpID0+XG4gICAgICAgICAgY2VsbC5zdGF0dXMgIT09ICdoaXQnICYmXG4gICAgICAgICAgY2VsbC5zdGF0dXMgIT09ICdtaXNzZWQnICYmXG4gICAgICAgICAgY2VsbC5zdGF0dXMgIT09ICdkZXN0cm95ZWQnLFxuICAgICAgKTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlbWVudChzaGlwU2l6ZXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemVCb2FyZCgpO1xuICAgIGNvbnN0IHsgdywgaCB9ID0gdGhpcy5nZXRCb2FyZERpbWVuc2lvbnMoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHcpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGgpO1xuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGZvciAobGV0IHggPSBzdGFydENvbDsgeCA8IHN0YXJ0Q29sICsgc2hpcFNpemVzW2ldOyB4KyspIHtcbiAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHsgeDogeCwgeTogc3RhcnRSb3cgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGZvciAobGV0IHkgPSBzdGFydFJvdzsgeSA8IHN0YXJ0Um93ICsgc2hpcFNpemVzW2ldOyB5KyspIHtcbiAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHsgeDogc3RhcnRDb2wsIHk6IHkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxhY2VTaGlwKGNvb3JkcykpIHtcbiAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIHNob290UmFuZG9tQ2VsbCgpIHtcbiAgICBjb25zdCBzaG9vdGFibGVDZWxscyA9IHRoaXMuZ2FtZWJvYXJkLmdldFNob290YWJsZUNlbGxzKCk7XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNob290YWJsZUNlbGxzLmxlbmd0aCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBzaG9vdGFibGVDZWxsc1tyYW5kb21JbmRleF07XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH1cbn1cbiIsImltcG9ydCBNaXNzaWxlSWNvbiBmcm9tICcuLi9hc3NldHMvbWlzc2lsZS5zdmcnO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRSZW5kZXJlciB7XG4gIGlzUGxheWVyVHVybjtcbiAgcGxheWVyO1xuICBvcHBvbmVudDtcbiAgYW5pbWF0aW9uRHVyYXRpb24gPSA3NTA7XG5cbiAgY29uc3RydWN0b3IoaXNQbGF5ZXJUdXJuLCBwbGF5ZXJSb290LCBwbGF5ZXIsIG9wcG9uZW50Um9vdCwgb3Bwb25lbnQpIHtcbiAgICB0aGlzLmlzUGxheWVyVHVybiA9IGlzUGxheWVyVHVybjtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLnBsYXllclJvb3QgPSBwbGF5ZXJSb290O1xuICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudDtcbiAgICB0aGlzLm9wcG9uZW50Um9vdCA9IG9wcG9uZW50Um9vdDtcbiAgfVxuXG4gIHJlbmRlclBsYXllckJvYXJkKCkge1xuICAgIHRoaXMucGxheWVyUm9vdC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGxEaXYuZGF0YXNldC54ID0gajtcbiAgICAgICAgY2VsbERpdi5kYXRhc2V0LnkgPSBpO1xuICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50Jyk7XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMucGxheWVyLmdhbWVib2FyZC5nZXRDZWxsKGosIGkpO1xuICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgaWYgKGNlbGwuc3RhdHVzID09PSAnb2NjdXBpZWQnKSB7XG4gICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKGNlbGwuc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjZWxsRGl2KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wbGF5ZXJSb290LmFwcGVuZENoaWxkKHJvd0Rpdik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyT3Bwb25lbnRCb2FyZCgpIHtcbiAgICB0aGlzLm9wcG9uZW50Um9vdC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGxEaXYuZGF0YXNldC54ID0gajtcbiAgICAgICAgY2VsbERpdi5kYXRhc2V0LnkgPSBpO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5nZXRDZWxsKGosIGkpO1xuICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKGNlbGwuc3RhdHVzKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc1BsYXllclR1cm4gJiZcbiAgICAgICAgICAoY2VsbC5zdGF0dXMgPT09ICdvY2N1cGllZCcgfHwgY2VsbC5zdGF0dXMgPT09ICdlbXB0eScpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChjZWxsLnN0YXR1cyAhPT0gJ2hpdCcgJiYgY2VsbC5zdGF0dXMgIT09ICdtaXNzZWQnKSB7XG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ3Nob290YWJsZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNlbGxEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gY2VsbERpdi5kYXRhc2V0Lng7XG4gICAgICAgICAgICBjb25zdCB5ID0gY2VsbERpdi5kYXRhc2V0Lnk7XG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoY2VsbC5zdGF0dXMpO1xuXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBdHRhY2soY2VsbERpdik7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnZGVzdHJveWVkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPVxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuZ2V0U2hpcEFkamFjZW50Q2VsbHMoeCwgeSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkamFjZW50Q2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFkamFjZW50WCA9IGFkamFjZW50Q2VsbHNbaV0ueDtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFkamFjZW50WSA9IGFkamFjZW50Q2VsbHNbaV0ueTtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhZGphY2VudFgsIGFkamFjZW50WSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWVyVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWFrZU9wcG9uZW50TW92ZSh0aGlzLm9wcG9uZW50LCB0aGlzLnBsYXllcik7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgYXR0YWNrUmVzdWx0ID09PSAnaGl0JyB8fFxuICAgICAgICAgICAgICAgIGF0dGFja1Jlc3VsdCA9PT0gJ2Rlc3Ryb3llZCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXllclR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzJykudGV4dENvbnRlbnQgPSAnWU9VIFdJTiEnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJPcHBvbmVudEJvYXJkKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjZWxsRGl2KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHBvbmVudFJvb3QuYXBwZW5kQ2hpbGQocm93RGl2KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJCb2FyZHMoKSB7XG4gICAgdGhpcy5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgIHRoaXMucmVuZGVyT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgbWFrZU9wcG9uZW50TW92ZShhdHRhY2tlciwgZGVmZW5kZXIpIHtcbiAgICBsZXQgcmFuZG9tTW92ZSA9IGRlZmVuZGVyLnNob290UmFuZG9tQ2VsbCgpO1xuICAgIGxldCB4ID0gcmFuZG9tTW92ZS54O1xuICAgIGxldCB5ID0gcmFuZG9tTW92ZS55O1xuXG4gICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gZGVmZW5kZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgY29uc3QgY2VsbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLm9wcG9uZW50W2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWAsXG4gICAgKTtcblxuICAgIHRoaXMuYW5pbWF0ZUF0dGFjayhjZWxsRGl2KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgdGhpcy5pc1BsYXllclR1cm4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnZGVzdHJveWVkJykge1xuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gZGVmZW5kZXIuZ2FtZWJvYXJkLmdldFNoaXBBZGphY2VudENlbGxzKHgsIHkpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRqYWNlbnRDZWxscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGFkamFjZW50WCA9IGFkamFjZW50Q2VsbHNbaV0ueDtcbiAgICAgICAgICBjb25zdCBhZGphY2VudFkgPSBhZGphY2VudENlbGxzW2ldLnk7XG5cbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhZGphY2VudFgsIGFkamFjZW50WSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUGxheWVyVHVybiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdtaXNzZWQnKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlZmVuZGVyLmdhbWVib2FyZC5jaGVja0FsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXR1cycpLnRleHRDb250ZW50ID0gJ09QUE9ORU5UIFdJTlMhJztcbiAgICAgICAgdGhpcy5yZW5kZXJPcHBvbmVudEJvYXJkKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pc1BsYXllclR1cm4pIHtcbiAgICAgICAgdGhpcy5tYWtlT3Bwb25lbnRNb3ZlKGF0dGFja2VyLCBkZWZlbmRlcik7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlckJvYXJkcygpO1xuICAgIH0sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICB9XG5cbiAgYW5pbWF0ZUF0dGFjayhjZWxsRGl2KSB7XG4gICAgY29uc3QgbWlzc2lsZUZhbGxpbmcgPSBbXG4gICAgICB7IHRvcDogMCB9LFxuICAgICAgeyB0b3A6IGAke2NlbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgNX1weGAgfSxcbiAgICBdO1xuXG4gICAgdGhpcy5pc1BsYXllclR1cm4gPSBmYWxzZTtcblxuICAgIGNvbnN0IG1pc3NpbGVUaW1pbmcgPSB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGl0ZXJhdGlvbnM6IDEsXG4gICAgfTtcblxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN2Zy5pbm5lckhUTUwgPSBNaXNzaWxlSWNvbjtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnbWlzc2lsZScpO1xuICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgc3ZnLnN0eWxlLnRvcCA9IGAtJHtjZWxsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodH1weGA7XG4gICAgc3ZnLnN0eWxlLmxlZnQgPSBgJHtjZWxsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyA1fXB4YDtcbiAgICBzdmcuc3R5bGUud2lkdGggPSAnMzBweCc7XG4gICAgc3ZnLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBzdmcuYW5pbWF0ZShtaXNzaWxlRmFsbGluZywgbWlzc2lsZVRpbWluZyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgdGhpcy5yZW5kZXJCb2FyZHMoKTtcbiAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjZWxsRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xuICAgICAgc3ZnLnJlbW92ZSgpO1xuICAgIH0sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9zY3JpcHRzL3BsYXllci5qcyc7XG5pbXBvcnQgeyBCb2FyZFJlbmRlcmVyIH0gZnJvbSAnLi9zY3JpcHRzL3JlbmRlci5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5jb25zdCBvcHBvbmVudCA9IG5ldyBQbGF5ZXIoKTtcblxuY29uc3Qgc2hpcFNpemVzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdO1xuXG5wbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlbWVudChzaGlwU2l6ZXMpO1xub3Bwb25lbnQuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlbWVudChzaGlwU2l6ZXMpO1xuXG4vLyBSYW5kb21seSBkZWNpZGUgd2hpY2ggcGxheWVyIG1vdmVzIGZpcnN0XG5jb25zdCBQbGF5ZXJGaXJzdFR1cm4gPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuXG5jb25zdCBib2FyZFJlbmRlcmVyID0gbmV3IEJvYXJkUmVuZGVyZXIoXG4gIFBsYXllckZpcnN0VHVybixcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJyksXG4gIHBsYXllcixcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wcG9uZW50Qm9hcmQnKSxcbiAgb3Bwb25lbnQsXG4pO1xuXG5ib2FyZFJlbmRlcmVyLnJlbmRlclBsYXllckJvYXJkKCk7XG5ib2FyZFJlbmRlcmVyLnJlbmRlck9wcG9uZW50Qm9hcmQoKTtcblxuY29uc3QgcmFuZG9taXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWl6ZScpO1xucmFuZG9taXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlbWVudChzaGlwU2l6ZXMpO1xuICBib2FyZFJlbmRlcmVyLnJlbmRlclBsYXllckJvYXJkKCk7XG59KTtcblxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByYW5kb21pemVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGlmICghYm9hcmRSZW5kZXJlci5pc1BsYXllclR1cm4pIHtcbiAgICBib2FyZFJlbmRlcmVyLm1ha2VPcHBvbmVudE1vdmUob3Bwb25lbnQsIHBsYXllcik7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9