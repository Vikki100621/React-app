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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./src/hooks/redux.tsx\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ \"./src/components/error.tsx\");\n/* eslint-disable react/destructuring-assignment */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Catalog(results) {\n    _s();\n    const { isError } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.pageSlice);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { search, page, limit } = router.query;\n    let newPage;\n    if (page === null || page === void 0 ? void 0 : page.length) {\n        newPage = page[0];\n    }\n    const handleItemClick = (itemId)=>{\n        const newUrl = \"/page/\".concat(newPage, \"/details/\").concat(itemId, \"?search=\").concat(search, \"&limit=\").concat(limit);\n        router.push(newUrl);\n    };\n    if (isError) {\n        throw new Error(\"Test error to check ErrorBoundary\");\n    }\n    return (results === null || results === void 0 ? void 0 : results.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bottom__section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Recipes with\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"data-testid\": \"stored-keyword\",\n                        className: \"query-param\",\n                        children: search\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: results.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        \"data-testid\": \"card\",\n                        id: item.id,\n                        onClick: ()=>handleItemClick(item.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image,\n                                alt: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        errorText: \"No result with the requested parameters\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\catalog.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Catalog, \"ZrCMRy74H3m4VZzV/iq2oYB37Yw=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Catalog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Catalog);\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaURBQWlEOztBQUNUO0FBQ1E7QUFFakI7QUFFL0IsU0FBU0csUUFBUUMsT0FBbUI7O0lBQ2xDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdKLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLFNBQVM7SUFDN0QsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCLE1BQU0sRUFBRVMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHSCxPQUFPSSxLQUFLO0lBRTVDLElBQUlDO0lBRUosSUFBSUgsaUJBQUFBLDJCQUFBQSxLQUFNSSxNQUFNLEVBQUU7UUFDaEJELFVBQVVILElBQUksQ0FBQyxFQUFFO0lBQ25CO0lBQ0EsTUFBTUssa0JBQWtCLENBQUNDO1FBQ3ZCLE1BQU1DLFNBQVMsU0FBNEJELE9BQW5CSCxTQUFRLGFBQTRCSixPQUFqQk8sUUFBTyxZQUEwQkwsT0FBaEJGLFFBQU8sV0FBZSxPQUFORTtRQUM1RUgsT0FBT1UsSUFBSSxDQUFDRDtJQUNkO0lBRUEsSUFBSVosU0FBUztRQUNYLE1BQU0sSUFBSWMsTUFBTTtJQUNsQjtJQUNBLE9BQU9mLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU1UsTUFBTSxrQkFDcEIsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzs7b0JBQUc7b0JBQ1c7a0NBQ2IsOERBQUNDO3dCQUFLQyxlQUFZO3dCQUFpQkgsV0FBVTtrQ0FDMUNaOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNnQjswQkFDRXJCLFFBQVFzQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1osOERBQUNDO3dCQUNDSixlQUFZO3dCQUNaSyxJQUFJRixLQUFLRSxFQUFFO3dCQUVYQyxTQUFTLElBQU1mLGdCQUFnQlksS0FBS0UsRUFBRTs7MENBRXRDLDhEQUFDUDswQ0FBSUssS0FBS0ksS0FBSzs7Ozs7OzBDQUNmLDhEQUFDQztnQ0FBSUMsS0FBS04sS0FBS08sS0FBSztnQ0FBRUMsS0FBS1IsS0FBS0ksS0FBSzs7Ozs7Ozt1QkFKaENKLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs2QkFVcEIsOERBQUMzQiw4Q0FBUUE7UUFBQ2tDLFdBQVU7Ozs7OztBQUV4QjtHQTVDU2pDOztRQUNhRix3REFBY0E7UUFDbkJELGtEQUFTQTs7O0tBRmpCRztBQThDVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nLnRzeD9mMDEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MvcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSwgUmVzdWx0c0RhdGEgfSBmcm9tICcuLi9pbnRlcmZhY2UvaW50ZXJmYWNlJztcclxuaW1wb3J0IEVycm9yQm94IGZyb20gJy4vZXJyb3InO1xyXG5cclxuZnVuY3Rpb24gQ2F0YWxvZyhyZXN1bHRzOiBBcHBTdGF0ZVtdKSB7XHJcbiAgY29uc3QgeyBpc0Vycm9yIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBhZ2VTbGljZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoLCBwYWdlLCBsaW1pdCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBsZXQgbmV3UGFnZTogc3RyaW5nO1xyXG5cclxuICBpZiAocGFnZT8ubGVuZ3RoKSB7XHJcbiAgICBuZXdQYWdlID0gcGFnZVswXTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKGl0ZW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBuZXdVcmwgPSBgL3BhZ2UvJHtuZXdQYWdlfS9kZXRhaWxzLyR7aXRlbUlkfT9zZWFyY2g9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YDtcclxuICAgIHJvdXRlci5wdXNoKG5ld1VybCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVGVzdCBlcnJvciB0byBjaGVjayBFcnJvckJvdW5kYXJ5Jyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRzPy5sZW5ndGggPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbV9fc2VjdGlvblwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgUmVjaXBlcyB3aXRoeycgJ31cclxuICAgICAgICA8c3BhbiBkYXRhLXRlc3RpZD1cInN0b3JlZC1rZXl3b3JkXCIgY2xhc3NOYW1lPVwicXVlcnktcGFyYW1cIj5cclxuICAgICAgICAgIHtzZWFyY2h9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Jlc3VsdHMubWFwKChpdGVtOiBBcHBTdGF0ZSkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiY2FyZFwiXHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpdGVtLmlkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxFcnJvckJveCBlcnJvclRleHQ9XCJObyByZXN1bHQgd2l0aCB0aGUgcmVxdWVzdGVkIHBhcmFtZXRlcnNcIiAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGFsb2c7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VBcHBTZWxlY3RvciIsIkVycm9yQm94IiwiQ2F0YWxvZyIsInJlc3VsdHMiLCJpc0Vycm9yIiwic3RhdGUiLCJwYWdlU2xpY2UiLCJyb3V0ZXIiLCJzZWFyY2giLCJwYWdlIiwibGltaXQiLCJxdWVyeSIsIm5ld1BhZ2UiLCJsZW5ndGgiLCJoYW5kbGVJdGVtQ2xpY2siLCJpdGVtSWQiLCJuZXdVcmwiLCJwdXNoIiwiRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInNwYW4iLCJkYXRhLXRlc3RpZCIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiaWQiLCJvbkNsaWNrIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImVycm9yVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/catalog.tsx\n"));

/***/ })

});