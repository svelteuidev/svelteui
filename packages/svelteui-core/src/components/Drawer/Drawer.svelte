<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { focustrap, lockscroll } from '@svelteuidev/composables';
	import { randomID, colorScheme, css } from '$lib/styles';
	import { CloseButton } from '../ActionIcon';
	import { Box } from '../Box';
	import { Overlay } from '../Overlay';
	import { Paper } from '../Paper';
	import { OptionalPortal } from '../Portal';
	import { Text } from '../Text';
	import useStyles from './Drawer.styles';
	import type { DrawerProps as $$DrawerProps, DrawerEvents as $$DrawerEvents } from './Drawer';

	interface $$Props extends $$DrawerProps {}
	interface $$Events extends $$DrawerEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		opened: $$Props['opened'] = false,
		title: $$Props['title'] = '',
		zIndex: $$Props['zIndex'] = 200,
		overflow: $$Props['overflow'] = 'outside',
		withCloseButton: $$Props['withCloseButton'] = true,
		overlay: $$Props['overlay'] = true,
		overlayOpacity: $$Props['overlayOpacity'] = null,
		overlayColor: $$Props['overlayColor'] = null,
		overlayBlur: $$Props['overlayBlur'] = 0,
		position: $$Props['position'] = 'right',
		size: $$Props['size'] = 'md',
		closeButtonLabel: $$Props['closeButtonLabel'] = 'svelteui-close-button',
		id: $$Props['id'] = 'svelteui',
		shadow: $$Props['shadow'] = 'lg',
		padding: $$Props['padding'] = 'lg',
		closeOnClickOutside: $$Props['closeOnClickOutside'] = true,
		closeOnEscape: $$Props['closeOnEscape'] = true,
		trapFocus: $$Props['trapFocus'] = false,
		target: $$Props['target'] = '#SVELTEUI_PROVIDER',
		withinPortal: $$Props['withinPortal'] = true,
		speed: $$Props['speed'] = 250;
	export { className as class };

	const dispatch = createEventDispatcher();
	const castAny = (self: unknown) => self as any;
	const baseId = randomID(id);
	const titleId = `${baseId}-title`;
	const bodyId = `${baseId}-body`;
	let openStyle = '';
	let showContent = false;

	const _overlayOpacity =
		typeof overlayOpacity === 'number' ? overlayOpacity : $colorScheme === 'dark' ? 0.85 : 0.75;

	const closeOnEscapePress = (event: KeyboardEvent) => {
		if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
			onClose();
		}
	};

	function onClose() {
		dispatch('close');
	}

	const zIndexStyles = css({ zIndex });

	$: {
		onMount(() => {
			if (!trapFocus) {
				typeof window !== 'undefined'
					? window.addEventListener('keydown', closeOnEscapePress)
					: null;
			}
		});
	}

	$: if (opened && ((typeof target === 'string' && !document.querySelector(target)) || !target)) {
		throw new Error(
			'Wrap your app in the SvelteUIProvider, or provide a sufficent target throught the "target={\'\'}" prop '
		);
	}
	$: lockScroll = opened;
	$: ({ cx, classes, getStyles } = useStyles(
		{ overflow, size, zIndex, position, speed },
		{ name: 'Drawer' }
	));

	$: if (opened) {
		setTimeout(() => {
			openStyle = position + `: 0px;`;
		}, 100);
		showContent = true;
	} else {
		setTimeout(() => {
			openStyle = position + `: -` + size;
		}, 100);
		setTimeout(() => {
			showContent = false;
		}, speed - 50);
	}
</script>

{#if showContent}
	<OptionalPortal class={zIndexStyles()} {withinPortal} {target}>
		<Box
			id={baseId}
			bind:element
			{use}
			{...$$restProps}
			class={cx(className, getStyles({ css: override }))}
		>
			<div
				role="presentation"
				use:lockscroll={lockScroll}
				on:keydown|capture={(event) => {
					const shouldTrigger =
						castAny(event.target)?.getAttribute('data-svelteui-stop-propagation') !== 'true';
					shouldTrigger && event.code === 'Escape' && closeOnEscape && onClose();
				}}
			>
				{#if overlay}
					<div transition:fade={{ duration: 200, easing: sineInOut }}>
						<Overlay
							class={classes.overlay}
							override={{ position: 'fixed' }}
							zIndex={0}
							on:mousedown={() => closeOnClickOutside && onClose()}
							blur={overlayBlur}
							color={overlayColor || '#00000073'}
							opacity={_overlayOpacity}
						/>
					</div>
				{/if}

				<div class={classes.wrapper}>
					<Paper
						style={openStyle}
						class={classes.Drawer}
						{shadow}
						{padding}
						radius={0}
						role="dialog"
						aria-labelledby={titleId}
						aria-describedby={bodyId}
						aria-modal
						tabindex={-1}
						use={[focustrap]}
					>
						<div>
							{#if title || withCloseButton}
								<div class={classes.header}>
									<Text id={titleId} class={classes.title}>
										{title}
									</Text>

									{#if withCloseButton}
										<CloseButton
											iconSize={16}
											on:click={onClose}
											aria-label={closeButtonLabel}
											class={classes.close}
										/>
									{/if}
								</div>
							{/if}
							<div id={bodyId} class={classes.body}>
								<slot>Place some content</slot>
							</div>
						</div>
					</Paper>
				</div>
			</div>
		</Box>
	</OptionalPortal>
{/if}
