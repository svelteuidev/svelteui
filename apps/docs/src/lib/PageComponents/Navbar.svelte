<script lang="ts">
	import { page } from '$app/stores';
	import { version } from '../../../package.json';
	import '../../app.css';
	export let dark;

	$: path = $page.url.pathname.split('/')[1];

	function toggleTheme() {
		dark = !dark;
		if (dark === false) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}
	}
</script>

<header
	class="fixed top-0 left-0 w-full z-20 h-20 flex items-center {dark ? 'bg-[#282C31]' : 'bg-white'}"
>
	<nav class="max-w-screen-xl h-full w-full mx-auto px-5">
		<div class="flex items-center justify-between h-full border-b border-gray-800">
			<a href="/" class="text-gray-200 text-2xl font-black">
				Title
				<span class="text-sm text-gray-600">v{version}</span>
			</a>
			<div class="flex items-center gap-4">
				<a
					href="/changelog"
					class="text-sm font-medium py-2 px-3 rounded {path === 'changelog'
						? 'text-white bg-orange-500'
						: 'hover:bg-gray-800 hover:text-white'}"
				>
					Changelog
				</a>
				<button
					class="hover:bg-gray-800 hover:text-white text-sm font-medium py-2 px-3 rounded"
					on:click={toggleTheme}>{dark ? 'Dark' : 'Light'} Mode</button
				>
				<a
					href="https://github.com/user/repository"
					target="_blank"
					rel="noreferrer"
					class="hover:text-white py-4"
				>
					<svg viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"
						><path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
						/></svg
					>
				</a>
			</div>
		</div>
	</nav>
</header>
