<script lang="ts" module>
	export const ctx = 'Menu';
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte';

	import { clickoutside, useHash } from '@svelteuidev/composables';
	import { useActions } from '$lib/internal';
	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import { PopperContainer } from '../Popper/PopperContainer';
	import { Paper } from '../Paper';
	import { MenuIcon } from './index';
	import useStyles, { getNextItem, getPreviousItem } from './Menu.styles';
	import type { MenuProps } from './Menu';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		closeOnItemClick = true,
		closeOnScroll = false,
		delay = 100,
		menuButtonLabel = undefined,
		menuId = undefined,
		radius = 'sm',
		opened = $bindable(false),
		shadow = 'md',
		size = 'md',
		trigger = 'click',
		trapFocus = true,
		withinPortal = true,
		zIndex = 300,
		withArrow = false,
		gutter = 5,
		placement = 'start',
		position = 'bottom',
		transition = 'fade',
		transitionOptions = { duration: 100 },
		onopen = () => {},
		onclose = () => {},
		control,
		children,
		...rest
	}: MenuProps = $props();

	let external = false;
	let delayTimeout: number;
	let referenceElement: HTMLButtonElement = $state(undefined);
	let dropdownElement: HTMLDivElement = $state(undefined);
	let controlElement: HTMLElement = $state(undefined);
	let hovered: number = $state(-1);

	/** Function that allows changing the state of the menu from outside the component */
	export function open() {
		external = true;
		handleOpen();
		onExternal();
	}
	export function close() {
		external = true;
		handleClose();
		onExternal();
	}
	export function toggle() {
		external = true;
		toggleMenu();
		onExternal();
	}

	// Ugly hack for click outside workaround, since an external
	// triggered click causes the action to take effect
	// @TODO: improve this in the future
	function onExternal() {
		window.setTimeout(() => (external = false), 0);
	}

	const clickOutsideParams: { enabled: boolean; callback: (any) => unknown } = {
		enabled: true,
		callback: () => opened && !external && handleClose()
	};
	const uuid: string = useHash(menuId);
	const castKeyboardEvent = <T = KeyboardEvent,>(event): T => event;

	// can be turned into an action
	const focusReference = () => window.setTimeout(() => referenceElement?.focus(), 0);

	onMount(() => {
		if (!control) return;

		controlElement = element.children[0] as HTMLElement;
		controlElement.setAttribute('role', 'button');
		controlElement.setAttribute('aria-haspopup', 'menu');
		controlElement.setAttribute('aria-expanded', String(opened));
		controlElement.setAttribute('aria-controls', uuid);
		if (menuButtonLabel) controlElement.setAttribute('aria-label', menuButtonLabel);

		controlElement.addEventListener('click', (event) => {
			event.stopPropagation();
			toggleMenu();
		});
		controlElement.addEventListener('mouseenter', () =>
			trigger === 'hover' ? handleOpen() : null
		);
		controlElement.addEventListener('keydown', (event) => handleKeyDown(castKeyboardEvent(event)));
	});

	const handleClose = () => {
		if (opened) {
			opened = false;
			opened = false;
			onclose();
		}
	};

	const handleOpen = () => {
		opened = true;
		opened = true;
		onopen();
	};

	const toggleMenu = () => {
		opened ? handleClose() : handleOpen();
	};

	const handleMouseLeave = () => {
		if (trigger === 'hover') {
			if (delay > 0) {
				delayTimeout = window.setTimeout(() => handleClose(), delay);
			} else {
				handleClose();
			}
		}
	};

	const handleMouseEnter = () => {
		window.clearTimeout(delayTimeout);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (opened) {
			const elements = Array.from(
				dropdownElement.querySelectorAll<HTMLButtonElement>('.svelteui-MenuItem-root')
			);

			if (event.code === 'Tab' && trapFocus) {
				event.preventDefault();
			}

			if (event.code === 'ArrowDown') {
				event.preventDefault();
				const prevIndex = getNextItem(hovered, elements);
				hovered = prevIndex;
				elements[prevIndex].focus();
			}

			if (event.code === 'ArrowUp') {
				event.preventDefault();
				const prevIndex = getPreviousItem(hovered, elements);
				hovered = prevIndex;
				elements[prevIndex].focus();
			}

			if (event.code === 'Escape') {
				handleClose();
				focusReference();
			}
		}
	};

	const handleItemClick = (event: MouseEvent) => {
		if (!closeOnItemClick) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		handleClose();
		trigger === 'click' && focusReference();
	};

	const context = $derived({
		hovered,
		radius,
		onItemHover: (hover) => (hovered = hover),
		onItemKeyDown: handleKeyDown,
		onItemClick: handleItemClick
	});
	// @TODO: is this reactive?
	setContext(ctx, () => context);

	$effect(() => {
		if (control && controlElement) controlElement.setAttribute('aria-expanded', String(opened));
	});

	let { cx, classes } = $derived(useStyles({ size }, { override, name: 'Menu' }));
</script>

<svelte:window on:scroll={() => closeOnScroll && handleClose()} />

<Box
	bind:element
	use={[
		[useActions, use],
		[clickoutside, clickOutsideParams]
	]}
	class={cx(classes.root, className)}
	on:mouseleave={handleMouseLeave}
	on:mouseenter={handleMouseEnter}
	{...rest}
>
	{#if control}
		{@render control()}
	{:else}
		<MenuIcon
			bind:element={referenceElement}
			role="button"
			aria-haspopup="menu"
			aria-expanded={opened}
			aria-controls={uuid}
			aria-label={menuButtonLabel}
			title={menuButtonLabel}
			on:click!stopPropagation={toggleMenu}
			on:keydown={(event) => handleKeyDown(castKeyboardEvent(event))}
			on:mouseenter={() => (trigger === 'hover' ? handleOpen() : null)}
		/>
	{/if}
	<PopperContainer {withinPortal}>
		<Popper
			reference={referenceElement}
			mounted={opened}
			arrowSize={3}
			arrowClassName={classes.arrow}
			{transition}
			{transitionOptions}
			{position}
			{placement}
			{gutter}
			{withArrow}
			{zIndex}
		>
			<Paper
				bind:element={dropdownElement}
				use={[[clickoutside, clickOutsideParams]]}
				id={uuid}
				role="menu"
				class={cx(classes.body)}
				aria-orientation="vertical"
				{radius}
				on:mouseleave={() => (hovered = -1)}
				{shadow}
			>
				{@render children?.()}
			</Paper>
		</Popper>
	</PopperContainer>
</Box>
