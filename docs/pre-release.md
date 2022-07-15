## Checklist for pre-releases

- Add Global Component to App.svelte

```svelte
<script>
	// import theme
	import '@THEME/style.css';
	import '@SRC/theme.css';
	import Layout from '@THEME/components/Layout.svelte';
	import { initNavigation } from './navigation.js';
	import { onMount } from 'svelte';
	import { Global } from '../../../src/components';
	import { SvelteUIProvider, colorScheme } from '@svelteuidev/core';

	onMount(() => {
		return initNavigation();
	});
</script>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	<Global />
	<Layout />
</SvelteUIProvider>
```

- Remove check for gh link in `publisher.js`

```ts
if (!GITURL.startsWith('https://github.com'))
	Err('Can publish in Github repository only, but `' + GITURL + '` was found.');

if (`/${GITNAME}/` !== config.basepath)
	Err(
		'you should set `basepath` option in `svelte-docs.config.js` as the name of your repository `' +
			GITNAME +
			'`'
	);
```
