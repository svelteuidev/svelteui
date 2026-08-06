<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		link: string;
		pathname: string;
		children: Snippet;
	};

	const { link, pathname, children }: Props = $props();

	const isActive = $derived(link === pathname);
</script>

<a href={link} class={isActive ? 'active' : undefined}>
	{@render children()}
</a>
