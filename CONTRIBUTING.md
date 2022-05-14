# Contributing to SvelteUI

## Ways to contribute

- **Improve documentation:** fix incomplete or missing docs, bad wording, examples or explanations
- **Give feedback:** we are constantly working on making SvelteUI better, please share how you use SvelteUI, what features are missing and what is done good via GitHub Discussions
- **Share SvelteUI:** share link to SvelteUI docs with everyone who can be interested, share SvelteUI on Twitter
- **Contribute to codebase:** propose new feature via GitHub Issues or find an [existing one](https://svelteui.org/labels/help%20wanted) that you are interested in and work on it
- **Give us a code review:** help us identify problems with [source code](https://svelteui.org) or make SvelteUI more performant

## Contributing workflow

- Decide what you want to contribute
- If you want to implement new feature discuss it with a maintainer ([Discord](https://discord.gg/2J2xmzCS79)) before jumping into code
- After finalizing issue details work on code, please follow commit convention
- Submit a PR if everything is fine
- Get a code review and fix all issues noticed by a maintainer
- PR is merged, and we're done!

## Commit convention

SvelteUI is a monorepo and it is important to write clear commit messages to keep git history clean.
All commits made in this repository are divided in 3 groups:

- **package commits** related to particular package
- **docs commits** related to documentation
- **core commits** only related to repository tooling and not associated with any package

Commit message consists of 3 parts:

```
[area] Optional title: Message
```

Examples:

- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[docs] Update report issues link` – Change related to documentation website
- `[@svelteui/core] Button: Add theme focus styles` – Change in `@svelteui/core` package at Button component
- `[@svelteui/actions] use-list-state: Add remove handler` – Change in `@svelteui/actions` package at use-list-state hook

## Git branches

- **main** – current version, patches for current minor version (1.0.x)
- **next-minor** – contains next minor version (1.x.0), most likely you would want to create a PR to this branch

## Get started with SvelteUI locally

- Install [editorconfig](https://editorconfig.org/) extension for your editor
- Fork [repository](https://svelteui.org), clone or download your fork
- Install dependencies with npm – `npm i`
- Build local version of all packages – `npm run build`
- To start docs – `cd docs && npm i && npm run dev`

## NPM scripts

All packages npm scripts are located at [main package.json](https://svelteui.org/blob/main/package.json),
individual packages do not have dedicated scripts. However, docs do have individual packages as of now.

## Testing scripts

- `format` - runs prettier on packages folder
- `lint` - runs eslint on packages folder (run format before running lint)
- `test` - runs tests with [vitest](https://vitest.dev/)
