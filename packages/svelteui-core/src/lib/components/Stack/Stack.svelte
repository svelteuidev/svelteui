<script lang="ts">
	import { css } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { StackProps } from './Stack.styles';

	export let className: StackProps['className'] = '';
	export { className as class };
	export let override: StackProps['override'] = {};
	export let spacing: StackProps['spacing'] = 'md';
	export let align: StackProps['align'] = 'stretch';
	export let justify: StackProps['justify'] = 'center';

	const StackStyles = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: `${align}`,
		justifyContent: `${justify}`,
		gap: typeof spacing === 'number' ? `${spacing}px` : ''
	});

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	// if () {
	// 	observable = true;
	// 	err = {};
	// }

	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="Stack" code={err} />

<Box css={override} class="{className} {StackStyles()}" />
