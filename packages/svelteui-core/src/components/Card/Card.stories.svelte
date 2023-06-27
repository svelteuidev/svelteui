<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button } from '../Button';
	import { Group } from '../Group';
	import { Image } from '../Image';
	import { Text } from '../Text';
	import { Card } from './index';
</script>

<Meta title="Components/Card" component={Card} />

<Template let:args>
	<Card shadow="sm" padding="lg" {...args}>
		<Card.Section padding="lg">
			<Image
				src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
				height={160}
				alt="Portugal"
			/>
		</Card.Section>

		<Group position="apart" override={{ marginBottom: '5px', marginTop: '$smPX' }}>
			<Text weight={500}>Portugal Porto Adventures</Text>
		</Group>

		<Text size="sm" override={{ lineHeight: 1.5 }}>
			With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by
			walking on food, meeting the locals and eat excellent food and wine
		</Text>

		<Button variant="light" color="blue" fullSize override={{ marginTop: '14px' }}>
			Book classic tour now
		</Button>
	</Card>
</Template>

<Story
	name="Card"
	id="cardStory"
	args={{ withBorder: true, radius: 'md', shadow: 'sm', padding: 'lg' }}
/>
