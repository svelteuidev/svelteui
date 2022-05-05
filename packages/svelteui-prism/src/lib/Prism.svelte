<script lang="ts">
	import { css, dark, Error } from '@svelteuidev/core';
	import type { Override, SvelteuiSize } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prism-svelte';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
	import 'prismjs/plugins/line-highlight/prism-line-highlight';
	import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
	import { PrismErrors } from "./Prism.errors";

	/** Used for custom classes to be applied to the prism e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };

	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** The size of the text inside the highlighting from the default theme */
	export let size: SvelteuiSize = 'md';
	/** The code to be shown highlighted */
	export let code: string = '';
	/** The language which the code is written, used to define the highlight */
	export let language: string = 'javascript';
	/** If it should show the line numbers next to the code */
	export let lineNumbers: boolean = false;
	/** The lines to be highlighted e.g. 1-5,9,10 */
	export let highlightLines: string = null;
	/** If white space should be normalized in the code provided */
	export let normalizeWhiteSpace: boolean = true;
	/** Settings to configure the normalization of white space */
	export let normalizeWhiteSpaceConfig: Record<string, any> = {
		'remove-trailing': true,
		'remove-indent': true,
		'left-trim': true,
		'right-trim': true,
		'break-lines': 80,
		'remove-initial-line-feed': false,
		'tabs-to-spaces': 4,
		'spaces-to-tabs': 4
	};

	onMount(() => {
		if (normalizeWhiteSpace) {
			Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhiteSpaceConfig);
		}
	});

	$: prettyCode = Prism.highlight(code, Prism.languages[language], language);
	$: prismClasses = `language-${language} ${lineNumbers ? 'line-numbers' : ''} ${
		normalizeWhiteSpace ? '' : 'no-whitespace-normalization'
	}`;

	$: PrismCss = css({
		length: 0,
		color: '$gray900',
		backgroundColor: '$gray50',
		fontSize: `$${size}`,
		lineHeight: `$${size}`,

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
			position: "relative",
			paddingLeft: "3.8em",
			counterReset: "linenumber"
		},
		'& .line-numbers > code': {
			position: "relative",
			whiteSpace: "inherit"
		},
		'& .line-numbers .line-numbers-rows': {
			position: "absolute",
			pointerEvents: "none",
			top: 0,
			fontSize: "$md",
			left: "-3.8em",
			width: "3em",
			letterSpacing: "-1px",
			userSelect: "none"
		},
		'& .line-numbers .line-numbers-rows span': {
			display: "block",
			counterIncrement: "linenumber"
		},
		'& .line-numbers .line-numbers-rows span:before': {
			color: '$gray400',
			display: "block",
			textAlign: "right",
			content: "counter(linenumber)",
			marginRight: '$xs'
		},
		'& .line-highlight': {
			backgroundColor: "rgba(51, 154, 240, 0.2)"
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
</script>

<Error {observable} component="Text" code={err} />

<div class="{className} {PrismCss({ css: override })}">
	<pre
		class="{prismClasses}" data-line={highlightLines}>
		<code class="language-{language}">
			{@html prettyCode}
		</code>
	</pre>
</div>
