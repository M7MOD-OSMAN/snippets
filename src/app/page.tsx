import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex m-2 justify-between items-center ">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {snippets.map((snippet) => (
          <div key={snippet.id}>
            <Link
              className="flex justify-between items-center border rounded p-2"
              href={`snippets/${snippet.id}`}
            >
              <div>{snippet.title}</div>
              <div>View </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
