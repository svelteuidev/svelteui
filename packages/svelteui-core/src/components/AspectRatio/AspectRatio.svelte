<script lang="ts">
	import useStyles from './AspectRatio.styles';
	import Box from '../Box/Box.svelte';
	import type { AspectRatioProps as $$AspectRatioProps } from './AspectRatio';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		ratio?: $$Props['ratio'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		ratio = 1,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
		{
			ratio
		},
		{ name: 'AspectRatio' }
	));
</script>

<!--
@component

Enforce desired width/height ratio.

@see https://svelteui.dev/core/aspect-ratio
@example
  ```svelte
    <AspectRatio ratio={16 / 9}>
		  <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
	  </AspectRatio>
  ```
-->

<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	{@render children?.()}
</Box>
