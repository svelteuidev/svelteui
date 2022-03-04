<script lang="ts">
	import { page } from '$app/stores';
	export let iterable = [{ href: 'test', text: 'Test' }];
	export let pathname = '';

	$: active = (href: string): boolean => {
		const path = $page.url.pathname.split('/')[2];
		return path === href || (!href && !path);
	};
</script>

<ul>
	{#each iterable as { href, text }}
		{@const wholePath = pathname ? `/docs/${pathname}/${href}` : `/docs/${href}`}
		{@const activeStyles =
			'!text-primary-400 !bg-primary-400/30 !dark:bg-primary-400/10 !hover:bg-primary-400/30 !dark:hover:bg-primary-400/10 !hover:text-primary-400'}
		<li class="mb-1 last:mb-0">
			<a
				href={wholePath}
				class="px-3 py-2 rounded block text-sm font-medium select-none hover:text-primary-400 {active(
					wholePath
				)
					? activeStyles
					: ''}"
			>
				{text}
			</a>
		</li>
	{/each}
</ul>
