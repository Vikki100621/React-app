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

/***/ "./src/components/pagination.tsx":
/*!***************************************!*\
  !*** ./src/components/pagination.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pagination: function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/usePagination */ \"./src/hooks/usePagination.tsx\");\n/* harmony import */ var _assets_images_arrow_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/arrow__right.png */ \"./src/assets/images/arrow__right.png\");\n/* harmony import */ var _assets_images_arrow_left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/arrow__left.png */ \"./src/assets/images/arrow__left.png\");\n/* harmony import */ var _utils_getPages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getPages */ \"./src/components/utils/getPages.tsx\");\n/* harmony import */ var _UI_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI/button */ \"./src/components/UI/button.tsx\");\n/* eslint-disable react-hooks/exhaustive-deps */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Pagination(param) {\n    let { totalResults } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { search, limit, page } = router.query;\n    const pages = (0,_utils_getPages__WEBPACK_IMPORTED_MODULE_7__.getPages)(totalResults, Number(limit));\n    const pagesArray = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pages);\n    const [ButtonsState, setButtonState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        currentPage: 1,\n        visibleButtons: [\n            1,\n            2,\n            3\n        ],\n        totalPages: pages\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (Number(page) === pagesArray[pagesArray.length - 1]) {\n            setButtonState({\n                currentPage: Number(page),\n                visibleButtons: [\n                    Number(page) - 2,\n                    Number(page) - 1,\n                    Number(page)\n                ],\n                totalPages: pages\n            });\n        } else if (Number(page) === 1) {\n            setButtonState({\n                currentPage: 1,\n                visibleButtons: [\n                    1,\n                    2,\n                    3\n                ],\n                totalPages: pages\n            });\n        } else if (Number(page) >= 2) {\n            setButtonState({\n                currentPage: Number(page),\n                visibleButtons: [\n                    Number(page) - 1,\n                    Number(page),\n                    Number(page) + 1\n                ],\n                totalPages: pages\n            });\n        }\n    }, [\n        totalResults,\n        limit,\n        page\n    ]);\n    const changePage = (newPage)=>{\n        const newUrl = \"/page/\".concat(newPage, \"?search=\").concat(search, \"&limit=\").concat(limit);\n        router.push(newUrl);\n    };\n    const handleNextPage = ()=>{\n        if (ButtonsState.currentPage < pages) {\n            const newPage = ButtonsState.currentPage + 1;\n            changePage(newPage);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (ButtonsState.currentPage > 1) {\n            const newPage = ButtonsState.currentPage - 1;\n            changePage(newPage);\n        }\n    };\n    const handleFirstPage = ()=>{\n        changePage(1);\n    };\n    const handleLastPage = ()=>{\n        changePage(pagesArray[pagesArray.length - 2]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttons-block\",\n        children: pagesArray.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    classes: \"pagination__button first\",\n                    title: \"\",\n                    onClick: handleFirstPage,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_images_arrow_left_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"First Page\",\n                            width: 5\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_images_arrow_left_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"First Page\",\n                            width: 5\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    classes: \"pagination__button previous\",\n                    title: \"\",\n                    onClick: handlePreviousPage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_arrow_left_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: \"Previous Page\",\n                        width: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this),\n                ButtonsState.visibleButtons.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        classes: \"pagination__button \".concat(item === ButtonsState.currentPage ? \"active\" : \"\"),\n                        onClick: ()=>changePage(item),\n                        title: item.toString()\n                    }, item, false, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    classes: \"pagination__button next\",\n                    testDataId: \"next-page\",\n                    title: \"\",\n                    onClick: handleNextPage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_arrow_right_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"Next Page\",\n                        width: 40\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    classes: \"pagination__button last\",\n                    title: \"\",\n                    onClick: handleLastPage,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_images_arrow_right_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"Last Page\",\n                            width: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_images_arrow_right_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"Last Page\",\n                            width: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\components\\\\pagination.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Pagination, \"Ko/Bfnvnt0u3rasPYoXqk5VXAEw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_usePagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4Qzs7QUFDRjtBQUNiO0FBRVM7QUFDZ0I7QUFDQztBQUNEO0FBQ1o7QUFDWDtBQVExQixTQUFTUyxXQUFXLEtBQThCO1FBQTlCLEVBQUVDLFlBQVksRUFBZ0IsR0FBOUI7O0lBQ3pCLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVTLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUM1QyxNQUFNQyxRQUFRVCx5REFBUUEsQ0FBQ0csY0FBY08sT0FBT0o7SUFDNUMsTUFBTUssYUFBYWQsZ0VBQWtCQSxDQUFDWTtJQUV0QyxNQUFNLENBQUNHLGNBQWNDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFlO1FBQzVEb0IsYUFBYTtRQUNiQyxnQkFBZ0I7WUFBQztZQUFHO1lBQUc7U0FBRTtRQUN6QkMsWUFBWVA7SUFDZDtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJaUIsT0FBT0gsVUFBVUksVUFBVSxDQUFDQSxXQUFXTSxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQ3RESixlQUFlO2dCQUNiQyxhQUFhSixPQUFPSDtnQkFDcEJRLGdCQUFnQjtvQkFBQ0wsT0FBT0gsUUFBUTtvQkFBR0csT0FBT0gsUUFBUTtvQkFBR0csT0FBT0g7aUJBQU07Z0JBQ2xFUyxZQUFZUDtZQUNkO1FBQ0YsT0FBTyxJQUFJQyxPQUFPSCxVQUFVLEdBQUc7WUFDN0JNLGVBQWU7Z0JBQ2JDLGFBQWE7Z0JBQ2JDLGdCQUFnQjtvQkFBQztvQkFBRztvQkFBRztpQkFBRTtnQkFDekJDLFlBQVlQO1lBQ2Q7UUFDRixPQUFPLElBQUlDLE9BQU9ILFNBQVMsR0FBRztZQUM1Qk0sZUFBZTtnQkFDYkMsYUFBYUosT0FBT0g7Z0JBQ3BCUSxnQkFBZ0I7b0JBQUNMLE9BQU9ILFFBQVE7b0JBQUdHLE9BQU9IO29CQUFPRyxPQUFPSCxRQUFRO2lCQUFFO2dCQUNsRVMsWUFBWVA7WUFDZDtRQUNGO0lBQ0YsR0FBRztRQUFDTjtRQUFjRztRQUFPQztLQUFLO0lBRTlCLE1BQU1XLGFBQWEsQ0FBQ0M7UUFDbEIsTUFBTUMsU0FBUyxTQUEyQmYsT0FBbEJjLFNBQVEsWUFBMEJiLE9BQWhCRCxRQUFPLFdBQWUsT0FBTkM7UUFDMURGLE9BQU9pQixJQUFJLENBQUNEO0lBQ2Q7SUFFQSxNQUFNRSxpQkFBaUI7UUFDckIsSUFBSVYsYUFBYUUsV0FBVyxHQUFHTCxPQUFPO1lBQ3BDLE1BQU1VLFVBQVVQLGFBQWFFLFdBQVcsR0FBRztZQUMzQ0ksV0FBV0M7UUFDYjtJQUNGO0lBRUEsTUFBTUkscUJBQXFCO1FBQ3pCLElBQUlYLGFBQWFFLFdBQVcsR0FBRyxHQUFHO1lBQ2hDLE1BQU1LLFVBQVVQLGFBQWFFLFdBQVcsR0FBRztZQUMzQ0ksV0FBV0M7UUFDYjtJQUNGO0lBRUEsTUFBTUssa0JBQWtCO1FBQ3RCTixXQUFXO0lBQ2I7SUFFQSxNQUFNTyxpQkFBaUI7UUFDckJQLFdBQVdQLFVBQVUsQ0FBQ0EsV0FBV00sTUFBTSxHQUFHLEVBQUU7SUFDOUM7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDWmhCLFdBQVdNLE1BQU0sR0FBRyxtQkFDbkI7OzhCQUNFLDhEQUFDaEIsa0RBQU1BO29CQUNMMkIsU0FBUTtvQkFDUkMsT0FBTTtvQkFDTkMsU0FBU047O3NDQUVULDhEQUFDN0IsbURBQUtBOzRCQUFDb0MsS0FBS2hDLHFFQUFRQTs0QkFBRWlDLEtBQUk7NEJBQWFDLE9BQU87Ozs7OztzQ0FDOUMsOERBQUN0QyxtREFBS0E7NEJBQUNvQyxLQUFLaEMscUVBQVFBOzRCQUFFaUMsS0FBSTs0QkFBYUMsT0FBTzs7Ozs7Ozs7Ozs7OzhCQUVoRCw4REFBQ2hDLGtEQUFNQTtvQkFDTDJCLFNBQVE7b0JBQ1JDLE9BQU07b0JBQ05DLFNBQVNQOzhCQUVULDRFQUFDNUIsbURBQUtBO3dCQUFDb0MsS0FBS2hDLHFFQUFRQTt3QkFBRWlDLEtBQUk7d0JBQWdCQyxPQUFPOzs7Ozs7Ozs7OztnQkFFbERyQixhQUFhRyxjQUFjLENBQUNtQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2hDLDhEQUFDbEMsa0RBQU1BO3dCQUNMMkIsU0FBUyxzQkFFUixPQURDTyxTQUFTdkIsYUFBYUUsV0FBVyxHQUFHLFdBQVc7d0JBR2pEZ0IsU0FBUyxJQUFNWixXQUFXaUI7d0JBQzFCTixPQUFPTSxLQUFLQyxRQUFRO3VCQUZmRDs7Ozs7OEJBS1QsOERBQUNsQyxrREFBTUE7b0JBQ0wyQixTQUFRO29CQUNSUyxZQUFXO29CQUNYUixPQUFNO29CQUNOQyxTQUFTUjs4QkFFVCw0RUFBQzNCLG1EQUFLQTt3QkFBQ29DLEtBQUtqQyxzRUFBUUE7d0JBQUVrQyxLQUFJO3dCQUFZQyxPQUFPOzs7Ozs7Ozs7Ozs4QkFFL0MsOERBQUNoQyxrREFBTUE7b0JBQ0wyQixTQUFRO29CQUNSQyxPQUFNO29CQUNOQyxTQUFTTDs7c0NBRVQsOERBQUM5QixtREFBS0E7NEJBQUNvQyxLQUFLakMsc0VBQVFBOzRCQUFFa0MsS0FBSTs0QkFBWUMsT0FBTzs7Ozs7O3NDQUM3Qyw4REFBQ3RDLG1EQUFLQTs0QkFBQ29DLEtBQUtqQyxzRUFBUUE7NEJBQUVrQyxLQUFJOzRCQUFZQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpEO0dBOUdnQi9COztRQUNDTixrREFBU0E7UUFHTEMsNERBQWtCQTs7O0tBSnZCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeD9jZTVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFRvdGFsUmVzdWx0cyB9IGZyb20gJ2ludGVyZmFjZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VUb3RhbFBhZ2VzQXJyYXkgZnJvbSAnLi4vaG9va3MvdXNlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBuZXh0UGFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Fycm93X19yaWdodC5wbmcnO1xyXG5pbXBvcnQgcHJldlBhZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hcnJvd19fbGVmdC5wbmcnO1xyXG5pbXBvcnQgeyBnZXRQYWdlcyB9IGZyb20gJy4vdXRpbHMvZ2V0UGFnZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vVUkvYnV0dG9uJztcclxuXHJcbnR5cGUgQnV0dG9uc1N0YXRlID0ge1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgdmlzaWJsZUJ1dHRvbnM6IG51bWJlcltdO1xyXG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgdG90YWxSZXN1bHRzIH06IFRvdGFsUmVzdWx0cykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2VhcmNoLCBsaW1pdCwgcGFnZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhZ2VzID0gZ2V0UGFnZXModG90YWxSZXN1bHRzLCBOdW1iZXIobGltaXQpKTtcclxuICBjb25zdCBwYWdlc0FycmF5ID0gdXNlVG90YWxQYWdlc0FycmF5KHBhZ2VzKTtcclxuXHJcbiAgY29uc3QgW0J1dHRvbnNTdGF0ZSwgc2V0QnV0dG9uU3RhdGVdID0gdXNlU3RhdGU8QnV0dG9uc1N0YXRlPih7XHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHZpc2libGVCdXR0b25zOiBbMSwgMiwgM10sXHJcbiAgICB0b3RhbFBhZ2VzOiBwYWdlcyxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChOdW1iZXIocGFnZSkgPT09IHBhZ2VzQXJyYXlbcGFnZXNBcnJheS5sZW5ndGggLSAxXSkge1xyXG4gICAgICBzZXRCdXR0b25TdGF0ZSh7XHJcbiAgICAgICAgY3VycmVudFBhZ2U6IE51bWJlcihwYWdlKSxcclxuICAgICAgICB2aXNpYmxlQnV0dG9uczogW051bWJlcihwYWdlKSAtIDIsIE51bWJlcihwYWdlKSAtIDEsIE51bWJlcihwYWdlKV0sXHJcbiAgICAgICAgdG90YWxQYWdlczogcGFnZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIocGFnZSkgPT09IDEpIHtcclxuICAgICAgc2V0QnV0dG9uU3RhdGUoe1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgIHZpc2libGVCdXR0b25zOiBbMSwgMiwgM10sXHJcbiAgICAgICAgdG90YWxQYWdlczogcGFnZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIocGFnZSkgPj0gMikge1xyXG4gICAgICBzZXRCdXR0b25TdGF0ZSh7XHJcbiAgICAgICAgY3VycmVudFBhZ2U6IE51bWJlcihwYWdlKSxcclxuICAgICAgICB2aXNpYmxlQnV0dG9uczogW051bWJlcihwYWdlKSAtIDEsIE51bWJlcihwYWdlKSwgTnVtYmVyKHBhZ2UpICsgMV0sXHJcbiAgICAgICAgdG90YWxQYWdlczogcGFnZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt0b3RhbFJlc3VsdHMsIGxpbWl0LCBwYWdlXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAobmV3UGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuZXdVcmwgPSBgL3BhZ2UvJHtuZXdQYWdlfT9zZWFyY2g9JHtzZWFyY2h9JmxpbWl0PSR7bGltaXR9YDtcclxuICAgIHJvdXRlci5wdXNoKG5ld1VybCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoQnV0dG9uc1N0YXRlLmN1cnJlbnRQYWdlIDwgcGFnZXMpIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IEJ1dHRvbnNTdGF0ZS5jdXJyZW50UGFnZSArIDE7XHJcbiAgICAgIGNoYW5nZVBhZ2UobmV3UGFnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKEJ1dHRvbnNTdGF0ZS5jdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IEJ1dHRvbnNTdGF0ZS5jdXJyZW50UGFnZSAtIDE7XHJcbiAgICAgIGNoYW5nZVBhZ2UobmV3UGFnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlyc3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY2hhbmdlUGFnZSgxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMYXN0UGFnZSA9ICgpID0+IHtcclxuICAgIGNoYW5nZVBhZ2UocGFnZXNBcnJheVtwYWdlc0FycmF5Lmxlbmd0aCAtIDJdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWJsb2NrXCI+XHJcbiAgICAgIHtwYWdlc0FycmF5Lmxlbmd0aCA+IDEgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzZXM9XCJwYWdpbmF0aW9uX19idXR0b24gZmlyc3RcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpcnN0UGFnZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17cHJldlBhZ2V9IGFsdD1cIkZpcnN0IFBhZ2VcIiB3aWR0aD17NX0gLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17cHJldlBhZ2V9IGFsdD1cIkZpcnN0IFBhZ2VcIiB3aWR0aD17NX0gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc2VzPVwicGFnaW5hdGlvbl9fYnV0dG9uIHByZXZpb3VzXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3ByZXZQYWdlfSBhbHQ9XCJQcmV2aW91cyBQYWdlXCIgd2lkdGg9ezQwfSAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICB7QnV0dG9uc1N0YXRlLnZpc2libGVCdXR0b25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17YHBhZ2luYXRpb25fX2J1dHRvbiAke1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9PT0gQnV0dG9uc1N0YXRlLmN1cnJlbnRQYWdlID8gJ2FjdGl2ZScgOiAnJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3Nlcz1cInBhZ2luYXRpb25fX2J1dHRvbiBuZXh0XCJcclxuICAgICAgICAgICAgdGVzdERhdGFJZD1cIm5leHQtcGFnZVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e25leHRQYWdlfSBhbHQ9XCJOZXh0IFBhZ2VcIiB3aWR0aD17NDB9IC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3Nlcz1cInBhZ2luYXRpb25fX2J1dHRvbiBsYXN0XCJcclxuICAgICAgICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYXN0UGFnZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17bmV4dFBhZ2V9IGFsdD1cIkxhc3QgUGFnZVwiIHdpZHRoPXs0MH0gLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17bmV4dFBhZ2V9IGFsdD1cIkxhc3QgUGFnZVwiIHdpZHRoPXs0MH0gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZVRvdGFsUGFnZXNBcnJheSIsIm5leHRQYWdlIiwicHJldlBhZ2UiLCJnZXRQYWdlcyIsIkJ1dHRvbiIsIlBhZ2luYXRpb24iLCJ0b3RhbFJlc3VsdHMiLCJyb3V0ZXIiLCJzZWFyY2giLCJsaW1pdCIsInBhZ2UiLCJxdWVyeSIsInBhZ2VzIiwiTnVtYmVyIiwicGFnZXNBcnJheSIsIkJ1dHRvbnNTdGF0ZSIsInNldEJ1dHRvblN0YXRlIiwiY3VycmVudFBhZ2UiLCJ2aXNpYmxlQnV0dG9ucyIsInRvdGFsUGFnZXMiLCJsZW5ndGgiLCJjaGFuZ2VQYWdlIiwibmV3UGFnZSIsIm5ld1VybCIsInB1c2giLCJoYW5kbGVOZXh0UGFnZSIsImhhbmRsZVByZXZpb3VzUGFnZSIsImhhbmRsZUZpcnN0UGFnZSIsImhhbmRsZUxhc3RQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInRpdGxlIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwibWFwIiwiaXRlbSIsInRvU3RyaW5nIiwidGVzdERhdGFJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pagination.tsx\n"));

/***/ })

});