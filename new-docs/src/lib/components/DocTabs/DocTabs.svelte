<script lang="ts">
    import { Button } from '@svelteuidev/core'
	import { activeTab } from './active'

	export let active = undefined

	let tabs = ['one', 'two']

	$: active = $activeTab
</script>

<div class="flex gap-4">
	<Button variant='gradient' size='md' radius='xl' on:click={() => ($activeTab = tabs[0])}>Documentation</Button>
	<Button variant='gradient' size='md' radius='xl' on:click={() => ($activeTab = tabs[1])}>Component Props</Button>
</div>