<script lang="ts">
	import useStyles from './Mark.styles';
	import { Text } from '../Text';
	import type { MarkProps as $$MarkProps } from './Mark';
	import { colorScheme } from '$lib/styles';

	interface $$Props extends $$MarkProps {}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'mark',
		color: $$Props['color'] = 'yellow';
	export { className as class };

	$: ({ cx, classes, theme } = useStyles({ color }, { override, name: 'Mark' }));
	$: textColor = $colorScheme === 'dark' ? theme.colors.dark900.value : 'inherit';
</script>

<!--
@component

Highlight text within a larger body of text

@see https://svelteui.org/core/mark
@example
    ```tsx
    <Text>This is a sentence with a <Mark>highlighted part</Mark> in it </Text>
    ```
-->

<Text bind:element class={cx(className, classes.root)} {root} color={textColor} {...$$restProps}>
	<slot />
</Text>
