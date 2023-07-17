<script lang="ts">
	import useStyles from './Blockquote.styles';
	import type { BlockquoteProps as $$BlockquoteProps } from './Blockquote';
	import { Box } from '../Box';
	import QuoteIcon from './QuoteIcon.svelte';

	interface $$Props extends $$BlockquoteProps {}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'blockquote',
		color: $$Props['color'] = 'gray',
		showIcon: $$Props['showIcon'] = true;
	export { className as class };

	$: ({ cx, classes } = useStyles({ color }, { override, name: 'Blockquote' }));
</script>

<!--
@component

Blockquote with icon and citation

@see https://svelteui.org/core/blockquote
@example
    ```tsx
    <Blockquote>
      Some very wise words.
      <svelte:fragment slot="cite">- A very wise person</svelte:fragment>
    </Blockquote>
    ```
-->

<Box bind:element class={cx(className, classes.root)} {root} {...$$restProps}>
	<div class={classes.inner}>
		{#if showIcon}
			<div class={classes.icon}>
				<slot name="icon"><QuoteIcon /></slot>
			</div>
		{/if}
		<div class={classes.body}>
			<slot />
			{#if $$slots.cite}
				<cite class={classes.cite}>
					<slot name="cite" />
				</cite>
			{/if}
		</div>
	</div>
</Box>
