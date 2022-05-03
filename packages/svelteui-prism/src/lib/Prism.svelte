<script lang="ts">
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
    import "prism-svelte";
    import "prismjs/themes/prism.css";
	import "prismjs/plugins/line-numbers/prism-line-numbers.js";
	import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

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
    
	console.log('pretty', prettyCode);
</script>

<pre class="{prismClasses}">
    <code class="language-{language}">
        {@html prettyCode}
    </code>
</pre>
