import {
  supabase
} from "/build/_shared/chunk-IR7ADMBV.js";
import {
  import_server_runtime
} from "/build/_shared/chunk-DMVQPRW2.js";
import "/build/_shared/chunk-J4MQEZJW.js";
import {
  init_react
} from "/build/_shared/chunk-6ZD6VHKS.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/index.tsx?browser
init_react();

// app/routes/feed/index.tsx
init_react();
var loader = async () => {
  const res = await supabase.from("feed").select("*").order("id");
  return (0, import_server_runtime.json)(res.data);
};
export {
  loader
};
//# sourceMappingURL=/build/routes/feed/index-3ERDAJX2.js.map
