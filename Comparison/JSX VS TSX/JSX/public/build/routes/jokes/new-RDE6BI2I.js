import {
  Form,
  React,
  init_react,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-G7MOY7GY.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/remix-jokes-in-js-main/app/routes/jokes/new.jsx?browser
init_react();

// app/routes/jokes/new.jsx
init_react();
function validateJokeContent(content) {
  if (content?.length < 4)
    return `That joke is too short`;
}
function validateJokeName(name) {
  if (name?.length < 2)
    return `That joke's name is too short`;
}
function JokeScreen() {
  const data = useLoaderData();
  const actionData = useActionData();
  const [formValues, setFormValues] = React.useState(actionData?.joke ?? {
    name: "",
    content: ""
  });
  const nameError = validateJokeName(formValues.name);
  const contentError = validateJokeContent(formValues.content);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement(Form, {
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
export {
  JokeScreen as default
};
//# sourceMappingURL=/build/routes/jokes/new-RDE6BI2I.js.map
