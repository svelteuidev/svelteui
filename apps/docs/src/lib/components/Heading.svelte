<script lang="ts">
	// @ts-ignore
	// import { current_page } from '@svelte-docs/get/routes';
	import { Stack, Box, Title, Text, Group, Center, Tooltip } from '@svelteuidev/core';
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
		overflowX: 'scroll',
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
		bc: 'rgb(248, 249, 250)',
		padding: '$8',
		position: 'absolute',
		left: 0,
		right: 0
	}}
>
	<Stack override={{ mt: 50, mb: 20, h1: { mb: 0 }, '@md': { mt: 0 } }} spacing="xs">
		<h1>{title}</h1>
		{#if description}
			<Title color="dimmed" order={3}>{description}</Title>
		{/if}
	</Stack>
	{#if importCode}
		<Group noWrap spacing={$screenW < 650 ? 10 : 70}>
			{#if $screenW > 975}
				<Text color="dimmed">Import</Text>
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
			<Text color="dimmed">Source</Text>
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
			<Text color="dimmed">Docs</Text>
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
			<Text color="dimmed">Package</Text>
			<Text variant="link" root="a" href={`${links.npm}${packageGroup}`}>
				<Center override={{ gap: '$4' }} inline>
					<Cube />
					{packageGroup}
				</Center>
			</Text>
		</Group>
	{/if}
</Stack>
<hr />

<style>
  h1 {
    font-size: 2em !important
  }
</style>
