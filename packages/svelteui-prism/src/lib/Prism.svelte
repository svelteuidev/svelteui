<script lang="ts">
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
    import "prism-svelte";
	import "prismjs/plugins/line-numbers/prism-line-numbers.js";
	import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

	import type { PrismTheme } from './types/PrismTheme';
	import * as PrismStyles from "./Prism.styles";

	export let code: string = '';
	export let language: string = 'javascript';
	export let lineNumbers: boolean = false;
	export let normalizeWhiteSpace: boolean = true;
	export let normalizeWhiteSpaceConfig: Record<string, any> = {
		'remove-trailing': true,
		'remove-indent': true,
		'left-trim': true,
		'right-trim': true,
		'break-lines': 80,
        'indent': 2,
        'remove-initial-line-feed': false,
        'tabs-to-spaces': 4,
        'spaces-to-tabs': 4
	};
	/** Code color for the prism style from the default theme */
	export let color: PrismTheme = 'dark';

	onMount(() => {
        if (process.env.NODE_ENV === 'development' && !Prism.languages[language]) {
            throw new Error(
                `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
            )
        }

	    if (normalizeWhiteSpace) {
	        Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhiteSpaceConfig);
	    }
	});

	let prettyCode: string = Prism.highlight(code, Prism.languages[language], language);
	let prismClasses: string = '';

	$: {
		prettyCode = Prism.highlight(code, Prism.languages[language], language);
		prismClasses = `language-${language} ${lineNumbers ? 'line-numbers' : ''} ${
			normalizeWhiteSpace ? '' : 'no-whitespace-normalization'
		}`;
	}

	const PrismStyle = Object.keys(PrismStyles).includes(color) ? PrismStyles[color]() : {};
</script>

<pre class="{prismClasses} {PrismStyle}">
    <code class="language-{language}">
        {@html prettyCode}
    </code>
</pre>
