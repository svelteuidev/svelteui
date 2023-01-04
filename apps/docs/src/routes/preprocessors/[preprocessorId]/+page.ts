import type { PageLoad } from './$types';

export const load = ( async ({ params }) => {
  const post = await import(`../../../lib/pages/preprocessors/${params.preprocessorId}.md`)
  const { title, description, importCode, docs, source, packageGroup } = post.metadata
  const content = post.default

  return {
    content,
    title,
    description,
    importCode,
    docs,
    source,
    packageGroup
  }
}) satisfies PageLoad
