<script lang="ts">
	import { Box } from '../Box';
	import type { DefaultProps } from '$lib/styles';

	interface AppShellProviderProps extends DefaultProps {
		value?: { fixed: boolean; zIndex: number };
	}

	export let use: AppShellProviderProps['use'] = [],
		element: AppShellProviderProps['element'] = undefined,
		className: AppShellProviderProps['className'] = '',
		override: AppShellProviderProps['override'] = {},
		value: AppShellProviderProps['value'];
	export { className as class };
</script>

<Box bind:element class={className} css={{ ...override }} {use} {...$$restProps}>
	<slot />
</Box>
