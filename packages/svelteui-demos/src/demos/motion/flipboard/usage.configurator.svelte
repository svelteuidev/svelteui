<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	function strToObj(propStr: string) {
		return propStr.replaceAll('=', ': ').replaceAll('{', '').replaceAll('}', '');
	}

	const codeTemplate = (props: string) => `
<script>
  import { flipboard } from '@svelteuidev/motion';
<\/script>

<p in:flipboard={{${strToObj(props)}}}>Now the transition is playing</p>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'duration',
				type: 'number',
				initialValue: 400,
				defaultValue: 200,
				min: 100
			},
			{
				name: 'delay',
				type: 'number',
				initialValue: 0,
				defaultValue: 0,
				min: 0
			}
		]
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
	import { flipboard } from '@svelteuidev/motion';

	let visible = false;
	const toggleVisible = () => {
		visible = !visible;
	};

	export let props = {};
</script>

<Group direction="column">
	<div>
		{#if visible}
			<p out:flipboard={{ duration: 200 }} in:flipboard={props}>Now the transition is playing</p>
		{/if}
	</div>
	<Button on:click={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}</Button>
</Group>
