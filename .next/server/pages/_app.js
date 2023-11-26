/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/API/api.tsx":
/*!*************************!*\
  !*** ./src/API/api.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAllRecipes: () => (/* binding */ fetchAllRecipes),\n/* harmony export */   fetchRecipe: () => (/* binding */ fetchRecipe),\n/* harmony export */   getRunningQueriesThunk: () => (/* binding */ getRunningQueriesThunk),\n/* harmony export */   recipeAPI: () => (/* binding */ recipeAPI),\n/* harmony export */   useFetchAllRecipesQuery: () => (/* binding */ useFetchAllRecipesQuery),\n/* harmony export */   useFetchRecipeQuery: () => (/* binding */ useFetchRecipeQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/dist/query/react */ \"@reduxjs/toolkit/dist/query/react\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst API_KEY = \"5732271fa4144cc39aba70d0ac3a56ff\";\nconst recipeAPI = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"getData\",\n    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://api.spoonacular.com/recipes\"\n    }),\n    tagTypes: [\n        \"recipes\"\n    ],\n    extractRehydrationInfo (action, { reducerPath }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n        return undefined;\n    },\n    endpoints: (builder)=>({\n            fetchAllRecipes: builder.query({\n                query: ({ query, limit, page })=>({\n                        url: \"/complexSearch\",\n                        params: {\n                            apiKey: API_KEY,\n                            query,\n                            number: limit,\n                            offset: page\n                        }\n                    }),\n                providesTags: ()=>[\n                        \"recipes\"\n                    ]\n            }),\n            fetchRecipe: builder.query({\n                query: (id)=>({\n                        url: `/${id}/information`,\n                        params: {\n                            apiKey: API_KEY\n                        }\n                    })\n            })\n        })\n});\nconst { useFetchRecipeQuery, useFetchAllRecipesQuery, util: { getRunningQueriesThunk } } = recipeAPI;\nconst { fetchAllRecipes, fetchRecipe } = recipeAPI.endpoints;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQVBJL2FwaS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNqQztBQUU3QyxNQUFNRyxVQUFVO0FBRVQsTUFBTUMsWUFBWUosNEVBQVNBLENBQUM7SUFDakNLLGFBQWE7SUFDYkMsV0FBV0wsaUZBQWNBLENBQUM7UUFBRU0sU0FBUztJQUFzQztJQUMzRUMsVUFBVTtRQUFDO0tBQVU7SUFDckJDLHdCQUF1QkMsTUFBTSxFQUFFLEVBQUVMLFdBQVcsRUFBRTtRQUM1QyxJQUFJSyxPQUFPQyxJQUFJLEtBQUtULHVEQUFPQSxFQUFFO1lBQzNCLE9BQU9RLE9BQU9FLE9BQU8sQ0FBQ1AsWUFBWTtRQUNwQztRQUNBLE9BQU9RO0lBQ1Q7SUFDQUMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxpQkFBaUJELFFBQVFFLEtBQUssQ0FBQztnQkFDN0JBLE9BQU8sQ0FBQyxFQUFFQSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQU07d0JBQ2xDQyxLQUFLO3dCQUNMQyxRQUFROzRCQUNOQyxRQUFRbkI7NEJBQ1JjOzRCQUNBTSxRQUFRTDs0QkFDUk0sUUFBUUw7d0JBQ1Y7b0JBQ0Y7Z0JBQ0FNLGNBQWMsSUFBTTt3QkFBQztxQkFBVTtZQUNqQztZQUNBQyxhQUFhWCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3pCQSxPQUFPLENBQUNVLEtBQVE7d0JBQ2RQLEtBQUssQ0FBQyxDQUFDLEVBQUVPLEdBQUcsWUFBWSxDQUFDO3dCQUN6Qk4sUUFBUTs0QkFDTkMsUUFBUW5CO3dCQUNWO29CQUNGO1lBQ0Y7UUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQ1h5QixtQkFBbUIsRUFDbkJDLHVCQUF1QixFQUN2QkMsTUFBTSxFQUFFQyxzQkFBc0IsRUFBRSxFQUNqQyxHQUFHM0IsVUFBVTtBQUNQLE1BQU0sRUFBRVksZUFBZSxFQUFFVSxXQUFXLEVBQUUsR0FBR3RCLFVBQVVVLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNvbXBvbmVudHMvLi9zcmMvQVBJL2FwaS50c3g/ZTBlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9kaXN0L3F1ZXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5jb25zdCBBUElfS0VZID0gJzU3MzIyNzFmYTQxNDRjYzM5YWJhNzBkMGFjM2E1NmZmJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWNpcGVBUEkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAnZ2V0RGF0YScsXHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6ICdodHRwczovL2FwaS5zcG9vbmFjdWxhci5jb20vcmVjaXBlcycgfSksXHJcbiAgdGFnVHlwZXM6IFsncmVjaXBlcyddLFxyXG4gIGV4dHJhY3RSZWh5ZHJhdGlvbkluZm8oYWN0aW9uLCB7IHJlZHVjZXJQYXRoIH0pIHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRbcmVkdWNlclBhdGhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9LFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBmZXRjaEFsbFJlY2lwZXM6IGJ1aWxkZXIucXVlcnkoe1xyXG4gICAgICBxdWVyeTogKHsgcXVlcnksIGxpbWl0LCBwYWdlIH0pID0+ICh7XHJcbiAgICAgICAgdXJsOiAnL2NvbXBsZXhTZWFyY2gnLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgYXBpS2V5OiBBUElfS0VZLFxyXG4gICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICBudW1iZXI6IGxpbWl0LFxyXG4gICAgICAgICAgb2Zmc2V0OiBwYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6ICgpID0+IFsncmVjaXBlcyddLFxyXG4gICAgfSksXHJcbiAgICBmZXRjaFJlY2lwZTogYnVpbGRlci5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+ICh7XHJcbiAgICAgICAgdXJsOiBgLyR7aWR9L2luZm9ybWF0aW9uYCxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlRmV0Y2hSZWNpcGVRdWVyeSxcclxuICB1c2VGZXRjaEFsbFJlY2lwZXNRdWVyeSxcclxuICB1dGlsOiB7IGdldFJ1bm5pbmdRdWVyaWVzVGh1bmsgfSxcclxufSA9IHJlY2lwZUFQSTtcclxuZXhwb3J0IGNvbnN0IHsgZmV0Y2hBbGxSZWNpcGVzLCBmZXRjaFJlY2lwZSB9ID0gcmVjaXBlQVBJLmVuZHBvaW50cztcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiSFlEUkFURSIsIkFQSV9LRVkiLCJyZWNpcGVBUEkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJ0YWdUeXBlcyIsImV4dHJhY3RSZWh5ZHJhdGlvbkluZm8iLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJmZXRjaEFsbFJlY2lwZXMiLCJxdWVyeSIsImxpbWl0IiwicGFnZSIsInVybCIsInBhcmFtcyIsImFwaUtleSIsIm51bWJlciIsIm9mZnNldCIsInByb3ZpZGVzVGFncyIsImZldGNoUmVjaXBlIiwiaWQiLCJ1c2VGZXRjaFJlY2lwZVF1ZXJ5IiwidXNlRmV0Y2hBbGxSZWNpcGVzUXVlcnkiLCJ1dGlsIiwiZ2V0UnVubmluZ1F1ZXJpZXNUaHVuayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/API/api.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyApp: () => (/* binding */ MyApp),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/index.css */ \"./src/assets/styles/index.css\");\n/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ \"./src/store/store.ts\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ikryu\\\\Desktop\\\\моя правильная работа\\\\React-app\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n// eslint-disable-next-line react-refresh/only-export-components\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0M7QUFDRTtBQUUvQixTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQ3RELHFCQUFPLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQztBQUVBLGdFQUFnRTtBQUNoRSxpRUFBZUgsZ0RBQU9BLENBQUNJLFNBQVMsQ0FBQ0gsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNvbXBvbmVudHMvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICdzdG9yZS9zdG9yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtcmVmcmVzaC9vbmx5LWV4cG9ydC1jb21wb25lbnRzXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/reducers/pageSlice.ts":
/*!*****************************************!*\
  !*** ./src/store/reducers/pageSlice.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setError: () => (/* binding */ setError)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable no-param-reassign */ \nconst pageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"detailedPage\",\n    initialState: {\n        isError: false\n    },\n    reducers: {\n        setError: (state, action)=>{\n            state.isError = action.payload;\n        }\n    }\n});\nconst { setError } = pageSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvcGFnZVNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxvQ0FBb0MsR0FDVztBQUUvQyxNQUFNQyxZQUFZRCw2REFBV0EsQ0FBQztJQUM1QkUsTUFBTTtJQUNOQyxjQUFjO1FBQUVDLFNBQVM7SUFBTTtJQUMvQkMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQU9DO1lBQ2hCRCxNQUFNSCxPQUFPLEdBQUdJLE9BQU9DLE9BQU87UUFDaEM7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSCxRQUFRLEVBQUUsR0FBR0wsVUFBVVMsT0FBTyxDQUFDO0FBRTlDLGlFQUFlVCxVQUFVVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jb21wb25lbnRzLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3BhZ2VTbGljZS50cz8wZWZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5jb25zdCBwYWdlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2RldGFpbGVkUGFnZScsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IGlzRXJyb3I6IGZhbHNlIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEVycm9yOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0Vycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0RXJyb3IgfSA9IHBhZ2VTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZVNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInBhZ2VTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJpc0Vycm9yIiwicmVkdWNlcnMiLCJzZXRFcnJvciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/pageSlice.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setupStore: () => (/* binding */ setupStore),\n/* harmony export */   wrapper: () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../API/api */ \"./src/API/api.tsx\");\n/* harmony import */ var _reducers_pageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/pageSlice */ \"./src/store/reducers/pageSlice.ts\");\n\n\n\n\nconst setupStore = ()=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            pageSlice: _reducers_pageSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            [_API_api__WEBPACK_IMPORTED_MODULE_2__.recipeAPI.reducerPath]: _API_api__WEBPACK_IMPORTED_MODULE_2__.recipeAPI.reducer\n        },\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_API_api__WEBPACK_IMPORTED_MODULE_2__.recipeAPI.middleware)\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupStore);\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(setupStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0M7QUFDWjtBQUNNO0FBRXRDLE1BQU1JLGFBQWE7SUFDeEIsT0FBT0osZ0VBQWNBLENBQUM7UUFDcEJLLFNBQVM7WUFDUEYsU0FBU0EsNkRBQUFBO1lBQ1QsQ0FBQ0QsK0NBQVNBLENBQUNJLFdBQVcsQ0FBQyxFQUFFSiwrQ0FBU0EsQ0FBQ0csT0FBTztRQUM1QztRQUNBRSxZQUFZLENBQUNDLHVCQUNYQSx1QkFBdUJDLE1BQU0sQ0FBQ1AsK0NBQVNBLENBQUNLLFVBQVU7SUFDdEQ7QUFDRixFQUFFO0FBRUYsaUVBQWVILFVBQVVBLEVBQUM7QUFNbkIsTUFBTU0sVUFBVVQsaUVBQWFBLENBQVdHLFlBQVk7SUFBRU8sT0FBTztBQUFLLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jb21wb25lbnRzLy4vc3JjL3N0b3JlL3N0b3JlLnRzPzUwMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IHJlY2lwZUFQSSB9IGZyb20gJy4uL0FQSS9hcGknO1xyXG5pbXBvcnQgcGFnZVNsaWNlIGZyb20gJy4vcmVkdWNlcnMvcGFnZVNsaWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR1cFN0b3JlID0gKCkgPT4ge1xyXG4gIHJldHVybiBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgIHBhZ2VTbGljZSxcclxuICAgICAgW3JlY2lwZUFQSS5yZWR1Y2VyUGF0aF06IHJlY2lwZUFQSS5yZWR1Y2VyLFxyXG4gICAgfSxcclxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQocmVjaXBlQVBJLm1pZGRsZXdhcmUpLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dXBTdG9yZTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc2V0dXBTdG9yZT47XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlWydkaXNwYXRjaCddO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlPihzZXR1cFN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwicmVjaXBlQVBJIiwicGFnZVNsaWNlIiwic2V0dXBTdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./src/assets/styles/index.css":
/*!*************************************!*\
  !*** ./src/assets/styles/index.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/dist/query/react":
/*!****************************************************!*\
  !*** external "@reduxjs/toolkit/dist/query/react" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/dist/query/react");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();