import type { PageLoad } from './$types';

export const load = ( async ({ params }) => {
  const post = await import(`../../../lib/pages/theming/${params.themingId}.md`)
  const { title, description, docs } = post.metadata
  const content = post.default

  return {
    content,
    title,
    description,
    docs
  }
}) satisfies PageLoad
