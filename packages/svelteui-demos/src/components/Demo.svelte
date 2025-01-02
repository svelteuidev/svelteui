<script lang="ts">
	import type { CodeDemoType, DemoType } from '../types';
	import CodeDemo from './CodeDemo/CodeDemo.svelte';
	import Configurator from './Configurator/Configurator.svelte';

	interface Props {
		demo: DemoType;
	}

	let { demo }: Props = $props();

	function isCodeDemo(demo: DemoType): demo is CodeDemoType {
		return demo && demo.type === 'demo';
	}
</script>

{#if isCodeDemo(demo)}
	<CodeDemo component={demo.default} {...demo.configuration} />
{:else}
	<Configurator component={demo.default} {...demo.configuration} />
{/if}
