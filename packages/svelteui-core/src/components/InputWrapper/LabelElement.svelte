<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { InputWrapperProps } from './InputWrapper';
	import useStyles from './InputWrapper.styles';

	let {
		class: className = 'label',
		label = 'label',
		labelElement = 'label',
		required = false,
		id = undefined
	}: InputWrapperProps = $props();

	let { classes } = $derived(useStyles({ size: 'md' }, { name: 'InputWrapper' }));
</script>

<Box for={id} root={labelElement} class={className}>
	{label}
	{#if required}
		<span class={classes.required} aria-hidden={true}>
			{' *'}
		</span>
	{/if}
</Box>
