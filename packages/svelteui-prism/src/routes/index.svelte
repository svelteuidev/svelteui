<script lang="ts">
	import { Prism } from '$lib';

	const test = 'const name = "Adam" ';
</script>

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the Prism package</p>
<hr />

<Prism message={test}>{test}</Prism>
