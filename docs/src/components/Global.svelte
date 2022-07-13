<script lang="ts">
	// Import to put in App.svelte
	// import { Global } from '../../../src/components';
	import { globalCss, dark } from '@svelteuidev/core';

	const GlobalStyles = globalCss({
		'.token.comment': {
			color: '$gray600'
		},
		'.token.string': {
			color: '$indigo900'
		},
		'.token.inserted': {
			color: '$indigo900'
		},
		'.token.number': {
			color: '$blue700'
		},
		'.token.builtin': {
			color: '$lime900'
		},
		'.token.char': {
			color: '$lime900'
		},
		'.token.constant': {
			color: '$lime900'
		},
		'.token.function': {
			color: '$lime900'
		},
		'.token.selector': {
			color: '$lime900'
		},
		'.token.atrule': {
			color: '$lime900'
		},
		'.token.punctuation': {
			color: '$gray700'
		},
		'.token.variable': {
			color: '$violet900'
		},
		'.token.attr-name': {
			color: '$green900'
		},
		'.token.class-name': {
			color: '$red900'
		},
		'.token.tag': {
			color: '$violet900'
		},
		'.token.deleted': {
			color: '$violet900'
		},
		'.token.operator': {
			color: '$red900'
		},
		'.token.boolean': {
			color: '$red900'
		},
		'.token.keyword': {
			color: '$red900'
		},
		'.token.doctype': {
			color: '$gray700'
		},
		'.token.url': {
			color: '$gray700'
		},
		'.line-numbers': {
			position: 'relative',
			paddingLeft: '3.8em',
			counterReset: 'linenumber'
		},
		'.line-numbers > code': {
			position: 'relative',
			whiteSpace: 'inherit'
		},
		'.line-numbers .line-numbers-rows': {
			position: 'absolute',
			pointerEvents: 'none',
			top: 0,
			fontSize: '$md',
			left: '-3.8em',
			width: '3em',
			letterSpacing: '-1px',
			userSelect: 'none'
		},
		'.line-numbers .line-numbers-rows span': {
			display: 'block',
			counterIncrement: 'linenumber'
		},
		'.line-numbers .line-numbers-rows span:before': {
			color: '$gray400',
			display: 'block',
			textAlign: 'right',
			content: 'counter(linenumber)',
			marginRight: '$xs'
		},
		'.line-highlight': {
			marginTop: 0,
			backgroundColor: 'rgba(51, 154, 240, 0.2)'
		},
		[`${dark.selector} &`]: {
			'.comment': {
				color: '$gray600'
			},
			'.string': {
				color: '$teal400'
			},
			'.inserted': {
				color: '$teal400'
			},
			'.number': {
				color: '$blue400'
			},
			'.builtin': {
				color: '$orange500'
			},
			'.char': {
				color: '$orange500'
			},
			'.constant': {
				color: '$orange500'
			},
			'.function': {
				color: '$orange500'
			},
			'.selector': {
				color: '$teal400'
			},
			'.atrule': {
				color: '$teal400'
			},
			'.punctuation': {
				color: '$gray500'
			},
			'.variable': {
				color: '$gray500'
			},
			'.attr-name': {
				color: '$yellow500'
			},
			'.class-name': {
				color: '$yellow500'
			},
			'.tag': {
				color: '$red600'
			},
			'.deleted': {
				color: '$red600'
			},
			'.operator': {
				color: '$gray500'
			},
			'.boolean': {
				color: '$red600'
			},
			'.keyword': {
				color: '$indigo300'
			},
			'.doctype': {
				color: '$gray500'
			},
			'.url': {
				color: '$gray500'
			},
			'.line-numbers .line-numbers-rows span:before': {
				color: '$dark400'
			}
		}
	});

	GlobalStyles();
</script>

<!-- 
<script>
	// import theme
	import '@THEME/style.css';
	import '@SRC/theme.css';
	import Layout from '@THEME/components/Layout.svelte';
	import { initNavigation } from './navigation.js';
	import { onMount } from 'svelte';
	import { Global } from '../../../src/components';
	import { SvelteUIProvider, colorScheme } from '@svelteuidev/core';

	onMount(() => {
		return initNavigation();
	});
</script>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	<Global />
	<Layout />
</SvelteUIProvider>

 -->
