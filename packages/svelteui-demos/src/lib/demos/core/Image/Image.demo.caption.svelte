<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = 
`<script>
    import { Image } from '@svelteuidev/core';
<\/script>

<Image radius='md' src={doggo} alt='Random unsplash image' caption='My dog begging for treats' />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { Group, Image } from '@svelteuidev/core';
    const doggo = 'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?auto=format&fit=crop&w=640&q=80';
</script>

<Group position='center'>
    <Image radius='md' src={doggo} alt='Random unsplash image' caption='My dog begging for treats' />
</Group>
