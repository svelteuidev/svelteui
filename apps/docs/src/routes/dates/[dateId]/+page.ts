import type { PageLoad } from './$types';

export const load = ( async ({ params }) => {
  const post = await import(`../../../lib/pages/dates/${params.dateId}.md`)
  const { title, source, packageGroup, docs, importCode, description } = post.metadata
  const content = post.default

  return {
    content,
    title,
    source,
    packageGroup,
    docs,
    importCode,
    description
  }
}) satisfies PageLoad
