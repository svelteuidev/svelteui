<script lang="ts">
	import useStyles from './Blockquote.styles';
	import type { BlockquoteProps as $$BlockquoteProps } from './Blockquote';
	import { Box } from '../Box';
	import QuoteIcon from './QuoteIcon.svelte';
	import { IconRenderer } from '../IconRenderer';

	interface $$Props extends $$BlockquoteProps {}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'blockquote',
		color: $$Props['color'] = 'gray',
		icon: $$Props['icon'] = QuoteIcon,
		iconSize: $$Props['iconSize'] = 20;
	export { className as class };

	$: ({ cx, classes } = useStyles({ color }, { override, name: 'Blockquote' }));
</script>

<!--
@component

Blockquote with icon and citation

@see https://svelteui.dev/core/blockquote
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
		<slot name="icon">
			{#if icon}
				<div class={classes.icon}>
					<IconRenderer {icon} {iconSize} />
				</div>
			{/if}
		</slot>
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
