"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(308);
;// CONCATENATED MODULE: external "localStorage"
const external_localStorage_namespaceObject = require("localStorage");
var external_localStorage_default = /*#__PURE__*/__webpack_require__.n(external_localStorage_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/locale"
const locale_namespaceObject = require("@material-ui/core/locale");
;// CONCATENATED MODULE: ./components/theme.js


const darkTheme = (0,styles_.createMuiTheme)({
    palette: {
        primary: {
            main: "#FF4053",
            contrastText: "#fff"
        },
        secondary: {
            main: "#19857b",
            contrastText: "#fff"
        },
        error: {
            main: "#556cd6"
        },
        type: "dark",
        background: {
            paper: "#161A2B"
        },
        text: {
            primary: "#fff"
        },
        action: {
            disabledBackground: "#8A8C99"
        },
        info: {
            main: "#82678f"
        }
    }
}, locale_namespaceObject.zhCN);
const lightTheme = (0,styles_.createMuiTheme)({
    palette: {
        primary: {
            main: "#FF4053",
            contrastText: "#fff"
        },
        secondary: {
            main: "#19857b",
            contrastText: "#000"
        },
        type: "light",
        text: {
            primary: "#000"
        },
        background: {
            paper: "#fff"
        },
        action: {
            disabledBackground: "#bababa"
        },
        error: {
            main: "#556cd6"
        }
    }
}, locale_namespaceObject.zhCN);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(130);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/head.js



const Head = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "\u9F85\u7259\u68A8\u82B1\u73CD"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "content-type",
                content: "text/html; charset=utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: "\u9F85\u7259\u68A8\u82B1\u73CD"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "\u9F85\u7259\u68A8\u82B1\u73CD"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    })
;
/* harmony default export */ const head = (Head);

;// CONCATENATED MODULE: ./pages/_app.js








class MyApp extends app["default"] {
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(head, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
                    theme: external_localStorage_default().getItem("THEME") === "light" ? lightTheme : darkTheme,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        bgcolor: "background.paper",
                        color: "text.primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                minHeight: "100vh"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544], () => (__webpack_exec__(713)));
module.exports = __webpack_exports__;

})();