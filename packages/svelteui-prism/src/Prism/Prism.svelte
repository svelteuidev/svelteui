<script lang="ts" data-manual>
	// option 'data-manual' needed to use Prism with no automatic highlight on import
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import { config } from './Prism.config.js';
	import { clipboard } from './clipboard.js';
	import { PrismErrors } from './Prism.errors.js';
	import { css, dark, ActionIcon, CopyIcon, Error, ThemeIcon } from '@svelteuidev/core';
	import 'prism-svelte';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
	import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
	import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
	import type { PrismStyles as $$PrismStyles } from './Prism.styles.js';

	export let className: $$PrismStyles['className'] = '',
		override: $$PrismStyles['override'] = {},
		size: $$PrismStyles['size'] = 'md',
		code: $$PrismStyles['code'] = '',
		language: $$PrismStyles['language'] = 'javascript',
		lineNumbers: $$PrismStyles['lineNumbers'] = false,
		highlightLines: $$PrismStyles['highlightLines'] = null,
		normalizeWhiteSpace: $$PrismStyles['normalizeWhiteSpace'] = true,
		normalizeWhiteSpaceConfig: $$PrismStyles['normalizeWhiteSpaceConfig'] = config,
		copy: $$PrismStyles['copy'] = true,
		copyTimeout: $$PrismStyles['copyTimeout'] = 3000;
	export { className as class };

	onMount(() => {
		/**
		 * forces manual usage of Prism
		 *
		 * this is because prism trys to highlight code automatically
		 *
		 * that behavior interferes with the DOM manipulation of Svelte and we don't want that
		 */
		window.Prism = window.Prism || {};
		window.Prism.manual = true;
		document.removeEventListener('DOMContentLoaded', Prism.highlightAll);

		if (normalizeWhiteSpace) {
			Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhiteSpaceConfig);
		}
	});

	let copied = false;
	function onClipboard() {
		copied = true;
		setTimeout(() => (copied = false), copyTimeout);
	}

	$: prettyCode = Prism.highlight(code, Prism.languages[language], language);
	$: prismClasses = `language-${language} ${
		normalizeWhiteSpace ? '' : 'no-whitespace-normalization'
	}`;

	$: PrismCss = css({
		color: '$gray900',
		backgroundColor: '$gray50',
		fontSize: `$${size}`,
		lineHeight: `$${size}`,
		position: 'relative',
		paddingTop: '$xsPX',
		paddingBottom: '$xsPX',

		pre: {
			margin: 0,
			overflow: 'auto'
		},
		'pre[data-line]': {
			paddingTop: 0,
			paddingBottom: 0
		},

		'& .copy': {
			position: 'absolute',
			right: '$mdPX',
			zIndex: 2,
			background: 'transparent'
		},
		'& .copy:hover': {
			background: 'transparent',
			[`${dark.selector} &`]: {
				background: 'transparent'
			}
		},

		'& .token.comment': {
			color: '$gray600'
		},
		'& .token.string': {
			color: '$indigo900'
		},
		'& .token.inserted': {
			color: '$indigo900'
		},
		'& .token.number': {
			color: '$blue700'
		},
		'& .token.builtin': {
			color: '$lime900'
		},
		'& .token.char': {
			color: '$lime900'
		},
		'& .token.constant': {
			color: '$lime900'
		},
		'& .token.function': {
			color: '$lime900'
		},
		'& .token.selector': {
			color: '$lime900'
		},
		'& .token.atrule': {
			color: '$lime900'
		},
		'& .token.punctuation': {
			color: '$gray700'
		},
		'& .token.variable': {
			color: '$violet900'
		},
		'& .token.attr-name': {
			color: '$green900'
		},
		'& .token.class-name': {
			color: '$red900'
		},
		'& .token.tag': {
			color: '$violet900'
		},
		'& .token.deleted': {
			color: '$violet900'
		},
		'& .token.operator': {
			color: '$red900'
		},
		'& .token.boolean': {
			color: '$red900'
		},
		'& .token.keyword': {
			color: '$red900'
		},
		'& .token.doctype': {
			color: '$gray700'
		},
		'& .token.url': {
			color: '$gray700'
		},
		'& .line-numbers': {
			position: 'relative',
			paddingLeft: '3.8em',
			counterReset: 'linenumber'
		},
		'& .line-numbers > code': {
			position: 'relative',
			whiteSpace: 'inherit'
		},
		'& .line-numbers .line-numbers-rows': {
			position: 'absolute',
			pointerEvents: 'none',
			top: 0,
			fontSize: '$md',
			left: '-3.8em',
			width: '3em',
			letterSpacing: '-1px',
			userSelect: 'none'
		},
		'& .line-numbers .line-numbers-rows span': {
			display: 'block',
			counterIncrement: 'linenumber'
		},
		'& .line-numbers .line-numbers-rows span:before': {
			color: '$gray400',
			display: 'block',
			textAlign: 'right',
			content: 'counter(linenumber)',
			marginRight: '$xs'
		},
		'& .line-highlight': {
			marginTop: 0,
			backgroundColor: 'rgba(51, 154, 240, 0.2)'
		},
		[`${dark.selector} &`]: {
			color: '$gray400',
			backgroundColor: '$dark800',

			'& .comment': {
				color: '$gray600'
			},
			'& .string': {
				color: '$teal400'
			},
			'& .inserted': {
				color: '$teal400'
			},
			'& .number': {
				color: '$blue400'
			},
			'& .builtin': {
				color: '$orange500'
			},
			'& .char': {
				color: '$orange500'
			},
			'& .constant': {
				color: '$orange500'
			},
			'& .function': {
				color: '$orange500'
			},
			'& .selector': {
				color: '$teal400'
			},
			'& .atrule': {
				color: '$teal400'
			},
			'& .punctuation': {
				color: '$gray500'
			},
			'& .variable': {
				color: '$gray500'
			},
			'& .attr-name': {
				color: '$yellow500'
			},
			'& .class-name': {
				color: '$yellow500'
			},
			'& .tag': {
				color: '$red600'
			},
			'& .deleted': {
				color: '$red600'
			},
			'& .operator': {
				color: '$gray500'
			},
			'& .boolean': {
				color: '$red600'
			},
			'& .keyword': {
				color: '$indigo300'
			},
			'& .doctype': {
				color: '$gray500'
			},
			'& .url': {
				color: '$gray500'
			},
			'& .line-numbers .line-numbers-rows span:before': {
				color: '$dark400'
			}
		}
	});

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (!Prism.languages[language]) {
		observable = true;
		err = PrismErrors[0];
	}
	$: if (observable) override = { display: 'none' };
	// --------------Error Handling-------------------
</script>

<Error {observable} component="Text" code={err} />

<div class="{className} {PrismCss({ css: override })}">
	{#if copy}
		<ActionIcon class="copy" use={[[clipboard, code]]} on:useclipboard={onClipboard}>
			<ThemeIcon variant="subtle">
				<CopyIcon {copied} />
			</ThemeIcon>
		</ActionIcon>
	{/if}
	<!-- Do not format this line since it will break Prism indentation result -->
	<!-- prettier-ignore -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<pre class={lineNumbers ? 'line-numbers' : ''} data-line={highlightLines}><code class={prismClasses}>{@html prettyCode}</code></pre>
</div>
