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

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-crud-main/app/routes/feed/new.tsx?browser
init_react();

// app/routes/feed/new.tsx
init_react();
var action = async ({ request }) => {
  const formData = await request.formData();
  const { data, error } = await supabase.from("feed").insert({
    title: formData.get("title"),
    description: formData.get("description")
  });
  if (error) {
    return (0, import_server_runtime.json)(error, { status: 400 });
  }
  console.log(data);
  return (0, import_server_runtime.redirect)("/feed");
};
export {
  action
};
//# sourceMappingURL=/build/routes/feed/new-VEMT2YD2.js.map
