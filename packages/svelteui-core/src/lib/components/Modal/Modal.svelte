<script lang="ts">
	import useStyles from './Modal.styles';
	import { CloseButton } from '../ActionIcon';
	import { Text } from '../Text';
	import { Paper } from '../Paper';
	import { Overlay } from '../Overlay';
	import { OptionalPortal } from '../Portal';
	import { Box } from '../Box';
	import { randomID, colorScheme } from '$lib/styles';
	import { lockscroll } from '@svelteuidev/composables';
	import type { ModalProps as $$ModalProps } from './Modal.styles';

	export let use: $$ModalProps['use'] = [],
		element: $$ModalProps['element'] = undefined,
		className: $$ModalProps['className'] = '',
		override: $$ModalProps['override'] = {},
		opened: $$ModalProps['opened'] = null,
		title: $$ModalProps['title'] = null,
		zIndex: $$ModalProps['zIndex'] = 200,
		overflow: $$ModalProps['overflow'] = 'outside',
		withCloseButton: $$ModalProps['withCloseButton'] = true,
		overlayOpacity: $$ModalProps['overlayOpacity'] = null,
		overlayColor: $$ModalProps['overlayColor'] = null,
		overlayBlur: $$ModalProps['overlayBlur'] = 0,
		radius: $$ModalProps['radius'] = null,
		size: $$ModalProps['size'] = 'md',
		transition: $$ModalProps['transition'] = null,
		transitionDuration: $$ModalProps['transitionDuration'] = null,
		transitionTimingFunction: $$ModalProps['transitionTimingFunction'] = null,
		closeButtonLabel: $$ModalProps['closeButtonLabel'] = null,
		id: $$ModalProps['id'] = null,
		shadow: $$ModalProps['shadow'] = 'lg',
		padding: $$ModalProps['padding'] = 'lg',
		closeOnClickOutside: $$ModalProps['closeOnClickOutside'] = true,
		closeOnEscape: $$ModalProps['closeOnEscape'] = true,
		trapFocus: $$ModalProps['trapFocus'] = true,
		centered: $$ModalProps['centered'] = null,
		target: $$ModalProps['target'] = null,
		withinPortal: $$ModalProps['withinPortal'] = true,
		onClose: $$ModalProps['onClose'] = undefined;
	export { className as class };

	const baseId = randomID(id);
	const titleId = `${baseId}-title`;
	const bodyId = `${baseId}-body`;
	const _overlayOpacity =
		typeof overlayOpacity === 'number' ? overlayOpacity : $colorScheme === 'dark' ? 0.85 : 0.75;
	let lockScroll: boolean;

	const closeOnEscapePress = (event: KeyboardEvent) => {
		if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
			onClose();
		}
	};

	$: {
		if (!trapFocus) {
			typeof window !== undefined && window.addEventListener('keydown', closeOnEscapePress);
		}
	}

	$: ({ cx, classes, getStyles } = useStyles({ centered, overflow, size, zIndex }));
	const DELETE_ME_LATER = null;
</script>

<OptionalPortal>
	<Box bind:element {use} {...$$restProps}>
		<div use:lockscroll={lockScroll}>
			<Paper>
				{#if title || withCloseButton}
					<div class="header">
						<Text id={DELETE_ME_LATER} class="title">
							{title}
						</Text>

						{#if withCloseButton}
							<CloseButton
								iconSize={16}
								on:click={onClose}
								aria-label={closeButtonLabel}
								class="close"
							/>
						{/if}
					</div>
				{/if}
				<div id={DELETE_ME_LATER} class="body">
					<slot>Place some content</slot>
				</div>
			</Paper>
			<div>
				<Overlay
					class="overlay"
					override={{ position: 'fixed' }}
					zIndex={0}
					on:mousedown={() => closeOnClickOutside && onClose()}
					blur={overlayBlur}
					color={overlayColor || 'black'}
					opacity={DELETE_ME_LATER}
				/>
			</div>
		</div>
	</Box>
</OptionalPortal>
