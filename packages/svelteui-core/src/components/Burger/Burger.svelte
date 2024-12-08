<script lang="ts">
	import useStyles from './Burger.styles';
	import { UnstyledButton } from '../Button';
	import { colorScheme } from '$lib/styles';
	import { useActions } from '$lib/internal';
	import type { BurgerProps } from './Burger';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		opened = true,
		color = undefined,
		size = 'md',
		...rest
	}: BurgerProps = $props();

	let _color = $derived(color ? color : $colorScheme === 'dark' ? 'white' : 'black');
	let { classes, getStyles, cx } = $derived(
		useStyles({ color: _color, size, opened }, { name: 'Burger' })
	);
</script>

<UnstyledButton
	bind:element
	use={[[useActions, use]]}
	override={{ padding: 5 }}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	<span class={cx(classes.burger, { opened: opened })}></span>
</UnstyledButton>
