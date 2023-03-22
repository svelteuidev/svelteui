export const load = async () => {
  const post = await import("../../lib/pages/basics.md")

  const { title } = post.metadata
  const content = post.default

  return {
    content,
    title
  }
}
