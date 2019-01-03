(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    157: function(module, exports, __webpack_require__) {
      __webpack_require__(158),
        __webpack_require__(237),
        (module.exports = __webpack_require__(238));
    },
    238: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            26
          );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            function() {
              __webpack_require__(357);
            },
            module
          );
        }.call(this, __webpack_require__(63)(module));
    },
    357: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(0);
          var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            26
          );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(
            function() {
              __webpack_require__(358), __webpack_require__(359);
            },
            module
          );
        }.call(this, __webpack_require__(63)(module));
    },
    358: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              26
            ),
            stories_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              98
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Theme",
            module
          )
            .add("UI theme", function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                stories_components__WEBPACK_IMPORTED_MODULE_2__.a,
                null
              );
            })
            .add("Defaults", function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                stories_components__WEBPACK_IMPORTED_MODULE_2__.b,
                null
              );
            });
        }.call(this, __webpack_require__(63)(module));
    },
    359: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              26
            ),
            components_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              99
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "UI Elements",
            module
          )
            .add("Modal", function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                components_layouts__WEBPACK_IMPORTED_MODULE_2__.b,
                { headerTitle: "React Design System" },
                "Building Design System with React is pretty cool"
              );
            })
            .add("Burger", function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                components_layouts__WEBPACK_IMPORTED_MODULE_2__.a,
                null
              );
            });
        }.call(this, __webpack_require__(63)(module));
    },
    378: function(module, exports, __webpack_require__) {},
    98: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        colors = {
          primary: {
            dark: "#3A424C",
            primary: "#20BCFB",
            white: "#FFFFFF",
            mustard: "#F4D849",
            gray: "#333333"
          },
          sec: {
            skyblue: "#09B7D6",
            green: "#98e064",
            yellow: "#f98c42",
            orange: "#f98c42",
            red: "#f44336"
          },
          neutral: { darkWhite: "#eceaf1", black: "#000" }
        },
        colorStory_renderColorGroup = function(type) {
          return react_default.a.createElement(
            "ul",
            { style: { listStyle: "none" } },
            ((object = colors[type]),
            (callback = function(key, value) {
              return react_default.a.createElement(
                "li",
                { style: { backgroundColor: value }, key: key },
                value
              );
            }),
            Object.keys(object).map(function(key) {
              return callback(key, object[key]);
            }))
          );
          var object, callback;
        },
        colorStory_ColorStory = function() {
          return react_default.a.createElement(
            "div",
            { className: "colors-page" },
            react_default.a.createElement(
              "div",
              { className: "styleguide-block" },
              react_default.a.createElement("h4", null, "Primary"),
              colorStory_renderColorGroup("primary")
            ),
            react_default.a.createElement(
              "div",
              { className: "styleguide-block" },
              react_default.a.createElement("h4", null, "Secondary"),
              colorStory_renderColorGroup("sec")
            ),
            react_default.a.createElement(
              "div",
              { className: "styleguide-block" },
              react_default.a.createElement("h4", null, "Neutral"),
              colorStory_renderColorGroup("neutral")
            )
          );
        },
        colorStory = colorStory_ColorStory;
      (colorStory_ColorStory.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ColorStory"
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/stories/components/colorStory/colorStory.js"
          ] = {
            name: "ColorStory",
            docgenInfo: colorStory_ColorStory.__docgenInfo,
            path: "src/stories/components/colorStory/colorStory.js"
          });
      var defaults = {
          fontFamily: {
            sansSerif: "Noto Sans,sans-serif",
            base: "Noto Sans,sans-serif"
          },
          fontSize: { xs: 12, sm: 14, md: 21, lg: 28, hg: 48 },
          fontWeight: { light: 300, base: 400, medium: 500, bold: 600 },
          lineHeight: { base: 1.33, heading: 1.2 },
          transition: {
            base: "all .2s ease-in-out",
            opacity: "opacity .15s linear"
          }
        },
        defaults_renderDefaultGroup = function(type) {
          return react_default.a.createElement(
            "table",
            null,
            react_default.a.createElement(
              "tbody",
              null,
              ((object = defaults[type]),
              (callback = function(key, value) {
                return react_default.a.createElement(
                  "tr",
                  { key: key },
                  react_default.a.createElement("td", null, key),
                  react_default.a.createElement("td", null, value)
                );
              }),
              Object.keys(object).map(function(key) {
                return callback(key, object[key]);
              }))
            )
          );
          var object, callback;
        },
        defaults_DefaultThemeStory = function() {
          return react_default.a.createElement(
            "div",
            null,
            react_default.a.createElement(
              "div",
              { style: { marginBottom: "24px" } },
              react_default.a.createElement("h4", null, "Font Family"),
              defaults_renderDefaultGroup("fontFamily")
            ),
            react_default.a.createElement(
              "div",
              { style: { marginBottom: "24px" } },
              react_default.a.createElement("h4", null, "Font Size"),
              defaults_renderDefaultGroup("fontSize")
            ),
            react_default.a.createElement(
              "div",
              { style: { marginBottom: "24px" } },
              react_default.a.createElement("h4", null, "Font Weight"),
              defaults_renderDefaultGroup("fontWeight")
            ),
            react_default.a.createElement(
              "div",
              { style: { marginBottom: "24px" } },
              react_default.a.createElement("h4", null, "Line Height"),
              defaults_renderDefaultGroup("lineHeight")
            ),
            react_default.a.createElement(
              "div",
              { style: { marginBottom: "24px" } },
              react_default.a.createElement("h4", null, "Transitions"),
              defaults_renderDefaultGroup("transition")
            )
          );
        },
        defaults_defaults = defaults_DefaultThemeStory;
      (defaults_DefaultThemeStory.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "DefaultThemeStory"
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/stories/components/defaults/defaults.js"
          ] = {
            name: "DefaultThemeStory",
            docgenInfo: defaults_DefaultThemeStory.__docgenInfo,
            path: "src/stories/components/defaults/defaults.js"
          }),
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return colorStory;
        }),
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return defaults_defaults;
        });
    },
    99: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var taggedTemplateLiteral = __webpack_require__(41),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_cjs = __webpack_require__(42),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs
        );
      function _templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  .hamburger-icon {\n    width: ",
          "px;\n    height: ",
          "px;\n    position: relative;\n    display: block;\n\n    .line {\n      display: block;\n      background: ",
          ";\n      width: ",
          "px;\n      height: ",
          "px;\n      position: absolute;\n      left: 0;\n      border-radius: calc((",
          "px / 2));\n      transition: all ",
          "s;\n      -webkit-transition: all ",
          "s;\n      -moz-transition: all ",
          "s;\n\n      &.line-1 {\n        top: 0;\n      }\n      &.line-2 {\n        top: 50%;\n      }\n      &.line-3 {\n        top: 100%;\n      }\n    }\n    &:hover,\n    &:focus {\n      .line-1 {\n        transform: translateY(",
          "px / 2 * -1);\n        -webkit-transform: translateY(",
          "px / 2 * -1);\n        -moz-transform: translateY(",
          "px / 2 * -1);\n      }\n      .line-3 {\n        transform: translateY(",
          "px / 2);\n        -webkit-transform: translateY(",
          "px / 2);\n        -moz-transform: translateY(",
          "px / 2);\n      }\n    }\n    &.active {\n      .line-1 {\n        transform: translateY(",
          "px)\n          translateX(",
          "px) rotate(45deg);\n        -webkit-transform: translateY(",
          "px)\n          translateX(",
          "px) rotate(45deg);\n        -moz-transform: translateY(",
          "px)\n          translateX(",
          "px) rotate(45deg);\n      }\n      .line-2 {\n        opacity: 0;\n      }\n      .line-3 {\n        transform: translateY(",
          "px)\n          translateX(",
          "px) rotate(-45deg);\n        -webkit-transform: translateY(",
          "px)\n          translateX(",
          "px) rotate(-45deg);\n        -moz-transform: translateY(",
          "px)\n          translateX(",
          "px) rotate(-45deg);\n      }\n    }\n  }\n"
        ]);
        return (
          (_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var burger_Burger = function(props) {
        var translateY = props.heightIcon / 2;
        return react_default.a.createElement(
          Content,
          {
            color: props.color,
            heightIcon: props.heightIcon,
            widthLine: props.widthLine,
            heightLine: props.heightLine,
            transitionTime: props.transitionTime,
            translateX: 0,
            translateY: translateY
          },
          react_default.a.createElement(
            "a",
            {
              title: "Menu",
              className: props.isOpen
                ? "hamburger-icon active"
                : "hamburger-icon"
            },
            react_default.a.createElement("span", { className: "line line-1" }),
            react_default.a.createElement("span", { className: "line line-2" }),
            react_default.a.createElement("span", { className: "line line-3" })
          )
        );
      };
      burger_Burger.defaultProps = {
        color: "#3A424C",
        heightIcon: "10",
        widthLine: "18",
        heightLine: "2",
        transitionTime: "0.4"
      };
      var burger = burger_Burger,
        Content = styled_components_browser_cjs_default.a.div(
          _templateObject(),
          function(props) {
            return props.widthLine;
          },
          function(props) {
            return props.heightIcon;
          },
          function(props) {
            return props.color;
          },
          function(props) {
            return props.widthLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.transitionTime;
          },
          function(props) {
            return props.transitionTime;
          },
          function(props) {
            return props.transitionTime;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.heightLine;
          },
          function(props) {
            return props.translateY;
          },
          function(props) {
            return props.translateX;
          },
          function(props) {
            return props.translateY;
          },
          function(props) {
            return props.translateX;
          },
          function(props) {
            return props.translateY;
          },
          function(props) {
            return props.translateX;
          },
          function(props) {
            return -1 * props.translateY;
          },
          function(props) {
            return -1 * props.translateX;
          },
          function(props) {
            return -1 * props.translateY;
          },
          function(props) {
            return props.translateX - 1;
          },
          function(props) {
            return -1 * props.translateY;
          },
          function(props) {
            return props.translateX;
          }
        );
      (burger_Burger.__docgenInfo = {
        description:
          "@render react\n@name Burger\n@example\n<Burger isOpen={false} heightIcon={10} widthLine={18} heightLine={2} transitionTime={0.4} />",
        methods: [],
        displayName: "Burger",
        props: {
          color: {
            defaultValue: { value: '"#3A424C"', computed: !1 },
            required: !1
          },
          heightIcon: {
            defaultValue: { value: '"10"', computed: !1 },
            required: !1
          },
          widthLine: {
            defaultValue: { value: '"18"', computed: !1 },
            required: !1
          },
          heightLine: {
            defaultValue: { value: '"2"', computed: !1 },
            required: !1
          },
          transitionTime: {
            defaultValue: { value: '"0.4"', computed: !1 },
            required: !1
          }
        }
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/layouts/burger/burger.js"
          ] = {
            name: "Burger",
            docgenInfo: burger_Burger.__docgenInfo,
            path: "src/components/layouts/burger/burger.js"
          });
      var classCallCheck = __webpack_require__(151),
        createClass = __webpack_require__(152),
        possibleConstructorReturn = __webpack_require__(155),
        getPrototypeOf = __webpack_require__(153),
        inherits = __webpack_require__(156),
        assertThisInitialized = __webpack_require__(53),
        lib = __webpack_require__(154),
        lib_default = __webpack_require__.n(lib);
      __webpack_require__(378);
      function _templateObject3() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n    border-radius: 50%;\n    background-color: rgba(22, 45, 61, 0.2);\n  \tdisplay: block;\n    height: 24px;\n    width: 24px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 10px;\n    opacity: 0.6;\n    cursor: pointer;\n    transition: all .2s ease-in;\n    \n    &:hover{\n       background-color: rgba(22, 45, 61, 0.5);\n    }   \n    \n    &:before,&:after{\n    \tcontent: '';\n    height: 12px;\n    width: 2px;\n    background: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 6px;\n    }\n    \n    &:before{\n    transform: translate(-50%,-50%) rotate(-45deg);\n    }\n    \n    &:after{\n    transform: translate(-50%,-50%) rotate(45deg);\n    }\n}\n"
        ]);
        return (
          (_templateObject3 = function() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  padding: 36px 18px;\n  background: #fff;\n  border-radius: 0px 0px 8px 8px;\n"
        ]);
        return (
          (_templateObject2 = function() {
            return data;
          }),
          data
        );
      }
      function modal_templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n  color: #fff;\n  background: ",
          ";\n  position: relative;\n  padding: 18px 18px;\n  border-radius: 8px 8px 0px 0px;\n  font-weight: 600;\n"
        ]);
        return (
          (modal_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var modal_modal = (function(_Component) {
          function Modal(props) {
            var _this;
            return (
              Object(classCallCheck.a)(this, Modal),
              ((_this = Object(possibleConstructorReturn.a)(
                this,
                Object(getPrototypeOf.a)(Modal).call(this, props)
              )).state = { showModal: !0 }),
              (_this.handleClose = _this.handleClose.bind(
                Object(assertThisInitialized.a)(
                  Object(assertThisInitialized.a)(_this)
                )
              )),
              _this
            );
          }
          return (
            Object(inherits.a)(Modal, _Component),
            Object(createClass.a)(Modal, [
              {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                  this.setState({ showModal: nextProps.isOpen });
                }
              },
              {
                key: "handleClose",
                value: function() {
                  this.props.handleClose();
                }
              },
              {
                key: "render",
                value: function() {
                  var _this$props = this.props,
                    shouldCloseOnOverlayClick = (_this$props.isOpen,
                    _this$props.onRequestClose,
                    _this$props.shouldCloseOnOverlayClick),
                    headerTitle = _this$props.headerTitle,
                    themeColor = _this$props.themeColor,
                    children = _this$props.children;
                  _this$props.handleClose;
                  return react_default.a.createElement(
                    lib_default.a,
                    {
                      className: "modal-content",
                      isOpen: this.state.showModal,
                      onRequestClose: this.handleClose,
                      shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
                      ariaHideApp: !1
                    },
                    react_default.a.createElement(
                      Header,
                      { themeColor: themeColor },
                      headerTitle,
                      react_default.a.createElement(CloseIcon, {
                        onClick: this.handleClose
                      })
                    ),
                    react_default.a.createElement(Body, null, children)
                  );
                }
              }
            ]),
            Modal
          );
        })(react.Component),
        Header = styled_components_browser_cjs_default.a.div(
          modal_templateObject(),
          function(props) {
            return props.themeColor ? props.themeColor : "fff";
          }
        ),
        Body = styled_components_browser_cjs_default.a.div(_templateObject2()),
        CloseIcon = styled_components_browser_cjs_default.a.span(
          _templateObject3()
        );
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return burger;
      }),
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return modal_modal;
        });
    }
  },
  [[157, 1, 2]]
]);
//# sourceMappingURL=main.9fdafea572b806f96cad.bundle.js.map
