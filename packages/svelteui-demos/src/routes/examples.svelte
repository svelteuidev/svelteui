<script lang="ts">
	import { Space } from '@svelteuidev/core';
	import { Demo, ConfiguratorExamples, CodeDemoExamples } from '$lib/index';
</script>

<h1>Configurator</h1>

<h2>Basic</h2>
<Demo demo={ConfiguratorExamples.basic} />

<h2>Appearance Options</h2>
<Demo demo={ConfiguratorExamples.appearanceOptions} />

<h2>Multiline</h2>
<Demo demo={ConfiguratorExamples.multiline} />

<h2>Multiline Offset</h2>
<Demo demo={ConfiguratorExamples.multilineOffset} />

<h2>We Need To Go Deeper</h2>
<Demo demo={ConfiguratorExamples.weNeedToGoDeeper} />

<h2>Only Configurator</h2>
<Demo demo={ConfiguratorExamples.onlyConfigurator} />

<h1>CodeDemo</h1>

<h2>Basic</h2>
<Demo demo={CodeDemoExamples.basic} />

<h2>Appearance Options</h2>
<Demo demo={CodeDemoExamples.appearanceOptions} />

<h2>Only Demo</h2>
<Demo demo={CodeDemoExamples.onlyDemo} />

<Space h={40} />

<style>
	h1 {
		margin-top: 60px;
		margin-bottom: 40px;
	}

	h2 {
		margin-top: 40px;
		margin-bottom: 20px;
	}
</style>
