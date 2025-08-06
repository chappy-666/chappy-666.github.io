// app/blog/[slug]/page.tsx
import { getBlogPostBySlug } from "@/lib/contentful";
import { notFound } from "next/navigation";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}) {
  const { slug, lang } = await params;

  const item = await getBlogPostBySlug(slug, lang);
  if (!item) return notFound();

  const { title, content } = item.fields;

  return (
    <article className="mx-auto px-4 py-10 max-w-3xl">
      <h1 className="mb-4 font-bold text-3xl">{title as string}</h1>
      <div>{documentToReactComponents(content as Document)}</div>
    </article>
  );
}
