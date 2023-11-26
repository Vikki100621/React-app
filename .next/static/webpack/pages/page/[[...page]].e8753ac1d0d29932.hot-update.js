"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page/[[...page]]",{

/***/ "./src/components/catalog.tsx":
/*!************************************!*\
  !*** ./src/components/catalog.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./src/hooks/redux.tsx\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ \"./src/components/error.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Catalog(param) {\n    let { resultsData } = param;\n    _s();\n    const { isError } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.pageSlice);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { search, page, limit } = router.query;\n    let newPage;\n    if (page === null || page === void 0 ? void 0 : page.length) {\n        newPage = page[0];\n    }\n    const handleItemClick = (itemId)=>{\n        const newUrl = \"/page/\".concat(newPage, \"/details/\").concat(itemId, \"?search=\").concat(search, \"&limit=\").concat(limit);\n        router.push(newUrl);\n    };\n    if (isError) {\n        throw new Error(\"Test error to check ErrorBoundary\");\n    }\n    return resultsData.results.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bottom__section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Recipes with\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"data-testid\": \"stored-keyword\",\n                        className: \"query-param\",\n                        children: search\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: resultsData.results.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        \"data-testid\": \"card\",\n                        id: item.id,\n                        onClick: ()=>handleItemClick(item.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image,\n                                alt: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        errorText: \"No result with the requested parameters\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Catalog, \"ZrCMRy74H3m4VZzV/iq2oYB37Yw=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Catalog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Catalog);\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUTtBQUVqQjtBQUUvQixTQUFTRyxRQUFRLEtBQTRCO1FBQTVCLEVBQUVDLFdBQVcsRUFBZSxHQUE1Qjs7SUFDZixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxTQUFTO0lBQzdELE1BQU1DLFNBQVNSLHNEQUFTQTtJQUV4QixNQUFNLEVBQUVTLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUU1QyxJQUFJQztJQUVKLElBQUlILGlCQUFBQSwyQkFBQUEsS0FBTUksTUFBTSxFQUFFO1FBQ2hCRCxVQUFVSCxJQUFJLENBQUMsRUFBRTtJQUNuQjtJQUNBLE1BQU1LLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxTQUFTLFNBQTRCRCxPQUFuQkgsU0FBUSxhQUE0QkosT0FBakJPLFFBQU8sWUFBMEJMLE9BQWhCRixRQUFPLFdBQWUsT0FBTkU7UUFDNUVILE9BQU9VLElBQUksQ0FBQ0Q7SUFDZDtJQUVBLElBQUlaLFNBQVM7UUFDWCxNQUFNLElBQUljLE1BQU07SUFDbEI7SUFDQSxPQUFPZixZQUFZZ0IsT0FBTyxDQUFDTixNQUFNLGlCQUMvQiw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOztvQkFBRztvQkFDVztrQ0FDYiw4REFBQ0M7d0JBQUtDLGVBQVk7d0JBQWlCSCxXQUFVO2tDQUMxQ2I7Ozs7Ozs7Ozs7OzswQkFHTCw4REFBQ2lCOzBCQUNFdEIsWUFBWWdCLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLENBQUNDLHFCQUN4Qiw4REFBQ0M7d0JBQ0NKLGVBQVk7d0JBQ1pLLElBQUlGLEtBQUtFLEVBQUU7d0JBRVhDLFNBQVMsSUFBTWhCLGdCQUFnQmEsS0FBS0UsRUFBRTs7MENBRXRDLDhEQUFDUDswQ0FBSUssS0FBS0ksS0FBSzs7Ozs7OzBDQUNmLDhEQUFDQztnQ0FBSUMsS0FBS04sS0FBS08sS0FBSztnQ0FBRUMsS0FBS1IsS0FBS0ksS0FBSzs7Ozs7Ozt1QkFKaENKLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs2QkFVcEIsOERBQUM1Qiw4Q0FBUUE7UUFBQ21DLFdBQVU7Ozs7OztBQUV4QjtHQTVDU2xDOztRQUNhRix3REFBY0E7UUFDbkJELGtEQUFTQTs7O0tBRmpCRztBQThDVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nLnRzeD9mMDEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy9yZWR1eCc7XHJcbmltcG9ydCB7IEFwcFN0YXRlLCBDYXRhbG9nUHJvcHMsIFJlc3VsdHNEYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlL2ludGVyZmFjZSc7XHJcbmltcG9ydCBFcnJvckJveCBmcm9tICcuL2Vycm9yJztcclxuXHJcbmZ1bmN0aW9uIENhdGFsb2coeyByZXN1bHRzRGF0YSB9OiBSZXN1bHRzRGF0YSkge1xyXG4gIGNvbnN0IHsgaXNFcnJvciB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlU2xpY2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHNlYXJjaCwgcGFnZSwgbGltaXQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgbGV0IG5ld1BhZ2U6IHN0cmluZztcclxuXHJcbiAgaWYgKHBhZ2U/Lmxlbmd0aCkge1xyXG4gICAgbmV3UGFnZSA9IHBhZ2VbMF07XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IChpdGVtSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbmV3VXJsID0gYC9wYWdlLyR7bmV3UGFnZX0vZGV0YWlscy8ke2l0ZW1JZH0/c2VhcmNoPSR7c2VhcmNofSZsaW1pdD0ke2xpbWl0fWA7XHJcbiAgICByb3V0ZXIucHVzaChuZXdVcmwpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpc0Vycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rlc3QgZXJyb3IgdG8gY2hlY2sgRXJyb3JCb3VuZGFyeScpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0c0RhdGEucmVzdWx0cy5sZW5ndGggPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbV9fc2VjdGlvblwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgUmVjaXBlcyB3aXRoeycgJ31cclxuICAgICAgICA8c3BhbiBkYXRhLXRlc3RpZD1cInN0b3JlZC1rZXl3b3JkXCIgY2xhc3NOYW1lPVwicXVlcnktcGFyYW1cIj5cclxuICAgICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Jlc3VsdHNEYXRhLnJlc3VsdHMubWFwKChpdGVtOiBBcHBTdGF0ZSkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiY2FyZFwiXHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpdGVtLmlkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxFcnJvckJveCBlcnJvclRleHQ9XCJObyByZXN1bHQgd2l0aCB0aGUgcmVxdWVzdGVkIHBhcmFtZXRlcnNcIiAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGFsb2c7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VBcHBTZWxlY3RvciIsIkVycm9yQm94IiwiQ2F0YWxvZyIsInJlc3VsdHNEYXRhIiwiaXNFcnJvciIsInN0YXRlIiwicGFnZVNsaWNlIiwicm91dGVyIiwic2VhcmNoIiwicGFnZSIsImxpbWl0IiwicXVlcnkiLCJuZXdQYWdlIiwibGVuZ3RoIiwiaGFuZGxlSXRlbUNsaWNrIiwiaXRlbUlkIiwibmV3VXJsIiwicHVzaCIsIkVycm9yIiwicmVzdWx0cyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwic3BhbiIsImRhdGEtdGVzdGlkIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJpZCIsIm9uQ2xpY2siLCJ0aXRsZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiZXJyb3JUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/catalog.tsx\n"));

/***/ })

});