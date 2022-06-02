<script lang="ts">
	import useStyles from './Burger.styles';
	import { UnstyledButton } from '../Button';
	import { colorScheme } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { BurgerProps as $$BurgerProps } from './Burger.styles';

	export let use: $$BurgerProps['use'] = [],
		element: $$BurgerProps['element'] = undefined,
		className: $$BurgerProps['className'] = '',
		override: $$BurgerProps['override'] = {},
		opened: $$BurgerProps['opened'] = true,
		color: $$BurgerProps['color'] = undefined,
		size: $$BurgerProps['size'] = 'md';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: _color = color ? color : $colorScheme === 'dark' ? 'white' : 'black';
	$: ({ classes, getStyles, cx } = useStyles({ color: _color, size, opened }));
</script>

<UnstyledButton
	bind:element
	use={[forwardEvents, [useActions, use]]}
	override={{ padding: 5 }}
	class={cx(className, getStyles({ css: override }))}
	{...$$restProps}
>
	<div class={cx(classes.burger, { opened: opened })} />
</UnstyledButton>
