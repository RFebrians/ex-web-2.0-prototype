import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { supabase } from "../db";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Exploration",
    description: "Going on Exploration",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div>
      <main>
        <h2>On Going Remix Exploration</h2>
        <p>This Remix run on Supabase Postgresql </p>
        <p>
          Feel free to take a look around .
        </p>
        <Link to="/feed">Go To Feed Section</Link>
      </main>
    </div>
  );
}
