<script lang="ts">
	import useStyles from './Mark.styles';
	import { Text } from '../Text';
	import type { MarkProps } from './Mark';

	let {
		element = $bindable(null),
		class: className = '',
		override = {},
		root = 'mark',
		color = 'yellow',
		children,
		...rest
	}: MarkProps = $props();

	let { cx, classes } = $derived(useStyles({ color }, { override, name: 'Mark' }));
</script>

<Text bind:element class={cx(className, classes.root)} {root} {...rest}>
	{@render children?.()}
</Text>
