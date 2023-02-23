<script lang="ts" context="module">
	export const ctx = 'Menu';
</script>

<script lang="ts">
	import useStyles, { getNextItem, getPreviousItem } from './Menu.styles';
	import { createEventDispatcher, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import { Paper } from '../Paper';
	import { MenuIcon } from './index';
	import { clickoutside, useHash } from '@svelteuidev/composables';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { Writable } from 'svelte/store';
	import type { MenuContextValue } from './Menu.context';
	import type { MenuProps as $$MenuProps, MenuEvents as $$MenuEvents } from './Menu';

	interface $$Props extends $$MenuProps {}
	interface $$Events extends $$MenuEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		closeOnItemClick: $$Props['closeOnItemClick'] = true,
		closeOnScroll: $$Props['closeOnScroll'] = false,
		delay: $$Props['delay'] = 100,
		menuButtonLabel: $$Props['menuButtonLabel'] = undefined,
		menuId: $$Props['menuId'] = undefined,
		radius: $$Props['radius'] = 'sm',
		opened: $$Props['opened'] = false,
		shadow: $$Props['shadow'] = 'md',
		size: $$Props['size'] = 'md',
		trigger: $$Props['trigger'] = 'click',
		trapFocus: $$Props['trapFocus'] = true,
		withinPortal: $$Props['withinPortal'] = true,
		zIndex: $$Props['zIndex'] = 300,
		withArrow: $$Props['withArrow'] = false,
		gutter: $$Props['gutter'] = 5,
		placement: $$Props['placement'] = 'start',
		position: $$Props['position'] = 'bottom',
		transition: $$Props['transition'] = 'fade',
		transitionOptions: $$Props['transitionOptions'] = { duration: 100 };
	export { className as class };

	const dispatch = createEventDispatcher();

	/** Function that allows changing the state of the menu from outside the component */
	export function open() {
		handleOpen();
	}
	export function close() {
		handleClose();
	}
	export function toggle() {
		toggleMenu();
	}

	let delayTimeout: number;
	let referenceElement: HTMLButtonElement;
	let dropdownElement: HTMLDivElement;
	let control: HTMLElement;
	let hovered: number = -1;

	const clickOutsideParams: { enabled: boolean; callback: (any) => unknown } = {
		enabled: true,
		callback: () => _opened && handleClose()
	};
	const uuid: string = useHash(menuId);
	const forwardEvents = createEventForwarder(get_current_component(), ['open', 'close']);
	const castKeyboardEvent = <T = KeyboardEvent>(event): T => event;

	// can be turned into an action
	const focusReference = () => window.setTimeout(() => referenceElement?.focus(), 0);

	onMount(() => {
		if (!$$slots.control) return;

		control = element.children[0] as HTMLElement;
		control.setAttribute('role', 'button');
		control.setAttribute('aria-haspopup', 'menu');
		control.setAttribute('aria-expanded', String(_opened));
		control.setAttribute('aria-controls', uuid);
		if (menuButtonLabel) control.setAttribute('aria-label', menuButtonLabel);

		control.addEventListener('click', (event) => {
			event.stopPropagation();
			toggleMenu();
		});
		control.addEventListener('mouseenter', () => (trigger === 'hover' ? handleOpen() : null));
		control.addEventListener('keydown', (event) => handleKeyDown(castKeyboardEvent(event)));
	});

	const handleClose = () => {
		if (_opened) {
			_opened = false;
			opened = false;
			dispatch('close');
		}
	};

	const handleOpen = () => {
		_opened = true;
		opened = true;
		dispatch('open');
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

	const handleItemClick = () => {
		if (closeOnItemClick) {
			handleClose();
			trigger === 'click' && focusReference();
		}
	};

	const contextStore: Writable<MenuContextValue> = writable({
		hovered,
		radius,
		onItemHover: (hover) => (hovered = hover),
		onItemKeyDown: handleKeyDown,
		onItemClick: handleItemClick
	});

	$: _opened = opened;
	$: if ($$slots.control && control) control.setAttribute('aria-expanded', String(_opened));
	$: contextStore.set({
		hovered,
		radius,
		onItemHover: (hover) => (hovered = hover),
		onItemKeyDown: handleKeyDown,
		onItemClick: handleItemClick
	});
	$: ({ cx, classes } = useStyles({ size }, { override, name: 'Menu' }));
	setContext<Writable<MenuContextValue>>(ctx, contextStore);
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
	<slot name="control">
		<MenuIcon
			bind:element={referenceElement}
			role="button"
			aria-haspopup="menu"
			aria-expanded={_opened}
			aria-controls={uuid}
			aria-label={menuButtonLabel}
			title={menuButtonLabel}
			on:click!stopPropagation={toggleMenu}
			on:keydown={(event) => handleKeyDown(castKeyboardEvent(event))}
			on:mouseenter={() => (trigger === 'hover' ? handleOpen() : null)}
		/>
	</slot>
	<Popper
		reference={control ?? referenceElement}
		mounted={_opened}
		arrowSize={3}
		arrowClassName={classes.arrow}
		{transition}
		{transitionOptions}
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
			class={cx(classes.body)}
			aria-orientation="vertical"
			{radius}
			on:mouseleave={() => (hovered = -1)}
			{shadow}
		>
			<slot />
		</Paper>
	</Popper>
</Box>
