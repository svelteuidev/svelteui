<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	const codeTemplate = (props: string) => `
<script>
  import { NativeSelect, Center } from '@svelteuidev/core';

  export let props: any = {};
<\/script>

<div>
  <NativeSelect
    value={1}
    data={[
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 }
    ]}${props}
  />
</div>
`;

	export const configuration: ConfiguratorDemoConfiguration = {
		configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
		codeTemplate,
		multiline: 2,
		multilineEndNewLine: false,
		previewMaxWidth: 200
	};
</script>

<script lang="ts">
	import { NativeSelect } from '@svelteuidev/core';

	export let props = {};
</script>

<div>
	<NativeSelect
		value={1}
		data={[
			{ label: 'Option 1', value: 1 },
			{ label: 'Option 2', value: 2 },
			{ label: 'Option 3', value: 3 }
		]}
		{...props}
	/>
</div>
