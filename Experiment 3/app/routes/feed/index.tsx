import { LoaderFunction, Form } from "remix";
import { useLoaderData, json, Link } from "remix";
import { supabase } from "../../db";

type IndexData = {
  id: number;
  created_at: string;
  title: string;
  description: string;
}[];

export let loader: LoaderFunction = async () => {
  const res = await supabase.from("feed").select("*").order("id");
  return json(res.data);
};

export default function feedIndex() {
  let data = useLoaderData<IndexData>();

  return (
    <div>
      <Link to="new">Create Post</Link>
      <br></br>
      <br></br>
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
        </thead>
        <tbody>
          {data.map((feed) => (
            <tr>
              <td>{feed.id}</td>
              <td>
                <Link to={`/feed/${feed.id}`}>{feed.title}</Link>
              </td>
              <td>{feed.description}</td>
              <td>
                <Form method="post" action="/feed/star">
                  <input type="hidden" name="id" value={feed.id} />
                  <button>star</button>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
