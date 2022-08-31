"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ BreadcrumbContext),
/* harmony export */   "i": () => (/* binding */ BreadcrumbProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_BreadcrumbReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(280);



const BreadcrumbContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const BreadcrumbProvider = ({ children =null  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_BreadcrumbReducer__WEBPACK_IMPORTED_MODULE_2__/* .reducer */ .I6, _reducers_BreadcrumbReducer__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E3);
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        state,
        dispatch
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreadcrumbContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E3": () => (/* binding */ initialState),
/* harmony export */   "GJ": () => (/* binding */ setBreadcrumb),
/* harmony export */   "I6": () => (/* binding */ reducer)
/* harmony export */ });
/* unused harmony export types */
const types = {
    CHANGE_BREADCRUMB: "CHANGE_BREADCRUMB"
};
const initialState = [
    {
        title: "Dashboard",
        link: "dashboard",
        current: true
    }, 
];
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case types.CHANGE_BREADCRUMB:
            return state = action.payload;
        default:
            {
                throw new Error(`Unhandled action type: ${action.type}`);
            }
    }
};
const setBreadcrumb = (payload = null)=>({
        type: types.CHANGE_BREADCRUMB,
        payload
    });


/***/ })

};
;