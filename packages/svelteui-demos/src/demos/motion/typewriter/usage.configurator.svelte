<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
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

	let visible = false;
	const toggleVisible = () => {
		visible = !visible;
	};

	export let props = {};
</script>

<Group direction="column">
	<div>
		{#if visible}
			<p out:typewriter|global={{ speed: 3 }} in:typewriter|global={props}>Now the transition is playing</p>
		{/if}
	</div>
	<Button on:click={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}</Button>
</Group>
