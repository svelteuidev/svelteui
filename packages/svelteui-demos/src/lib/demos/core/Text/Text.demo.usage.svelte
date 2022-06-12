<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
	import { Text } from '@svelteuidev/core';
<\/script>

<Text size='xs'>Extra small text</Text>
<Text size='sm'>Small text</Text>
<Text size='md'>Default text</Text>
<Text size='lg'>Large text</Text>
<Text size='xl'>Extra large text</Text>
<Text weight={'semibold'}>Semibold</Text>
<Text weight={'bold'}>Bold</Text>
<Text underline>Underlined</Text>
<Text variant='link' root='a' href='https://svelteui.org'>Link variant</Text>
<Text color='red'>Red text</Text>
<Text color='blue'>Blue text</Text>
<Text color='gray'>Gray text</Text>
<Text transform='uppercase'>Uppercase</Text>
<Text transform='capitalize'>capitalized text</Text>
<Text align='center'>Aligned to center</Text>
<Text align='right'>Aligned to right</Text>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text } from '@svelteuidev/core';
</script>

<Text size='xs'>Extra small text</Text>
<Text size='sm'>Small text</Text>
<Text size='md'>Default text</Text>
<Text size='lg'>Large text</Text>
<Text size='xl'>Extra large text</Text>
<Text weight={'semibold'}>Semibold</Text>
<Text weight={'bold'}>Bold</Text>
<Text underline>Underlined</Text>
<Text variant='link' root='a' href='https://svelteui.org'>Link variant</Text>
<Text color='red'>Red text</Text>
<Text color='blue'>Blue text</Text>
<Text color='gray'>Gray text</Text>
<Text transform='uppercase'>Uppercase</Text>
<Text transform='capitalize'>capitalized text</Text>
<Text align='center'>Aligned to center</Text>
<Text align='right'>Aligned to right</Text>
