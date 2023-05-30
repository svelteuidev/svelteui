<script lang="ts">
	// @ts-ignore
	import { colorScheme, Stack, Box, Title, Text, Group, Center, Tooltip } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';
	import { GithubLogo, Pencil1, Cube } from 'radix-icons-svelte';
	import { screenW } from '$lib/components';

  export let title: String, description = false, docs = false, importCode = false, source = false, packageGroup = false
	const links = {
		github: 'https://github.com/svelteuidev/svelteui/blob/main/packages/',
		docs: 'https://github.com/svelteuidev/svelteui/blob/main/apps/docs/src/pages/',
		npm: 'https://www.npmjs.com/package/'
	};

	let importStyles = {
		overflowX: 'hidden',
		'&:hover': { cursor: 'pointer' },
		code: {
			fontSize: $screenW < 500 ? 10 : '$sm'
		},
		'@sm': { code: { fontSize: '$sm' } },
		'@md': { code: { fontSize: '$md' } }
	};

	let copied = false;
	function onCopy() {
		copied = true;
		setTimeout(() => (copied = false), 1000);
	}
</script>

<Stack
	override={{
		backgroundColor: $colorScheme === 'light' ? "$blue100" : "$dark800",
		padding: '$8',
    	borderRadius: "0.5rem"
	}}
>
	<Stack override={{ mb: 20, h1: { mb: 0, mt: 0 }, '@md': { mt: 0 } }} spacing="xs">
		<h1>{title}</h1>
		{#if description}
			<Title order={3}>{description}</Title>
		{/if}
	</Stack>
	{#if importCode}
		<Group noWrap spacing={$screenW < 650 ? 10 : 70}>
			{#if $screenW > 975}
				<Text>Import</Text>
			{/if}
			<Tooltip
				closeDelay={200}
				withArrow
				position={$screenW < 500 ? 'top' : 'right'}
				label={copied ? 'Copied' : 'Copy'}
				color={copied ? 'green' : 'gray'}
			>
				<Box css={importStyles}>
					<code use:clipboard={importCode} on:useclipboard={onCopy}>
						{importCode}
					</code>
				</Box>
			</Tooltip>
		</Group>
	{/if}
	{#if source}
		<Group spacing={65}>
			<Text>Source</Text>
			<Text variant="link" root="a" href={`${links.github}${source}`}>
				<Center override={{ gap: '$4' }} inline>
					<GithubLogo />
					View Source Code
				</Center>
			</Text>
		</Group>
	{/if}
	{#if docs}
		<Group spacing={78}>
			<Text>Docs</Text>
			<Text variant="link" root="a" href={`${links.docs}${docs}`}>
				<Center override={{ gap: '$4' }} inline>
					<Pencil1 />
					Edit This Page
				</Center>
			</Text>
		</Group>
	{/if}
	{#if packageGroup}
		<Group spacing={55}>
			<Text>Package</Text>
			<Text variant="link" root="a" href={`${links.npm}${packageGroup}`}>
				<Center override={{ gap: '$4' }} inline>
					<Cube />
					{packageGroup}
				</Center>
			</Text>
		</Group>
	{/if}
</Stack>

<style>
  h1 {
    font-size: 2em !important
  }
</style>
