<script lang="ts" module>
	export const ctx = 'Tabs';
</script>

<script lang="ts">
	import { run } from 'svelte/legacy';

	import { createEventDispatcher, getContext, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { randomID } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import Group from '../Group/Group.svelte';
	import useStyles from './Tabs.styles';
	import type { TabsProps as $$TabsProps, TabsEvents as $$TabEvents, TabsContext } from './Tabs';

	

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$TabEvents {}

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		active?: $$Props['active'];
		color?: $$Props['color'];
		grow?: $$Props['grow'];
		initialTab?: $$Props['initialTab'];
		orientation?: $$Props['orientation'];
		position?: $$Props['position'];
		tabPadding?: $$Props['tabPadding'];
		variant?: $$Props['variant'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
		...rest
	}: Props = $props();
	

	const tabsId = randomID();
	let tabNodes: Element[];
	const dispatch = createEventDispatcher();

	onMount(() => {
		const children = element.querySelectorAll(
			':scope > div > [role="tablist"] > .svelteui-Tab > div > .svelteui-Tab-content'
		);
		tabNodes = Array.from(children);
		setupTabs();
		calculateActive();
	});

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	let contextStore: TabsContext = $state(getContext(ctx));
	if (!contextStore) {
		contextStore = writable({
			[tabsId]: {
				active: active === -1 ? initialTab : active,
				color: color,
				variant: variant,
				orientation: orientation
			}
		});
		setContext(ctx, contextStore);
	}

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
	function calculateActive() {
		if (!element) return;

		const content = element.querySelector(':scope > .tabs-content');
		if (!content) return;

		const activeTab = Array.from(tabNodes)[_active];
		if (!activeTab) return;

		if (content.children.length > 0) {
			content.replaceChild(activeTab, content.children[0]);
		} else {
			content.appendChild(activeTab);
		}
	}

	function onTabClick(index: number, key: string) {
		dispatch('change', { index: index, key: key });
		_active = index;
		contextStore.set({ ...$contextStore, [tabsId]: { ...$contextStore[tabsId], active: index } });
	}

	function onTabKeyDown(event: KeyboardEvent, index: number, key: string) {
		const tabs = element.querySelectorAll('.svelteui-Tab');

		// Set current tab as the active one if the enter was pressed, allowing
		// selecting the tab when doing tab cycling
		if (event.code === 'Enter') {
			dispatch('change', { index, key });
			_active = index;
			contextStore.set({ ...$contextStore, [tabsId]: { ...$contextStore[tabsId], active: index } });
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

		dispatch('change', { index: _index, key: selectedKey });
		_active = _index;
		contextStore.set({ ...$contextStore, [tabsId]: { ...$contextStore[tabsId], active: _index } });
	}


	// check if item is still checked when the context store updates
	let _active;
	run(() => {
		_active = active === -1 ? initialTab : active;
	});
	run(() => {
		$contextStore[tabsId] = {
			active: _active,
			color: color,
			variant: variant,
			orientation: orientation
		};
	});
	let nextTabCode = $derived(orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown');
	let previousTabCode = $derived(orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp');
	run(() => {
		$contextStore, _active, calculateActive();
	});
	let { cx, classes } = $derived(useStyles({ orientation, tabPadding }, { override, name: 'Tabs' }));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display list of events in chronological order

@see https://svelteui.dev/core/timeline
@example
    ```svelte
    <Tabs>
      <Tabs.Tab>
		...
	  </Tabs.Tab>
      <Tabs.Tab>
		...
	  </Tabs.Tab>
	  ...
    </Tabs>
    ```
-->
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
