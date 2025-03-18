<script lang="ts">
	import type { Snippet } from 'svelte';

	import type { DefaultProps } from '$lib/styles';
	import { Box } from '../Box';

	// @TODO: Find out why we are not using value anywhere
	/* eslint-disable @typescript-eslint/no-unused-vars */
	interface AppShellProviderProps extends DefaultProps {
		value?: { fixed: boolean; zIndex: number };
	}

	interface Props {
		use?: AppShellProviderProps['use'];
		element?: AppShellProviderProps['element'];
		class?: AppShellProviderProps['className'];
		override?: AppShellProviderProps['override'];
		value: AppShellProviderProps['value'];
		children?: Snippet;
		[key: string]: any;
	}

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		value,
		children,
		...rest
	}: Props = $props();
</script>

<Box bind:element class={className} css={{ ...override }} {use} {...rest}>
	{@render children?.()}
</Box>
