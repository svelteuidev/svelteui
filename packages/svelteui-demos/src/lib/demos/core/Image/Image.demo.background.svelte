<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = 
`<script>
    import { BackgroundImage, Text } from '@svelteuidev/core';
<\/script>

<BackgroundImage src={url} radius='sm' >
    <Text color='#fff'>
        BackgroundImage component can be used to add any content on image. It is useful for hero
        headers and other similar sections
    </Text>
</BackgroundImage>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { BackgroundImage, Group, Text } from '@svelteuidev/core';
    const url = 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=720&q=80';
</script>

<Group position='center'>
    <BackgroundImage src={url} radius='sm' >
        <Text color='#fff'>
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
        </Text>
    </BackgroundImage>
</Group>
