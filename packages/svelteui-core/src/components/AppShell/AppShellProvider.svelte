<script lang="ts">
	import { Box } from '../Box';
	import type { DefaultProps } from '$lib/styles';

	interface AppShellProviderProps extends DefaultProps {
		value?: { fixed: boolean; zIndex: number };
	}

	interface Props {
		use?: AppShellProviderProps['use'];
		element?: AppShellProviderProps['element'];
		class?: AppShellProviderProps['className'];
		override?: AppShellProviderProps['override'];
		value: AppShellProviderProps['value'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		value,
		children,
		...rest
	}: Props = $props();
	

	const noop = () => value;
	noop();
</script>

<Box bind:element class={className} css={{ ...override }} {use} {...rest}>
	{@render children?.()}
</Box>
