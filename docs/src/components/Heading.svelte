<script lang="ts">
	// @ts-ignore
	import { current_page } from '@svelte-docs/get/routes';
	import { Stack, Box, Title, Text, Group, Center } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/actions';
	import { GithubLogo, Pencil1, Cube } from 'radix-icons-svelte';
	import { screenW } from 'components';

	const links = {
		github: 'https://svelteui.org/tree/main/packages/',
		docs: 'https://svelteui.org/tree/main/docs/src/pages/',
		npm: 'https://www.npmjs.com/package/'
	};

	const importStyles = {
		'&:hover': { cursor: 'pointer' },
		code: { fontSize: '$xs' },
		'@sm': { code: { fontSize: '$md' } }
	};
</script>

<Stack
	override={{
		bc: 'rgb(248, 249, 250)',
		padding: '$8',
		position: 'absolute',
		left: 0,
		right: 0
	}}
>
	<Stack override={{ mt: 50, mb: 20, h1: { mb: 0 }, '@md': { mt: 0 } }} spacing="xs">
		<h1>{$current_page.meta.title}</h1>
		{#if $current_page.meta.description}
			<Title color="dimmed" order={3}>{$current_page.meta.description}</Title>
		{/if}
	</Stack>
	{#if $current_page.meta?.import}
		<Group children={2} spacing={$screenW <= 500 ? 10 : 70}>
			<Text color="dimmed">Import</Text>
			<Box css={importStyles}>
				<code use:clipboard={$current_page.meta.import}>
					{$current_page.meta.import}
				</code>
			</Box>
		</Group>
	{/if}
	{#if $current_page.meta?.source}
		<Group spacing={65}>
			<Text color="dimmed">Source</Text>
			<Text variant="link" root="a" href={`${links.github}${$current_page.meta.source}`}>
				<Center override={{ gap: '$4' }} inline>
					<GithubLogo />
					View Source Code
				</Center>
			</Text>
		</Group>
	{/if}
	{#if $current_page.meta?.docs}
		<Group spacing={78}>
			<Text color="dimmed">Docs</Text>
			<Text variant="link" root="a" href={`${links.github}${$current_page.meta.docs}`}>
				<Center override={{ gap: '$4' }} inline>
					<Pencil1 />
					Edit This Page
				</Center>
			</Text>
		</Group>
	{/if}
	{#if $current_page.meta?.packageGroup}
		<Group spacing={55}>
			<Text color="dimmed">Package</Text>
			<Text variant="link" root="a" href={`${links.npm}${$current_page.meta.packageGroup}`}>
				<Center override={{ gap: '$4' }} inline>
					<Cube />
					{$current_page.meta.packageGroup}
				</Center>
			</Text>
		</Group>
	{/if}
</Stack>
<hr />
