import {
  import_server_runtime
} from "/build/_shared/chunk-DMVQPRW2.js";
import {
  init_react
} from "/build/_shared/chunk-6ZD6VHKS.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/star.tsx?browser
init_react();

// app/routes/feed/star.tsx
init_react();
var action = async ({ request }) => {
  const formData = await request.formData();
  console.log("star", formData);
  return (0, import_server_runtime.redirect)("/feed");
};
export {
  action
};
//# sourceMappingURL=/build/routes/feed/star-I7XO4S7Y.js.map
