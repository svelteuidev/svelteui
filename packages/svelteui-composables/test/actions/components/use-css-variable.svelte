<script lang="ts">
	import { cssvariable } from '$clib/actions/use-css-variable/use-css-variable';

	let { cssVariables = { display: 'block', 'background-color': 'yellow' } } = $props();
</script>

<div id="css-variable" use:cssvariable={cssVariables}></div>
