<script lang='ts' context='module'>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
`<script>
  import { Input, InputWrapper } from '@svelteuidev/core';
<\/script>

<InputWrapper id='input-demo' ${props}>
    <Input placeholder='Write here the information' />
</InputWrapper>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'label', type: 'string', initialValue: 'Credit card information'},
			{ name: 'description', type: 'string', initialValue: 'Please enter your credit card information, we need some money'},
			{ name: 'error', type: 'string', initialValue: 'Your credit card expired'},
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'required', type: 'boolean', initialValue: true, defaultValue: true }
		]
	};
</script>

<script lang='ts'>
	import type { InputWrapperStyles } from '@svelteuidev/core';
	import { Center, Input, InputWrapper } from '@svelteuidev/core';

	export let props: InputWrapperStyles.InputWrapperProps = {};
</script>

<Center>
	<InputWrapper {...props}>
        <Input id='input-demo' placeholder='Write here the information' />
    </InputWrapper>
</Center>
