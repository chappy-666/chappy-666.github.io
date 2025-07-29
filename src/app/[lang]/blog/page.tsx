import { contentfulClient as client } from "@/lib/contentful";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const entries = await client.getEntries({
    content_type: "blogPost",
    locale: lang,
  });
  return (
    <main className="mx-auto px-4 py-12 max-w-4xl">
      <h1
        className="mb-4 font-bold text-4xl text-center"
        style={{ color: "var(--color-text)" }}
      >
        Blog
      </h1>
      <p className="mb-10 text-center" style={{ color: "var(--color-text)" }}>
        Welcome to my blog! Here are my latest posts:{" "}
        <span className="font-semibold">{entries.items.length}</span>
      </p>

      <ul className="gap-8 grid grid-cols-1 sm:grid-cols-2">
        {entries.items.map((entry) => (
          <li
            key={entry.sys.id}
            className="shadow hover:shadow-md p-6 rounded-2xl transition-shadow duration-300"
            style={{
              backgroundColor: "var(--color-card-bg)",
              color: "var(--color-card-text)",
            }}
          >
            <h2 className="mb-2 font-semibold text-xl">
              {entry.fields.title as string}
            </h2>
            <Link
              href={`/${lang}/blog/${entry.fields.slug}`}
              className="inline-block hover:opacity-80 font-medium underline"
              style={{ color: "var(--color-card-text)" }}
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
