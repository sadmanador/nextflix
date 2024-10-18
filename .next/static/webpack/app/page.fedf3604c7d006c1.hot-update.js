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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_axio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/axio */ \"(app-pages-browser)/./src/utils/axio.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FeaturedCard/FeaturedCard */ \"(app-pages-browser)/./src/components/FeaturedCard/FeaturedCard.tsx\");\n/* harmony import */ var _Cards_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Cards.module.scss */ \"(app-pages-browser)/./src/styles/Cards.module.scss\");\n/* harmony import */ var _styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ MovieSections auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { defaultCard = true, heading, topList = false, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const axios = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_utils_axio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), []);\n    const fetchMovies = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            const response = await axios.get(\"\".concat(endpoint), {\n                params: {\n                    api_key: \"c7cf1258a5aa723e8a98f08f639e86b6\"\n                }\n            });\n            setMedia(response.data.results);\n        } catch (error) {\n            console.error(\"Error fetching movies:\", error);\n        }\n    }, [\n        axios,\n        endpoint\n    ]);\n    // Fetch data only when the endpoint changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().listContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().category),\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardRow),\n                children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>{\n                    if (topList) {\n                        if (index < 10) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                index: index + 1,\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, undefined);\n                        }\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_Cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            defaultCard: defaultCard,\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"ZAi2Fc1WvSmb4nyrody5+dl87As=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDa0M7QUFDakI7QUFDckI7QUFDaUI7QUFTN0MsTUFBTVMsZ0JBQTZDO1FBQUMsRUFDekRDLGNBQWMsSUFBSSxFQUNsQkMsT0FBTyxFQUNQQyxVQUFVLEtBQUssRUFDZkMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBVSxFQUFFO0lBRTlDLE1BQU1hLFFBQVFaLDhDQUFPQSxDQUFDLElBQU1KLHVEQUFXQSxJQUFJLEVBQUU7SUFFN0MsTUFBTWlCLGNBQWNaLGtEQUFXQSxDQUFDO1FBQzlCLElBQUk7WUFDRixNQUFNYSxXQUFXLE1BQU1GLE1BQU1HLEdBQUcsQ0FBQyxHQUFZLE9BQVROLFdBQVk7Z0JBQzlDTyxRQUFRO29CQUNOQyxTQUFTQyxrQ0FBZ0M7Z0JBQzNDO1lBQ0Y7WUFFQVAsU0FBU0csU0FBU08sSUFBSSxDQUFDQyxPQUFPO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztJQUNGLEdBQUc7UUFBQ1g7UUFBT0g7S0FBUztJQUVwQiw0Q0FBNEM7SUFDNUNYLGdEQUFTQSxDQUFDO1FBQ1JlO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVd0QixnRkFBb0I7OzBCQUNsQyw4REFBQ3dCO2dCQUFPRixXQUFXdEIsMkVBQWU7MEJBQUdHOzs7Ozs7MEJBQ3JDLDhEQUFDa0I7Z0JBQUlDLFdBQVd0QiwwRUFBYzswQkFDM0JNLGtCQUFBQSw0QkFBQUEsTUFDR3FCLE1BQU0sQ0FDTixDQUFDQyxPQUFTQSxLQUFLQyxXQUFXLEtBQUssUUFBUUQsS0FBS0UsYUFBYSxLQUFLLE1BRS9EQyxHQUFHLENBQUMsQ0FBQ0gsTUFBTUk7b0JBQ1YsSUFBSTVCLFNBQVM7d0JBQ1gsSUFBSTRCLFFBQVEsSUFBSTs0QkFDZCxxQkFDRSw4REFBQ2xDLGtFQUFZQTtnQ0FBYWtDLE9BQU9BLFFBQVE7Z0NBQUdKLE1BQU1BOytCQUEvQkk7Ozs7O3dCQUV2QjtvQkFDRixPQUFPO3dCQUNMLHFCQUNFLDhEQUFDakMsb0RBQUtBOzRCQUFhRyxhQUFhQTs0QkFBYTBCLE1BQU1BOzJCQUF2Q0k7Ozs7O29CQUVoQjtnQkFDRjs7Ozs7Ozs7Ozs7O0FBSVYsRUFBRTtHQXJEVy9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3g/NzFlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBnZXRJbnN0YW5jZSBmcm9tIFwiQC91dGlscy9heGlvXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlZENhcmQgZnJvbSBcIi4uL0ZlYXR1cmVkQ2FyZC9GZWF0dXJlZENhcmRcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiLi4vQ2FyZHMvQ2FyZHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DYXJkcy5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgTW92aWVTZWN0aW9uUHJvcHMge1xuICBkZWZhdWx0Q2FyZD86IGJvb2xlYW47XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgdG9wTGlzdD86IGJvb2xlYW47XG4gIGVuZHBvaW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNlY3Rpb25zOiBSZWFjdC5GQzxNb3ZpZVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBkZWZhdWx0Q2FyZCA9IHRydWUsXG4gIGhlYWRpbmcsXG4gIHRvcExpc3QgPSBmYWxzZSxcbiAgZW5kcG9pbnQsXG59KSA9PiB7XG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGU8TWVkaWFbXT4oW10pO1xuXG4gIGNvbnN0IGF4aW9zID0gdXNlTWVtbygoKSA9PiBnZXRJbnN0YW5jZSgpLCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hNb3ZpZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2VuZHBvaW50fWAsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYXBpX2tleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVE1EQl9LRVksXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgc2V0TWVkaWEocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vdmllczpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfSwgW2F4aW9zLCBlbmRwb2ludF0pO1xuXG4gIC8vIEZldGNoIGRhdGEgb25seSB3aGVuIHRoZSBlbmRwb2ludCBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29udGFpbmVyfT5cbiAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PntoZWFkaW5nfTwvc3Ryb25nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkUm93fT5cbiAgICAgICAge21lZGlhXG4gICAgICAgICAgPy5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5wb3N0ZXJfcGF0aCAhPT0gbnVsbCAmJiBpdGVtLmJhY2tkcm9wX3BhdGggIT09IG51bGxcbiAgICAgICAgICApXG4gICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b3BMaXN0KSB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZENhcmQga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4ICsgMX0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkcyBrZXk9e2luZGV4fSBkZWZhdWx0Q2FyZD17ZGVmYXVsdENhcmR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0SW5zdGFuY2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZUNhbGxiYWNrIiwiRmVhdHVyZWRDYXJkIiwiQ2FyZHMiLCJzdHlsZXMiLCJNb3ZpZVNlY3Rpb25zIiwiZGVmYXVsdENhcmQiLCJoZWFkaW5nIiwidG9wTGlzdCIsImVuZHBvaW50IiwibWVkaWEiLCJzZXRNZWRpYSIsImF4aW9zIiwiZmV0Y2hNb3ZpZXMiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsImFwaV9rZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVE1EQl9LRVkiLCJkYXRhIiwicmVzdWx0cyIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImxpc3RDb250YWluZXIiLCJzdHJvbmciLCJjYXRlZ29yeSIsImNhcmRSb3ciLCJmaWx0ZXIiLCJpdGVtIiwicG9zdGVyX3BhdGgiLCJiYWNrZHJvcF9wYXRoIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});