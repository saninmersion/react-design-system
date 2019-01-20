(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    12: function(n, e, t) {
      "use strict";
      var r = {
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
      };
      e.a = r;
    },
    15: function(n, e, t) {
      "use strict";
      var r = {
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
      };
      e.a = r;
    },
    24: function(n, e, t) {
      "use strict";
      var r = t(6),
        a = t(7),
        i = t(10),
        o = t(8),
        c = t(11),
        l = t(0),
        s = t.n(l),
        u = s.a.createContext(),
        f = {
          title: "React Design System",
          description: "Learning react is pretty awesome"
        },
        d = (function(n) {
          function e() {
            return (
              Object(r.a)(this, e),
              Object(i.a)(this, Object(o.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(c.a)(e, n),
            Object(a.a)(e, [
              {
                key: "render",
                value: function() {
                  var n = this.props.children;
                  return s.a.createElement(
                    u.Provider,
                    { value: { appDetail: f } },
                    n
                  );
                }
              }
            ]),
            e
          );
        })(l.Component),
        p = u.Consumer,
        h = function(n) {
          var e = function(e) {
            return s.a.createElement(p, null, function(t) {
              var r = t.appDetail;
              return s.a.createElement(
                n,
                Object.assign({}, e, { appDetail: r })
              );
            });
          };
          return (e.WrappedComponent = n), e;
        };
      t.d(e, "a", function() {
        return d;
      }),
        t.d(e, "b", function() {
          return h;
        });
    },
    31: function(n, e, t) {
      n.exports = t(52);
    },
    49: function(n, e, t) {},
    52: function(n, e, t) {
      "use strict";
      t.r(e);
      var r = t(0),
        a = t.n(r),
        i = t(13),
        o = t.n(i),
        c = t(6),
        l = t(7),
        s = t(10),
        u = t(8),
        f = t(11),
        d = t(55),
        p = t(58),
        h = t(57),
        b = t(4),
        m = t(3);
      function g() {
        var n = Object(b.a)([
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
          (g = function() {
            return n;
          }),
          n
        );
      }
      var x = function(n) {
        var e = n.heightIcon / 2;
        return a.a.createElement(
          v,
          {
            color: n.color,
            heightIcon: n.heightIcon,
            widthLine: n.widthLine,
            heightLine: n.heightLine,
            transitionTime: n.transitionTime,
            translateX: 0,
            translateY: e
          },
          a.a.createElement(
            "span",
            {
              title: "Menu",
              className: n.isOpen ? "hamburger-icon active" : "hamburger-icon"
            },
            a.a.createElement("span", { className: "line line-1" }),
            a.a.createElement("span", { className: "line line-2" }),
            a.a.createElement("span", { className: "line line-3" })
          )
        );
      };
      x.defaultProps = {
        color: "#3A424C",
        heightIcon: "10",
        widthLine: "18",
        heightLine: "2",
        transitionTime: "0.4"
      };
      var v = m.d.div(
          g(),
          function(n) {
            return n.widthLine;
          },
          function(n) {
            return n.heightIcon;
          },
          function(n) {
            return n.color;
          },
          function(n) {
            return n.widthLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.transitionTime;
          },
          function(n) {
            return n.transitionTime;
          },
          function(n) {
            return n.transitionTime;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.heightLine;
          },
          function(n) {
            return n.translateY;
          },
          function(n) {
            return n.translateX;
          },
          function(n) {
            return n.translateY;
          },
          function(n) {
            return n.translateX;
          },
          function(n) {
            return n.translateY;
          },
          function(n) {
            return n.translateX;
          },
          function(n) {
            return -1 * n.translateY;
          },
          function(n) {
            return -1 * n.translateX;
          },
          function(n) {
            return -1 * n.translateY;
          },
          function(n) {
            return n.translateX - 1;
          },
          function(n) {
            return -1 * n.translateY;
          },
          function(n) {
            return n.translateX;
          }
        ),
        w = t(14),
        y = t(27),
        k = t.n(y);
      t(49);
      function j() {
        var n = Object(b.a)([
          "\n    border-radius: 50%;\n    background-color: rgba(22, 45, 61, 0.2);\n  \tdisplay: block;\n    height: 24px;\n    width: 24px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 10px;\n    opacity: 0.6;\n    cursor: pointer;\n    transition: all .2s ease-in;\n    \n    &:hover{\n       background-color: rgba(22, 45, 61, 0.5);\n    }   \n    \n    &:before,&:after{\n    \tcontent: '';\n    height: 12px;\n    width: 2px;\n    background: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 6px;\n    }\n    \n    &:before{\n    transform: translate(-50%,-50%) rotate(-45deg);\n    }\n    \n    &:after{\n    transform: translate(-50%,-50%) rotate(45deg);\n    }\n}\n"
        ]);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = Object(b.a)([
          "\n  padding: 36px 18px;\n  background: #fff;\n  border-radius: 0px 0px 8px 8px;\n"
        ]);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = Object(b.a)([
          "\n  color: #fff;\n  background: ",
          ";\n  position: relative;\n  padding: 18px 18px;\n  border-radius: 8px 8px 0px 0px;\n  font-weight: 600;\n"
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      r.Component;
      var L = m.d.div(E(), function(n) {
          return n.themeColor ? n.themeColor : "fff";
        }),
        Y = m.d.div(O()),
        z = m.d.span(j()),
        C = function() {
          return "Loading...";
        };
      function S() {
        var n = Object(b.a)([
          "\n  font-size: 1rem;\n  position: relative;\n  .selection {\n    align-items: center;\n    ",
          ";\n\n    border-radius: calc(",
          " / 2);\n    box-sizing: border-box;\n    color: #f0f8ff;\n    cursor: pointer;\n    display: inline-flex;\n    height: ",
          ";\n    padding: 0 16px;\n    position: relative;\n\n    &__title {\n      margin-right: 6px;\n    }\n\n    &__icon {\n      display: inline-block;\n      vertical-align: middle;\n      margin-left: 6px;\n      ",
          ";\n\n      border-style: solid;\n    }\n  }\n\n  .menu-wrap {\n    padding-top: 6px;\n    position: absolute;\n    top: 100%;\n    left: 0px;\n    width: auto;\n    min-width: 184px;\n    z-index: 1000;\n    transition: all 300ms ease-in-out 0s;\n\n    ",
          ";\n    &__menu {\n      box-shadow: 0 2px 10px rgba(1, 73, 131, 0.28);\n      border-radius: 6px;\n      .menu-item {\n        cursor: pointer;\n        background-color: #f0f8ff;\n        padding: 10px 20px;\n        transition: all 0.2s ease-in 0s;\n\n        &:first-child {\n          border-radius: 6px 6px 0 0;\n        }\n        &:last-child {\n          border-radius: 0 0 6px 6px;\n        }\n\n        &:not(:last-child) {\n          border-bottom: 1px solid rgba(1, 73, 131, 0.1);\n        }\n\n        &:hover,\n        &--active {\n          color: #00529b;\n        }\n\n        &:hover {\n          background-color: #ddefff;\n        }\n      }\n    }\n  }\n"
        ]);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      r.Component;
      var X = m.d.div(
          S(),
          function(n) {
            return (
              n.hasBorderSelection &&
              " border: 1px solid rgba(255, 255, 255, 0.4)"
            );
          },
          "36px",
          "36px",
          function(n) {
            return n.menuVisible
              ? "\n          border-color: transparent transparent rgb(255, 255, 255) ;\n            border-width: 0 4px 4px;\n          "
              : "\n        border-color: rgb(255, 255, 255) transparent transparent;\n        border-width: 4px 4px 0;\n      ";
          },
          function(n) {
            return n.menuVisible
              ? "\n        opacity: 1;\n        visibility: visible;\n        transform: translateY(0);\n    "
              : "\n        opacity: 0;\n        visibility: hidden;\n        transform: translateY(-4px);\n    ";
          }
        ),
        F = Object(r.lazy)(function() {
          return t.e(1).then(t.bind(null, 54));
        }),
        W = Object(r.lazy)(function() {
          return t.e(2).then(t.bind(null, 56));
        }),
        q = (function(n) {
          function e() {
            return (
              Object(c.a)(this, e),
              Object(s.a)(this, Object(u.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(e, n),
            Object(l.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    d.a,
                    null,
                    a.a.createElement(
                      r.Suspense,
                      { fallback: a.a.createElement(C, null) },
                      a.a.createElement(
                        p.a,
                        null,
                        a.a.createElement(h.a, {
                          exact: !0,
                          path: "/",
                          render: function() {
                            return a.a.createElement(F, null);
                          }
                        }),
                        a.a.createElement(h.a, {
                          exact: !0,
                          path: "/about",
                          render: function() {
                            return a.a.createElement(W, null);
                          }
                        })
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(r.Component);
      function T() {
        var n = Object(b.a)([
          "\n  max-width: 600px;\n  margin: 80px auto;\n\n  h4 {\n    font-size: 32px;\n  }\n"
        ]);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      var N = (function(n) {
          function e() {
            var n;
            return (
              Object(c.a)(this, e),
              ((n = Object(s.a)(this, Object(u.a)(e).call(this))).state = {
                hasError: !1
              }),
              n
            );
          }
          return (
            Object(f.a)(e, n),
            Object(l.a)(e, [
              {
                key: "componentDidCatch",
                value: function(n) {
                  this.setState({ hasError: !0 });
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.hasError
                    ? a.a.createElement(
                        D,
                        null,
                        a.a.createElement("h4", null, "Something went wrong"),
                        a.a.createElement(
                          "p",
                          null,
                          "Please try again in few moments."
                        )
                      )
                    : this.props.children;
                }
              }
            ]),
            e
          );
        })(r.Component),
        D = m.d.div(T()),
        B = t(24),
        I = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function _(n) {
        navigator.serviceWorker
          .register(n)
          .then(function(n) {
            n.onupdatefound = function() {
              var e = n.installing;
              e.onstatechange = function() {
                "installed" === e.state &&
                  (navigator.serviceWorker.controller
                    ? console.log("New content is available; please refresh.")
                    : console.log("Content is cached for offline use."));
              };
            };
          })
          .catch(function(n) {
            console.error("Error during service worker registration:", n);
          });
      }
      var H = t(15),
        A = t(12),
        P = {
          primary: H.a.primary,
          sec: H.a.sec,
          neutral: H.a.neutral,
          fontFamily: A.a.fontFamily,
          fontSize: A.a.fontSize,
          fontWeight: A.a.fontWeight,
          lineHeight: A.a.lineHeight,
          transition: A.a.transition
        };
      function J() {
        var n = Object(b.a)([
          "\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: ",
          "px;\n  }\n"
        ]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      var M = Object(m.c)(J(), function(n) {
        return n.theme.fontSize.sm;
      });
      function R() {
        var n = Object(b.a)([
          '\n  /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n'
        ]);
        return (
          (R = function() {
            return n;
          }),
          n
        );
      }
      var V = Object(m.c)(R());
      function Q() {
        var n = Object(b.a)(["\n ", "\n ", "\n"]);
        return (
          (Q = function() {
            return n;
          }),
          n
        );
      }
      var U = Object(m.b)(Q(), V, M);
      o.a.render(
        a.a.createElement(
          N,
          null,
          a.a.createElement(
            m.a,
            { theme: P },
            a.a.createElement(
              r.Fragment,
              null,
              a.a.createElement(U, null),
              a.a.createElement(B.a, null, a.a.createElement(q, null))
            )
          )
        ),
        document.getElementById("root")
      ),
        (function() {
          if ("serviceWorker" in navigator) {
            if (new URL("", window.location).origin !== window.location.origin)
              return;
            window.addEventListener("load", function() {
              var n = "".concat("", "/service-worker.js");
              I
                ? ((function(n) {
                    fetch(n)
                      .then(function(e) {
                        404 === e.status ||
                        -1 ===
                          e.headers.get("content-type").indexOf("javascript")
                          ? navigator.serviceWorker.ready.then(function(n) {
                              n.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : _(n);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(n),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ"
                    );
                  }))
                : _(n);
            });
          }
        })();
    }
  },
  [[31, 4, 3]]
]);
//# sourceMappingURL=main.cd71af9d.chunk.js.map
