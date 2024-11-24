<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper';
	import useStyles from './InputWrapper.styles';

	

	
	interface Props {
		class?: $$Props['className'];
		label?: $$Props['label'];
		labelElement?: $$Props['labelElement'];
		required?: $$Props['required'];
		id?: $$Props['id'];
	}

	let {
		class: className = 'label',
		label = 'label',
		labelElement = 'label',
		required = false,
		id = undefined
	}: Props = $props();

	let { classes } = $derived(useStyles({ size: 'md' }, { name: 'InputWrapper' }));
</script>

<Box for={id} root={labelElement} class={className}>
	{label}
	{#if required}
		<span class={classes.required} aria-hidden>
			{' *'}
		</span>
	{/if}
</Box>
