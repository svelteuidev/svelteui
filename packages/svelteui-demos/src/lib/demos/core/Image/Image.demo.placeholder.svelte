<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = 
`<script>
    import { Image, Text } from '@svelteuidev/core';
<\/script>

<Image width={200} height={120} src={null} alt='Without placeholder' />
<Image width={200} height={120} src={null} alt='With default placeholder' usePlaceholder />
<Image width={200} height={120} src={null} alt='With default placeholder' usePlaceholder>
    <svelte:fragment slot='placeholder'>
        <Text>This image would have changed your life</Text>
    </svelte:fragment>
</Image>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { Group, Image, Text } from '@svelteuidev/core';
</script>

<Group position='center'>
    <Image width={200} height={120} src={null} alt='Without placeholder' />
    <Image width={200} height={120} src={null} alt='With default placeholder' usePlaceholder />
    <Image width={200} height={120} src={null} alt='With default placeholder' usePlaceholder>
        <svelte:fragment slot='placeholder'>
            <Text align='center'>This image would have changed your life</Text>
        </svelte:fragment>
    </Image>
</Group>
