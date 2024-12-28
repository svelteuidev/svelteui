<!-- @migration-task Error while migrating Svelte code: Identifier 'SearchItem' has already been declared
https://svelte.dev/e/js_parse_error -->
<script lang="ts">
	import {
		ActionIcon,
		Tooltip,
		Menu,
		Divider,
		colorScheme,
		Modal,
		TextInput,
		Box,
		Kbd,
		createStyles,
		type ColorScheme
	} from '@svelteuidev/core';
	import { Sun, Moon, MagnifyingGlass } from 'radix-icons-svelte';
	import { config, searchLinks } from './data.js';
	import { onMount } from 'svelte';
	import { hotkey } from '@svelteuidev/composables';
	import { browser } from '$app/environment';
	import SearchItem from '$lib/components/SearchItem.svelte';

	type SearchItem = {
		title: string;
		link: string;
		section?: string;
	};

	let recentSearches: SearchItem[],
		searchTerm = '',
		matchingSearches: SearchItem[] = [],
		modalOpened = false;

	onMount(() => {
		recentSearches = JSON.parse(localStorage.getItem('recentSearches') ?? '[]') || [];
		const colorSchemeValue = localStorage.getItem('colorScheme');
		if (colorSchemeValue) $colorScheme = colorSchemeValue as ColorScheme;
	});

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
		localStorage.setItem('colorScheme', $colorScheme);
	}

	function changeModalState() {
		modalOpened = !modalOpened;
		searchTerm = '';
	}

	let previousSection = '';

	function onSearchValueInput() {
		matchingSearches = searchLinks.filter((item) =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	function addSearch(matchingSearch: SearchItem) {
		changeModalState();
		const existingSearches = JSON.parse(localStorage.getItem('recentSearches') ?? '[]') || [];
		const elementExists = existingSearches.some(
			(item: SearchItem) => item.title === matchingSearch.title
		);
		if (!elementExists) existingSearches.unshift(matchingSearch);
		if (existingSearches.length > 6) existingSearches.pop();
		recentSearches = existingSearches;
		localStorage.setItem('recentSearches', JSON.stringify(existingSearches));
	}

	function changePreviousSection(newVal: string) {
		previousSection = newVal;
		return newVal;
	}

	function validateSearchLink(searchLinkSection: string) {
		return searchLinkSection === previousSection;
	}

	const useStyles = createStyles(() => ({
		'.svelteui-Modal-inner > div': {
			width: '100%',
			display: 'block !important'
		},
		'.svelteui-Modal-inner': {
			display: 'block !important'
		},
		'.svelteui-Modal-modal': {
			width: '100% !important',
			maxWidth: '40rem',
			marginRight: 'auto !important',
			marginLeft: 'auto !important',
			darkMode: {
				backgroundColor: '$dark800'
			}
		}
	}));
	$: ({ getStyles } = useStyles());
</script>

<div class="mobile_topbar">
	<Menu mr="xl" transition="scale" transitionOptions={{ duration: 250 }}>
		<Menu.Label>Navigation</Menu.Label>
		{#each config.links as { title, href }}
			<Menu.Item root="a" {href}>
				{title}
			</Menu.Item>
		{/each}
		<Divider />
		<Menu.Label>Experimental Theme Toggle</Menu.Label>
		<Menu.Item>
			<ActionIcon variant="outline" on:click={toggleTheme} size={30}>
				{#if $colorScheme === 'dark'}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</ActionIcon>
		</Menu.Item>
		<Menu.Item>
			<ActionIcon variant="outline" on:click={changeModalState} size={30}>
				<MagnifyingGlass />
			</ActionIcon>
		</Menu.Item>
	</Menu>
</div>
<div class="desktop_topbar">
	<ul style={`padding-right: 0.75rem`} use:hotkey={[['mod+k', () => changeModalState()]]}>
		<li class="searchBox">
			<Box
				css={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
				on:click={changeModalState}
			>
				<div style="display: flex; align-items: center">
					<MagnifyingGlass size={25} color="#228be6" />
					<p style="margin-left: 0.5rem; font-size: 1.1rem">Search</p>
				</div>
				<div>
					<Kbd>{browser && window.navigator.platform === 'MacIntel' ? '⌘' : 'Ctrl'}</Kbd> + <Kbd
						>K</Kbd
					>
				</div>
			</Box>
		</li>
		{#each config.buttons as { title, props, icon }}
			<li>
				<Tooltip withArrow label={title}>
					<ActionIcon root="a" {...props} radius="md" size="lg">
						<svelte:component this={icon} size={20} />
					</ActionIcon>
				</Tooltip>
			</li>
		{/each}
		<li>
			<Tooltip withArrow label="Toggle Theme">
				<ActionIcon size="lg" variant="outline" on:click={toggleTheme} radius="md">
					{#if $colorScheme === 'light'}
						<Moon size={20} />
					{:else}
						<Sun size={20} />
					{/if}
				</ActionIcon>
			</Tooltip>
		</li>
	</ul>
</div>

<Modal
	opened={modalOpened}
	on:close={changeModalState}
	overflow="inside"
	trapFocus
	class={getStyles()}
	withCloseButton={false}
>
	<TextInput
		placeholder="Search..."
		bind:value={searchTerm}
		on:input={onSearchValueInput}
		autocomplete="off"
		autofocus
	>
		<svelte:fragment slot="rightSection">
			<MagnifyingGlass color="#228be6" size={20} />
		</svelte:fragment>
	</TextInput>
	{#if searchTerm.length === 0}
		{#if recentSearches.length > 0}
			<h3 class="recentSearchesTitle">Recent searches:</h3>
			<div class="searchWrapper">
				{#each recentSearches as recentSearch}
					<SearchItem search={recentSearch} on:addSearch={() => addSearch(recentSearch)} />
				{/each}
			</div>
		{:else}
			<p class="noMatches">No recent searches</p>
		{/if}
	{:else if matchingSearches.length > 0}
		<div class="searchWrapper">
			{#each matchingSearches as matchingSearch}
				<SearchItem search={matchingSearch} on:addSearch={() => addSearch(matchingSearch)} />
			{/each}
		</div>
	{:else}
		<p class="noMatches">No matches</p>
	{/if}
	<Divider />
	<div class="searchWrapper">
		{#each searchLinks as searchLink}
			{#if validateSearchLink(searchLink.section)}
				<SearchItem search={searchLink} on:addSearch={() => addSearch(searchLink)} />
			{:else}
				<h2>{changePreviousSection(searchLink.section)}</h2>
				<SearchItem search={searchLink} on:addSearch={() => addSearch(searchLink)} />
			{/if}
		{/each}
	</div>
</Modal>
