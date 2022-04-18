---
title: 'os'
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
description: 'Get user os'
---

<script>
	import { os as _os } from '@svelteuidev/utilities';
    import Preview from '$lib/Components/DocsHelpers/Preview.svelte'

	const os = _os();
</script>

# {$frontmatter.title}

{$frontmatter.description}

```ts
import { clickoutside } from '@svelteuidev/utilities';
```

<hr>
<!-- Top Section -->

## Usage

<Preview>
    <p>Your os is <b>{os}</b></p>
</Preview>

```svelte|copy
<script>
	import { os as _os } from '@svelteuidev/utilities';

	const os = _os();
</script>

<p>Your os is <b>{os}</b></p>
```

The {$frontmatter.title} utility function detects a user's os. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`.
If the os cannot be identified as well as during server side rendering `undetermined` will be returned.

## TypeScript

You can import `OS` union type from `@svelteuidev/utilities`:

```ts
import type { OS } from '@svelteuidev/utilities';
// OS type is 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
```

## Definition

```ts
function getOS(): 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';
```
