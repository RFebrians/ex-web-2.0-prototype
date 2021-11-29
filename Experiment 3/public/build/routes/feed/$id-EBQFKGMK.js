import {
  supabase
} from "/build/_shared/chunk-IR7ADMBV.js";
import {
  import_server_runtime
} from "/build/_shared/chunk-DMVQPRW2.js";
import {
  useCatch
} from "/build/_shared/chunk-J4MQEZJW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6ZD6VHKS.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/$id.tsx?browser
init_react();

// app/routes/feed/$id.tsx
init_react();
var loader = async ({ params }) => {
  const table = supabase.from("feed");
  const { data, error } = await table.select().eq("id", params.id);
  if (data && (data == null ? void 0 : data.length) < 1 || error) {
    throw new Response("Not Found", { status: 404 });
  }
  return { param: params.id, data };
};
var action = async ({ request, params }) => {
  if (request.method !== "PATCH")
    return (0, import_server_runtime.json)({ status: 405 });
  const formData = await request.formData();
  const { data, error } = await supabase.from("feed").update({
    title: formData.get("title"),
    description: formData.get("description")
  }).match({ id: params.id });
  if (error) {
    return (0, import_server_runtime.json)(error, { status: 400 });
  }
  console.log(data);
  return (0, import_server_runtime.redirect)(`/feed/${params.id}`);
};
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
  action,
  loader,
  meta
};
//# sourceMappingURL=/build/routes/feed/$id-EBQFKGMK.js.map
