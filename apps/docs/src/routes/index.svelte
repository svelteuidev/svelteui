<script lang="ts">
	let copiedText: boolean = false;

	const copy = async (): Promise<void> => {
		await navigator.clipboard.writeText('npm install sveadlessui -D');
		copiedText = true;
		setTimeout(() => (copiedText = false), 3000);
	};
	let primary: string =
		'rounded cursor-pointer select-none text-sm font-medium inline-flex items-center justify-center px-4 py-2 text-gray-200 bg-orange-400 border border-orange-400 hover:bg-orange-500 focus:bg-orange-600 focus:outline outline-1 outline-orange-400 outline-offset-[3px]';

	let secondary: string =
		'rounded cursor-pointer select-none text-sm font-medium inline-flex items-center justify-center px-4 py-2 text-gray-200 bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-500 hover:text-gray-50 focus:border-gray-300 focus:outline focus:outline-1 focus:outline-gray-300';
</script>

<main class="max-w-screen-xl mx-auto px-5">
	<section class="h-[35rem] flex flex-col justify-center items-start mt-20 md:h-[31.25rem]">
		<h1 class="text-left text-4xl tracking-tighter font-sans font-bold sm:text-7xl">
			Big Title in an h1 element
		</h1>
		<h2 class="mt-5 w-full text-lg font-medium md:text-left">Smaller subtitle in a h2 element</h2>
		<div class="mt-16 w-full flex flex-col gap-4 md:flex-row">
			<a class={primary} href="/docs">Get Started</a>
			<button class={secondary} on:click={copy}>
				npm install title -D
				{#if copiedText}
					<small class="ml-1 text-xs font-medium text-gray-500">(copied)</small>
				{/if}
			</button>
		</div>
	</section>
</main>
