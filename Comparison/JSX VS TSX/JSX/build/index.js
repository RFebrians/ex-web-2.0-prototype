var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// app/entry.server.jsx
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

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-XV2J2KWX.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-DRHJR3JT.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-NKTQAWDZ.css";

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/root.jsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), process.env.NODE_ENV === "development" ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
var import_remix3 = __toModule(require("remix"));

// app/styles/index.css
var styles_default = "/build/_assets/index-C4TB3CVL.css";

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/index.jsx
var links2 = () => {
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
  }, /* @__PURE__ */ React.createElement("h1", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes.jsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader
});
var import_remix4 = __toModule(require("remix"));

// app/utils/db.server.jsx
var import_client = __toModule(require("@prisma/client"));
var db;
if (process.env.NODE_ENV === "production") {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-MGLBGUHK.css";

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes.jsx
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: jokes_default
    }
  ];
};
var loader = async () => {
  let data = {
    jokeListItems: await db.joke.findMany()
  };
  return data;
};
function JokesRoute() {
  let data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map((joke) => /* @__PURE__ */ React.createElement("li", {
    key: joke.id
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: joke.id
  }, joke.name)))), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "new",
    className: "button"
  }, "Add your own")), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)))));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/$jokeId.jsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => JokeRoute,
  loader: () => loader2
});
var import_remix5 = __toModule(require("remix"));
var loader2 = async ({ params }) => {
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Error("Joke not found");
  let data = { joke };
  return data;
};
function JokeRoute() {
  let data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, data.joke.name, " Permalink"));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/index.jsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute,
  loader: () => loader3
});
var import_remix6 = __toModule(require("remix"));
var import_client2 = __toModule(require("@prisma/client"));
var loader3 = async () => {
  let count = await db.joke.count();
  let randomRowNumber = Math.floor(Math.random() * count);
  let [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  let data = { randomJoke };
  return data;
};
function JokesIndexRoute() {
  let data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => JokeScreen
});
var import_remix7 = __toModule(require("remix"));
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/jokes.jsx
var jokes = [
  {
    name: "Road worker",
    content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
    id: "khoqm1v9dl8"
  },
  {
    name: "Frisbee",
    content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    id: "end19pnrol8"
  },
  {
    name: "Trees",
    content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
    id: "7684nk3n77o"
  },
  {
    name: "Skeletons",
    content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    id: "to1cih4hc2o"
  },
  {
    name: "Hippos",
    content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
    id: "cb3gaqlbr08"
  },
  {
    name: "Dinner",
    content: `What did one plate say to the other plate? Dinner is on me!`,
    id: "adu27frjaf8"
  },
  {
    name: "Elevator",
    content: `My first time using an elevator was an uplifting experience. The second time let me down.`,
    id: "cj9rhamh1lg"
  }
];

// route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/new.jsx
function validateJokeContent(content) {
  if ((content == null ? void 0 : content.length) < 4)
    return `That joke is too short`;
}
function validateJokeName(name) {
  if ((name == null ? void 0 : name.length) < 2)
    return `That joke's name is too short`;
}
var action = async ({ request }) => {
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const joke = {
    id: Math.random().toString(32).slice(2),
    content: form.get("content"),
    name: form.get("name")
  };
  const errors = {
    content: validateJokeContent(joke.content),
    name: validateJokeName(joke.name)
  };
  if (Object.values(errors).some(Boolean))
    return { errors, joke };
  jokes.unshift(joke);
  return (0, import_remix7.redirect)(`/jokes/${joke.id}`);
};
function JokeScreen() {
  const data = (0, import_remix7.useLoaderData)();
  const actionData = (0, import_remix7.useActionData)();
  const [formValues, setFormValues] = React.useState((actionData == null ? void 0 : actionData.joke) ?? {
    name: "",
    content: ""
  });
  const nameError = validateJokeName(formValues.name);
  const contentError = validateJokeContent(formValues.content);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    onChange: (e) => setFormValues({
      name: e.currentTarget.elements.name.value,
      content: e.currentTarget.elements.content.value
    })
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name: ", /* @__PURE__ */ React.createElement("input", {
    defaultValue: formValues.name,
    name: "name"
  })), nameError ? /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, nameError) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content:", " ", /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: formValues.content,
    name: "content"
  })), contentError ? /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, contentError) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add")));
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
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
