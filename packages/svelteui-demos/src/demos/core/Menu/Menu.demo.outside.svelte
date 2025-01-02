<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
  import { Button, Menu, type MenuComponent } from '@svelteuidev/core';
  import { Camera, ChatBubble, Gear } from 'radix-icons-svelte';

  let element: MenuComponent = $state();
<\/script>

<Button onclick={() => element.toggle()}>Toggle Menu</Button>

<Menu bind:this={element}>
  <Menu.Item iconComponent={Gear}>Settings</Menu.Item>
  <Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
  <Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
</Menu>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, Menu, type MenuComponent } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear } from 'radix-icons-svelte';

	let element: MenuComponent = $state();
</script>

<Center>
	<Button onclick={() => element.toggle()}>Toggle Menu</Button>

	<Menu bind:this={element}>
		<Menu.Item iconComponent={Gear}>Settings</Menu.Item>
		<Menu.Item iconComponent={ChatBubble}>Messages</Menu.Item>
		<Menu.Item iconComponent={Camera}>Gallery</Menu.Item>
	</Menu>
</Center>
