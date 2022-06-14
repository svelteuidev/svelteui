<script lang="ts">
	import useStyles from './Modal.styles';
	import { CloseButton } from '../ActionIcon';
	import { Text } from '../Text';
	import { Paper } from '../Paper';
	import { Overlay } from '../Overlay';
	import { OptionalPortal } from '../Portal';
	import { Box } from '../Box';
	import { randomID, colorScheme, css } from '$lib/styles';
	import { lockscroll } from '@svelteuidev/composables';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import type { ModalProps as $$ModalProps } from './Modal.styles';

	export let use: $$ModalProps['use'] = [],
		element: $$ModalProps['element'] = undefined,
		className: $$ModalProps['className'] = '',
		override: $$ModalProps['override'] = {},
		opened: $$ModalProps['opened'] = false,
		title: $$ModalProps['title'] = '',
		zIndex: $$ModalProps['zIndex'] = 200,
		overflow: $$ModalProps['overflow'] = 'outside',
		withCloseButton: $$ModalProps['withCloseButton'] = true,
		overlayOpacity: $$ModalProps['overlayOpacity'] = null,
		overlayColor: $$ModalProps['overlayColor'] = null,
		overlayBlur: $$ModalProps['overlayBlur'] = 0,
		radius: $$ModalProps['radius'] = 'sm',
		size: $$ModalProps['size'] = 'md',
		closeButtonLabel: $$ModalProps['closeButtonLabel'] = 'svelteui-close-button',
		id: $$ModalProps['id'] = 'svelteui',
		shadow: $$ModalProps['shadow'] = 'lg',
		padding: $$ModalProps['padding'] = 'lg',
		closeOnClickOutside: $$ModalProps['closeOnClickOutside'] = true,
		closeOnEscape: $$ModalProps['closeOnEscape'] = true,
		trapFocus: $$ModalProps['trapFocus'] = false,
		centered: $$ModalProps['centered'] = null,
		target: $$ModalProps['target'] = '#SVELTEUI_PROVIDER',
		withinPortal: $$ModalProps['withinPortal'] = true,
		onClose: $$ModalProps['onClose'];
	export { className as class };

	const castAny = (self: unknown) => self as any;
	const baseId = randomID(id);
	const titleId = `${baseId}-title`;
	const bodyId = `${baseId}-body`;
	const _overlayOpacity =
		typeof overlayOpacity === 'number' ? overlayOpacity : $colorScheme === 'dark' ? 0.85 : 0.75;

	const closeOnEscapePress = (event: KeyboardEvent) => {
		if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
			onClose();
		}
	};

	// Temporary, just add zIndex to Portal component
	const zIndexStyles = css({ zIndex });

	$: {
		onMount(() => {
			if (!trapFocus) {
				typeof window !== "undefined" ? window.addEventListener('keydown', closeOnEscapePress) : null;
			}
		});
	}

	$: lockScroll = opened;
	$: ({ cx, classes, getStyles } = useStyles({ centered, overflow, size, zIndex }));
</script>

{#if opened}
	<OptionalPortal class={zIndexStyles()} {withinPortal} {target}>
		<Box
			id={baseId}
			bind:element
			{use}
			{...$$restProps}
			class={cx(className, getStyles({ css: override }))}
		>
			<div
				class={classes.inner}
				use:lockscroll={lockScroll}
				on:keydown|capture={(event) => {
					const shouldTrigger =
						castAny(event.target)?.getAttribute('data-svelteui-stop-propagation') !== 'true';
					shouldTrigger && event.code === 'Escape' && closeOnEscape && onClose();
				}}
			>
				<div transition:scale={{ duration: 100, easing: sineInOut }}>
					<Paper
						class={classes.modal}
						{shadow}
						p={padding}
						{radius}
						role="dialog"
						aria-labelledby={titleId}
						aria-describedby={bodyId}
						aria-modal
						tabIndex={-1}
					>
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
					</Paper>
				</div>
				<div transition:fade={{ duration: 200, easing: sineInOut }}>
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
			</div>
		</Box>
	</OptionalPortal>
{/if}
