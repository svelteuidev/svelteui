# SvelteUI Preprocessors

## **Svelte preprocessor library to assist in many areas of development**

## Documentation

[See full documentation on the SvelteUI website](https://svelteui.org/)

## Installation

```bash
# With yarn
yarn add @svelteuidev/preprocessors

# With npm
npm install @svelteuidev/preprocessors
```

## Set Up

```ts
// svelte.config.js

import { viewSource } from '@svelteuidev/preprocessors';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess(), viewSource()]

	// ...the rest of the config
};
```

## Usage

```tsx
<script lang="ts">
	import { SourceCode, DisplaySourceCode } from 'svelte-view-source';
</script>

<SourceCode sourceId="hello-world">
	<h1>Hello, world!</h1>
</SourceCode>

<DisplaySourceCode sourceId="hello-world" />

<DisplaySourceCode sourceId="hello-world" let:source>
	<div>{source}</div>
</DisplaySourceCode>
```

## License

All SvelteUI packages have MIT license. All SvelteUI dependencies also have MIT license.
