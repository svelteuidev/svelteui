<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
  import { Button, Menu } from '@svelteuidev/core';
  import { Camera, ChatBubble, Gear } from 'radix-icons-svelte';

  let element;
<\/script>

<Button on:click={() => element.toggle()}>Toggle Menu</Button>

<Menu bind:this={element}>
  <div slot="control"></div>
  <Menu.Item icon={Gear}>Settings</Menu.Item>
  <Menu.Item icon={ChatBubble}>Messages</Menu.Item>
  <Menu.Item icon={Camera}>Gallery</Menu.Item>
</Menu>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, Menu } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear } from 'radix-icons-svelte';

  let element;
</script>

<Center>
	<Button on:click={() => element.toggle()}>Toggle Menu</Button>

  <Menu bind:this={element}>
		<Menu.Item icon={Gear}>Settings</Menu.Item>
		<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
		<Menu.Item icon={Camera}>Gallery</Menu.Item>
	</Menu>
</Center>
