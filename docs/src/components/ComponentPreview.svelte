<script lang="ts">
	import { Box, ActionIcon, SimpleGrid, ThemeIcon } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';
	import { slide } from 'svelte/transition';
	// @ts-ignore
	import { ToolTip, mobile } from 'components';

	/** @type { 'row' | 'column' } */
	export let direction = 'row';
	export let space = '$8';
	export let override = {};
	export let showCode = false;
	export let code = `
	<script>
		const oops = "If you see this please raise an issue on github";
	<\/script>
	`;
	export let language = 'svelte';
	export let cols = 3;
	/** @type {number} */
	export let width = null;


	const css = {
		bc: 'white',
		position: 'relative',
		height: 'max-content',
		border: '1px solid transparent',
		borderRadius: '$md',
		boxShadow: '$md',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '1rem',
		flexDirection: `${direction}`,
		gap: `${space}`
	};
</script>

<Box css={{ ...css, ...override }}>
	<SimpleGrid
		class="grid"
		override={{ pb: '$14', width: width ? `${width}%` : null }}
		cols={$mobile ? 1 : cols}
	>
		<slot />
	</SimpleGrid>
	<Box id="code-button" css={{ position: 'absolute', bottom: 0, right: 10 }}>
		<ToolTip tip={showCode ? 'hide code' : 'show code'}>
			<ActionIcon
				on:click={() => (showCode = !showCode)}
				override={{ width: 'max-content', px: '$3' }}
				variant="outline"
				size="lg"
			>
				{'<></>'}
			</ActionIcon>
		</ToolTip>
	</Box>
</Box>
{#if showCode}
	<div transition:slide>
		<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
			<Prism {language} {code} />
		</Box>
	</div>
{/if}
