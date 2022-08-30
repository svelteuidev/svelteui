<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Text, Timeline } from '@svelteuidev/core';
  import { Commit, EyeOpen, GithubLogo, LightningBolt } from 'radix-icons-svelte';
<\/script>

<Timeline active={1} bulletSize={24} lineWidth={2}>
	<Timeline.Item bullet={LightningBolt} title='New branch'>
		<Text color='dimmed' size='sm'>
			You&apos;ve created new branch<Text variant='link' root='span' href='#' inherit
				>fix-notifications</Text
			> from master</Text
		>
		<Text size='xs'>2 hours ago</Text>
	</Timeline.Item>

	<Timeline.Item bullet={Commit} title='Commits'>
		<Text color='dimmed' size='sm'
			>You&apos;ve pushed 23 commits to<Text variant='link' root='span' href='#' inherit
				>fix-notifications branch</Text
			></Text
		>
		<Text size='xs'>52 minutes ago</Text>
	</Timeline.Item>

	<Timeline.Item title='Pull request' bullet={GithubLogo} lineVariant='dashed'>
		<Text color='dimmed' size='sm'
			>You&apos;ve submitted a pull request<Text variant='link' root='span' href='#' inherit
				>Fix incorrect notification message (#187)</Text
			></Text
		>
		<Text size='xs'>34 minutes ago</Text>
	</Timeline.Item>

	<Timeline.Item title='Code review' bullet={EyeOpen}>
		<Text color='dimmed' size='sm'
			><Text variant='link' root='span' href='#' inherit>Robert Gluesticker</Text> left a code review on
			your pull request</Text
		>
		<Text size='xs'>12 minutes ago</Text>
	</Timeline.Item>
</Timeline>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Text, Timeline } from '@svelteuidev/core';
	import { Commit, EyeOpen, GithubLogo, LightningBolt } from 'radix-icons-svelte';
</script>

<Center>
	<Timeline active={1} bulletSize={24} lineWidth={2}>
		<Timeline.Item bullet={LightningBolt} title="New branch">
			<Text color="dimmed" size="sm">
				You&apos;ve created new branch<Text variant="link" root="span" href="#" inherit
					>fix-notifications</Text
				> from master</Text
			>
			<Text size="xs" override={{ marginTop: '4px' }}>2 hours ago</Text>
		</Timeline.Item>

		<Timeline.Item bullet={Commit} title="Commits">
			<Text color="dimmed" size="sm"
				>You&apos;ve pushed 23 commits to<Text variant="link" root="span" href="#" inherit
					>fix-notifications branch</Text
				></Text
			>
			<Text size="xs" override={{ marginTop: '4px' }}>52 minutes ago</Text>
		</Timeline.Item>

		<Timeline.Item title="Pull request" bullet={GithubLogo} lineVariant="dashed">
			<Text color="dimmed" size="sm"
				>You&apos;ve submitted a pull request<Text variant="link" root="span" href="#" inherit
					>Fix incorrect notification message (#187)</Text
				></Text
			>
			<Text size="xs" override={{ marginTop: '4px' }}>34 minutes ago</Text>
		</Timeline.Item>

		<Timeline.Item title="Code review" bullet={EyeOpen}>
			<Text color="dimmed" size="sm"
				><Text variant="link" root="span" href="#" inherit>Robert Gluesticker</Text> left a code review
				on your pull request</Text
			>
			<Text size="xs" override={{ marginTop: '4px' }}>12 minutes ago</Text>
		</Timeline.Item>
	</Timeline>
</Center>
