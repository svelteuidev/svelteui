<script lang="ts">
	import { page } from '$app/stores';
	import { showSideBar } from '$lib/stores/sidebar';
	import type { Page, Links } from './pages';

	export let iterable = [{ href: 'test', text: 'Test', icon: '', iconClass: '' }];
	export let pathname = '';

	$: active = (href: string): boolean => {
		const path = $page.url.pathname.split('/')[2];
		return path === href || (!href && !path);
	};
</script>

<ul>
	{#each iterable as link}
		{@const wholePath = pathname ? `/docs/${pathname}/${link.href}` : `/docs/${link.href}`}
		{@const activeStyles =
			'!text-primary-400 !bg-primary-400/30 !dark:bg-primary-400/10 !hover:bg-primary-400/30 !dark:hover:bg-primary-400/10 !hover:text-primary-400'}
		<li class="mb-1 last:mb-0 flex items-center">
			{#if link.icon}
				<span class={link.iconClass}>
					<svelte:component this={link.icon} color="white" size={20} />
				</span>
			{/if}
			<a
				on:click={() => showSideBar.set(!showSideBar)}
				href={wholePath}
				class="px-3 py-2 rounded block text-sm font-medium select-none hover:text-primary-400 {active(
					wholePath
				)
					? activeStyles
					: ''}"
			>
				{link.text}
			</a>
		</li>
	{/each}
</ul>
