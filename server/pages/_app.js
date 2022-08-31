"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 603:
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
;// CONCATENATED MODULE: ./components/layouts/Navbar.jsx

function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-neutral-100",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "padding-block-500 fs-700",
                    children: [
                        "Saige",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                color: "#2bb449"
                            },
                            children: "QA"
                        })
                    ]
                })
            })
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(652);
;// CONCATENATED MODULE: ./components/layouts/Sidebar.jsx




const SIDEBAR_LINKS = [
    {
        id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5e",
        link: "/dashboard/practice-overview",
        title: "Home",
        icon: ""
    },
    {
        id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5ee",
        link: "/",
        title: "Home1",
        icon: ""
    },
    {
        id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eee",
        link: "/",
        title: "Home2",
        icon: ""
    },
    {
        id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eeee",
        link: "/",
        title: "Home3",
        icon: ""
    }, 
];
function SideBar() {
    const router = (0,router_.useRouter)();
    const { 0: activeLink , 1: setActiveLink  } = (0,external_react_.useState)("46f7dc9b-e75d-40e0-8d14-1e7334d16d5e");
    const handleActiveRoute = (link)=>{
        console.log(link);
        setActiveLink(link.id);
        router.push(link.link);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        style: {
            position: "fixed",
            height: "100%",
            width: "75px",
            background: "var(--clr-sidebar-bg)",
            padding: "20px 0"
        },
        children: SIDEBAR_LINKS.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `sidebar__link ${activeLink === link.id ? "active" : null}`,
                onClick: ()=>handleActiveRoute(link),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "triangle1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sidebar__link_icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiHome, {
                            size: 25,
                            color: activeLink === link.id ? "black" : "white"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "triangle2"
                    })
                ]
            }, link.id))
    });
};

;// CONCATENATED MODULE: ./components/layouts/MainLayout.jsx




function MainLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SideBar, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                style: {
                    marginLeft: "75px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./contexts/BreadcrumbContext.jsx
var BreadcrumbContext = __webpack_require__(184);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbContext/* BreadcrumbProvider */.i, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MainLayout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

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
var __webpack_exports__ = __webpack_require__.X(0, [184], () => (__webpack_exec__(603)));
module.exports = __webpack_exports__;

})();