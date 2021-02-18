webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/CoverImage.js":
/*!**********************************!*\
  !*** ./components/CoverImage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoverImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ \"./components/date-formatter.js\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tag */ \"./components/Tag.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/alan/Desktop/mygithub/3Alan.github.io/components/CoverImage.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction CoverImage(_ref) {\n  _s();\n\n  var title = _ref.title,\n      src = _ref.src,\n      slug = _ref.slug,\n      date = _ref.date;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(router.asPath),\n      pathName = _useState[0];\n\n  var image = __jsx(\"img\", {\n    src: src,\n    alt: \"Cover Image for \".concat(title),\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('w-full h-72 sm:h-96', {\n      'hover:shadow-medium transition-shadow duration-200': slug,\n      'shadow-small': slug\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  });\n\n  return __jsx(\"div\", {\n    className: \"relative sm:mx-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"bg-black bg-opacity-60 w-full h-72 sm:h-96 absolute px-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"lg:max-w-screen-lg h-full mx-auto text-white flex flex-col justify-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-2 text-2xl font-medium sm:text-6xl sm:mb-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, title), __jsx(\"div\", {\n    className: \"inline-flex items-center mb-1 sm:mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"text-sm font-serif italic sm:text-xl mr-4 sm:mr-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }, __jsx(_date_formatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    dateString: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 29\n    }\n  })), __jsx(\"div\", {\n    id: pathName,\n    className: \"leancloud_visitors text-sm inline-flex items-center\",\n    \"data-flag-title\": title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__[\"FaEye\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 29\n    }\n  }), __jsx(\"span\", {\n    className: \"leancloud-visitors-count ml-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 29\n    }\n  }))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, __jsx(_Tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: \"\\u524D\\u7AEF\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  }), __jsx(_Tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: \"\\u524D\\u7AEF\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 25\n    }\n  }), __jsx(_Tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: \"\\u524D\\u7AEF\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 25\n    }\n  })))), slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    \"aria-label\": title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, image)) : image);\n}\n\n_s(CoverImage, \"THWHGNAlNbPFG+zcG/uesriA5bo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = CoverImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"CoverImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3ZlckltYWdlLmpzP2QzMmUiXSwibmFtZXMiOlsiQ292ZXJJbWFnZSIsInRpdGxlIiwic3JjIiwic2x1ZyIsImRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImFzUGF0aCIsInBhdGhOYW1lIiwiaW1hZ2UiLCJjbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQWdEO0FBQUE7O0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxHQUFtQixRQUFuQkEsR0FBbUI7QUFBQSxNQUFkQyxJQUFjLFFBQWRBLElBQWM7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDM0QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEMkQsa0JBRXhDQyxzREFBUSxDQUFDRixNQUFNLENBQUNHLE1BQVIsQ0FGZ0M7QUFBQSxNQUVwREMsUUFGb0Q7O0FBRzNELE1BQU1DLEtBQUssR0FDUDtBQUNJLE9BQUcsRUFBRVIsR0FEVDtBQUVJLE9BQUcsNEJBQXFCRCxLQUFyQixDQUZQO0FBR0ksYUFBUyxFQUFFVSxpREFBRSxDQUFDLHFCQUFELEVBQXdCO0FBQ2pDLDREQUFzRFIsSUFEckI7QUFFakMsc0JBQWdCQTtBQUZpQixLQUF4QixDQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7O0FBVUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdFRixLQUFoRSxDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQWUsY0FBVSxFQUFFRyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQ0ksTUFBRSxFQUFFSyxRQURSO0FBRUksYUFBUyxFQUFDLHFEQUZkO0FBR0ksdUJBQWlCUixLQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSTtBQUFNLGFBQVMsRUFBQywrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBSkosQ0FGSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFLLFFBQUksRUFBQyxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsNENBQUQ7QUFBSyxRQUFJLEVBQUMsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDRDQUFEO0FBQUssUUFBSSxFQUFDLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBaEJKLENBREosQ0FESixFQXlCS0UsSUFBSSxHQUNELE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLG1CQUFZQSxJQUFaLENBQVI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGtCQUFZRixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJTLEtBQXZCLENBREosQ0FEQyxHQUtEQSxLQTlCUixDQURKO0FBbUNIOztHQWhEdUJWLFU7VUFDTE0scUQ7OztLQURLTixVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db3ZlckltYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gJy4vZGF0ZS1mb3JtYXR0ZXInO1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5pbXBvcnQgeyBGYUV5ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3ZlckltYWdlKHsgdGl0bGUsIHNyYywgc2x1ZywgZGF0ZSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3BhdGhOYW1lXSA9IHVzZVN0YXRlKHJvdXRlci5hc1BhdGgpO1xuICAgIGNvbnN0IGltYWdlID0gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKCd3LWZ1bGwgaC03MiBzbTpoLTk2Jywge1xuICAgICAgICAgICAgICAgICdob3ZlcjpzaGFkb3ctbWVkaXVtIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTIwMCc6IHNsdWcsXG4gICAgICAgICAgICAgICAgJ3NoYWRvdy1zbWFsbCc6IHNsdWdcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpteC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktNjAgdy1mdWxsIGgtNzIgc206aC05NiBhYnNvbHV0ZSBweC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy1zY3JlZW4tbGcgaC1mdWxsIG14LWF1dG8gdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LW1lZGl1bSBzbTp0ZXh0LTZ4bCBzbTptYi04XCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBtYi0xIHNtOm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlcmlmIGl0YWxpYyBzbTp0ZXh0LXhsIG1yLTQgc206bXItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUZvcm1hdHRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3BhdGhOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlYW5jbG91ZF92aXNpdG9ycyB0ZXh0LXNtIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mbGFnLXRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFFeWUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWFuY2xvdWQtdmlzaXRvcnMtY291bnQgbWwtMVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBuYW1lPVwi5YmN56uvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgbmFtZT1cIuWJjeerr1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnIG5hbWU9XCLliY3nq69cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NsdWcgPyAoXG4gICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9e3RpdGxlfT57aW1hZ2V9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CoverImage.js\n");

/***/ })

})