import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-KVFZYUIK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Remix Exploration",
    description: "Going on Exploration"
  };
};
function Index() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "On Going Remix Exploration"), /* @__PURE__ */ React.createElement("p", null, "This Remix run on Supabase Postgresql "), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around ."), /* @__PURE__ */ React.createElement(Link, {
    to: "/feed"
  }, "Go To Feed Section")));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-GGQR5SI3.js.map
