(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    23: function(n, e, t) {
      n.exports = t(35);
    },
    35: function(n, e, t) {
      "use strict";
      t.r(e);
      var o,
        r = t(0),
        a = t.n(r),
        i = t(7),
        c = t.n(i),
        l = t(8),
        s = t(9),
        u = t(12),
        f = t(10),
        m = t(13),
        d = t(37),
        h = t(39),
        g = t(38),
        p = t(4),
        b = t(3),
        v = { appLogo: ((o = "logo.svg"), "/img/".concat(o)) };
      function y() {
        var n = Object(p.a)([
          "\n  color: ",
          ";\n  font-size: large;\n  padding: 36px 0;\n\n  a {\n    color: ",
          ";\n    text-decoration: none;\n  }\n"
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = Object(p.a)([
          "\n  background-color: ",
          ";\n  height: 150px;\n  padding: 20px;\n  color: white;\n"
        ]);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = Object(p.a)([
          "\n  text-align: center;\n  .Home-logo {\n    animation: Home-logo-spin infinite 20s linear;\n    height: 80px;\n  }\n  .Home-title {\n    font-size: 1.5em;\n  }\n\n  @keyframes Home-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"
        ]);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      var j = function() {
          return a.a.createElement(
            E,
            null,
            a.a.createElement(
              O,
              null,
              a.a.createElement("img", {
                src: v.appLogo,
                className: "Home-logo",
                alt: "logo"
              }),
              a.a.createElement(
                "h1",
                { className: "Home-title" },
                "Design System in React"
              )
            ),
            a.a.createElement(
              x,
              null,
              "Visit this ",
              a.a.createElement(
                "a",
                { href: "https://medium.com/p/b2210f24e4fe/" },
                "link"
              ),
              " to learn more."
            )
          );
        },
        E = b.d.div(k()),
        O = b.d.header(w(), function(n) {
          return n.theme.primary.primary;
        }),
        x = b.d.div(
          y(),
          function(n) {
            return n.theme.primary.gray;
          },
          function(n) {
            return n.theme.primary.primary;
          }
        ),
        F = (function(n) {
          function e() {
            return (
              Object(l.a)(this, e),
              Object(u.a)(this, Object(f.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(e, n),
            Object(s.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    d.a,
                    null,
                    a.a.createElement(
                      h.a,
                      null,
                      a.a.createElement(g.a, {
                        exact: !0,
                        path: "/",
                        component: j
                      })
                    )
                  );
                }
              }
            ]),
            e
          );
        })(r.Component);
      function H() {
        var n = Object(p.a)([
          "\n\n\tmax-width: 600px;\n\tmargin: 80px auto;\n\n\th4{\n\t\tfont-size: 32px;\n\t}\n\n"
        ]);
        return (
          (H = function() {
            return n;
          }),
          n
        );
      }
      var S = (function(n) {
          function e() {
            var n;
            return (
              Object(l.a)(this, e),
              ((n = Object(u.a)(this, Object(f.a)(e).call(this))).state = {
                hasError: !1
              }),
              n
            );
          }
          return (
            Object(m.a)(e, n),
            Object(s.a)(e, [
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
                        q,
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
        q = b.d.div(H()),
        z = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function W(n) {
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
      var C = {
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
        L = {
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
        N = {
          primary: C.primary,
          sec: C.sec,
          neutral: C.neutral,
          fontFamily: L.fontFamily,
          fontSize: L.fontSize,
          fontWeight: L.fontWeight,
          lineHeight: L.lineHeight,
          transition: L.transition
        };
      function B() {
        var n = Object(p.a)([
          "\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      var D = Object(b.c)(B());
      function T() {
        var n = Object(p.a)([
          '\n  /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n'
        ]);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      var A = Object(b.c)(T());
      function J() {
        var n = Object(p.a)(["\n ", "\n ", "\n"]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      var R = Object(b.b)(J(), A, D);
      c.a.render(
        a.a.createElement(
          S,
          null,
          a.a.createElement(
            b.a,
            { theme: N },
            a.a.createElement(
              r.Fragment,
              null,
              a.a.createElement(R, null),
              a.a.createElement(F, null)
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
              z
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
                          : W(n);
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
                : W(n);
            });
          }
        })();
    }
  },
  [[23, 2, 1]]
]);
//# sourceMappingURL=main.0e91df72.chunk.js.map
