import {
  Form,
  Link,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-KVFZYUIK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/$id.tsx?browser
init_react();

// app/routes/feed/$id.tsx
init_react();
function ParamfeedhowDemo() {
  let data = useLoaderData();
  const feed = data.data[0];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/feed"
  }, "\u4E00\u89A7\u306B\u623B\u308B"), /* @__PURE__ */ React.createElement("h1", null, JSON.stringify(feed, null, 2)), /* @__PURE__ */ React.createElement(Form, {
    method: "patch"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "title",
    defaultValue: feed.title
  }), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    defaultValue: feed.description
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "\u66F4\u65B0")));
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};
export {
  CatchBoundary,
  ErrorBoundary,
  ParamfeedhowDemo as default,
  meta
};
//# sourceMappingURL=/build/routes/feed/$id-6OYOR4KE.js.map
