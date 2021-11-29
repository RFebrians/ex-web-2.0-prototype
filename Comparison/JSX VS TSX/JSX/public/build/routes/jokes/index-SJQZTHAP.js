import {
  require_db
} from "/build/_shared/chunk-KBZF2GKH.js";
import {
  Link,
  React,
  __toModule,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-G7MOY7GY.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/index.jsx?browser
init_react();

// app/routes/jokes/index.jsx
init_react();
var import_db = __toModule(require_db());
function JokesIndexRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}
export {
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-SJQZTHAP.js.map
