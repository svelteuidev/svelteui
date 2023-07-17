<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Text } from '@svelteuidev/core';
<\/script>

<Text${props}>
    From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin ...
</Text>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
			{ name: 'lineClamp', label: 'Line clamp', type: 'number', initialValue: 4, min: 1, max: 5 }
		]
	};
</script>

<script lang="ts">
	import type { TextProps } from '@svelteuidev/core';
	import { Center, Text } from '@svelteuidev/core';

	export let props: TextProps = {};
</script>

<Center>
	<Text {...props}>
		From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker
		patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and
		a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper
		jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's
		back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also
		conceals two slender, tentacle-like vines.
	</Text>
</Center>
