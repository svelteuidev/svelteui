<script lang="ts">
  onMount(() => recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || []);

	import { ActionIcon, Tooltip, Menu, Divider, colorScheme, Modal, TextInput, Paper, Box, Kbd } from '@svelteuidev/core';
	import { Sun, Moon, MagnifyingGlass } from 'radix-icons-svelte';
	import { mobile } from 'components';
	import { config, searchLinks } from './data';
  import { onMount } from 'svelte';
  import { hotkey } from '@svelteuidev/composables';

	let recentSearches,
		searchTerm = '',
		matchingSearches = [],
		modalOpened = false;

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
	}

  function changeModalState() {
		modalOpened = !modalOpened;
    searchTerm = ""
	}

	function onSearchValueInput() {
    matchingSearches = searchLinks.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  function addSearch(matchingSearch) {
    changeModalState()
    const existingSearches = JSON.parse(localStorage.getItem("recentSearches")) || []
    const elementExists = existingSearches.some(item => item.title === matchingSearch.title)
    if (!elementExists) existingSearches.unshift(matchingSearch)
    if (existingSearches.length > 6) existingSearches.pop()
    recentSearches = existingSearches
    localStorage.setItem("recentSearches", JSON.stringify(existingSearches))
  }

	// @ts-nocheck
</script>

{#if $mobile}
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
			<ActionIcon variant="default" on:click={toggleTheme} size={30}>
				{#if $colorScheme === 'dark'}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</ActionIcon>
		</Menu.Item>
    <Menu.Item>
      <ActionIcon variant="default" on:click={changeModalState} size={30}>
        <MagnifyingGlass />
      </ActionIcon>
    </Menu.Item>
	</Menu>
{:else}
  <ul style={`padding-right: 0.75rem`} use:hotkey={[['mod+k', () => changeModalState()]]}>
    <li class="searchBox">
      <Box css={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}} on:click={changeModalState}>
        <div style="display: flex; align-items: center">
          <MagnifyingGlass size={25} />
          <p style="margin-left: 0.5rem; font-size: 1.1rem">Search</p>
        </div>
        <div>
          <Kbd>{navigator.platform === "MacIntel" ? "⌘" : "Ctrl"}</Kbd> + <Kbd>K</Kbd>
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
      <Tooltip withArrow label="Experimental Theme Toggle">
        <ActionIcon size="lg" color="dark" variant="outline" on:click={toggleTheme} radius="md">
          {#if $colorScheme === 'light'}
            <Moon size={20} />
          {:else}
            <Sun size={20} />
          {/if}
        </ActionIcon>
      </Tooltip>
    </li>
  </ul>
{/if}

<Modal opened={modalOpened} on:close={changeModalState} title="SvelteUI Docs" overflow="inside">
	<TextInput
		placeholder="Search..."
		bind:value={searchTerm}
		on:input={onSearchValueInput}
    autocomplete="off"
	>
		<svelte:fragment slot="rightSection">
			<MagnifyingGlass color="#228be6" size={20} />
		</svelte:fragment>
	</TextInput>
	{#if searchTerm.length === 0}
    {#if recentSearches.length > 0}
      <p class="recentSearchesTitle">Recent searches: </p>
      {#each recentSearches as recentSearch}
        <a href={recentSearch.link} style={`text-decoration: none`} on:click={() => addSearch(recentSearch)}>
          <Paper class="searchTerm" withBorder>
            <p class="searchItemTitle">{recentSearch.title}</p>
            {#if recentSearch.section}
              <p class="searchItemDescription">{recentSearch.section}</p>
            {/if}
          </Paper>
        </a>
      {/each}
    {:else}
      <p class="noMatches">No recent searches</p>
    {/if}
  {:else}
    {#if matchingSearches.length > 0}
      {#each matchingSearches as matchingSearch}
        <a href={matchingSearch.link} style={`text-decoration: none`} on:click={() => addSearch(matchingSearch)}>
          <Paper class="searchTerm" withBorder>
            <p class="searchItemTitle">{matchingSearch.title}</p>
            {#if matchingSearch.section}
              <p class="searchItemDescription">{matchingSearch.section}</p>
            {/if}
          </Paper>
        </a>
      {/each}
    {:else}
      <p class="noMatches">No matches</p>
    {/if}
  {/if}
</Modal>
