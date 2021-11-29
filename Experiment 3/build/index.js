var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React2 = __toModule(require("react"));
var import_remix2 = __toModule(require("remix"));

// app/styles/demos/remix.css
var remix_default = "/build/_assets/remix-5PPS2YMF.css";

// app/styles/global.css
var global_default = "/build/_assets/global-AKFP5T7A.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    },
    { rel: "stylesheet", href: remix_default }
  ];
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React2.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React2.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React2.createElement(RemixLogo, null)), /* @__PURE__ */ React2.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React2.createElement("ul", null, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/feed"
  }, "Feed")))))), /* @__PURE__ */ React2.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React2.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React2.createElement("p", null, "\xA9 Just a Footer Section"))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function RemixLogo(props) {
  return /* @__PURE__ */ React2.createElement("svg", __spreadValues({
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React2.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React2.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}
var RouteChangeAnnouncement = React2.memo(() => {
  let [hydrated, setHydrated] = React2.useState(false);
  let [innerHtml, setInnerHtml] = React2.useState("");
  let location = (0, import_remix2.useLocation)();
  React2.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React2.useRef(true);
  React2.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/index.tsx
var feed_exports = {};
__export(feed_exports, {
  default: () => feedIndex,
  loader: () => loader
});
var import_remix4 = __toModule(require("remix"));
var import_remix5 = __toModule(require("remix"));

// app/db.ts
var import_supabase_js = __toModule(require("@supabase/supabase-js"));
var supabaseUrl = process.env.SUPABASE_URL || "https://vkriqcdehjjwtzueuscm.supabase.co";
var supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzkzNDQ0NiwiZXhwIjoxOTUzNTEwNDQ2fQ.q-mvXRaDA6YpnJlqZ5a-DFF911hLN8zleu5e1ypAd_w";
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/index.tsx
var loader = async () => {
  const res = await supabase.from("feed").select("*").order("id");
  return (0, import_remix5.json)(res.data);
};
function feedIndex() {
  let data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "new"
  }, "Create Post"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("th", null, "ID"), /* @__PURE__ */ React.createElement("th", null, "Title"), /* @__PURE__ */ React.createElement("th", null, "Description")), /* @__PURE__ */ React.createElement("tbody", null, data.map((feed) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, feed.id), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/feed/${feed.id}`
  }, feed.title)), /* @__PURE__ */ React.createElement("td", null, feed.description), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post",
    action: "/feed/star"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: feed.id
  }), /* @__PURE__ */ React.createElement("button", null, "star"))))))));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/star.tsx
var star_exports = {};
__export(star_exports, {
  action: () => action,
  default: () => star_default
});
var import_remix6 = __toModule(require("remix"));
var action = async ({ request }) => {
  const formData = await request.formData();
  console.log("star", formData);
  return (0, import_remix6.redirect)("/feed");
};
var star_default = () => null;

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => ParamfeedhowDemo,
  loader: () => loader2,
  meta: () => meta
});
var import_remix7 = __toModule(require("remix"));
var loader2 = async ({ params }) => {
  const table = supabase.from("feed");
  const { data, error } = await table.select().eq("id", params.id);
  if (data && (data == null ? void 0 : data.length) < 1 || error) {
    throw new Response("Not Found", { status: 404 });
  }
  return { param: params.id, data };
};
var action2 = async ({ request, params }) => {
  if (request.method !== "PATCH")
    return (0, import_remix7.json)({ status: 405 });
  const formData = await request.formData();
  const { data, error } = await supabase.from("feed").update({
    title: formData.get("title"),
    description: formData.get("description")
  }).match({ id: params.id });
  if (error) {
    return (0, import_remix7.json)(error, { status: 400 });
  }
  console.log(data);
  return (0, import_remix7.redirect)(`/feed/${params.id}`);
};
function ParamfeedhowDemo() {
  let data = (0, import_remix7.useLoaderData)();
  const feed = data.data[0];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/feed"
  }, "back to main menu"), /* @__PURE__ */ React.createElement("h2", null, " Edit Section "), /* @__PURE__ */ React.createElement("h1", null, JSON.stringify(feed, null, 2)), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "patch"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "title",
    defaultValue: feed.title
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    defaultValue: feed.description
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "submit")));
}
function CatchBoundary2() {
  let caught = (0, import_remix7.useCatch)();
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
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => feedNew
});
var import_remix8 = __toModule(require("remix"));
var import_remix9 = __toModule(require("remix"));
var action3 = async ({ request }) => {
  const formData = await request.formData();
  const { data, error } = await supabase.from("feed").insert({
    title: formData.get("title"),
    description: formData.get("description")
  });
  if (error) {
    return (0, import_remix9.json)(error, { status: 400 });
  }
  console.log(data);
  return (0, import_remix8.redirect)("/feed");
};
function feedNew() {
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, "new feed", /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "title:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title"
  })), /* @__PURE__ */ React.createElement("label", null, "description:", /* @__PURE__ */ React.createElement("textarea", {
    name: "description"
  })), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "submit"
  })));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_remix10 = __toModule(require("remix"));
var meta2 = () => {
  return {
    title: "Remix Exploration",
    description: "Going on Exploration"
  };
};
function Index() {
  let data = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "On Going Remix Exploration"), /* @__PURE__ */ React.createElement("p", null, "This Remix run on Supabase Postgresql "), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around ."), /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/feed"
  }, "Go To Feed Section")));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/feed/index": {
    id: "routes/feed/index",
    parentId: "root",
    path: "feed",
    index: true,
    caseSensitive: void 0,
    module: feed_exports
  },
  "routes/feed/star": {
    id: "routes/feed/star",
    parentId: "root",
    path: "feed/star",
    index: void 0,
    caseSensitive: void 0,
    module: star_exports
  },
  "routes/feed/$id": {
    id: "routes/feed/$id",
    parentId: "root",
    path: "feed/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/feed/new": {
    id: "routes/feed/new",
    parentId: "root",
    path: "feed/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
