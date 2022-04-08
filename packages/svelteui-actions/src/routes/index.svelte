<script lang="ts">
	import { pageleave } from '$lib';

	$: count = 0;
</script>

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the actions package</p>
<hr />

<div use:pageleave={() => count++}>Hello</div>
{count}
