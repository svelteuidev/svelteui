<script lang="ts">
	import useStyles from './Card.styles';
	import { UnstyledButton, Checkbox, Text } from '@svelteuidev/core';

	interface Props {
		class?: string;
		checked?: boolean;
		title?: string;
		description?: string;
		onChange: any;
		[key: string]: any;
	}

	let {
		class: className = '',
		checked = $bindable(false),
		title = 'Title goes here',
		description = 'Description goes here',
		onChange,
		...rest
	}: Props = $props();

	let { cx, getStyles } = $derived(useStyles());
</script>

<UnstyledButton
	class={`${cx(className, getStyles())} packages`}
	on:click={() => {
		checked = !checked;
		onChange();
	}}
	override={{ minH: 90 }}
	{...rest}
>
	<Checkbox {checked} tabindex={-1} size="md" override={{ mr: '$xlPX' }} on:change={onChange} />
	<div>
		<Text weight="medium" override={{ mb: 7, lineHeight: 1 }}>
			{title}
		</Text>
		<Text size="sm" color="dimmed">
			{description}
		</Text>
	</div>
</UnstyledButton>
