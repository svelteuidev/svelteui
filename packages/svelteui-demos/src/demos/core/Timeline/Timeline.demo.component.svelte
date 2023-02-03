<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Image, Text, ThemeIcon, Timeline } from '@svelteuidev/core';
  import { Sun, LightningBolt } from 'radix-icons-svelte';
<\/script>

<Timeline active={1} bulletSize={24} lineWidth={2}>
	<Timeline.Item title='Default bullet'>
		<Text color='dimmed' size='sm'>
			Default bullet with default styling
		</Text>
	</Timeline.Item>
	<Timeline.Item bullet={LightningBolt} title='Icon'>
		<Text color='dimmed' size='sm'>
			Item with bullet as icon
		</Text>
	</Timeline.Item>
	<Timeline.Item title='Icon'>
		<svelte:fragment slot='bullet'>
			<ThemeIcon radius='xl' color='orange'><Sun /></ThemeIcon>
		</svelte:fragment>
		<Text color='dimmed' size='sm'>
			Item with bullet as icon
		</Text>
	</Timeline.Item>
	<Timeline.Item title='Image'>
		<svelte:fragment slot='bullet'>
			<Image src="https://avatars.githubusercontent.com/u/1024025?v=4" />
		</svelte:fragment>
		<Text color='dimmed' size='sm'>
			Item with bullet as image
		</Text>
	</Timeline.Item>
</Timeline>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Image, Text, ThemeIcon, Timeline } from '@svelteuidev/core';
	import { Sun, LightningBolt } from 'radix-icons-svelte';
</script>

<Center>
	<Timeline active={1} bulletSize={24} lineWidth={2}>
		<Timeline.Item title="Default bullet">
			<Text color="dimmed" size="sm">Default bullet with default styling</Text>
		</Timeline.Item>
		<Timeline.Item bullet={LightningBolt} title="Icon">
			<Text color="dimmed" size="sm">Item with bullet as icon</Text>
		</Timeline.Item>
		<Timeline.Item title="Icon">
			<svelte:fragment slot="bullet">
				<ThemeIcon radius="xl" color="orange"><Sun /></ThemeIcon>
			</svelte:fragment>
			<Text color="dimmed" size="sm">Item with bullet as icon</Text>
		</Timeline.Item>
		<Timeline.Item title="Image">
			<svelte:fragment slot="bullet">
				<Image src="https://avatars.githubusercontent.com/u/1024025?v=4" />
			</svelte:fragment>
			<Text color="dimmed" size="sm">Item with bullet as image</Text>
		</Timeline.Item>
	</Timeline>
</Center>
