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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var API_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! API/api */ \"./src/API/api.tsx\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar */ \"./src/components/searchBar.tsx\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog */ \"./src/components/catalog.tsx\");\n/* harmony import */ var _errorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorBoundary */ \"./src/components/errorBoundary.tsx\");\n/* harmony import */ var _UI_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/button */ \"./src/components/UI/button.tsx\");\n/* harmony import */ var _UI_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI/select */ \"./src/components/UI/select.tsx\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ \"./src/components/pagination.tsx\");\n/* harmony import */ var _UI_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI/modal */ \"./src/components/UI/modal.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/redux */ \"./src/hooks/redux.tsx\");\n/* harmony import */ var _store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/reducers/pageSlice */ \"./src/store/reducers/pageSlice.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error */ \"./src/components/error.tsx\");\n// import { DetailedPage, ResultsData } from 'interface/interface';\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n// import PageId from './detailedPage';\n\nfunction Search() {\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();\n    const { isError } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.pageSlice);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { page, search, limit } = router.query;\n    const detail = page === null || page === void 0 ? void 0 : page.includes(\"details\");\n    const pageNum = (page === null || page === void 0 ? void 0 : page.length) ? page[0] : \"\";\n    const pageQuery = (Number(pageNum) - 1) * Number(limit);\n    const { data } = (0,API_api__WEBPACK_IMPORTED_MODULE_2__.useFetchAllRecipesQuery)({\n        query: search,\n        limit,\n        page: pageQuery\n    });\n    console.log(data);\n    const res = data === null || data === void 0 ? void 0 : data.results;\n    const num = data === null || data === void 0 ? void 0 : data.totalResults;\n    const addRenderError = ()=>{\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setError)(true));\n    };\n    const resetRenderError = ()=>{\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setError)(true));\n    };\n    const handleClickGoBack = ()=>{\n        var _newQuery_page;\n        dispatch((0,_store_reducers_pageSlice__WEBPACK_IMPORTED_MODULE_11__.setIsItem)(false));\n        const newQuery = {\n            ...router.query\n        };\n        newQuery.page = (_newQuery_page = newQuery.page) === null || _newQuery_page === void 0 ? void 0 : _newQuery_page.slice(0, -2);\n        router.push({\n            pathname: router.pathname,\n            query: newQuery\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_errorBoundary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        catchError: resetRenderError,\n        children: isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            errorText: \"Oh no, something went wrong...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    classes: \"top__section-button error\",\n                    title: \"Error\",\n                    onClick: addRenderError\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main__section\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left-content \".concat(detail ? \"move-left\" : \"\"),\n                            children: [\n                                detail ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    onClose: ()=>handleClickGoBack()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this) : null,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_catalog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    results: res\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                                    totalResults: num\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        detail ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageId, {\n                            handleGoBack: handleClickGoBack\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 23\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\search.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"RoeeoUMsOgDKYYep+d9UT0hsw7g=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        API_api__WEBPACK_IMPORTED_MODULE_2__.useFetchAllRecipesQuery\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBbUU7OztBQUMzQjtBQUNVO0FBRWQ7QUFDSjtBQUNZO0FBQ1g7QUFDUztBQUNBO0FBQ1g7QUFDaUM7QUFDRTtBQUNsRSx1Q0FBdUM7QUFDUjtBQUUvQixTQUFTYzs7SUFDUCxNQUFNQyxXQUFXTiw2REFBY0E7SUFDL0IsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR04sNkRBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsU0FBUztJQUM3RCxNQUFNQyxTQUFTbkIsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRW9CLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUM1QyxNQUFNQyxTQUFTSixpQkFBQUEsMkJBQUFBLEtBQU1LLFFBQVEsQ0FBQztJQUM5QixNQUFNQyxVQUFVTixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1PLE1BQU0sSUFBR1AsSUFBSSxDQUFDLEVBQUUsR0FBRztJQUN6QyxNQUFNUSxZQUFZLENBQUNDLE9BQU9ILFdBQVcsS0FBS0csT0FBT1A7SUFDakQsTUFBTSxFQUFFUSxJQUFJLEVBQUUsR0FBRzdCLGdFQUF1QkEsQ0FBQztRQUN2Q3NCLE9BQU9GO1FBQ1BDO1FBQ0FGLE1BQU1RO0lBQ1I7SUFDQUcsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLE1BQU1ILGlCQUFBQSwyQkFBQUEsS0FBTUksT0FBTztJQUN6QixNQUFNQyxNQUFNTCxpQkFBQUEsMkJBQUFBLEtBQU1NLFlBQVk7SUFDOUIsTUFBTUMsaUJBQWlCO1FBQ3JCdEIsU0FBU0osb0VBQVFBLENBQUM7SUFDcEI7SUFFQSxNQUFNMkIsbUJBQW1CO1FBQ3ZCdkIsU0FBU0osb0VBQVFBLENBQUM7SUFDcEI7SUFFQSxNQUFNNEIsb0JBQW9CO1lBR1JDO1FBRmhCekIsU0FBU0gscUVBQVNBLENBQUM7UUFDbkIsTUFBTTRCLFdBQVc7WUFBRSxHQUFHckIsT0FBT0ksS0FBSztRQUFDO1FBQ25DaUIsU0FBU3BCLElBQUksSUFBR29CLGlCQUFBQSxTQUFTcEIsSUFBSSxjQUFib0IscUNBQUFBLGVBQWVDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekN0QixPQUFPdUIsSUFBSSxDQUFDO1lBQ1ZDLFVBQVV4QixPQUFPd0IsUUFBUTtZQUN6QnBCLE9BQU9pQjtRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3BDLHNEQUFhQTtRQUFDd0MsWUFBWU47a0JBQ3hCdEIsd0JBQ0MsOERBQUNILCtDQUFRQTtZQUFDZ0MsV0FBVTs7Ozs7aUNBRXBCOzs4QkFDRSw4REFBQzNDLGtEQUFTQTs7Ozs7OEJBQ1YsOERBQUNHLGtEQUFNQTtvQkFDTHlDLFNBQVE7b0JBQ1JDLE9BQU07b0JBQ05DLFNBQVNYOzs7Ozs7OEJBRVgsOERBQUNZO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVcsZ0JBQTBDLE9BQTFCMUIsU0FBUyxjQUFjOztnQ0FDcERBLHVCQUFTLDhEQUFDaEIsaURBQUtBO29DQUFDMkMsU0FBUyxJQUFNWjs7Ozs7MkNBQTBCOzhDQUMxRCw4REFBQ3BDLGdEQUFPQTtvQ0FBQytCLFNBQVNEOzs7Ozs7OENBQ2xCLDhEQUFDMUIsbURBQVVBO29DQUFDNkIsY0FBY0Q7Ozs7Ozs4Q0FDMUIsOERBQUM3QixrREFBZUE7Ozs7Ozs7Ozs7O3dCQUVqQmtCLHVCQUFTLDhEQUFDNEI7NEJBQU9DLGNBQWNkOzs7OzttQ0FBd0I7Ozs7Ozs7Ozs7Ozs7O0FBTXBFO0dBM0RTekI7O1FBQ1VMLHlEQUFjQTtRQUNYQyx5REFBY0E7UUFDbkJWLGtEQUFTQTtRQUtQQyw0REFBdUJBOzs7S0FSakNhO0FBNkRULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC50c3g/MjZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBEZXRhaWxlZFBhZ2UsIFJlc3VsdHNEYXRhIH0gZnJvbSAnaW50ZXJmYWNlL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRmV0Y2hBbGxSZWNpcGVzUXVlcnkgfSBmcm9tICdBUEkvYXBpJztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICdpbnRlcmZhY2UvaW50ZXJmYWNlJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaEJhcic7XHJcbmltcG9ydCBDYXRhbG9nIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4vZXJyb3JCb3VuZGFyeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9VSS9idXR0b24nO1xyXG5pbXBvcnQgU2VsZWN0Q29tcG9uZW50IGZyb20gJy4vVUkvc2VsZWN0JztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4vcGFnaW5hdGlvbic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL1VJL21vZGFsJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MvcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRFcnJvciwgc2V0SXNJdGVtIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvcGFnZVNsaWNlJztcclxuLy8gaW1wb3J0IFBhZ2VJZCBmcm9tICcuL2RldGFpbGVkUGFnZSc7XHJcbmltcG9ydCBFcnJvckJveCBmcm9tICcuL2Vycm9yJztcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBpc0Vycm9yIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBhZ2VTbGljZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBwYWdlLCBzZWFyY2gsIGxpbWl0IH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZGV0YWlsID0gcGFnZT8uaW5jbHVkZXMoJ2RldGFpbHMnKTtcclxuICBjb25zdCBwYWdlTnVtID0gcGFnZT8ubGVuZ3RoID8gcGFnZVswXSA6ICcnO1xyXG4gIGNvbnN0IHBhZ2VRdWVyeSA9IChOdW1iZXIocGFnZU51bSkgLSAxKSAqIE51bWJlcihsaW1pdCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VGZXRjaEFsbFJlY2lwZXNRdWVyeSh7XHJcbiAgICBxdWVyeTogc2VhcmNoLFxyXG4gICAgbGltaXQsXHJcbiAgICBwYWdlOiBwYWdlUXVlcnksXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgcmVzID0gZGF0YT8ucmVzdWx0cyBhcyBBcHBTdGF0ZVtdO1xyXG4gIGNvbnN0IG51bSA9IGRhdGE/LnRvdGFsUmVzdWx0cyBhcyBudW1iZXI7XHJcbiAgY29uc3QgYWRkUmVuZGVyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRFcnJvcih0cnVlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRSZW5kZXJFcnJvciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEVycm9yKHRydWUpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0dvQmFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldElzSXRlbShmYWxzZSkpO1xyXG4gICAgY29uc3QgbmV3UXVlcnkgPSB7IC4uLnJvdXRlci5xdWVyeSB9O1xyXG4gICAgbmV3UXVlcnkucGFnZSA9IG5ld1F1ZXJ5LnBhZ2U/LnNsaWNlKDAsIC0yKTtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcclxuICAgICAgcXVlcnk6IG5ld1F1ZXJ5LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxFcnJvckJvdW5kYXJ5IGNhdGNoRXJyb3I9e3Jlc2V0UmVuZGVyRXJyb3J9PlxyXG4gICAgICB7aXNFcnJvciA/IChcclxuICAgICAgICA8RXJyb3JCb3ggZXJyb3JUZXh0PVwiT2ggbm8sIHNvbWV0aGluZyB3ZW50IHdyb25nLi4uXCIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc2VzPVwidG9wX19zZWN0aW9uLWJ1dHRvbiBlcnJvclwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRXJyb3JcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXthZGRSZW5kZXJFcnJvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZWZ0LWNvbnRlbnQgJHtkZXRhaWwgPyAnbW92ZS1sZWZ0JyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgIHtkZXRhaWwgPyA8TW9kYWwgb25DbG9zZT17KCkgPT4gaGFuZGxlQ2xpY2tHb0JhY2soKX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxDYXRhbG9nIHJlc3VsdHM9e3Jlc30gLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbFJlc3VsdHM9e251bX0gLz5cclxuICAgICAgICAgICAgICA8U2VsZWN0Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZGV0YWlsID8gPFBhZ2VJZCBoYW5kbGVHb0JhY2s9e2hhbmRsZUNsaWNrR29CYWNrfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VGZXRjaEFsbFJlY2lwZXNRdWVyeSIsIlNlYXJjaEJhciIsIkNhdGFsb2ciLCJFcnJvckJvdW5kYXJ5IiwiQnV0dG9uIiwiU2VsZWN0Q29tcG9uZW50IiwiUGFnaW5hdGlvbiIsIk1vZGFsIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldEVycm9yIiwic2V0SXNJdGVtIiwiRXJyb3JCb3giLCJTZWFyY2giLCJkaXNwYXRjaCIsImlzRXJyb3IiLCJzdGF0ZSIsInBhZ2VTbGljZSIsInJvdXRlciIsInBhZ2UiLCJzZWFyY2giLCJsaW1pdCIsInF1ZXJ5IiwiZGV0YWlsIiwiaW5jbHVkZXMiLCJwYWdlTnVtIiwibGVuZ3RoIiwicGFnZVF1ZXJ5IiwiTnVtYmVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJyZXN1bHRzIiwibnVtIiwidG90YWxSZXN1bHRzIiwiYWRkUmVuZGVyRXJyb3IiLCJyZXNldFJlbmRlckVycm9yIiwiaGFuZGxlQ2xpY2tHb0JhY2siLCJuZXdRdWVyeSIsInNsaWNlIiwicHVzaCIsInBhdGhuYW1lIiwiY2F0Y2hFcnJvciIsImVycm9yVGV4dCIsImNsYXNzZXMiLCJ0aXRsZSIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsb3NlIiwiUGFnZUlkIiwiaGFuZGxlR29CYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/search.tsx\n"));

/***/ })

});