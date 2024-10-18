"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx":
/*!********************************************************!*\
  !*** ./src/components/MovieSections/MovieSections.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_axio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/axio */ \"(app-pages-browser)/./src/utils/axio.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FeaturedCard/FeaturedCard */ \"(app-pages-browser)/./src/components/FeaturedCard/FeaturedCard.tsx\");\n/* harmony import */ var _Cards_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Cards.module.scss */ \"(app-pages-browser)/./src/styles/Cards.module.scss\");\n/* harmony import */ var _styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ MovieSections auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { defaultCard = true, heading, topList = false, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true); // Loading state\n    const axios = (0,_utils_axio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const fetchMovies = async ()=>{\n        try {\n            setLoading(true); // Set loading to true before fetching\n            const response = await axios.get(\"\".concat(endpoint), {\n                params: {\n                    api_key: \"c7cf1258a5aa723e8a98f08f639e86b6\"\n                }\n            });\n            setMedia(response.data.results);\n        } catch (error) {\n            console.error(\"Error fetching movies:\", error);\n        } finally{\n            setLoading(false); // Set loading to false after fetching\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (loading) {\n            fetchMovies();\n        }\n    // The fetch only happens once because `loading` starts as true and becomes false after the fetch.\n    }, [\n        loading\n    ]);\n    console.log(object);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().listContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().category),\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined) // Add your loading spinner or placeholder here\n             : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardRow),\n                children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>{\n                    if (topList) {\n                        if (index < 10) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                index: index + 1,\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined);\n                        }\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_Cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            defaultCard: defaultCard,\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 19\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"Qc+k4n1oKZ81y/a4EyR/1pM9ulI=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDWTtBQUNLO0FBQ3JCO0FBQ2lCO0FBUzdDLE1BQU1PLGdCQUE2QztRQUFDLEVBQ3pEQyxjQUFjLElBQUksRUFDbEJDLE9BQU8sRUFDUEMsVUFBVSxLQUFLLEVBQ2ZDLFFBQVEsRUFDVDs7SUFDQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQVUsRUFBRTtJQUM5QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQVUsT0FBTyxnQkFBZ0I7SUFDdkUsTUFBTWEsUUFBUWhCLHVEQUFXQTtJQUV6QixNQUFNaUIsY0FBYztRQUNsQixJQUFJO1lBQ0ZGLFdBQVcsT0FBTyxzQ0FBc0M7WUFDeEQsTUFBTUcsV0FBVyxNQUFNRixNQUFNRyxHQUFHLENBQUMsR0FBWSxPQUFUUixXQUFZO2dCQUM5Q1MsUUFBUTtvQkFDTkMsU0FBU0Msa0NBQWdDO2dCQUMzQztZQUNGO1lBRUFULFNBQVNLLFNBQVNPLElBQUksQ0FBQ0MsT0FBTztRQUNoQyxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUMsU0FBVTtZQUNSWixXQUFXLFFBQVEsc0NBQXNDO1FBQzNEO0lBQ0Y7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxTQUFTO1lBQ1hHO1FBQ0Y7SUFDQSxrR0FBa0c7SUFDcEcsR0FBRztRQUFDSDtLQUFRO0lBRVpjLFFBQVFDLEdBQUcsQ0FBQ0M7SUFFWixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVzFCLGdGQUFvQjs7MEJBQ2xDLDhEQUFDNEI7Z0JBQU9GLFdBQVcxQiwyRUFBZTswQkFBR0c7Ozs7OztZQUdwQ0ssd0JBQ0MsOERBQUNpQjswQkFBSTs7Ozs7MEJBQWlCLCtDQUErQzs2QkFFckUsOERBQUNBO2dCQUFJQyxXQUFXMUIsMEVBQWM7MEJBQzNCTSxrQkFBQUEsNEJBQUFBLE1BQ0d5QixNQUFNLENBQ04sQ0FBQ0MsT0FBU0EsS0FBS0MsV0FBVyxLQUFLLFFBQVFELEtBQUtFLGFBQWEsS0FBSyxNQUUvREMsR0FBRyxDQUFDLENBQUNILE1BQU1JO29CQUNWLElBQUloQyxTQUFTO3dCQUNYLElBQUlnQyxRQUFRLElBQUk7NEJBQ2QscUJBQ0UsOERBQUN0QyxrRUFBWUE7Z0NBQWFzQyxPQUFPQSxRQUFRO2dDQUFHSixNQUFNQTsrQkFBL0JJOzs7Ozt3QkFFdkI7b0JBQ0YsT0FBTzt3QkFDTCxxQkFDRSw4REFBQ3JDLG9EQUFLQTs0QkFBYUcsYUFBYUE7NEJBQWE4QixNQUFNQTsyQkFBdkNJOzs7OztvQkFFaEI7Z0JBQ0Y7Ozs7Ozs7Ozs7OztBQUtaLEVBQUU7R0FsRVduQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZVNlY3Rpb25zL01vdmllU2VjdGlvbnMudHN4PzcxZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgZ2V0SW5zdGFuY2UgZnJvbSBcIkAvdXRpbHMvYXhpb1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlZENhcmQgZnJvbSBcIi4uL0ZlYXR1cmVkQ2FyZC9GZWF0dXJlZENhcmRcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiLi4vQ2FyZHMvQ2FyZHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DYXJkcy5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgTW92aWVTZWN0aW9uUHJvcHMge1xuICBkZWZhdWx0Q2FyZD86IGJvb2xlYW47XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgdG9wTGlzdD86IGJvb2xlYW47XG4gIGVuZHBvaW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNlY3Rpb25zOiBSZWFjdC5GQzxNb3ZpZVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBkZWZhdWx0Q2FyZCA9IHRydWUsXG4gIGhlYWRpbmcsXG4gIHRvcExpc3QgPSBmYWxzZSxcbiAgZW5kcG9pbnQsXG59KSA9PiB7XG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGU8TWVkaWFbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTsgLy8gTG9hZGluZyBzdGF0ZVxuICBjb25zdCBheGlvcyA9IGdldEluc3RhbmNlKCk7XG5cbiAgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIFNldCBsb2FkaW5nIHRvIHRydWUgYmVmb3JlIGZldGNoaW5nXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtlbmRwb2ludH1gLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFwaV9rZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RNREJfS0VZLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHNldE1lZGlhKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtb3ZpZXM6XCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFNldCBsb2FkaW5nIHRvIGZhbHNlIGFmdGVyIGZldGNoaW5nXG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIGZldGNoTW92aWVzKCk7XG4gICAgfVxuICAgIC8vIFRoZSBmZXRjaCBvbmx5IGhhcHBlbnMgb25jZSBiZWNhdXNlIGBsb2FkaW5nYCBzdGFydHMgYXMgdHJ1ZSBhbmQgYmVjb21lcyBmYWxzZSBhZnRlciB0aGUgZmV0Y2guXG4gIH0sIFtsb2FkaW5nXSk7XG5cbiAgY29uc29sZS5sb2cob2JqZWN0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29udGFpbmVyfT5cbiAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PntoZWFkaW5nfTwvc3Ryb25nPlxuICAgICAgXG4gICAgICB7LyogRGlzcGxheSBsb2FkaW5nIHN0YXRlIHdoaWxlIGRhdGEgaXMgYmVpbmcgZmV0Y2hlZCAqL31cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gLy8gQWRkIHlvdXIgbG9hZGluZyBzcGlubmVyIG9yIHBsYWNlaG9sZGVyIGhlcmVcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFJvd30+XG4gICAgICAgICAge21lZGlhXG4gICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ucG9zdGVyX3BhdGggIT09IG51bGwgJiYgaXRlbS5iYWNrZHJvcF9wYXRoICE9PSBudWxsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodG9wTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRDYXJkIGtleT17aW5kZXh9IGluZGV4PXtpbmRleCArIDF9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPENhcmRzIGtleT17aW5kZXh9IGRlZmF1bHRDYXJkPXtkZWZhdWx0Q2FyZH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRJbnN0YW5jZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGZWF0dXJlZENhcmQiLCJDYXJkcyIsInN0eWxlcyIsIk1vdmllU2VjdGlvbnMiLCJkZWZhdWx0Q2FyZCIsImhlYWRpbmciLCJ0b3BMaXN0IiwiZW5kcG9pbnQiLCJtZWRpYSIsInNldE1lZGlhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJheGlvcyIsImZldGNoTW92aWVzIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJhcGlfa2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RNREJfS0VZIiwiZGF0YSIsInJlc3VsdHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvYmplY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJsaXN0Q29udGFpbmVyIiwic3Ryb25nIiwiY2F0ZWdvcnkiLCJjYXJkUm93IiwiZmlsdGVyIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwiYmFja2Ryb3BfcGF0aCIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});