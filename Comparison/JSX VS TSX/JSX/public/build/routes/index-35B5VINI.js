import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-G7MOY7GY.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-C4TB3CVL.css";

// app/routes/index.jsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-35B5VINI.js.map
