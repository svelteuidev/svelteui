<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper.styles';

	export let className: $$InputWrapperProps['className'] = 'label';
	export { className as class };
	export let label: $$InputWrapperProps['label'] = 'label';
	export let labelElement: $$InputWrapperProps['labelElement'] = 'label';
	export let required: $$InputWrapperProps['required'] = false;
	export let id: $$InputWrapperProps['id'] = undefined;

	let _id;
	$: {
		_id = id ? `${id}-label` : 'ctx-label';
	}
</script>

<Box for={id} root={labelElement} class={className}>
	{label}
	{#if required}
		<span class="required" aria-hidden>
			{' *'}
		</span>
	{/if}
</Box>
