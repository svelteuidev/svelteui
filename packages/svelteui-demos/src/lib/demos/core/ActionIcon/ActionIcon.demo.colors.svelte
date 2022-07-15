<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
    export const type: CodeDemoType['type'] = 'demo';

    export const configuration: CodeDemoConfiguration = {
        toggle: true
    };
</script>

<script lang="ts">
	import type { ActionIconProps } from '@svelteuidev/core';
	import { ActionIcon, Group } from '@svelteuidev/core';
	import { Rocket } from 'radix-icons-svelte';

	let variants: ActionIconProps['variant'][] = ['hover', 'outline', 'light', 'filled'];
    let colors: ActionIconProps['color'][] = ['dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'];
</script>

<Group position="center">
    {#each variants as variant}
        <Group position="center">
            {#each colors as color}
                <ActionIcon {variant} {color}><Rocket /></ActionIcon>
            {/each}
        </Group>
	{/each}
</Group>
