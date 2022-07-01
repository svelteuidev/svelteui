<script lang="ts">
	import useStyles from './MenuLabel.styles';
	import { Text } from '../../Text';
	import type { TextProps } from '../../Text/Text.styles';

	interface $$Props extends Omit<TextProps, 'className'> {
		className?: string;
	}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '';
	export { className as class };

	$: ({ cx, classes } = useStyles());
</script>

<Text bind:element class={cx(className, classes.root)} {...$$restProps}>
	<slot />
</Text>
