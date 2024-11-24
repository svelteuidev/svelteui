<script lang="ts">
	import useStyles from './Burger.styles';
	import { UnstyledButton } from '../Button';
	import { colorScheme } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { BurgerProps as $$BurgerProps } from './Burger';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		opened?: $$Props['opened'];
		color?: $$Props['color'];
		size?: $$Props['size'];
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		opened = true,
		color = undefined,
		size = 'md',
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let _color = $derived(color ? color : $colorScheme === 'dark' ? 'white' : 'black');
	let { classes, getStyles, cx } = $derived(useStyles({ color: _color, size, opened }, { name: 'Burger' }));
</script>

<UnstyledButton
	bind:element
	use={[forwardEvents, [useActions, use]]}
	override={{ padding: 5 }}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	<span class={cx(classes.burger, { opened: opened })}></span>
</UnstyledButton>
