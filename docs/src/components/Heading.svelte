<script lang="ts">
	// @ts-ignore
	import { current_page } from '@svelte-docs/get/routes';
	import { Stack, Box, Title, Text, Group, Center, Tooltip } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';
	import { GithubLogo, Pencil1, Cube } from 'radix-icons-svelte';
	import { screenW } from 'components';

	const links = {
		github: 'https://github.com/svelteuidev/svelteui/tree/main/packages/',
		docs: 'https://github.com/svelteuidev/svelteui/blob/main/docs/src/pages/',
		npm: 'https://www.npmjs.com/package/'
	};

	$: importStyles = {
		'&:hover': { cursor: 'pointer' },
		code: { fontSize: $screenW < 500 ? 10 : '$sm' },
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
		<h1>{$current_page.meta.title}</h1>
		{#if $current_page.meta.description}
			<Title color="dimmed" order={3}>{$current_page.meta.description}</Title>
		{/if}
	</Stack>
	{#if $current_page.meta?.import}
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
					<code use:clipboard={$current_page.meta.import} on:useclipboard={onCopy}>
						{$current_page.meta.import}
					</code>
				</Box>
			</Tooltip>
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
			<Text variant="link" root="a" href={`${links.docs}${$current_page.meta.docs}`}>
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
