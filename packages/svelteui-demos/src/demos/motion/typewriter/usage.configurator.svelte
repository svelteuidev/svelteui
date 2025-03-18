<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	function strToObj(propStr: string) {
		return propStr.replaceAll('=', ': ').replaceAll('{', '').replaceAll('}', '').trim();
	}

	const codeTemplate = (props: string) => `
<script>
  import { typewriter } from '@svelteuidev/motion';
<\/script>

<p in:typewriter|global={{ ${strToObj(props)} }}>Now the transition is playing</p>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'speed',
				type: 'number',
				initialValue: 1,
				defaultValue: 1,
				min: 0
			}
		]
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
	import { typewriter } from '@svelteuidev/motion';

	let visible = $state(false);
	const toggleVisible = () => {
		visible = !visible;
	};

	let props = $props();
</script>

<Group direction="column">
	<div>
		{#if visible}
			<p out:typewriter|global={{ speed: 3 }} in:typewriter|global={props}>
				Now the transition is playing
			</p>
		{/if}
	</div>
	<Button onclick={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}</Button>
</Group>
