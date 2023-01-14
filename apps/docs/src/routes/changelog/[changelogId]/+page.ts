import type { PageLoad } from './$types';

export const load = ( async ({ params }) => {
  const post = await import(`../../../lib/pages/changelog/${params.changelogId}.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date
  }
}) satisfies PageLoad
