<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `<script>
  import { Text, Timeline } from '@svelteuidev/core';
<\/script>

<Center>
  <Timeline active={1}${props}>
    <Timeline.Item title='New branch'>
      <Text color='dimmed' size='sm'>
        You&apos;ve created new branch<Text variant='link' root='span' href='#' inherit
          >fix-notifications</Text
        > from master</Text
      >
      <Text size='xs'>2 hours ago</Text>
    </Timeline.Item>

    <Timeline.Item title='Commits'>
      <Text color='dimmed' size='sm'
        >You&apos;ve pushed 23 commits to<Text variant='link' root='span' href='#' inherit
          >fix-notifications branch</Text
        ></Text
      >
      <Text size='xs'>52 minutes ago</Text>
    </Timeline.Item>

    <Timeline.Item title='Pull request' lineVariant='dashed'>
      <Text color='dimmed' size='sm'
        >You&apos;ve submitted a pull request<Text variant='link' root='span' href='#' inherit
          >Fix incorrect notification message (#187)</Text
        ></Text
      >
      <Text size='xs'>34 minutes ago</Text>
    </Timeline.Item>

    <Timeline.Item title='Code review'>
      <Text color='dimmed' size='sm'
        ><Text variant='link' root='span' href='#' inherit>Robert Gluesticker</Text> left a code review on
        your pull request</Text
      >
      <Text size='xs'>12 minutes ago</Text>
    </Timeline.Item>
  </Timeline>
</Center>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue',
				when: { control: 'variant', comparator: '!==', value: 'gradient' }
			},
			{ name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
			{ name: 'active', type: 'number', initialValue: 1, min: -1, max: 3 },
			{
				name: 'reverseActive',
				label: 'Reverse active',
				type: 'boolean',
				initialValue: false,
				defaultValue: false
			},
			{ name: 'lineWidth', label: 'Line width', type: 'number', initialValue: 4, min: 1, max: 8 },
			{
				name: 'bulletSize',
				label: 'Bullet size',
				type: 'number',
				initialValue: 20,
				min: 12,
				max: 30
			},
			{
				name: 'align',
				type: 'select',
				data: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			}
		]
	};
</script>

<script lang="ts">
	import type { TimelineProps } from '@svelteuidev/core';
	import { Center, Text, Timeline } from '@svelteuidev/core';

	let props: TimelineProps = $props();
</script>

<Center>
	<Timeline {...props}>
		<Timeline.Item title="New branch">
			<Text color="dimmed" size="sm" align={props.align}>
				You&apos;ve created new branch<Text variant="link" root="span" href="#" inherit
					>fix-notifications</Text
				> from master</Text
			>
			<Text size="xs" override={{ marginTop: '4px' }} align={props.align}>2 hours ago</Text>
		</Timeline.Item>

		<Timeline.Item title="Commits">
			<Text color="dimmed" size="sm" align={props.align}
				>You&apos;ve pushed 23 commits to<Text variant="link" root="span" href="#" inherit
					>fix-notifications branch</Text
				></Text
			>
			<Text size="xs" override={{ marginTop: '4px' }} align={props.align}>52 minutes ago</Text>
		</Timeline.Item>

		<Timeline.Item title="Pull request" lineVariant="dashed">
			<Text color="dimmed" size="sm" align={props.align}
				>You&apos;ve submitted a pull request<Text variant="link" root="span" href="#" inherit
					>Fix incorrect notification message (#187)</Text
				></Text
			>
			<Text size="xs" override={{ marginTop: '4px' }} align={props.align}>34 minutes ago</Text>
		</Timeline.Item>

		<Timeline.Item title="Code review">
			<Text color="dimmed" size="sm" align={props.align}
				><Text variant="link" root="span" href="#" inherit>Robert Gluesticker</Text> left a code review
				on your pull request</Text
			>
			<Text size="xs" override={{ marginTop: '4px' }} align={props.align}>12 minutes ago</Text>
		</Timeline.Item>
	</Timeline>
</Center>
