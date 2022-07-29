<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper.styles';

	interface $$Props extends $$InputWrapperProps {}

	export let className: $$Props['className'] = 'label';
	export { className as class };
	export let label: $$Props['label'] = 'label';
	export let labelElement: $$Props['labelElement'] = 'label';
	export let required: $$Props['required'] = false;
	export let id: $$Props['id'] = undefined;

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
