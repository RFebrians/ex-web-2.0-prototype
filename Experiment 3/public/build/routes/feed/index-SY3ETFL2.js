import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-KVFZYUIK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/index.tsx?browser
init_react();

// app/routes/feed/index.tsx
init_react();
function feedIndex() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "new"
  }, "Create Post"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("th", null, "ID"), /* @__PURE__ */ React.createElement("th", null, "Title"), /* @__PURE__ */ React.createElement("th", null, "Description")), /* @__PURE__ */ React.createElement("tbody", null, data.map((feed) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, feed.id), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/feed/${feed.id}`
  }, feed.title)), /* @__PURE__ */ React.createElement("td", null, feed.description), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    action: "/feed/star"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: feed.id
  }), /* @__PURE__ */ React.createElement("button", null, "star"))))))));
}
export {
  feedIndex as default
};
//# sourceMappingURL=/build/routes/feed/index-SY3ETFL2.js.map
