---
title: Playground
---

<script>
    import { CodeBlock, MinorHeading } from 'components'
	import { Box } from '@svelteuidev/core'
    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:1rem!important;}<\/style>`;
</script>

<svelte:head>
{@html styles}
</svelte:head>

<MinorHeading />

> Sometimes it's fun to just play around without the hassle of setting things up. Or maybe you just like to try out the merchandise before you buy. This page is your personal playground, do what you want, try to mess things up 😳

[![Edit svelteui-example-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/svelteui-example-template-6mpf7j?fontsize=14&hidenavigation=1&module=%2FApp.svelte&theme=dark)

Edit directly below or in a new tab above

<br />

<Box
root="iframe"
src="https://codesandbox.io/embed/svelteui-example-template-6mpf7j?fontsize=14&hidenavigation=1&module=%2FApp.svelte&theme=dark"
title="SvelteUI/core: basic"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
css={{
		width: '100%',
		height: '80vh',
		border: '5px solid black',
		borderRadius: 8,
		overflow: 'hidden',
		position: 'static',
		zIndex: 0
	}}
/>
