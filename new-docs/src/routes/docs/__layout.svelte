<script lang="ts">
	import { css, Title } from '@svelteuidev/core';
	import { page } from '$app/stores';
	import { ActivityLog } from 'radix-icons-svelte';
	import Toc from '$lib/components/Layout/Toc/Toc.svelte';

	let main: HTMLElement;

	$: val = $page.url.pathname.split('/');
	$: path = val[val.length - 1];
	$: toggleToc = (path) => {
		if (path === 'docs' || path === 'contribute') {
			return 'block';
		}
		return 'block';
	};
	$: toggleTocGrid = (path) => {
		if (path === 'docs' || path === 'contribute') {
			return 'repeat(3, minmax(0, 1fr))';
		}
		return 'repeat(4, minmax(0, 1fr))';
	};

	// @ts-ignore
	const DocsLayoutStyles = css({
		maxWidth: '100vw',
		width: '100%',
		mx: 'auto',
		py: '$10',
		gap: '$4',
		'@md': {
			px: '$5',
			display: 'grid',
			alignItems: 'flex-start',
			gridTemplateColumns: '15.625rem 1fr'
		},
		'@xl': {
			gridTemplateColumns: toggleTocGrid(path)
		},
		'& .sidebar': {
			display: 'none',
			'@md': {
				display: 'block'
			}
		},
		main: {
			zIndex: 0,
			mw: '100%',
			px: '$4',
			'@xl': {
				gridColumnStart: 1,
				gridColumnEnd: 4,
				ml: '$64'
			}
		},
		'& .toc': {
			display: 'none',
			position: 'sticky',
			top: '$20',
			zIndex: '$2',
			'@xl': {
				display: toggleToc(path)
			}
		}
	});
</script>

<div class={DocsLayoutStyles()}>
	<div class="sidebar">
		<div>Sidebar</div>
	</div>
	<main bind:this={main}>
		<slot />
	</main>
	<div class="toc">
		<Title order={3}><ActivityLog />Table of Contents</Title>
		<Toc target={main} />
	</div>
</div>
