<script lang="ts">
    import { Counter } from "$lib";
</script>

<h1>Welcome to your Svelte package!</h1>
<p>This project provides everything you need to start writing highly optimized, reusable component packages in svelte. You can use these routes to provide whatever documentation your component(s) need.</p>

<h2>Usage</h2>
<p>Everything in your package should be contained in <code>src/lib</code>. To package your component(s), run <code>npm run package</code>. This will do a few things:</p>
<ul>
    <li>Transform your typescript types into external <code>d.ts</code> files so users of your library won't need to setup preprocessing to deliver component-level type definitions.</li>
    <li>Preprocess your styles into regular minified and prefixed CSS using <a href="https://cssnano.co/" target="_blank" rel="noreferrer noopener">cssnano</a> and <a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noreferrer noopener">autoprefixer</a>.</li>
    <li>Export the contents of <code>src/lib</code> with the above transformations into a <code>./package</code> folder at this project's root directory.</li>
</ul>
For more information on this, see the <a href="https://kit.svelte.dev/docs#packaging" target="_blank" rel="noreferrer noopener">SvelteKit packaging documentation</a>.

<p>To publish your component(s) on npm, run <code>npm publish ./package</code> after packaging.</p>

<Counter value={1} />

<p>Ready to give it a try? Edit this counter component in <code>src/lib/Counter/Counter.svelte</code>.</p>
