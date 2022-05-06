<script lang="ts">
	import { cssvariable } from '$lib/dist/use-css-variable/use-css-variable';

	export let cssVariables = { display: 'block', 'background-color': 'yellow' };
</script>

<div id="css-variable" use:cssvariable={cssVariables} />
