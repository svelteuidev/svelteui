<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { fly } from 'svelte/transition';
	import { Affix, Button, Text } from '@svelteuidev/core';
	import { ArrowUp } from 'radix-icons-svelte';

  let scrollY = 0;
<\/script>

<svelte:window on:scroll={() => scrollY = window.scrollY } />

<Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
<Affix position={{ bottom: 20, right: 20 }}>
    {#if scrollY > 0}
        <div transition:fly|global={{ y: 20, duration: 250 }}>
            <Button on:click={() => window.scrollTo(0, 0)}>
                <svelte:fragment slot='leftIcon'>
                    <ArrowUp />
                </svelte:fragment>
                Scroll to top
            </Button>
        </div>
    {/if}
</Affix>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Affix, Button, Text } from '@svelteuidev/core';
	import { ArrowUp } from 'radix-icons-svelte';

	let scrollY = $state(0);
</script>

<svelte:window onscroll={() => (scrollY = window.scrollY)} />

<Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
<Affix position={{ bottom: 20, right: 20 }}>
	{#if scrollY > 0}
		<div transition:fly|global={{ y: 20, duration: 250 }}>
			<Button on:click={() => window.scrollTo(0, 0)}>
				{#snippet leftIcon()}
							
						<ArrowUp />
					
							{/snippet}
				Scroll to top
			</Button>
		</div>
	{/if}
</Affix>
