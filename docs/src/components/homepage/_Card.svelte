<script lang="ts">
	import { Badge, Button, Card, Group, Image, Text, colorScheme, fns } from '@svelteuidev/core';

	const { themeColor } = fns;
	const secondaryColor = $colorScheme === 'dark' ? themeColor('dark', 1) : themeColor('dark', 7);
</script>

<Card.Container override={{ width: 340 }} shadow="sm" p="lg">
	<Card.Section first padding="lg">
		<Image
			src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
			height={160}
			alt="Portugal"
		/>
	</Card.Section>

	<Group position="apart" override={{ marginBottom: '5px', marginTop: '$smPX' }}>
		<Text weight={500}>Portugal Porto Adventures</Text>
		<Badge color="pink" variant="light">On Sale</Badge>
	</Group>

	<Text size="sm" override={{ color: secondaryColor, lineHeight: 1.5 }}>
		With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by
		walking on food, meeting the locals and eat excellent food and wine
	</Text>

	<Button variant="light" color="blue" fullSize override={{ marginTop: '14px' }}>
		Book classic tour now
	</Button>
</Card.Container>
