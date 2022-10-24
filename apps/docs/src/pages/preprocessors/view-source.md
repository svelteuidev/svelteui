---
title: viewSource
group: 'svelteuidev-preprocessors'
packageGroup: '@svelteuidev/preprocessors'
slug: /preprocessors/view-source/
description: 'Preprocessor for displaying source code'
import: "import { viewSource, `SourceCode`, DisplaySourceCode } from '@svelteuidev/preprocessors';"
source: 'svelteui-preprocessors/src/SourceCode/preprocess.ts'
docs: 'preprocessors/view-source.md'
---

<script>
    // import { } from "@svelteuidev/demos";
    import { Heading } from 'components';
</script>

<Heading />

## Setup

Setting up the preprocessor requires you to place it in an array of preprocessors. It should come after `svelte-preprocess` but before others.

```ts
// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { viewSource } from '@svelteuidev/preprocessors';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess(), viewSource()]
	// ...rest of the config
};

export default config;
```

`viewSource` optionally accepts an options object containing two keys: `sourceTagName` and `displayTagName`, which can be used to set the component the preprocessor looks for (in case you want to rename the components when you import them, or make your own).

```ts
viewSource({
	sourceTagName: 'ComponentOne',
	displayTagName: 'ComponentTwo'
});
```

## Usage

The view-source preprocessor exports two components, `SourceCode` and `DisplaySourceCode`. You can write any code in a `SourceCode` component anywhere in your app. Once you want to display your source code, you can use a `DisplaySourceCode` component.

```svelte
<script>
    import { SourceCode, DisplaySourceCode } from '@svelteuidev/preprocessors';
    import { Button } from '@svelteuidev/core';
</script>

<SourceCode sourceId='demo'>
    <Button>Click Me<Button>
</SourceCode>

<DisplaySourceCode sourceId='demo' let:source>
    <pre>{source}</pre>
</DisplaySourceCode>
```

<p>
    The `SourceCode` element contains the source code you want to display. It accepts one required prop, `sourceId`, that will tie it to its display component(s). The `sourceId` prop must be unique across the .svelte file. No other `SourceCode` component can share it. A `SourceCode` element must have at least one corresponding `DisplaySourceCode` element.
</p>

<p>
    he `DisplaySourceCode` element will display whatever source code appears between the opening and closing tags of the `SourceCode` element. It will trim any leading or trailing blank lines and unindent the source code before passing it to a child component. If `DisplaySourceCode` does not receive a slot, it will display the source code in a `pre` element. If it does receive a slot, it will pass that slot a `source` prop. This prop is a string containing the exact source code from `SourceCode`. A `DisplaySourceCode` element must have one and only one corresponding `SourceCode` element.
</p>
