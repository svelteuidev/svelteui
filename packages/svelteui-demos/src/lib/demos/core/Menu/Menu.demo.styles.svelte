<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Divider, Menu, Text, createStyles } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';

    const useStyles = createStyles(theme => ({
        root: {
            '&.itemHovered': {
                backgroundColor: theme.fn.themeColor(theme.colors.primary, 7),
                color: theme.colors.white.value,
            }
        }
	}));
    const { classes } = useStyles();
<\/script>

<Menu>
    <Menu.Label>Application</Menu.Label>
    <Menu.Item icon={Gear} class={classes.root}>Settings</Menu.Item>
    <Menu.Item icon={ChatBubble} class={classes.root}>Messages</Menu.Item>
    <Menu.Item icon={Camera} class={classes.root}>Gallery</Menu.Item>
    <Menu.Item icon={MagnifyingGlass} class={classes.root}>
        <svelte:fragment slot='rightSection'>
            <Text size="xs" color="dimmed">⌘K</Text>
        </svelte:fragment>
        Search
    </Menu.Item>

    <Divider />

    <Menu.Label>Danger zone</Menu.Label>
    <Menu.Item icon={Width} class={classes.root}>Transfer my data</Menu.Item>
    <Menu.Item color="red" icon={Trash} class={classes.root}>Delete my account</Menu.Item>
</Menu>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Divider, Menu, Text, createStyles } from '@svelteuidev/core';
	import { Camera, ChatBubble, Gear, MagnifyingGlass, Trash, Width } from 'radix-icons-svelte';

    const useStyles = createStyles(theme => ({
        root: {
            '&.itemHovered': {
                backgroundColor: theme.fn.themeColor(theme.colors.primary, 7),
                color: theme.colors.white.value,
            }
        }
	}));
    const { classes } = useStyles();
</script>

<Center>
    <Menu>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={Gear} class={classes.root}>Settings</Menu.Item>
        <Menu.Item icon={ChatBubble} class={classes.root}>Messages</Menu.Item>
        <Menu.Item icon={Camera} class={classes.root}>Gallery</Menu.Item>
        <Menu.Item icon={MagnifyingGlass} class={classes.root}>
            <svelte:fragment slot='rightSection'>
                <Text size="xs" color="dimmed">⌘K</Text>
            </svelte:fragment>
            Search
        </Menu.Item>
    
        <Divider />
    
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={Width} class={classes.root}>Transfer my data</Menu.Item>
        <Menu.Item color="red" icon={Trash} class={classes.root}>Delete my account</Menu.Item>
    </Menu>
</Center>