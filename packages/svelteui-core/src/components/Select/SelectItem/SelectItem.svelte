<script lang="ts">
	import type { SelectItemProps as $$SelectItemProps } from './SelectItem.styles';

	interface $$Props extends $$SelectItemProps {}

	export let className: $$Props['className'] = '',
		label: $$Props['label'] = undefined,
		value: $$Props['value'];
	export { className as class };
</script>

<div class={className} {...$$restProps} on:mouseenter on:mousedown>
	{label || value}
</div>
