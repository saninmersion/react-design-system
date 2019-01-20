(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    54: function(n, e, t) {
      "use strict";
      t.r(e);
      var r,
        o = t(4),
        a = t(0),
        i = t.n(a),
        c = t(3),
        u = { appLogo: ((r = "logo.svg"), "/img/".concat(r)) };
      function p() {
        var n = Object(o.a)([
          "\n    @media screen and (min-width: ",
          "px) {\n      ",
          ";\n    }\n  "
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      var l = { hg: 1440, ls: 1170, md: 992, sm: 768, xs: 480 },
        m = (Object.keys(l).reduce(function(n, e) {
          var t = l[e];
          return (
            (n[e] = function() {
              return Object(c.c)(p(), t, c.c.apply(void 0, arguments));
            }),
            n
          );
        }, {}),
        t(1)),
        d = t.n(m);
      function s() {
        var n = Object(o.a)([
          "\n  max-width: ",
          ";\n  margin: 0 auto;\n  padding: 0 18px;\n  width: 100%;\n"
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      var f = c.d.div(s(), function(n) {
        return n.width ? n.width + "px" : "1200px";
      });
      (f.displayName = "Container"), (f.propTypes = { width: d.a.number });
      function g() {
        var n = Object(o.a)(["\n  ", ";\n"]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      var h = c.d.span(g(), function(n) {
        return "\n    color: "
          .concat(
            n.light ? n.theme.primary.white : n.theme.primary.dark,
            ";\n\t   font-weight: "
          )
          .concat(n.theme.fontWeight.bold, "; \n\t   font-size: ")
          .concat(n.theme.fontSize.md, "px; \n       ")
          .concat(
            n.uppercase && "\n            text-transform: uppercase;\n       ",
            " \t   \n  "
          );
      });
      (h.displayName = "Heading"),
        (h.propTypes = { light: d.a.bool, uppercase: d.a.bool });
      var b = h;
      function v() {
        var n = Object(o.a)(["\n  ", ";\n"]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      var x = c.d.p(v(), function(n) {
        return "\n    color: "
          .concat(
            n.light ? n.theme.primary.white : n.theme.primary.dark,
            ";\n\n   font-size: "
          )
          .concat(
            n.size ? n.size + "px" : n.theme.fontSize.sm + "px",
            ";\n   line-height: "
          )
          .concat(n.theme.lineHeight.base, ";\n\n   text-align: ")
          .concat(n.align ? n.align : "", ";\n   font-weight: ")
          .concat(n.bold ? n.theme.fontWeight.bold : "400", ";\n\n \n   \n");
      });
      (x.span = x.withComponent("span")), (x.displayName = "Text");
      var y = x,
        w = t(15);
      t(12);
      function k() {
        var n = Object(o.a)([
          "\n  ",
          ";\n  ",
          ";\n  font-weight: 600;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background: #01887e;\n  }\n"
        ]);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = Object(o.a)([
          "\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 0;\n  cursor: pointer;\n\n  &:focus {\n    outline: 0;\n  }\n\n  ",
          ";\n\n  ",
          ";\n"
        ]);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = Object(o.a)([
          "\n  color: ",
          ";\n  background: ",
          ";\n  cursor: pointer;\n  transition: background 0.1s ease-in;\n\n  &:focus,\n  &:hover {\n  }\n"
        ]);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = Object(o.a)([
          "\n    padding: ",
          " ",
          ";\n    font-size: ",
          ";\n    border-radius: ",
          ";\n  "
        ]);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      var E,
        H,
        N,
        L,
        T,
        B,
        C = w.a.primary,
        S = c.d.button(
          O(),
          function(n) {
            return n.uppercase && "\n  \ttext-transform: uppercase;\n  ";
          },
          function(n) {
            return n.bold && "\n  \tfont-weight: 600;\n  ";
          }
        ),
        J = Object(c.d)(S)(
          k(),
          ((N = 8),
          (L = 20),
          (T = 14),
          (B = 18),
          Object(c.c)(z(), N + "px", L + "px", T + "px", B + "px")),
          ((E = C.dark), (H = C.white), Object(c.c)(j(), H, E))
        );
      (S.displayName = "Button"),
        (S.propTypes = { uppercase: d.a.bool, bold: d.a.bool }),
        (S.Link = S.withComponent("a")),
        (S.Link.displayName = "Button.Link");
      var W = t(24);
      function D() {
        var n = Object(o.a)([
          "\n  margin-bottom: 20px;\n\n  > p {\n    margin-bottom: 8px;\n  }\n\n  > code {\n    background-color: rgba(27, 31, 35, 0.05);\n    border-radius: 3px;\n    font-size: 85%;\n    margin: 0;\n    padding: 0.2em 0.4em;\n  }\n"
        ]);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = Object(o.a)([
          "\n  color: ",
          ";\n  font-size: large;\n  padding: 36px 0;\n\n  a {\n    color: ",
          ";\n    text-decoration: none;\n  }\n"
        ]);
        return (
          (I = function() {
            return n;
          }),
          n
        );
      }
      function U() {
        var n = Object(o.a)([
          "\n  background-color: ",
          ";\n  height: 150px;\n  padding: 20px;\n"
        ]);
        return (
          (U = function() {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = Object(o.a)([
          "\n  text-align: center;\n  .Home-logo {\n    animation: Home-logo-spin infinite 20s linear;\n    height: 80px;\n  }\n  .Home-title {\n    font-size: 1.5em;\n  }\n\n  @keyframes Home-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"
        ]);
        return (
          (V = function() {
            return n;
          }),
          n
        );
      }
      var q = Object(W.b)(function(n) {
          var e = n.appDetail;
          return i.a.createElement(
            A,
            null,
            i.a.createElement(
              F,
              null,
              i.a.createElement("img", {
                src: u.appLogo,
                className: "Home-logo",
                alt: "logo"
              }),
              i.a.createElement(b, { as: "h2", light: !0 }, e.title)
            ),
            i.a.createElement(
              G,
              null,
              i.a.createElement(
                K,
                null,
                i.a.createElement(
                  y,
                  { size: 16 },
                  "Open Storybook to checkout UI component & guidelines"
                ),
                i.a.createElement("code", null, "npm run storybook")
              ),
              i.a.createElement(
                J,
                { as: "a", href: "https://medium.com/p/b2210f24e4fe/" },
                "Visit Blog"
              )
            )
          );
        }),
        A = c.d.div(V()),
        F = c.d.header(U(), function(n) {
          return n.theme.primary.primary;
        }),
        G = c.d.div(
          I(),
          function(n) {
            return n.theme.primary.gray;
          },
          function(n) {
            return n.theme.primary.primary;
          }
        ),
        K = c.d.div(D());
      t.d(e, "default", function() {
        return q;
      });
    }
  }
]);
//# sourceMappingURL=1.3a03e6e5.chunk.js.map
