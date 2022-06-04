<!-- 
<script lang="ts">
	import { CloseButton } from '../ActionIcon';
	import { Text } from '../Text';
	import { Paper } from '../Paper';
	import { Overlay } from '../Overlay';
	import { OptionalPortal } from '../Portal';
	import { Box } from '../Box';
	import type { ModalProps as $$ModalProps } from './Modal.styles';

	export let opened: $$ModalProps['opened'] = null,
		title: $$ModalProps['title'] = null,
		zIndex: $$ModalProps['zIndex'] = null,
		overflow: $$ModalProps['overflow'] = null,
		withCloseButton: $$ModalProps['withCloseButton'] = null,
		overlayOpacity: $$ModalProps['overlayOpacity'] = null,
		overlayColor: $$ModalProps['overlayColor'] = null,
		overlayBlur: $$ModalProps['overlayBlur'] = null,
		radius: $$ModalProps['radius'] = null,
		size: $$ModalProps['size'] = null,
		transition: $$ModalProps['transition'] = null,
		transitionDuration: $$ModalProps['transitionDuration'] = null,
		transitionTimingFunction: $$ModalProps['transitionTimingFunction'] = null,
		closeButtonLabel: $$ModalProps['closeButtonLabel'] = null,
		id: $$ModalProps['id'] = null,
		shadow: $$ModalProps['shadow'] = null,
		padding: $$ModalProps['padding'] = null,
		closeOnClickOutside: $$ModalProps['closeOnClickOutside'] = null,
		closeOnEscape: $$ModalProps['closeOnEscape'] = null,
		trapFocus: $$ModalProps['trapFocus'] = null,
		centered: $$ModalProps['centered'] = null,
		target: $$ModalProps['target'] = null,
		withinPortal: $$ModalProps['withinPortal'] = null,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onClose: $$ModalProps['onClose'] = (args?: any) => {};

	const DELETE_ME_LATER = null;
</script>

<OptionalPortal>
	<Box>
		<div>
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
 -->
<h1>Modal Coming in Version 0.7.0</h1>
