import { ActionFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log("star", formData);
  return redirect("/feed");
};

export default () => null;
