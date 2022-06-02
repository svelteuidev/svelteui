<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<div style='width: 340px; margin: auto'>
    <Card.Container shadow='sm' p='lg'>
        <Card.Section padding='lg'>
            <Image
                src='./image.png'
                height={160}
                alt='Portugal'
            />
        </Card.Section>
    
        <Group position='apart' override={{ marginBottom: '5px', marginTop: '$smPX' }}>
            <Text weight={500}>Portugal Porto Adventures</Text>
            <Badge color='pink' variant='light'>
                On Sale
            </Badge>
        </Group>
    
        <Text size='sm' override={{ color: secondaryColor, lineHeight: 1.5 }}>
            With Portugal Porto Adventures you can explore more of the beautiful portuguese cities,
            by walking on food, meeting the locals and eat excellent food and wine
        </Text>
    
        <Button variant='light' color='blue' fullSize override={{ marginTop: '14px' }}>
            Book classic tour now
        </Button>
    </Card.Container>
</div>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Card, Image, Text, colorScheme, fns } from '@svelteuidev/core';

    const { themeColor } = fns;
    const secondaryColor = $colorScheme === 'dark'
        ? themeColor('dark', 1)
        : themeColor('dark', 7)
</script>

<div style='width: 340px; margin: auto'>
    <Card.Container
        shadow='sm'
        p='xl'
        component='a'
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
    >
        <Card.Section padding='xl'>
            <Image
                src='https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80'
                height={160}
                alt='No way!'
            />
        </Card.Section>
    
        <Text weight={500} size='lg' override={{ marginBottom: '5px', marginTop: '$smPX' }}>
            You've won a million dollars in cash!
        </Text>
    
        <Text size='sm' override={{ marginTop: '14px' }}>
            Please click anywhere on this card to claim your reward, this is not a fraud, trust us
        </Text>
    </Card.Container>
</div>