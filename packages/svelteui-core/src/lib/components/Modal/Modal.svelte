<script lang="ts">
	import { CloseButton } from '../ActionIcon';
	import { Text } from '../Text';
	import { Paper } from '../Paper';
	import { Overlay } from '../Overlay';
	import { OptionalPortal } from '../Portal';
	import { Box } from '../Box';
	import type { ModalProps as $$ModalProps } from './Modal.styles';

	/** Mounts modal if true */
	export let opened: $$ModalProps['opened'] = null;
	/** Modal title, displayed in header before close button */
	export let title: $$ModalProps['title'] = null;
	/** Modal z-index property */
	export let zIndex: $$ModalProps['zIndex'] = null;
	/** Control vertical overflow behavior */
	export let overflow: $$ModalProps['overflow'] = null;
	/** Hides close button if set to false, modal still can be closed with escape key and by clicking outside */
	export let withCloseButton: $$ModalProps['withCloseButton'] = null;
	/** Overlay opacity */
	export let overlayOpacity: $$ModalProps['overlayOpacity'] = null;
	/** Overlay color */
	export let overlayColor: $$ModalProps['overlayColor'] = null;
	/** Overlay blur in px */
	export let overlayBlur: $$ModalProps['overlayBlur'] = null;
	/** Modal radius */
	export let radius: $$ModalProps['radius'] = null;
	/** Modal body width */
	export let size: $$ModalProps['size'] = null;
	/** Modal body transition */
	export let transition: $$ModalProps['transition'] = null;
	/** Duration in ms of modal transitions, set to 0 to disable all animations */
	export let transitionDuration: $$ModalProps['transitionDuration'] = null;
	/** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
	export let transitionTimingFunction: $$ModalProps['transitionTimingFunction'] = null;
	/** Close button aria-label */
	export let closeButtonLabel: $$ModalProps['closeButtonLabel'] = null;
	/** id base, used to generate ids to connect modal title and body with aria- attributes, defaults to random id */
	export let id: $$ModalProps['id'] = null;
	/** Modal shadow from theme or css value */
	export let shadow: $$ModalProps['shadow'] = null;
	/** Modal padding from theme or number value for padding in px */
	export let padding: $$ModalProps['padding'] = null;
	/** Should modal be closed when outside click was registered */
	export let closeOnClickOutside: $$ModalProps['closeOnClickOutside'] = null;
	/** Should modal be closed when escape is pressed */
	export let closeOnEscape: $$ModalProps['closeOnEscape'] = null;
	/** Disables focus trap */
	export let trapFocus: $$ModalProps['trapFocus'] = null;
	/** Controls if modal should be centered */
	export let centered: $$ModalProps['centered'] = null;
	/** Target element or selector where modal portal should be rendered */
	export let target: $$ModalProps['target'] = null;
	/** Determines whether modal should be rendered within Portal, defaults to true */
	export let withinPortal: $$ModalProps['withinPortal'] = null;
	/** Called when close button clicked and when escape key is pressed */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export let onClose: $$ModalProps['onClose'] = (args?: any) => {};

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
