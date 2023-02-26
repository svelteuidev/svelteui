# Contributing to SvelteUI

## Ways to contribute

- **Improve documentation:** fix incomplete or missing docs, bad wording, examples or explanations
- **Give feedback:** we are constantly working on making SvelteUI better, please share how you use SvelteUI, what features are missing and what is done good via GitHub Discussions
- **Share SvelteUI:** share link to SvelteUI docs with everyone who can be interested, share SvelteUI on Twitter
- **Contribute to codebase:** propose new feature via GitHub Issues or find an [existing one](https://github.com/svelteuidev/svelteui/labels/help%20wanted) that you are interested in and work on it
- **Give us a code review:** help us identify problems with [source code](https://github.com/svelteuidev/svelteui) or make SvelteUI more performant

## Contributing workflow

- Decide what you want to contribute
- If you want to implement new feature discuss it with a maintainer ([Discord](https://discord.gg/2J2xmzCS79) or [Discussions](https://github.com/svelteuidev/svelteui/discussions/categories/feature-requests)) before jumping into code
- After finalizing issue details work on code, please follow commit convention
- Submit a PR if everything is fine
- Get a code review and fix all issues noticed by a maintainer
- PR is merged, and we're done!

## Commit convention

SvelteUI is a monorepo and it is important to write clear commit messages to keep the git history clean.
All commits made in this repository are divided in 3 groups:

- **package commits** related to particular package
- **docs commits** related to documentation
- **core commits** only related to repository tooling and not associated with any package

This repo uses commitizen to make commits easier. In order to commit changes made, you should run the `yarn cm` command. Once you have done that, the commitizen cli messages will guide you through the commit process. Commit message consists of 2 parts:

```bash
[type]: Message
```

Examples:

- `[core]: Fix documentation deployment script` - Change made in repository script, it is not related to documentation or any package
- `[docs]: update report issues link` - Change related to documentation
- `[@svelteui/core]: updated SvelteUIProvider config` - Change in `@svelteui/core` package in SvelteUIProvider component
- `[@svelteui/actions]: added use-portal action` - Change in `@svelteui/actions` package by adding a new action

## Git branches

- **main** - The main branch where the code to push for the next release resides
- **experimental** - Up to date with next minor version (1.x.0), implementing some experimental features that may or may not be added

## Get started with SvelteUI locally

- Install [editorconfig](https://editorconfig.org/) extension for your editor
- **vscode users only** - install recommended extensions
- Fork [repository](https://github.com/svelteuidev/svelteui), clone or download your fork
- Install dependencies at the root of the monorepo with `yarn install`
- After your node modules have installed:

**If developing in [svelteui-prism, svelteui-dates, or svelteui-demos]**

1. Run `yarn package`
   - If you want to watch for changes in one of the packages that they depend on, run `yarn watch` in their directory.
   - You will need two terminal sessions open at the very least. If this doesn't apply to your situation move on to step 2
2. Run `yarn dev`, which should boot up a Storybook page where you can see the components in action

**If developing in docs**

- Install [`deno`](https://deno.land/#installation)
- In the root of the project:
  - run `yarn package`
  - run `yarn dev:docs`

## Yarn scripts

All packages yarn scripts are located at [main package.json](https://github.com/svelteuidev/svelteui/blob/main/package.json),
individual packages have scripts, but they should not be interacted with directly. This is due to the nature of [TurboRepo](https://turborepo.org/). All scripts should be ran from the root of the monorepo.

- `dev:{docs, etc}` - runs the development environment for whatever you choose to work on
- `dev` - runs Storybook for all the packages that contain stories
- `clean` - removes all unnecessary files and folders from packages (i.e. node_modules)
- `format` - runs prettier on packages folder
- `lint` - runs eslint on packages folder (run format before running lint)
- `test` - runs tests with [vitest](https://vitest.dev/)
- `package` - generates built versions of packages (needed for cross package development)
- `prepush:repo` - runs sort, format, lint and test (run this before pushing your code)
- `cm` - runs git commands to add and commit through commitizen (this is the recommended way to commit as it follows the convention automatically)
