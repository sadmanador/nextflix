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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_axio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/axio */ \"(app-pages-browser)/./src/utils/axio.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FeaturedCard/FeaturedCard */ \"(app-pages-browser)/./src/components/FeaturedCard/FeaturedCard.tsx\");\n/* harmony import */ var _Cards_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Cards.module.scss */ \"(app-pages-browser)/./src/styles/Cards.module.scss\");\n/* harmony import */ var _styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ MovieSections auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { defaultCard = true, heading, topList = false, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const axios = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_utils_axio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), []);\n    const fetchMovies = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            const response = await axios.get(\"\".concat(endpoint), {\n                params: {\n                    api_key: \"c7cf1258a5aa723e8a98f08f639e86b6\"\n                }\n            });\n            setMedia(response.data.results);\n        } catch (error) {\n            console.error(\"Error fetching movies:\", error);\n        }\n        fetchMovies();\n    }, [\n        endpoint\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().listContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().category),\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Cards_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cardRow),\n                children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>{\n                    if (topList) {\n                        if (index < 10) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                index: index + 1,\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, undefined);\n                        }\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_Cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            defaultCard: defaultCard,\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"PxyEFHjkXPR7cUp2yjY9SHWu9Ss=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDa0M7QUFDakI7QUFDckI7QUFDaUI7QUFTN0MsTUFBTVEsZ0JBQTZDO1FBQUMsRUFDekRDLGNBQWMsSUFBSSxFQUNsQkMsT0FBTyxFQUNQQyxVQUFVLEtBQUssRUFDZkMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBVSxFQUFFO0lBRTlDLE1BQU1hLFFBQVFaLDhDQUFPQSxDQUFDLElBQU1ILHVEQUFXQSxJQUFJLEVBQUU7SUFFN0MsTUFBTWdCLGNBQWNaLGtEQUFXQSxDQUFDO1FBQzlCLElBQUk7WUFDRixNQUFNYSxXQUFXLE1BQU1GLE1BQU1HLEdBQUcsQ0FBQyxHQUFZLE9BQVROLFdBQVk7Z0JBQzlDTyxRQUFRO29CQUNOQyxTQUFTQyxrQ0FBZ0M7Z0JBQzNDO1lBQ0Y7WUFFQVAsU0FBU0csU0FBU08sSUFBSSxDQUFDQyxPQUFPO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztRQUNBVjtJQUNGLEdBQUc7UUFBQ0o7S0FBUztJQUliLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBV3RCLGdGQUFvQjs7MEJBQ2xDLDhEQUFDd0I7Z0JBQU9GLFdBQVd0QiwyRUFBZTswQkFBR0c7Ozs7OzswQkFDckMsOERBQUNrQjtnQkFBSUMsV0FBV3RCLDBFQUFjOzBCQUMzQk0sa0JBQUFBLDRCQUFBQSxNQUNHcUIsTUFBTSxDQUNOLENBQUNDLE9BQVNBLEtBQUtDLFdBQVcsS0FBSyxRQUFRRCxLQUFLRSxhQUFhLEtBQUssTUFFL0RDLEdBQUcsQ0FBQyxDQUFDSCxNQUFNSTtvQkFDVixJQUFJNUIsU0FBUzt3QkFDWCxJQUFJNEIsUUFBUSxJQUFJOzRCQUNkLHFCQUNFLDhEQUFDbEMsa0VBQVlBO2dDQUFha0MsT0FBT0EsUUFBUTtnQ0FBR0osTUFBTUE7K0JBQS9CSTs7Ozs7d0JBRXZCO29CQUNGLE9BQU87d0JBQ0wscUJBQ0UsOERBQUNqQyxvREFBS0E7NEJBQWFHLGFBQWFBOzRCQUFhMEIsTUFBTUE7MkJBQXZDSTs7Ozs7b0JBRWhCO2dCQUNGOzs7Ozs7Ozs7Ozs7QUFJVixFQUFFO0dBbkRXL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVTZWN0aW9ucy9Nb3ZpZVNlY3Rpb25zLnRzeD83MWVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IGdldEluc3RhbmNlIGZyb20gXCJAL3V0aWxzL2F4aW9cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmVkQ2FyZCBmcm9tIFwiLi4vRmVhdHVyZWRDYXJkL0ZlYXR1cmVkQ2FyZFwiO1xuaW1wb3J0IENhcmRzIGZyb20gXCIuLi9DYXJkcy9DYXJkc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhcmRzLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBNb3ZpZVNlY3Rpb25Qcm9wcyB7XG4gIGRlZmF1bHRDYXJkPzogYm9vbGVhbjtcbiAgaGVhZGluZzogc3RyaW5nO1xuICB0b3BMaXN0PzogYm9vbGVhbjtcbiAgZW5kcG9pbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmllU2VjdGlvbnM6IFJlYWN0LkZDPE1vdmllU2VjdGlvblByb3BzPiA9ICh7XG4gIGRlZmF1bHRDYXJkID0gdHJ1ZSxcbiAgaGVhZGluZyxcbiAgdG9wTGlzdCA9IGZhbHNlLFxuICBlbmRwb2ludCxcbn0pID0+IHtcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZTxNZWRpYVtdPihbXSk7XG5cbiAgY29uc3QgYXhpb3MgPSB1c2VNZW1vKCgpID0+IGdldEluc3RhbmNlKCksIFtdKTtcblxuICBjb25zdCBmZXRjaE1vdmllcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7ZW5kcG9pbnR9YCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UTURCX0tFWSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRNZWRpYShyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW92aWVzOlwiLCBlcnJvcik7XG4gICAgfVxuICAgIGZldGNoTW92aWVzKCk7XG4gIH0sIFtlbmRwb2ludF0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbnRhaW5lcn0+XG4gICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT57aGVhZGluZ308L3N0cm9uZz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFJvd30+XG4gICAgICAgIHttZWRpYVxuICAgICAgICAgID8uZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ucG9zdGVyX3BhdGggIT09IG51bGwgJiYgaXRlbS5iYWNrZHJvcF9wYXRoICE9PSBudWxsXG4gICAgICAgICAgKVxuICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodG9wTGlzdCkge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPCAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RmVhdHVyZWRDYXJkIGtleT17aW5kZXh9IGluZGV4PXtpbmRleCArIDF9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2FyZHMga2V5PXtpbmRleH0gZGVmYXVsdENhcmQ9e2RlZmF1bHRDYXJkfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsIkZlYXR1cmVkQ2FyZCIsIkNhcmRzIiwic3R5bGVzIiwiTW92aWVTZWN0aW9ucyIsImRlZmF1bHRDYXJkIiwiaGVhZGluZyIsInRvcExpc3QiLCJlbmRwb2ludCIsIm1lZGlhIiwic2V0TWVkaWEiLCJheGlvcyIsImZldGNoTW92aWVzIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJhcGlfa2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RNREJfS0VZIiwiZGF0YSIsInJlc3VsdHMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsaXN0Q29udGFpbmVyIiwic3Ryb25nIiwiY2F0ZWdvcnkiLCJjYXJkUm93IiwiZmlsdGVyIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwiYmFja2Ryb3BfcGF0aCIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});