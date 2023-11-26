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

/***/ "./src/components/search.tsx":
/*!***********************************!*\
  !*** ./src/components/search.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var API_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! API/api */ \"./src/API/api.tsx\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar */ \"./src/components/searchBar.tsx\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog */ \"./src/components/catalog.tsx\");\n/* harmony import */ var _errorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorBoundary */ \"./src/components/errorBoundary.tsx\");\n/* harmony import */ var _UI_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/button */ \"./src/components/UI/button.tsx\");\n/* harmony import */ var _UI_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI/select */ \"./src/components/UI/select.tsx\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ \"./src/components/pagination.tsx\");\n/* harmony import */ var _UI_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI/modal */ \"./src/components/UI/modal.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/redux */ \"./src/hooks/redux.tsx\");\n/* harmony import */ var _store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/reducers/pageSlice */ \"./src/store/reducers/pageSlice.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error */ \"./src/components/error.tsx\");\n// import { DetailedPage, ResultsData } from 'interface/interface';\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n// import PageId from './detailedPage';\n\nfunction Search() {\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();\n    const { isError } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.pageSlice);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { page, search, limit } = router.query;\n    const detail = page === null || page === void 0 ? void 0 : page.includes(\"details\");\n    const pageNum = (page === null || page === void 0 ? void 0 : page.length) ? page[0] : \"\";\n    const pageQuery = (Number(pageNum) - 1) * Number(limit);\n    const { data } = (0,API_api__WEBPACK_IMPORTED_MODULE_2__.useFetchAllRecipesQuery)({\n        query: search,\n        limit,\n        page: pageQuery\n    });\n    const resultsData = data;\n    console.log(resultsData);\n    const addRenderError = ()=>{\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setError)(true));\n    };\n    const resetRenderError = ()=>{\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setError)(true));\n    };\n    const handleClickGoBack = ()=>{\n        var _newQuery_page;\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setIsItem)(false));\n        const newQuery = {\n            ...router.query\n        };\n        newQuery.page = (_newQuery_page = newQuery.page) === null || _newQuery_page === void 0 ? void 0 : _newQuery_page.slice(0, -2);\n        router.push({\n            pathname: router.pathname,\n            query: newQuery\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_errorBoundary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        catchError: resetRenderError,\n        children: isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            errorText: \"Oh no, something went wrong...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    classes: \"top__section-button error\",\n                    title: \"Error\",\n                    onClick: addRenderError\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main__section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left-content \".concat(detail ? \"move-left\" : \"\"),\n                        children: [\n                            detail ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                onClose: ()=>handleClickGoBack()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_catalog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                resultsData: resultsData\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                                totalResults: resultsData\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"RoeeoUMsOgDKYYep+d9UT0hsw7g=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        API_api__WEBPACK_IMPORTED_MODULE_2__.useFetchAllRecipesQuery\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBbUU7OztBQUMzQjtBQUNVO0FBQ2Q7QUFDSjtBQUNZO0FBQ1g7QUFDUztBQUNBO0FBQ1g7QUFDaUM7QUFDRTtBQUNsRSx1Q0FBdUM7QUFDUjtBQUcvQixTQUFTYzs7SUFDUCxNQUFNQyxXQUFXTiw2REFBY0E7SUFDL0IsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR04sNkRBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsU0FBUztJQUM3RCxNQUFNQyxTQUFTbkIsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRW9CLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUM1QyxNQUFNQyxTQUFTSixpQkFBQUEsMkJBQUFBLEtBQU1LLFFBQVEsQ0FBQztJQUM5QixNQUFNQyxVQUFVTixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1PLE1BQU0sSUFBR1AsSUFBSSxDQUFDLEVBQUUsR0FBRztJQUN6QyxNQUFNUSxZQUFZLENBQUNDLE9BQU9ILFdBQVcsS0FBS0csT0FBT1A7SUFDakQsTUFBTSxFQUFFUSxJQUFJLEVBQUUsR0FBRzdCLGdFQUF1QkEsQ0FBQztRQUN2Q3NCLE9BQU9GO1FBQ1BDO1FBQ0FGLE1BQU1RO0lBQ1I7SUFDQSxNQUFNRyxjQUFjRDtJQUNwQkUsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLGlCQUFpQjtRQUNyQm5CLFNBQVNKLG9FQUFRQSxDQUFDO0lBQ3BCO0lBRUEsTUFBTXdCLG1CQUFtQjtRQUN2QnBCLFNBQVNKLG9FQUFRQSxDQUFDO0lBQ3BCO0lBRUEsTUFBTXlCLG9CQUFvQjtZQUdSQztRQUZoQnRCLFNBQVNILHFFQUFTQSxDQUFDO1FBQ25CLE1BQU15QixXQUFXO1lBQUUsR0FBR2xCLE9BQU9JLEtBQUs7UUFBQztRQUNuQ2MsU0FBU2pCLElBQUksSUFBR2lCLGlCQUFBQSxTQUFTakIsSUFBSSxjQUFiaUIscUNBQUFBLGVBQWVDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekNuQixPQUFPb0IsSUFBSSxDQUFDO1lBQ1ZDLFVBQVVyQixPQUFPcUIsUUFBUTtZQUN6QmpCLE9BQU9jO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDakMsc0RBQWFBO1FBQUNxQyxZQUFZTjtrQkFDeEJuQix3QkFDQyw4REFBQ0gsK0NBQVFBO1lBQUM2QixXQUFVOzs7OztpQ0FFcEI7OzhCQUNFLDhEQUFDeEMsa0RBQVNBOzs7Ozs4QkFDViw4REFBQ0csa0RBQU1BO29CQUNMc0MsU0FBUTtvQkFDUkMsT0FBTTtvQkFDTkMsU0FBU1g7Ozs7Ozs4QkFFWCw4REFBQ1k7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFXLGdCQUEwQyxPQUExQnZCLFNBQVMsY0FBYzs7NEJBQ3BEQSx1QkFBUyw4REFBQ2hCLGlEQUFLQTtnQ0FBQ3dDLFNBQVMsSUFBTVo7Ozs7O3VDQUEwQjswQ0FDMUQsOERBQUNqQyxnREFBT0E7Z0NBQUM0QixhQUFhQTs7Ozs7OzBDQUN0Qiw4REFBQ3hCLG1EQUFVQTtnQ0FBQzBDLGNBQWNsQjs7Ozs7OzBDQUMxQiw4REFBQ3pCLGtEQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhOUI7R0EvRFNROztRQUNVTCx5REFBY0E7UUFDWEMseURBQWNBO1FBQ25CVixrREFBU0E7UUFLUEMsNERBQXVCQTs7O0tBUmpDYTtBQWlFVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHN4PzI2Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgRGV0YWlsZWRQYWdlLCBSZXN1bHRzRGF0YSB9IGZyb20gJ2ludGVyZmFjZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUZldGNoQWxsUmVjaXBlc1F1ZXJ5IH0gZnJvbSAnQVBJL2FwaSc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hCYXInO1xyXG5pbXBvcnQgQ2F0YWxvZyBmcm9tICcuL2NhdGFsb2cnO1xyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL2Vycm9yQm91bmRhcnknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vVUkvYnV0dG9uJztcclxuaW1wb3J0IFNlbGVjdENvbXBvbmVudCBmcm9tICcuL1VJL3NlbGVjdCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9VSS9tb2RhbCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzL3JlZHV4JztcclxuaW1wb3J0IHsgc2V0RXJyb3IsIHNldElzSXRlbSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzL3BhZ2VTbGljZSc7XHJcbi8vIGltcG9ydCBQYWdlSWQgZnJvbSAnLi9kZXRhaWxlZFBhZ2UnO1xyXG5pbXBvcnQgRXJyb3JCb3ggZnJvbSAnLi9lcnJvcic7XHJcbmltcG9ydCB7IFJlc3BvbmNlLCBSZXN1bHRzRGF0YSB9IGZyb20gJ2ludGVyZmFjZS9pbnRlcmZhY2UnO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGlzRXJyb3IgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGFnZVNsaWNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHBhZ2UsIHNlYXJjaCwgbGltaXQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBkZXRhaWwgPSBwYWdlPy5pbmNsdWRlcygnZGV0YWlscycpO1xyXG4gIGNvbnN0IHBhZ2VOdW0gPSBwYWdlPy5sZW5ndGggPyBwYWdlWzBdIDogJyc7XHJcbiAgY29uc3QgcGFnZVF1ZXJ5ID0gKE51bWJlcihwYWdlTnVtKSAtIDEpICogTnVtYmVyKGxpbWl0KTtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoQWxsUmVjaXBlc1F1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBzZWFyY2gsXHJcbiAgICBsaW1pdCxcclxuICAgIHBhZ2U6IHBhZ2VRdWVyeSxcclxuICB9KTtcclxuICBjb25zdCByZXN1bHRzRGF0YSA9IGRhdGFcclxuICBjb25zb2xlLmxvZyhyZXN1bHRzRGF0YSk7XHJcbiAgY29uc3QgYWRkUmVuZGVyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRFcnJvcih0cnVlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRSZW5kZXJFcnJvciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEVycm9yKHRydWUpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0dvQmFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldElzSXRlbShmYWxzZSkpO1xyXG4gICAgY29uc3QgbmV3UXVlcnkgPSB7IC4uLnJvdXRlci5xdWVyeSB9O1xyXG4gICAgbmV3UXVlcnkucGFnZSA9IG5ld1F1ZXJ5LnBhZ2U/LnNsaWNlKDAsIC0yKTtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcclxuICAgICAgcXVlcnk6IG5ld1F1ZXJ5LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxFcnJvckJvdW5kYXJ5IGNhdGNoRXJyb3I9e3Jlc2V0UmVuZGVyRXJyb3J9PlxyXG4gICAgICB7aXNFcnJvciA/IChcclxuICAgICAgICA8RXJyb3JCb3ggZXJyb3JUZXh0PVwiT2ggbm8sIHNvbWV0aGluZyB3ZW50IHdyb25nLi4uXCIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc2VzPVwidG9wX19zZWN0aW9uLWJ1dHRvbiBlcnJvclwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRXJyb3JcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXthZGRSZW5kZXJFcnJvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZWZ0LWNvbnRlbnQgJHtkZXRhaWwgPyAnbW92ZS1sZWZ0JyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgIHtkZXRhaWwgPyA8TW9kYWwgb25DbG9zZT17KCkgPT4gaGFuZGxlQ2xpY2tHb0JhY2soKX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxDYXRhbG9nIHJlc3VsdHNEYXRhPXtyZXN1bHRzRGF0YX0gLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbFJlc3VsdHM9e3Jlc3VsdHNEYXRhfSAvPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiB7ZGV0YWlsID8gKFxyXG4gICAgICAgICAgICAgIDxQYWdlSWRcclxuICAgICAgICAgICAgICAgIGRhdGE9e2FwaVJlc3VsdERldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9e2hhbmRsZUNsaWNrR29CYWNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfSAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUZldGNoQWxsUmVjaXBlc1F1ZXJ5IiwiU2VhcmNoQmFyIiwiQ2F0YWxvZyIsIkVycm9yQm91bmRhcnkiLCJCdXR0b24iLCJTZWxlY3RDb21wb25lbnQiLCJQYWdpbmF0aW9uIiwiTW9kYWwiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0RXJyb3IiLCJzZXRJc0l0ZW0iLCJFcnJvckJveCIsIlNlYXJjaCIsImRpc3BhdGNoIiwiaXNFcnJvciIsInN0YXRlIiwicGFnZVNsaWNlIiwicm91dGVyIiwicGFnZSIsInNlYXJjaCIsImxpbWl0IiwicXVlcnkiLCJkZXRhaWwiLCJpbmNsdWRlcyIsInBhZ2VOdW0iLCJsZW5ndGgiLCJwYWdlUXVlcnkiLCJOdW1iZXIiLCJkYXRhIiwicmVzdWx0c0RhdGEiLCJjb25zb2xlIiwibG9nIiwiYWRkUmVuZGVyRXJyb3IiLCJyZXNldFJlbmRlckVycm9yIiwiaGFuZGxlQ2xpY2tHb0JhY2siLCJuZXdRdWVyeSIsInNsaWNlIiwicHVzaCIsInBhdGhuYW1lIiwiY2F0Y2hFcnJvciIsImVycm9yVGV4dCIsImNsYXNzZXMiLCJ0aXRsZSIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsb3NlIiwidG90YWxSZXN1bHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/search.tsx\n"));

/***/ })

});