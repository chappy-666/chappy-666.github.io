// lib/contentful.ts
import { createClient, Entry ,EntrySkeletonType} from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getBlogPostBySlug(slug: string,lang :string): Promise<Entry<EntrySkeletonType, undefined, string>| null> {

  const response = await contentfulClient.getEntries({
  content_type: 'blogPost',
  'fields.slug': slug,
  locale: lang,
  limit: 1,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

  return response.items[0] ?? null;
}