# SvelteUI Docs

This is the source code for the svelteui documentation.

## Running locally

```sh
yarn install
```

At the moment, you need to signup for Notion, and [follow these instructions](https://github.com/ijjk/notion-blog#getting-blog-index-and-token) to get a token and create a blog in order to develop locally. Not ideal, but hopefully will fix soon.

With tokens and page index in hand, rename `.sample.env` and `.sample.env.build` to just `.env` and `.env.build`. In each one, add respective parameters:

```diff
-NOTION_TOKEN=XXXX
+NOTION_TOKEN=<YOUR_TOKEN>
-BLOG_INDEX_ID=XXXXX
+BLOG_INDEX_ID=<YOUR_BLOG_INDEX_ID>
```

Now it will work. Run `yarn dev` to get going.

If you get stuck or need help, [send a DM to Jared](https://twitter.com/jaredpalmer) on Twitter.

## License

All SvelteUI packages have MIT license. All SvelteUI dependencies also have MIT license.

## Contributing

- If you have a suggestion that would make this project better, submit an issue.
- If you would like to directly contribute, read the [contribution guide](https://svelteui-docs.vercel.app/docs/contribute) then submit a PR
