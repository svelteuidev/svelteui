<script lang="ts" module>
	export const ctx = 'Tabs';
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { randomID } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import Group from '../Group/Group.svelte';
	import useStyles from './Tabs.styles';
	import type { TabsProps, TabsContext } from './Tabs';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		active = -1,
		color = 'blue',
		grow = false,
		initialTab = 0,
		orientation = 'horizontal',
		position = 'left',
		tabPadding = 'xs',
		variant = 'default',
		children,
		onChange = () => {},
		...rest
	}: TabsProps = $props();

	const tabsId = randomID();
	let tabNodes: Element[];

	onMount(() => {
		const children = element.querySelectorAll(
			':scope > div > [role="tablist"] > .svelteui-Tab > div > .svelteui-Tab-content'
		);
		tabNodes = Array.from(children);
		setupTabs();
		calculateActive(active === -1 ? initialTab : active);
	});

	let contextStore: TabsContext = $derived({
		[tabsId]: {
			active: active === -1 ? initialTab : active,
			color: color,
			variant: variant,
			orientation: orientation
		}
	});
	setContext(ctx, () => contextStore);

	/**
	 * Retrieves all tabs that the component has as children
	 * and adds a click event listener so that it can listen
	 * to tab changes.
	 */
	function setupTabs() {
		// TODO: rethink current approach, this can be problematic
		// in the future
		const tabs = element.querySelectorAll(':scope > div > [role="tablist"] > .svelteui-Tab');

		for (let [index, tab] of Array.from(tabs).entries()) {
			const key = tab.getAttribute('data-key');
			tab.addEventListener('click', () => onTabClick(index, key));
			tab.addEventListener('keydown', (event) => onTabKeyDown(event as KeyboardEvent, index, key));
		}
	}

	/**
	 * Calculates the active tab and switches the content
	 * of the tabs so that it can be shown.
	 */
	function calculateActive(activeTabIndex: number) {
		if (!element) return;

		const content = element.querySelector(':scope > .tabs-content');
		if (!content) return;

		const activeTab = Array.from(tabNodes)[activeTabIndex];
		if (!activeTab) return;

		if (content.children.length > 0) {
			content.replaceChild(activeTab, content.children[0]);
		} else {
			content.appendChild(activeTab);
		}
	}

	function onTabClick(index: number, key: string) {
		onChange(index, key);
		_active = index;
	}

	function onTabKeyDown(event: KeyboardEvent, index: number, key: string) {
		const tabs = element.querySelectorAll('.svelteui-Tab');

		// Set current tab as the active one if the enter was pressed, allowing
		// selecting the tab when doing tab cycling
		if (event.code === 'Enter') {
			onChange(index, key);
			_active = index;
			return;
		}

		// Do not prevent default logic if tab cycling is being done
		if (event.code === 'Tab') {
			return;
		}

		let _index = _active;
		if (event.code === nextTabCode) {
			if (_index + 1 >= tabs.length) return;
			_index += 1;
		} else if (event.code === previousTabCode) {
			if (_index - 1 < 0) return;
			_index -= 1;
		}

		event.preventDefault();
		const selectedTab = Array.from(tabs)[_index];
		const selectedKey = selectedTab.getAttribute('data-key');

		onChange(_index, selectedKey);
		_active = _index;
	}

	// check if item is still checked when the context store updates
	let _active = $derived(active === -1 ? initialTab : active);
	let nextTabCode = $derived(orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown');
	let previousTabCode = $derived(orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp');

	$effect.pre(() => {
		calculateActive(_active);
	});

	let { cx, classes } = $derived(
		useStyles({ orientation, tabPadding }, { override, name: 'Tabs' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	<div class={cx(classes.wrapper, classes[variant])}>
		<Group
			class={classes.tabs}
			role="tablist"
			data-tabsid={tabsId}
			direction={orientation === 'horizontal' ? 'row' : 'column'}
			aria-orientation={orientation}
			spacing={variant === 'pills' ? 5 : 0}
			{position}
			{grow}
		>
			{@render children?.()}
		</Group>
	</div>
	<div role="tabpanel" class={cx('tabs-content', classes.content)}></div>
</Box>
