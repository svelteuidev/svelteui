<script lang="ts">
	import { NormalizeCSS, SvelteUIProvider, css, dark, SvelteUIGlobalCSS } from '$lib';
	import { Button } from '$lib';

	let darkMode: boolean = false;
	const toggleTheme = () => {
		darkMode = !darkMode;
	};

	const PageStyles = css({
		backgroundColor: 'White',
		height: '100vh',
		width: '100vw',
		color: 'Black',
		[`${dark.selector} &`]: {
			backgroundColor: '$dark700',
			color: 'White'
		}
	});

	NormalizeCSS();
	SvelteUIGlobalCSS();
</script>

<SvelteUIProvider themeObserver={darkMode ? 'dark' : 'light'}>
	<div class={PageStyles()}>
		<div class="title-container">
			<span class="button">
				<Button on:click={toggleTheme} variant="gradient">{darkMode ? 'Dark' : 'Light'} Mode</Button
				>
			</span>
			<h1>Welcome to a svelteui package!</h1>
			<p>This is a test route to test the core package</p>
			<hr />
		</div>
		<div class="container">
			<slot />
		</div>
	</div>
</SvelteUIProvider>

<style>
	.container {
		padding: 2rem;
		margin: 0 auto;
	}
	.title-container {
		text-align: center;
		position: relative;
	}
	.button {
		position: absolute;
		top: 25%;
		left: 10%;
	}
</style>
