<script>
	import { Text } from '@svelteuidev/core';

	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import MenuIcon from '~icons/ri/menu-5-line';
	import ArrowDropDownIcon from '~icons/ri/arrow-drop-down-fill';
	import {
		colorScheme,
		uppercaseFirstLetter,
		Popover,
		ColorSchemeMenu,
		SocialLink,
		Chip
	} from '@svelteness/kit-docs';
	import NavLinkItem from '@svelteness/kit-docs/client/components/layout/NavLink.svelte';
	export let contain = false;
	export let search = false;
	const dispatch = createEventDispatcher();
	function onOpenPopover() {
		dispatch('open-popover');
	}
	function onClosePopover() {
		dispatch('close-popover');
	}
	$: navLinks = {
		links: [{ title: 'Documentation', slug: '/docs', match: /\/docs/ }]
	};
</script>

<div
	class="1200:py-5 shadow-md flex w-full flex-col items-center justify-center px-5 py-4 992:min-h-[5rem]"
>
	<div class={clsx('flex w-full items-center', contain && 'max-w-[1440px] mx-auto')}>
		<Text
			override={{ display: 'flex', gap: '.25rem', alignItems: 'center' }}
			underline={false}
			variant="link"
			root="a"
			href="/"
			slot="left"
		>
			<Text size={25} color="blue">SvelteUI</Text>
			<Text size={15} color="dimmed">v0.5.5</Text>
			{#if $colorScheme === 'dark'}
				<Chip class="text-white">BETA</Chip>
			{:else}
				<Chip class="text-black">BETA</Chip>
			{/if}
		</Text>

		<div class="flex-1" />

		<div class="992:hidden -mr-2 flex items-center">
			{#if search}
				<slot name="search" />
			{/if}

			<Popover overlay on:open={onOpenPopover} on:close={onClosePopover}>
				<svelte:fragment slot="button">
					<MenuIcon width="30" height="30" />
					<span class="sr-only">Main navigation menu</span>
				</svelte:fragment>

				<slot name="popover-top" />

				<section class="flex flex-col items-start">
					<h1 class="mb-6 text-xl font-medium">Links</h1>
					<nav>
						<ul>
							{#each navLinks.links as navLink (navLink.title)}
								<NavLinkItem {...navLink} />
							{/each}
						</ul>
					</nav>
				</section>

				<slot name="popover-middle" />

				<hr class="my-6 h-2 w-full border-t-2 border-dashed border-gray-200 dark:border-gray-400" />

				<section class="flex flex-col items-start">
					<h1 class="mb-6 text-xl font-medium">Options</h1>
					<div class="flex flex-col space-y-6">
						<slot name="popover-options" />
						<div class="flex items-center">
							Theme

							<label
								class="relative ml-4 flex items-center border border-gray-200 px-4 py-1 dark:border-gray-400"
							>
								<span class="sr-only">Theme</span>
								{uppercaseFirstLetter($colorScheme)}
								<ArrowDropDownIcon width="20" height="20" class="ml-1" />
								<select
									class="absolute inset-0 appearance-none opacity-0"
									bind:value={$colorScheme}
								>
									<option value="light">Light</option>
									<option value="dark">Dark</option>
									<option value="system">System</option>
								</select>
							</label>
						</div>
					</div>
				</section>

				<slot name="popover-bottom" />
			</Popover>
		</div>

		<div class="992:flex 992:items-center hidden">
			<nav>
				<ul class="flex items-center space-x-8 text-lg font-medium">
					{#each navLinks.links as navLink (navLink.title)}
						<NavLinkItem {...navLink} />
					{/each}
				</ul>
			</nav>

			<slot name="right" />

			<div class="border-gray-divider ml-6 mr-2.5 h-7 w-2 border-l-[1.5px]" />

			<div class="hidden 992:flex items-center">
				<div class="flex" style="gap: 1rem;">
					<SocialLink class="" type="discord" href="https://discord.gg/2J2xmzCS79" />
					<SocialLink class="" type="gitHub" href="https://github.com/Brisklemonade/svelteui" />
				</div>
				<ColorSchemeMenu />
			</div>
		</div>
	</div>

	<slot name="bottom" />
</div>
