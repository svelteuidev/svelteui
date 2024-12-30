<script lang="ts">
	import { slide } from 'svelte/transition';
	import { expoIn, expoOut } from 'svelte/easing';
	import { ActionIcon, Box, css, dark } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	interface Props {
		component: CodeDemoType['default'];
		previewBackground?: CodeDemoConfiguration['previewBackground'];
		previewMaxWidth?: CodeDemoConfiguration['previewMaxWidth'];
		code?: CodeDemoConfiguration['code'];
		spacing?: CodeDemoConfiguration['spacing'];
		toggle?: CodeDemoConfiguration['toggle'];
	}

	let {
		component,
		previewBackground,
		previewMaxWidth,
		code,
		spacing = true,
		toggle = false
	}: Props = $props();
	let codeVisible: boolean = $state();

	$effect.pre(() => {
		codeVisible = !toggle;
	});

	function toggleCodeVisibility() {
		codeVisible = !codeVisible;
	}

	const styles = css({
		border: '1px solid $gray200',
		borderRadius: '$sm',

		'.preview': {
			padding: spacing ? '$8' : 0,
			position: 'relative',
			background: previewBackground ? previewBackground.light : undefined,

			'& > .wrapper': {
				width: '100%',
				maxWidth: previewMaxWidth,
				margin: '0 auto'
			}
		},

		'.toggle': {
			position: 'absolute',
			bottom: '$2',
			right: '$2'
		},

		'.code': {
			borderTop: '1px solid $gray200',
			overflow: 'hidden',
			borderBottomRightRadius: '$sm',
			borderBottomLeftRadius: '$sm'
		},

		[`.${dark} &`]: {
			borderColor: '$gray800',

			'.preview': {
				background: previewBackground ? previewBackground.dark : undefined
			},

			'.code': {
				borderColor: '$gray800'
			},

			'.toggle svg': {
				color: '$gray600'
			}
		}
	});

	const SvelteComponent = $derived(component);
</script>

<div class={styles()}>
	<div class="preview">
		<div class="wrapper">
			<SvelteComponent />
		</div>
		{#if !!code && toggle}
			<div class="toggle">
				<ActionIcon on:click={toggleCodeVisibility}>
					<svg
						width="20"
						height="20"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						/></svg
					>
				</ActionIcon>
			</div>
		{/if}
	</div>
	{#if code && codeVisible}
		<div
			class="code"
			in:slide|global={{ duration: 300, easing: expoIn }}
			out:slide|global={{ duration: 200, easing: expoOut }}
		>
			<Box>
				<Prism
					language="svelte"
					code={code.trimEnd()}
					normalizeWhiteSpace
					size="sm"
					normalizeWhiteSpaceConfig={{
						'remove-trailing': true,
						'remove-indent': true,
						'left-trim': true,
						'right-trim': true,
						'break-lines': 1000,
						'remove-initial-line-feed': false,
						'tabs-to-spaces': 8,
						'spaces-to-tabs': 8
					}}
					override={{
						padding: '$8'
					}}
				/>
			</Box>
		</div>
	{/if}
</div>
