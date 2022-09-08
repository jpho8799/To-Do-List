/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n\\n    margin: 0;\\n    padding: 0;\\n\\n}\\n\\n:root{\\n    --boxShadow: 0 3px 10px rgb(0 0 0 / 0.2);\\n    --ucla-blue: #0a0c21f8;\\n    --very-darkblue: hsla(232, 52%, 15%, 0.935);\\n    --dark-desaturatedblue: hsl(244, 38%, 16%);\\n    --soft-violet: hsla(277, 93%, 46%, 0.956);\\n    --white: hsl(0, 0%, 100%);\\n    --slightly-transparentgrey: rgba(147, 144, 144, 0.875);\\n    --slightly-transparentwhite: hsla(0, 0%, 100%, 0.6);\\n\\n\\n}\\nhtml {\\n    height: 100vh;\\n    overflow: hidden;\\n    font-family: 'Inter', sans-serif;\\n    font-family: 'Lexend Deca', sans-serif;\\n    color: var(--white)\\n\\n}\\nbody{\\n    height: 100%;\\n    width: 100vw;\\n    display: grid;\\n    grid-template-areas: \\\"header header\\\"\\n                         \\\"content content\\\"\\n                         \\\"footer footer\\\";\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 4rem 50rem 3rem;\\n    \\n\\n}\\n\\nheader{\\n    display:flex;\\n    background-color: var(--ucla-blue);\\n    grid-area: header;\\n    box-shadow: var(--boxShadow);\\n}\\n\\nmain {\\n    display: flex;\\n    position: relative;\\n    background-color: var(--very-darkblue);\\n    grid-area: content;\\n\\n}\\n\\nfooter {\\n    background-color: var(--ucla-blue);\\n    grid-area: footer;\\n}\\n\\nnav {\\n    position: absolute;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--ucla-blue);\\n    height: 100%;\\n    width: 0;\\n    overflow-y: scroll;\\n    z-index: 50;\\n}\\n\\nh4 {\\n    color:var(--slightly-transparentgrey)\\n}\\n\\n.nav___content {\\n    margin-top: 3rem;\\n    margin-bottom: 3rem;\\n    color: var(--slightly-transparentgrey);\\n}\\nli {\\n    list-style-type: none;\\n    margin: 1.5rem 0 1.5rem 2rem;\\n}\\n\\n\\n\\n.plus___wrapper {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 2rem;\\n    width: 3rem;\\n    border-radius: 25px;\\n    background-color: var(--soft-violet);\\n\\n    position: absolute;\\n    right: 10px;\\n    top: 20px;\\n    \\n    \\n}\\n\\n.close___wrapper{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 2rem;\\n    width: 2rem;\\n    border-radius: 50px;\\n    background-color: var(--soft-violet);\\n}\\n\\n.navbar__wrapper {\\n    padding: 1rem;\\n    margin: 0.5rem;\\n    justify-self: end;\\n\\n}\\n\\n.navbar---toggleLtoR {\\n    animation: navBar-left-to-right 500ms linear forwards;\\n\\n}\\n\\n.navbar---toggleRtoL {\\n    animation: navBar-right-to-left 500ms linear forwards;\\n}\\n\\n.background---blur {\\n    filter: blur(5px);\\n\\n}\\n.flex---wrapper{\\n   display:flex;\\n   flex-direction: column;\\n}\\n\\n.invalid {\\n    border-color: red;\\n}\\n@keyframes navBar-left-to-right {\\n    0% {\\n        width: 0;\\n    }\\n\\n    33% {\\n        width: 8rem;\\n    }\\n\\n    66% {\\n        width: 15rem;\\n    }\\n\\n    100% {\\n        width: 20rem;\\n    }\\n}\\n\\n@keyframes navBar-right-to-left {\\n    0%{\\n        width: 20rem;\\n    }\\n\\n    33% {\\n        width: 15rem;\\n    }\\n\\n    66% {\\n        width: 8rem;\\n    }\\n\\n    100%{\\n        width: 0rem;\\n    }\\n}\\n\\n.newform {\\n    margin-left: auto;\\n    margin-right: auto;\\n    left: 0;\\n    right: 0;\\n\\n    display: none;\\n    background-color: var(--dark-desaturatedblue);\\n    justify-self: center;\\n    align-self:center;\\n    width: 80%;\\n\\n\\n    z-index: 100;\\n    border-radius: 1rem;\\n    box-shadow: var(--boxShadow);\\n    position: absolute;\\n    top: 10rem;\\n\\n    \\n}\\n\\nform {\\n    width: 100%;\\n    height: 100%;\\n\\n}\\n\\n.text-formatting{\\n    text-align: start;\\n    margin: 1em 0 1em 1.5rem;\\n}\\n\\n.form___content{\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nlabel {\\n    font-size: 0.8rem;\\n}\\n\\ninput, select {\\n    border-style: solid;\\n    border-width: 1px;\\n    border-radius: 5px;\\n    width: 90%;\\n    height: 2rem;\\n    background-color: transparent;\\n    border-color: rgba(147, 144, 144, 0.875);\\n    margin-top: 0.5rem;\\n    color: var(--slightly-transparentgrey)\\n    \\n}\\n\\n.button___container {\\n    margin: 1.5rem;\\n    justify-content: space-between;\\n}\\n\\nbutton {\\n        display: inline-block;\\n        border: none;\\n        padding: 0.5rem 0.5rem;\\n        margin: 0;\\n        text-decoration: none;\\n        background: var(--soft-violet);\\n        color: #ffffff;\\n        font-size: 0.8rem;\\n        width: 48%;\\n\\n        border-radius: 20px;\\n\\n        text-align: center;\\n        -webkit-appearance: none;\\n        -moz-appearance: none;\\n}\\n    \\n.create {\\n    color: var(--white);\\n    background-color: var(--soft-violet);\\n}\\n\\n.cancel {\\n    color: var(--soft-violet);\\n    background-color: var(--white);\\n}\\n\\n@media only screen and (min-width: 365px) {\\n    .newform{\\n        width: 20rem;\\n    }\\n}\\n.main___content{\\n    width: 100%;\\n    padding-left: 2.5rem;\\n    padding-right: 2.5rem;\\n    padding-bottom: 4rem;\\n    overflow-x: scroll;\\n    overflow-y: scroll;\\n    \\n}\\n.tasks___body{\\n    width: 100%;\\n    padding-top: 5rem;\\n    display: grid;\\n    grid-template-columns: 18rem 18rem 18rem;\\n    column-gap: 1.5rem;\\n    \\n\\n}\\n\\n.task___list {\\n    margin-top: 1rem;\\n    height: 100%;\\n    overflow-y: scroll;\\n    display: grid;\\n    grid-template-rows: 1fr;\\n    row-gap: 1rem;\\n}\\n.task___item {\\n    width: 18rem;\\n    height: 10rem;\\n    background-color: var(--ucla-blue);\\n    border-radius: 1rem;\\n    box-shadow: var(--boxShadow);\\n    display: flex;\\n    flex-direction: column;\\n    position: static;\\n}\\n\\n.taskTitle {\\n    margin: 1rem;\\n    font-size: 1rem;\\n\\n}\\n\\n.taskDueDate, .taskPriorty {\\n    margin-left: 1rem;\\n    font-size: 0.75rem;\\n    color: var(--slightly-transparentgrey);\\n}\\n\\n.taskButtons {\\n\\n    display: flex;\\n    width: 3rem;\\n    justify-content: space-between;\\n    color: var(--slightly-transparentwhite);\\n    position: relative;\\n    left: 14rem;\\n    top: 3rem;\\n\\n}\\n\\n.main---toggleLtoR {\\n    animation: main-left-to-right 500ms linear forwards;\\n\\n}\\n.main---toggleRtoL{\\n    animation: main-right-to-left 500ms linear forwards;\\n}\\n\\n@keyframes main-left-to-right {\\n    0% {\\n        padding-left: 2.5rem;\\n    }\\n\\n    33% {\\n        padding-left: 9.5rem;\\n    }\\n\\n    66% {\\n        padding-left: 16.5rem;\\n    }\\n\\n    100% {\\n        padding-left: 22.5rem;\\n    }\\n}\\n\\n@keyframes main-right-to-left {\\n    0%{\\n        padding-left: 22.5rem;\\n    }\\n\\n    33% {\\n        padding-left: 16.5rem;\\n    }\\n\\n    66% {\\n        padding-left: 9.5rem;\\n    }\\n\\n    100%{\\n        padding-left: 2.5rem;\\n    }\\n}\\n\\n.content---blur{\\n   filter: blur(1rem);\\n}\\nhtml {\\n    visibility: visible;\\n    opacity: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://to-do-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Form */ \"./src/modules/Form.js\");\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/NavBar */ \"./src/modules/NavBar.js\");\n\n\n\n\n\n\n\n\n\nconst mainContent = document.querySelector('.main___content')\nconst navbarIcon = document.querySelector('#navIcon');\nconst newprojectIcon = document.querySelector(\"#new-project\");\nconst projectForm = document.getElementById('projectForm');\nconst taskForm = document.getElementById('taskForm');\nconst newtaskIcon = document.querySelector('#new-task');\nconst cancelButton = document.querySelectorAll('.cancel');\nconst deleteTask = document.querySelectorAll('.deleteTask');\nconst projectFormButton = document.querySelector('#new-projectButton');\nconst taskFormButton = document.querySelector('#new-taskButton');\n\n\nnavbarIcon.addEventListener('click', ()=>{\n    const navBar = document.querySelector('nav');\n    \n    if(navBar.classList.contains('navbar---toggleLtoR')){\n        navBar.classList.remove('navbar---toggleLtoR');\n        navBar.classList.add('navbar---toggleRtoL');\n\n        mainContent.classList.remove('main---toggleLtoR');\n        mainContent.classList.add('main---toggleRtoL')\n    }else{\n        navBar.classList.remove('navbar---toggleRtoL');\n        navBar.classList.add('navbar---toggleLtoR');\n\n        mainContent.classList.remove('main---toggleRtoL');\n        mainContent.classList.add('main---toggleLtoR');\n    }\n});\n\nnewprojectIcon.addEventListener('click', ()=>{\n    const taskFormStyle = window.getComputedStyle(taskForm).display;\n    if(taskFormStyle == 'none'){\n        projectForm.style.display = 'flex';\n        mainContent.classList.add('content---blur');\n    }\n\n});\n\nnewtaskIcon.addEventListener('click', ()=>{\n    const projectFormStyle = window.getComputedStyle(projectForm).display;\n    if(projectFormStyle == 'none'){\n        taskForm.style.display = 'flex';\n        mainContent.classList.add('content---blur');\n    }\n\n\n})\n\nprojectFormButton.addEventListener('click', ()=>{\n    let projectForm = document.querySelector('.newproject___form');\n    if((0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.validateForm)(projectForm)){\n        const projectTitle = document.getElementById('project-title').value;\n        //code for adding new project\n        let newProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectTitle);\n        _modules_Storage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addProject(newProject);\n        (0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.updateTaskForm)(newProject);\n        (0,_modules_NavBar__WEBPACK_IMPORTED_MODULE_5__.updateNavBar)(newProject);\n        (0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.clearForm)(projectForm);\n        (0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.closeForm)(projectForm);\n        mainContent.classList.remove('content---blur');\n    }\n\n})\n\ntaskFormButton.addEventListener('click', ()=>{\n    let taskForm = document.querySelector('.newtask___form');\n    if((0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.validateForm)(taskForm)){\n\n        (0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.clearForm)(taskForm);\n        (0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.closeForm)(taskForm);\n        mainContent.classList.remove('content---blur');\n    };\n} )\n\ncancelButton.forEach(button =>{\n    button.addEventListener('click', ()=>{\n        window.location.href = window.location.href;\n        return false;\n    })\n})\n\ndeleteTask.forEach(button =>{\n    button.addEventListener('click', ()=>{\n        //add functionality to delete task from storage\n        let taskContainer = button.parentElement.parentElement;\n        taskContainer.remove();\n    })\n})\n\nwindow.onload = ()=>{\n    _modules_Storage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getTodoList();\n    (0,_modules_Form__WEBPACK_IMPORTED_MODULE_3__.initTaskForm)();\n    (0,_modules_NavBar__WEBPACK_IMPORTED_MODULE_5__.initNavBar)();\n    \n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Form.js":
/*!*****************************!*\
  !*** ./src/modules/Form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"initTaskForm\": () => (/* binding */ initTaskForm),\n/* harmony export */   \"updateTaskForm\": () => (/* binding */ updateTaskForm),\n/* harmony export */   \"validateForm\": () => (/* binding */ validateForm)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\n\n\n\n\n\n\nfunction validateForm(form){\n    let formComplete = true;\n    Array.from(form.elements).forEach(element=>{\n        if(element.tagName == 'INPUT' || element.tagName == 'SELECT'){\n            if(element.value <= 0){\n                formComplete = false;\n                invalidInput(element);\n                \n            }else{\n                validInput(element);\n            }\n         }\n        \n    })\n\n    return formComplete;\n  \n}\n\n\nfunction updateTaskForm(newProject){\n    const projectSelection = document.getElementById('project-list');\n    const projectTitle = newProject.getTitle();\n    const newOption = document.createElement('option');\n    newOption.textContent = projectTitle;\n    newOption.value = newProject.getId();\n    projectSelection.appendChild(newOption);\n    \n\n}\n\nfunction initTaskForm(){\n    const projectSelection = document.getElementById('project-list');\n    let toDoList = _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTodoList();\n    let projectList = toDoList.getProjects();\n    \n    \n    projectList.forEach(project =>{\n        const projectTitle = project.getTitle();\n        const newOption = document.createElement('option');\n        newOption.textContent = projectTitle;\n        newOption.value = project.getId();\n        projectSelection.appendChild(newOption);\n\n    })\n    \n}\n\nfunction invalidInput(element){\n    element.classList.add('invalid');\n}\n\nfunction validInput(element){\n    element.classList.remove('invalid');\n}\n\nfunction clearForm(form){\n    Array.from(form.elements).forEach(element =>{\n        element.value = '';\n    });\n}\n\nfunction closeForm(form){\n    form.parentElement.style.display = 'none';\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Form.js?");

/***/ }),

/***/ "./src/modules/MainContent.js":
/*!************************************!*\
  !*** ./src/modules/MainContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject)\n/* harmony export */ });\nfunction getProjectList(projectId){\n    let toDoList = Storage.getTodoList();\n    let projectList = toDoList.getProjects();\n    let project = projectList.find(project =>project.getId()== projectId);\n    return project;\n}\n\nfunction toDo(projectId){\n    let project = getProjectList(projectId);\n    let taskList = project.getTasks();\n    return todoSection = taskList.filter(task =>{\n        task.getStatus === 'To-Do';\n    })\n    \n\n}\n\nfunction inProgress(projectId){\n    let project = getProjectList(projectId);\n    let taskList = project.getTasks();\n    return todoSection = taskList.filter(task =>{\n        task.getStatus === 'In-Progress';\n    })\n}\n\nfunction completed(projectId){\n    let project = getProjectList(projectId);\n    let taskList = project.getTasks();\n    return todoSection = taskList.filter(task =>{\n        task.getStatus === 'Completed';\n    })\n}\n\nfunction createTaskElement(task){\n    let taskItem = document.createElement('section');\n    taskItem.setAttribute('class', 'task___list');\n    taskItem.innerHTML = `\n    <div class=\"task___item\">\n        <p class = 'taskTitle'>${task.getTitle()}</p>\n        <p class = 'taskDueDate'>Due Date: ${task.getdueDate()}</p>\n        <p class = 'taskPriorty'>Priority: ${task.getPriority()}</p>\n        <div class=\"taskButtons\">\n            <div class=\"editTask\">\n            <i class = \"fa-solid fa-pen-to-square\"></i>\n            </div>\n            <div class=\"deleteTask\">\n            <i class = \"fa-solid fa-trash-can\"></i>\n            </div>\n        </div>\n    </div>\n\n    `\n\n    return taskItem;\n}\n\nfunction editTaskItem(taskElement, task){\n\n}\n\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\nfunction clearProject(){\n    const toDo = document.getElementsByTagName('to-do');\n    const inProgress = document.getElementsByTagName('in-progress');\n    const completed = document.getElementsByTagName('completed');\n\n    removeAllChildNodes(toDo);\n    removeAllChildNodes(inProgress);\n    removeAllChildNodes(completed);\n}\n\nfunction displayProject(projectId){\n    const toDoSection = document.getElementsByTagName('to-do');\n    const inProgressSection = document.getElementsByTagName('in-progress');\n    const completedSection = document.getElementsByTagName('completed');\n\n    clearProject();\n\n    let toDoList = toDo(projectId);\n    let inProgressList = inProgress(projectId);\n    let completeList = completed(projectId);\n\n    displaySection(toDoSection, toDoList);\n    displaySection(inProgressSection, inProgressList);\n    displaySection(completedSection, completeList);\n\n\n\n}\n\nfunction displaySection(section, sectionList){\n    sectionList.forEach(task =>{\n        let taskElement = createTaskElement(task);\n        section.appendChild(taskElement);\n    })\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/MainContent.js?");

/***/ }),

/***/ "./src/modules/NavBar.js":
/*!*******************************!*\
  !*** ./src/modules/NavBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initNavBar\": () => (/* binding */ initNavBar),\n/* harmony export */   \"updateNavBar\": () => (/* binding */ updateNavBar)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _MainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContent */ \"./src/modules/MainContent.js\");\n\n\n\n\nfunction initNavBar(){\n\n        const navList = document.querySelector('.nav___list');\n        let toDoList = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList();\n        let projectList = toDoList.getProjects();\n\n        projectList.forEach(project=>{\n            const projectTitle = project.getTitle();\n            const projectId = project.getId();\n            const liElement = document.createElement('li');\n            liElement.textContent = projectTitle;\n            liElement.setAttribute('data-UUID', projectId);\n            liElement.setAttribute('class', 'navItem');\n            liElement.addEventListener('click', ()=>{\n                \n                (0,_MainContent__WEBPACK_IMPORTED_MODULE_1__.displayProject)(liElement.data-UUID);\n            });\n            navList.appendChild(liElement);\n        })\n}\n\nfunction updateNavBar(newProject){\n    const navList = document.querySelector('.nav___list');\n    const projectTitle = newProject.getTitle();\n    const projectId = newProject.getId();\n    const liElement = document.createElement('li');\n    liElement.textContent = projectTitle;\n    liElement.setAttribute('data-UUID', projectId);\n    liElement.setAttribute('class', 'navItem');\n\n    let dataId = liElement.getAttribute('data-UUID')\n    navList.appendChild(liElement);\n    liElement.addEventListener('click', ()=>{\n        (0,_MainContent__WEBPACK_IMPORTED_MODULE_1__.displayProject)(dataId);\n    }\n        \n    )\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/NavBar.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/modules/Form.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n\n\n\nclass Project {\n    constructor(title){\n        this.uuidv4 = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        this.title = title;\n        this.tasks = [];\n\n    }\n\n    getId(){\n        return this.uuidv4.toString();\n    }\n    setTitle(title){\n        this.title = title;\n\n    }\n    getTitle(){\n        return this.title;\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks\n      }\n\n    getTasks(){\n        return this.tasks;\n    }\n\n    getTask(taskId){\n        return this.tasks.find(task =>{\n            task.getId() == taskId;\n        })\n    }\n\n    addTask(newTask){\n        if(this.tasks.find((task)=> task.getId == newTask.getId)) return;\n        this.tasks.push(newTask);\n    }\n\n    editTask(editedTask){\n        this.tasks.find(task =>{\n            if(task.getId == editedTask.getId){\n                task.setTitle(editedTask.getTitle());\n                task.setdueDate(editedTask.getdueDate());\n                task.setPriority(editedTask.getPriority());\n                task.setStatus(editedTask.getStatus());\n            }\n        })\n    }\n    deletetask(taskId){\n        this.tasks = this.tasks.filter(task => task.getId !== taskId);\n    }\n\n    \n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\n\n\n\n\n\nclass Storage {\n    static saveTodoList(data){\n        localStorage.setItem('storageId', JSON.stringify(data));\n    }\n\n    static getTodoList(){\n        const todoList = Object.assign(\n            new _TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n            JSON.parse(localStorage.getItem('storageId'))\n        )\n\n        todoList.setProjects(\n            todoList\n            .getProjects()\n            .map((project)=> Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project))\n        )\n\n        todoList.getProjects()\n        .forEach(project=>{\n            project.setTasks(\n                project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task))\n            )\n        })\n\n        return todoList;\n    }\n\n    static addProject(project){\n        const todoList = Storage.getTodoList()\n        todoList.addProject(project)\n        Storage.saveTodoList(todoList);\n    }\n\n    static deleteProject(projectId){\n        const todoList = Storage.getTodoList();\n        todoList.deleteProject(projectId);\n        Storage.saveTodoList(todoList);\n    }\n\n\n  static addTask(projectId, task) {\n    const todoList = Storage.getTodoList()\n    todoList.getProject(projectId).addTask(task)\n    Storage.saveTodoList(todoList)\n  }\n    \n  static deleteTask(projectId, taskId) {\n    const todoList = Storage.getTodoList()\n    todoList.getProject(projectId).deleteTask(taskId)\n    Storage.saveTodoList(todoList)\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\nclass Task {\n    constructor(title, dueDate = 'No Date', priority = 'low', status = 'to-do'){\n        this.uuidv4 = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        this.title = title; \n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.status = status;\n\n\n    }\n\n    getId(){\n        return this.uuidv4.toString();\n    }\n    setTitle(title){\n        this.title = title;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    getdueDate(){\n        return this.dueDate;\n    }\n\n    setdueDate(dueDate){\n        this.dueDate = dueDate;\n    }\n\n    getPriority(){\n        return this.priority;\n    }\n\n    setPriority(priority){\n        this.priority = priority;\n    }\n\n    setStatus(status){\n        this.status = status;\n    }\n\n    getStatus(){\n        return this.status;\n    }\n\n    getDateFormatted() {\n        const day = this.dueDate.split('/')[0]\n        const month = this.dueDate.split('/')[1]\n        const year = this.dueDate.split('/')[2]\n        return `${month}/${day}/${year}`\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodDoList)\n/* harmony export */ });\n\n\nclass TodDoList{\n    constructor(){\n        this.projects = [];\n\n    }\n\n    setProjects(projects){\n        this.projects = projects;\n    }\n\n    getProjects(){\n        return this.projects;\n\n    }\n\n    getProject(projectId){\n        return this.projects.find((project)=> project.getId() == projectId)\n    }\n\n    contains(projectId){\n        return this.projects.some((project)=>project.getId() == projectId);\n    }\n\n    addProject(newProject){\n        this.projects.push(newProject);\n    }\n\n    deleteProject(projectId){\n        const projectToDelete = this.projects.find(\n            (project) => project.getId() === projectId\n          )\n          this.projects.splice(this.projects.indexOf(projectToDelete), 1)\n    }\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/TodoList.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;