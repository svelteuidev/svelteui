<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
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
	import type { ModalProps as $$ModalProps, ModalEvents as $$ModalEvents } from './Modal';

	interface $$Props extends $$ModalProps {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$ModalEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		opened: $$Props['opened'] = false,
		title: $$Props['title'] = '',
		zIndex: $$Props['zIndex'] = 200,
		overflow: $$Props['overflow'] = 'outside',
		withCloseButton: $$Props['withCloseButton'] = true,
		overlayOpacity: $$Props['overlayOpacity'] = null,
		overlayColor: $$Props['overlayColor'] = null,
		overlayBlur: $$Props['overlayBlur'] = 0,
		radius: $$Props['radius'] = 'sm',
		size: $$Props['size'] = 'md',
		transition: $$Props['transition'] = 'scale',
		transitionOptions: $$Props['transitionOptions'] = { duration: 100, easing: sineInOut },
		overlayTransition: $$Props['transition'] = 'fade',
		overlayTransitionOptions: $$Props['transitionOptions'] = { duration: 200, easing: sineInOut },
		closeButtonLabel: $$Props['closeButtonLabel'] = 'svelteui-close-button',
		id: $$Props['id'] = 'svelteui',
		shadow: $$Props['shadow'] = 'lg',
		padding: $$Props['padding'] = 'lg',
		closeOnClickOutside: $$Props['closeOnClickOutside'] = true,
		closeOnEscape: $$Props['closeOnEscape'] = true,
		trapFocus: $$Props['trapFocus'] = true,
		centered: $$Props['centered'] = null,
		target: $$Props['target'] = '#SVELTEUI_PROVIDER',
		withinPortal: $$Props['withinPortal'] = true;
	export { className as class };

	const dispatch = createEventDispatcher();
	const castAny = (self: unknown) => self as any;
	const baseId = randomID(id);
	const titleId = `${baseId}-title`;
	const bodyId = `${baseId}-body`;
	const _overlayOpacity =
		typeof overlayOpacity === 'number' ? overlayOpacity : $colorScheme === 'dark' ? 0.85 : 0.75;
	const { handleFocusReturn } = useFocusReturn();

	const closeOnEscapePress = (event: KeyboardEvent) => {
		if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
			onClose();
		}
	};

	function onClose() {
		dispatch('close');
	}

	// Temporary, just add zIndex to Portal component
	const zIndexStyles = css({ zIndex });

	$: handleFocusReturn(opened);

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
	$: _transition = getTransition(transition) as any;
	$: _overlayTransition = getTransition(overlayTransition) as any;
	$: ({ cx, classes, getStyles } = useStyles(
		{ centered, overflow, size, zIndex },
		{ name: 'Modal' }
	));
</script>

{#if opened}
	<OptionalPortal class={zIndexStyles()} {withinPortal} {target}>
		<Box
			id={baseId}
			bind:element
			{use}
			{...$$restProps}
			class={cx(className, classes.root, getStyles({ css: override }))}
		>
			<div
				role="presentation"
				class={classes.inner}
				use:lockscroll={lockScroll}
				on:keydown|capture={(event) => {
					const shouldTrigger =
						castAny(event.target)?.getAttribute('data-svelteui-stop-propagation') !== 'true';
					shouldTrigger && event.code === 'Escape' && closeOnEscape && onClose();
				}}
			>
				<div class={classes.transition} transition:_transition={transitionOptions}>
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
						{#if title || withCloseButton}
							<div class={classes.header}>
								<slot name="title">
									<Text id={titleId} class={classes.title}>
										{title}
									</Text>
								</slot>

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
					</Paper>
				</div>
			</div>
			<div transition:_overlayTransition={overlayTransitionOptions}>
				<Overlay
					class={classes.overlay}
					override={{ position: 'fixed' }}
					zIndex={0}
					on:mousedown={() => closeOnClickOutside && onClose()}
					blur={overlayBlur}
					color={overlayColor || 'black'}
					opacity={_overlayOpacity}
				/>
			</div>
		</Box>
	</OptionalPortal>
{/if}
