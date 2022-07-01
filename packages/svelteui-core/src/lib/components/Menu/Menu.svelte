<script lang="ts">
	import useStyles, { getNextItem, getPreviousItem } from './Menu.styles';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import { Paper } from '../Paper';
	import { MenuIcon } from './index';
	import { clickoutside, useHash } from '@svelteuidev/composables';
	import { createEventForwarder, useActions, getTransition } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import type { MenuContextValue } from './Menu.context';
	import type { PopperProps } from '../Popper';
	import type { MenuProps as $$MenuProps } from './Menu.styles';

	export let use: $$MenuProps['use'] = [],
		element: $$MenuProps['element'] = undefined,
		className: $$MenuProps['className'] = '',
		override: $$MenuProps['override'] = {},
		closeOnItemClick: $$MenuProps['closeOnItemClick'] = true,
		closeOnScroll: $$MenuProps['closeOnScroll'] = false,
		delay: $$MenuProps['delay'] = 100,
		menuButtonLabel: $$MenuProps['menuButtonLabel'] = undefined,
		menuId: $$MenuProps['menuId'] = undefined,
		radius: $$MenuProps['radius'] = 'sm',
		opened: $$MenuProps['opened'] = false,
		shadow: $$MenuProps['shadow'] = 'md',
		size: $$MenuProps['size'] = 'md',
		trigger: $$MenuProps['trigger'] = 'click',
		trapFocus: $$MenuProps['trapFocus'] = true,
		withinPortal: $$MenuProps['withinPortal'] = true,
		zIndex: $$MenuProps['zIndex'] = 300,
		withArrow: PopperProps['withArrow'] = false,
		gutter: PopperProps['gutter'] = 5,
		placement: PopperProps['placement'] = 'start',
		position: PopperProps['position'] = 'bottom',
		transition: $$MenuProps['transition'] = 'scale',
		transitionOptions: $$MenuProps['transitionOptions'] = { duration: 300 };
	export { className as class };

	let delayTimeout: number;
	let referenceElement: HTMLButtonElement;
	let dropdownElement: HTMLDivElement;
	let hovered: number = -1;
	let _transition = getTransition(transition) as any;

	const clickOutsideParams: { enabled: boolean; callback: (any) => unknown } = {
		enabled: true,
		callback: () => _opened && handleClose()
	};
	const uuid: string = useHash(menuId);
	const forwardEvents = createEventForwarder(get_current_component());
	const castKeyboardEvent = <T = KeyboardEvent>(event): T => event;

	// can be turned into an action
	const focusReference = () => window.setTimeout(() => referenceElement?.focus(), 0);

	const handleClose = () => {
		console.log('close triggered', { opened, _opened });
		if (_opened) {
			opened = false;
		}
	};

	const handleOpen = () => {
		console.log('open triggered', { opened, _opened });
		opened = true;
	};

	const toggleMenu = () => {
		_opened ? handleClose() : handleOpen();
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
		if (_opened) {
			const elements = Array.from(
				dropdownElement.querySelectorAll<HTMLButtonElement>('.svelteui-Menu-item')
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

	const handleItemClick = () => {
		if (closeOnItemClick) {
			handleClose();
			trigger === 'click' && focusReference();
		}
	};

	const contextStore: Writable<MenuContextValue> = writable({
		hovered,
		radius,
		onItemHover: (hovered) => {},
		onItemKeyDown: handleKeyDown,
		onItemClick: handleItemClick
	});
	setContext<Writable<MenuContextValue>>('Menu', contextStore);

	$: _opened = opened;
	$: $contextStore = {
		hovered,
		radius,
		onItemHover: (hovered) => {},
		onItemKeyDown: handleKeyDown,
		onItemClick: handleItemClick
	};
	$: ({ cx, classes } = useStyles({ size }, { override }));
</script>

<svelte:window on:scroll={() => closeOnScroll && handleClose()} />

<Box
	bind:element
	use={[forwardEvents, [useActions, use], [clickoutside, clickOutsideParams]]}
	class={cx(classes.root, className)}
	on:mouseleave={handleMouseLeave}
	on:mouseenter={handleMouseEnter}
	{...$$restProps}
>
	<MenuIcon
		role="button"
		aria-haspopup="menu"
		aria-expanded={_opened}
		aria-controls={uuid}
		aria-label={menuButtonLabel}
		title={menuButtonLabel}
		on:keydown={(event) => handleKeyDown(castKeyboardEvent(event))}
		on:click={() => {
			console.log('clicked');
			toggleMenu();
		}}
		on:mouseenter={() => (trigger === 'hover' ? handleOpen() : null)}
	/>
	{#if _opened}
		<div transition:_transition={transitionOptions}>
			<Popper
				{referenceElement}
				mounted={_opened}
				arrowSize={3}
				arrowClassName={classes.arrow}
				{position}
				{placement}
				{gutter}
				{withArrow}
				{zIndex}
				{withinPortal}
			>
				<Paper
					bind:element={dropdownElement}
					use={[[clickoutside, clickOutsideParams]]}
					id={uuid}
					role="menu"
					class={cx(classes.body, 'svelteui-Menu-body')}
					aria-orientation="vertical"
					{radius}
					on:mouseleave={() => (hovered = -1)}
					{shadow}
				>
					<slot><!-- optional fallback --></slot>
				</Paper>
			</Popper>
		</div>
	{/if}
</Box>
