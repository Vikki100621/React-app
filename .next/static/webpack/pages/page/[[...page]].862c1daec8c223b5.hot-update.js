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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var API_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! API/api */ \"./src/API/api.tsx\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar */ \"./src/components/searchBar.tsx\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog */ \"./src/components/catalog.tsx\");\n/* harmony import */ var _errorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorBoundary */ \"./src/components/errorBoundary.tsx\");\n/* harmony import */ var _UI_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/button */ \"./src/components/UI/button.tsx\");\n/* harmony import */ var _UI_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI/select */ \"./src/components/UI/select.tsx\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ \"./src/components/pagination.tsx\");\n/* harmony import */ var _UI_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI/modal */ \"./src/components/UI/modal.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/redux */ \"./src/hooks/redux.tsx\");\n/* harmony import */ var _store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/reducers/pageSlice */ \"./src/store/reducers/pageSlice.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error */ \"./src/components/error.tsx\");\n// import { DetailedPage, ResultsData } from 'interface/interface';\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n// import PageId from './detailedPage';\n\nfunction Search() {\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();\n    const { isError } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.pageSlice);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { page, search, limit } = router.query;\n    const detail = page === null || page === void 0 ? void 0 : page.includes(\"details\");\n    const pageNum = (page === null || page === void 0 ? void 0 : page.length) ? page[0] : \"\";\n    const pageQuery = (Number(pageNum) - 1) * Number(limit);\n    const { data } = (0,API_api__WEBPACK_IMPORTED_MODULE_2__.useFetchAllRecipesQuery)({\n        query: search,\n        limit,\n        page: pageQuery\n    });\n    console.log(data);\n    const res = data === null || data === void 0 ? void 0 : data.results;\n    const num = data === null || data === void 0 ? void 0 : data.totalResults;\n    const addRenderError = ()=>{\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setError)(true));\n    };\n    const resetRenderError = ()=>{\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setError)(true));\n    };\n    const handleClickGoBack = ()=>{\n        var _newQuery_page;\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setIsItem)(false));\n        const newQuery = {\n            ...router.query\n        };\n        newQuery.page = (_newQuery_page = newQuery.page) === null || _newQuery_page === void 0 ? void 0 : _newQuery_page.slice(0, -2);\n        router.push({\n            pathname: router.pathname,\n            query: newQuery\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_errorBoundary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        catchError: resetRenderError,\n        children: isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            errorText: \"Oh no, something went wrong...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    classes: \"top__section-button error\",\n                    title: \"Error\",\n                    onClick: addRenderError\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main__section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left-content \".concat(detail ? \"move-left\" : \"\"),\n                        children: [\n                            detail ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                onClose: ()=>handleClickGoBack()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_catalog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                resultsData: res\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                                totalResults: num\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"RoeeoUMsOgDKYYep+d9UT0hsw7g=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        API_api__WEBPACK_IMPORTED_MODULE_2__.useFetchAllRecipesQuery\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBbUU7OztBQUMzQjtBQUNVO0FBQ2Q7QUFDSjtBQUNZO0FBQ1g7QUFDUztBQUNBO0FBQ1g7QUFDaUM7QUFDRTtBQUNsRSx1Q0FBdUM7QUFDUjtBQUcvQixTQUFTYzs7SUFDUCxNQUFNQyxXQUFXTiw2REFBY0E7SUFDL0IsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR04sNkRBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsU0FBUztJQUM3RCxNQUFNQyxTQUFTbkIsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRW9CLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUM1QyxNQUFNQyxTQUFTSixpQkFBQUEsMkJBQUFBLEtBQU1LLFFBQVEsQ0FBQztJQUM5QixNQUFNQyxVQUFVTixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1PLE1BQU0sSUFBR1AsSUFBSSxDQUFDLEVBQUUsR0FBRztJQUN6QyxNQUFNUSxZQUFZLENBQUNDLE9BQU9ILFdBQVcsS0FBS0csT0FBT1A7SUFDakQsTUFBTSxFQUFFUSxJQUFJLEVBQUUsR0FBRzdCLGdFQUF1QkEsQ0FBQztRQUN2Q3NCLE9BQU9GO1FBQ1BDO1FBQ0FGLE1BQU1RO0lBQ1I7SUFDQUcsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLE1BQU1ILGlCQUFBQSwyQkFBQUEsS0FBTUksT0FBTztJQUN6QixNQUFNQyxNQUFNTCxpQkFBQUEsMkJBQUFBLEtBQU1NLFlBQVk7SUFDOUIsTUFBTUMsaUJBQWlCO1FBQ3JCdEIsU0FBU0osb0VBQVFBLENBQUM7SUFDcEI7SUFFQSxNQUFNMkIsbUJBQW1CO1FBQ3ZCdkIsU0FBU0osb0VBQVFBLENBQUM7SUFDcEI7SUFFQSxNQUFNNEIsb0JBQW9CO1lBR1JDO1FBRmhCekIsU0FBU0gscUVBQVNBLENBQUM7UUFDbkIsTUFBTTRCLFdBQVc7WUFBRSxHQUFHckIsT0FBT0ksS0FBSztRQUFDO1FBQ25DaUIsU0FBU3BCLElBQUksSUFBR29CLGlCQUFBQSxTQUFTcEIsSUFBSSxjQUFib0IscUNBQUFBLGVBQWVDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekN0QixPQUFPdUIsSUFBSSxDQUFDO1lBQ1ZDLFVBQVV4QixPQUFPd0IsUUFBUTtZQUN6QnBCLE9BQU9pQjtRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3BDLHNEQUFhQTtRQUFDd0MsWUFBWU47a0JBQ3hCdEIsd0JBQ0MsOERBQUNILCtDQUFRQTtZQUFDZ0MsV0FBVTs7Ozs7aUNBRXBCOzs4QkFDRSw4REFBQzNDLGtEQUFTQTs7Ozs7OEJBQ1YsOERBQUNHLGtEQUFNQTtvQkFDTHlDLFNBQVE7b0JBQ1JDLE9BQU07b0JBQ05DLFNBQVNYOzs7Ozs7OEJBRVgsOERBQUNZO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVyxnQkFBMEMsT0FBMUIxQixTQUFTLGNBQWM7OzRCQUNwREEsdUJBQVMsOERBQUNoQixpREFBS0E7Z0NBQUMyQyxTQUFTLElBQU1aOzs7Ozt1Q0FBMEI7MENBQzFELDhEQUFDcEMsZ0RBQU9BO2dDQUFDaUQsYUFBYW5COzs7Ozs7MENBQ3RCLDhEQUFDMUIsbURBQVVBO2dDQUFDNkIsY0FBY0Q7Ozs7OzswQ0FDMUIsOERBQUM3QixrREFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTlCO0dBaEVTUTs7UUFDVUwseURBQWNBO1FBQ1hDLHlEQUFjQTtRQUNuQlYsa0RBQVNBO1FBS1BDLDREQUF1QkE7OztLQVJqQ2E7QUFrRVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnRzeD8yNmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IERldGFpbGVkUGFnZSwgUmVzdWx0c0RhdGEgfSBmcm9tICdpbnRlcmZhY2UvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VGZXRjaEFsbFJlY2lwZXNRdWVyeSB9IGZyb20gJ0FQSS9hcGknO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vc2VhcmNoQmFyJztcclxuaW1wb3J0IENhdGFsb2cgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9lcnJvckJvdW5kYXJ5JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL1VJL2J1dHRvbic7XHJcbmltcG9ydCBTZWxlY3RDb21wb25lbnQgZnJvbSAnLi9VSS9zZWxlY3QnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vVUkvbW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcy9yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVycm9yLCBzZXRJc0l0ZW0gfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9wYWdlU2xpY2UnO1xyXG4vLyBpbXBvcnQgUGFnZUlkIGZyb20gJy4vZGV0YWlsZWRQYWdlJztcclxuaW1wb3J0IEVycm9yQm94IGZyb20gJy4vZXJyb3InO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSwgUmVzcG9uY2UsIFJlc3VsdHNEYXRhIH0gZnJvbSAnaW50ZXJmYWNlL2ludGVyZmFjZSc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgaXNFcnJvciB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlU2xpY2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcGFnZSwgc2VhcmNoLCBsaW1pdCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGRldGFpbCA9IHBhZ2U/LmluY2x1ZGVzKCdkZXRhaWxzJyk7XHJcbiAgY29uc3QgcGFnZU51bSA9IHBhZ2U/Lmxlbmd0aCA/IHBhZ2VbMF0gOiAnJztcclxuICBjb25zdCBwYWdlUXVlcnkgPSAoTnVtYmVyKHBhZ2VOdW0pIC0gMSkgKiBOdW1iZXIobGltaXQpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlRmV0Y2hBbGxSZWNpcGVzUXVlcnkoe1xyXG4gICAgcXVlcnk6IHNlYXJjaCxcclxuICAgIGxpbWl0LFxyXG4gICAgcGFnZTogcGFnZVF1ZXJ5LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IHJlcyA9IGRhdGE/LnJlc3VsdHMgYXMgQXBwU3RhdGVbXTtcclxuICBjb25zdCBudW0gPSBkYXRhPy50b3RhbFJlc3VsdHMgYXMgbnVtO1xyXG4gIGNvbnN0IGFkZFJlbmRlckVycm9yID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0RXJyb3IodHJ1ZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0UmVuZGVyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRFcnJvcih0cnVlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tHb0JhY2sgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRJc0l0ZW0oZmFsc2UpKTtcclxuICAgIGNvbnN0IG5ld1F1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgIG5ld1F1ZXJ5LnBhZ2UgPSBuZXdRdWVyeS5wYWdlPy5zbGljZSgwLCAtMik7XHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBuZXdRdWVyeSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JCb3VuZGFyeSBjYXRjaEVycm9yPXtyZXNldFJlbmRlckVycm9yfT5cclxuICAgICAge2lzRXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yQm94IGVycm9yVGV4dD1cIk9oIG5vLCBzb21ldGhpbmcgd2VudCB3cm9uZy4uLlwiIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3Nlcz1cInRvcF9fc2VjdGlvbi1idXR0b24gZXJyb3JcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkVycm9yXCJcclxuICAgICAgICAgICAgb25DbGljaz17YWRkUmVuZGVyRXJyb3J9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGVmdC1jb250ZW50ICR7ZGV0YWlsID8gJ21vdmUtbGVmdCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICB7ZGV0YWlsID8gPE1vZGFsIG9uQ2xvc2U9eygpID0+IGhhbmRsZUNsaWNrR29CYWNrKCl9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICA8Q2F0YWxvZyByZXN1bHRzRGF0YT17cmVzfSAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsUmVzdWx0cz17bnVtfSAvPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiB7ZGV0YWlsID8gKFxyXG4gICAgICAgICAgICAgIDxQYWdlSWRcclxuICAgICAgICAgICAgICAgIGRhdGE9e2FwaVJlc3VsdERldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9e2hhbmRsZUNsaWNrR29CYWNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfSAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUZldGNoQWxsUmVjaXBlc1F1ZXJ5IiwiU2VhcmNoQmFyIiwiQ2F0YWxvZyIsIkVycm9yQm91bmRhcnkiLCJCdXR0b24iLCJTZWxlY3RDb21wb25lbnQiLCJQYWdpbmF0aW9uIiwiTW9kYWwiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0RXJyb3IiLCJzZXRJc0l0ZW0iLCJFcnJvckJveCIsIlNlYXJjaCIsImRpc3BhdGNoIiwiaXNFcnJvciIsInN0YXRlIiwicGFnZVNsaWNlIiwicm91dGVyIiwicGFnZSIsInNlYXJjaCIsImxpbWl0IiwicXVlcnkiLCJkZXRhaWwiLCJpbmNsdWRlcyIsInBhZ2VOdW0iLCJsZW5ndGgiLCJwYWdlUXVlcnkiLCJOdW1iZXIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlcyIsInJlc3VsdHMiLCJudW0iLCJ0b3RhbFJlc3VsdHMiLCJhZGRSZW5kZXJFcnJvciIsInJlc2V0UmVuZGVyRXJyb3IiLCJoYW5kbGVDbGlja0dvQmFjayIsIm5ld1F1ZXJ5Iiwic2xpY2UiLCJwdXNoIiwicGF0aG5hbWUiLCJjYXRjaEVycm9yIiwiZXJyb3JUZXh0IiwiY2xhc3NlcyIsInRpdGxlIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xvc2UiLCJyZXN1bHRzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/search.tsx\n"));

/***/ })

});