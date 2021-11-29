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

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/$jokeId.jsx?browser
init_react();

// app/routes/jokes/$jokeId.jsx
init_react();
var import_db = __toModule(require_db());
function JokeRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.joke.name, " Permalink"));
}
export {
  JokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-SMRJ46GL.js.map
