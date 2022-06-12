<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
    export const type: CodeDemoType['type'] = 'demo';

    export const configuration: CodeDemoConfiguration = {
        toggle: true
    };
</script>

<script lang="ts">
	import type { ThemeIconStyles } from '@svelteuidev/core';
	import { Group, ThemeIcon } from '@svelteuidev/core';
	import { Rocket } from 'radix-icons-svelte';

	let variants: ThemeIconStyles.ThemeIconProps['variant'][] = ['filled', 'light', 'outline', 'subtle', 'default', 'white'];
    let colors: ThemeIconStyles.ThemeIconProps['color'][] = ['dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
</script>

<Group position="center">
    {#each variants as variant}
        <Group position="center">
            {#each colors as color}
                <ThemeIcon {variant} {color}><Rocket /></ThemeIcon>
            {/each}
        </Group>
	{/each}
</Group>
