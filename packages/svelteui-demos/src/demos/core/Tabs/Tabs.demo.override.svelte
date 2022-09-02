<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { createStyles, Tabs } from '@svelteuidev/core';
    import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';

    const useStyles = createStyles(theme => ({
        root: {
            ...
            '&.active': {
              ...
            }
        },
    }));
    $: ({ classes } = useStyles());
<\/script>

<Tabs variant='unstyled'>
    <Tabs.Tab label='Gallery' class={classes.root} icon={Camera} />
    <Tabs.Tab label='Messages' class={classes.root} icon={EnvelopeClosed} />
    <Tabs.Tab label='Settings' class={classes.root} icon={Gear} />
</Tabs>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { createStyles, Tabs } from '@svelteuidev/core';
	import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';

	const useStyles = createStyles((theme) => ({
		root: {
			backgroundColor: theme.colors.white.value,
			color: theme.fn.themeColor('gray', 9),
			border: `1px solid ${theme.fn.themeColor('gray', 4)}`,
			fontSize: theme.fontSizes.md.value,
			padding: `${theme.space.lg.value}px ${theme.space.xl.value}px`,
			darkMode: {
				backgroundColor: theme.fn.themeColor('dark', 6),
				color: theme.fn.themeColor('dark', 0),
				border: `1px solid ${theme.fn.themeColor('dark', 6)}`
			},

			'&:not(:first-of-type)': {
				borderLeft: 0
			},

			'&:first-of-type': {
				borderTopLeftRadius: theme.radii.md.value,
				borderBottomLeftRadius: theme.radii.md.value
			},

			'&:last-of-type': {
				borderTopRightRadius: theme.radii.md.value,
				borderBottomRightRadius: theme.radii.md.value
			},

			'&.active': {
				backgroundColor: theme.fn.themeColor('blue', 7),
				borderColor: theme.fn.themeColor('blue', 7),
				color: theme.colors.white.value
			}
		}
	}));
	$: ({ classes } = useStyles());
</script>

<Tabs variant="unstyled">
	<Tabs.Tab label="Gallery" class={classes.root} icon={Camera} />
	<Tabs.Tab label="Messages" class={classes.root} icon={EnvelopeClosed} />
	<Tabs.Tab label="Settings" class={classes.root} icon={Gear} />
</Tabs>
