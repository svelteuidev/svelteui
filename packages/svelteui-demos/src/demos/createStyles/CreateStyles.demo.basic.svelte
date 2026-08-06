<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { createStyles } from '@svelteuidev/core';

	const useStyles = createStyles((theme) => {
		return {
			root: {
				[\`$\{theme.dark} &\`]: {
					// using of SvelteUI utilities
					// bc === backgroundColor
					bc: theme.colors['dark500'].value
				},
				// subscribe to color scheme changes right in your styles
				// use theme functions to make styling easier
				backgroundColor: theme.fn.themeColor('gray', 1),
				maxWidth: 400,
				width: '100%',
				height: 180,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginLeft: 'auto',
				marginRight: 'auto',
				borderRadius: theme.radii.sm.value,
				fontSize: theme.fontSizes.xs.value,

				// Dynamic media queries, define breakpoints in theme, use anywhere
				// You can use the theme object, or tokens, it's up to you
				'@sm': {
					'.child': {
						fontSize: '$md'
					}
				}
			},

			child: {
				[\`$\{theme.dark} &\`]: {
					bc: theme.colors['dark800'].value,
					color: 'White'
				},
				backgroundColor: 'White',
				padding: '$mdPX',
				borderRadius: theme.radii.sm.value,
				boxShadow: theme.shadows.md,
				color: 'Black'
			}
		};
	});

	$: ({ classes, getStyles } = useStyles());
<\/script>

<div class={getStyles()}>
	<div class={classes.child}>css function demo</div>
</div>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { createStyles } from '@svelteuidev/core';

	const useStyles = createStyles((theme) => {
		return {
			root: {
				[`${theme.dark} &`]: {
					// using of SvelteUI utilities
					// bc === backgroundColor
					bc: theme.colors['dark500'].value
				},
				// subscribe to color scheme changes right in your styles
				// use theme functions to make styling easier
				backgroundColor: theme.fn.themeColor('gray', 1),
				maxWidth: 400,
				width: '100%',
				height: 180,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginLeft: 'auto',
				marginRight: 'auto',
				borderRadius: theme.radii.sm.value,
				fontSize: theme.fontSizes.xs.value,

				// Dynamic media queries, define breakpoints in theme, use anywhere
				// You can use the theme object, or tokens, it's up to you
				'@sm': {
					'.child': {
						fontSize: '$md'
					}
				}
			},

			child: {
				[`${theme.dark} &`]: {
					bc: theme.colors['dark800'].value,
					color: 'White'
				},
				backgroundColor: 'White',
				padding: '$mdPX',
				borderRadius: theme.radii.sm.value,
				boxShadow: theme.shadows.md,
				color: 'Black'
			}
		};
	});

	let { classes, getStyles } = $derived(useStyles());
</script>

<div class={getStyles()}>
	<div class={classes.child}>createStyles function demo</div>
</div>
