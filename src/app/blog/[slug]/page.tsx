// app/blog/[slug]/page.tsx
import { contentfulClient } from "@/lib/contentful";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
  });

  return entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));
}

export default async function BlogPostPage(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const { items } = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  const post = items[0];

  if (!post) return notFound();
  console.log(post);

  return (
    <article className="mx-auto px-4 py-10 max-w-3xl">
      <h1 className="mb-4 font-bold text-3xl">{post.fields.title as string}</h1>
      <p className="mb-6 text-gray-500 text-sm">
        {post.fields.publishedDate as string}
      </p>

      <div className="prose prose-lg">
        {/* RichText型なら、ここにContentful用のレンダラーが必要 */}
        {typeof post.fields.content === "string" ? (
          <div dangerouslySetInnerHTML={{ __html: post.fields.content }} />
        ) : (
          <pre>{JSON.stringify(post.fields.content, null, 2)}</pre>
        )}
      </div>
    </article>
  );
}
