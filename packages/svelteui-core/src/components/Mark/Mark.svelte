<script lang="ts">
	import useStyles from './Mark.styles';
	import { Text } from '../Text';
	import type { MarkProps as $$MarkProps } from './Mark';

	interface $$Props extends $$MarkProps {}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'mark',
		color: $$Props['color'] = 'yellow';
	export { className as class };

	$: ({ cx, classes } = useStyles({ color }, { override, name: 'Mark' }));
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

<Text bind:element class={cx(className, classes.root)} {root} {...$$restProps}>
	<slot />
</Text>
