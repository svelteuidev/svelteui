<script lang="ts">
	import useStyles from './Kbd.styles';
	import { Box } from '../Box';
	import type { KbdProps as $$KbdProps } from './Kbd';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'Kbd' }));
</script>

<Box
	bind:element
	root="kbd"
	class={cx(className, classes.root, getStyles({ css: override }))}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
