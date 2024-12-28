<script lang="ts">
	import { onMount } from 'svelte';
	import { sineInOut } from 'svelte/easing';

	import { focustrap, lockscroll, useFocusReturn } from '@svelteuidev/composables';

	import { getTransition } from '$lib/internal';
	import { randomID, colorScheme, css } from '$lib/styles';
	import { CloseButton } from '../ActionIcon';
	import { Box } from '../Box';
	import { Overlay } from '../Overlay';
	import { Paper } from '../Paper';
	import { OptionalPortal } from '../Portal';
	import { Text } from '../Text';
	import useStyles from './Modal.styles';
	import type { ModalProps } from './Modal';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		opened = false,
		titleText = '',
		zIndex = 200,
		overflow = 'outside',
		withCloseButton = true,
		overlayOpacity = null,
		overlayColor = null,
		overlayBlur = 0,
		radius = 'sm',
		size = 'md',
		transition = 'scale',
		transitionOptions = { duration: 100, easing: sineInOut },
		overlayTransition = 'fade',
		overlayTransitionOptions = { duration: 200, easing: sineInOut },
		closeButtonLabel = 'svelteui-close-button',
		id = 'svelteui',
		shadow = 'lg',
		padding = 'lg',
		closeOnClickOutside = true,
		closeOnEscape = true,
		trapFocus = true,
		centered = null,
		target = '#SVELTEUI_PROVIDER',
		withinPortal = true,
		onclose = () => {},
		title,
		children,
		...rest
	}: ModalProps = $props();

	const castAny = (self: unknown) => self as any;
	const baseId = randomID(id);
	const titleId = `${baseId}-title`;
	const bodyId = `${baseId}-body`;
	const _overlayOpacity =
		typeof overlayOpacity === 'number' ? overlayOpacity : $colorScheme === 'dark' ? 0.85 : 0.75;

	const { handleFocusReturn } = useFocusReturn();

	const closeOnEscapePress = (event: KeyboardEvent) => {
		if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
			onclose();
		}
	};

	onMount(() => {
		if (!trapFocus) {
			typeof window !== 'undefined' ? window.addEventListener('keydown', closeOnEscapePress) : null;
		}
	});

	$effect(() => handleFocusReturn(opened));
	$effect(() => {
		if (opened && ((typeof target === 'string' && !document.querySelector(target)) || !target)) {
			throw new Error(
				'Wrap your app in the SvelteUIProvider, or provide a sufficent target throught the "target={\'\'}" prop '
			);
		}
	});

	const lockScroll = $derived(opened);
	const _transition = $derived(getTransition(transition) as any);
	const _overlayTransition = $derived(getTransition(overlayTransition) as any);

	// Temporary, just add zIndex to Portal component
	const zIndexStyles = css({ zIndex });
	const { cx, classes, getStyles } = $derived(
		useStyles({ centered, overflow, size, zIndex }, { name: 'Modal' })
	);
</script>

{#if opened}
	<OptionalPortal class={zIndexStyles()} {withinPortal} {target}>
		<Box
			id={baseId}
			bind:element
			{use}
			class={cx(className, classes.root, getStyles({ css: override }))}
			{...rest}
		>
			<div
				role="presentation"
				class={classes.inner}
				use:lockscroll={lockScroll}
				onkeydowncapture={(event) => {
					const shouldTrigger =
						castAny(event.target)?.getAttribute('data-svelteui-stop-propagation') !== 'true';
					shouldTrigger && event.code === 'Escape' && closeOnEscape && onclose();
				}}
			>
				<div class={classes.transition} transition:_transition|global={transitionOptions}>
					<Paper
						class={classes.modal}
						{shadow}
						{padding}
						{radius}
						role="dialog"
						aria-labelledby={titleId}
						aria-describedby={bodyId}
						aria-modal
						tabindex={-1}
						use={[[focustrap, trapFocus]]}
					>
						{#if titleText || title || withCloseButton}
							<div class={classes.header}>
								{#if title}
									{@render title()}
								{:else}
									<Text id={titleId} class={classes.title}>
										{titleText}
									</Text>
								{/if}
								{#if withCloseButton}
									<CloseButton
										iconSize={16}
										aria-label={closeButtonLabel}
										class={classes.close}
										onclick={onclose}
									/>
								{/if}
							</div>
						{/if}
						<div id={bodyId} class={classes.body}>
							{@render children()}
						</div>
					</Paper>
				</div>
			</div>
			<div transition:_overlayTransition|global={overlayTransitionOptions}>
				<Overlay
					class={classes.overlay}
					override={{ position: 'fixed' }}
					zIndex={0}
					blur={overlayBlur}
					color={overlayColor || 'black'}
					opacity={_overlayOpacity}
					onmousedown={() => closeOnClickOutside && onclose()}
				/>
			</div>
		</Box>
	</OptionalPortal>
{/if}
