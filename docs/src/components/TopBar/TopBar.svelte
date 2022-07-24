<script lang="ts">
	import { ActionIcon, Tooltip, Menu, Divider, colorScheme } from '@svelteuidev/core';
	import { Sun, Moon } from 'radix-icons-svelte';
	import { mobile } from 'components';
	import { config } from './data';

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
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
	</Menu>
{:else}
	<div
		style={`padding-right: ${$mobile ? '0rem' : '0.75rem'}; padding-top: ${
			$mobile ? '0rem' : '0.75rem'
		}`}
	>
		<ul>
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
	</div>
{/if}
