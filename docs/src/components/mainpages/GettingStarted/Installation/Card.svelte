<script>
	import useStyles from './Card.styles';
	import { UnstyledButton, Checkbox, Text } from '@svelteuidev/core';

	export let className = '',
		checked = false,
		title = 'Title goes here',
		description = 'Description goes here',
		onChange;
	export { className as class };

	$: ({ cx, getStyles } = useStyles());
</script>

<UnstyledButton
	class={cx(className, getStyles())}
	on:click={() => {
		checked = !checked;
		onChange();
	}}
	override={{ minH: 90 }}
	{...$$restProps}
>
	<Checkbox {checked} tabindex="-1" size="md" override={{ mr: '$xlPX' }} on:change={onChange} />
	<div>
		<Text weight="medium" override={{ mb: 7, lineHeight: 1 }}>
			{title}
		</Text>
		<Text size="sm" color="dimmed">
			{description}
		</Text>
	</div>
</UnstyledButton>
