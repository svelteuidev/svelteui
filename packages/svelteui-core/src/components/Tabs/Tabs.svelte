<script lang="ts" context="module">
	export const ctx = 'Tabs';
</script>

<script lang="ts">
	import { createEventDispatcher, getContext, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { randomID } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import Group from '../Group/Group.svelte';
	import useStyles from './Tabs.styles';
	import type { TabsProps as $$TabsProps, TabsEvents as $$TabEvents, TabsContext } from './Tabs';

	interface $$Props extends $$TabsProps {}
	interface $$Events extends $$TabEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		active: $$Props['active'] = -1,
		color: $$Props['color'] = 'blue',
		grow: $$Props['grow'] = false,
		initialTab: $$Props['initialTab'] = 0,
		orientation: $$Props['orientation'] = 'horizontal',
		position: $$Props['position'] = 'left',
		tabPadding: $$Props['tabPadding'] = 'xs',
		variant: $$Props['variant'] = 'default';
	export { className as class };

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
	let contextStore: TabsContext = getContext(ctx);
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
	$: $contextStore[tabsId] = {
		active: _active,
		color: color,
		variant: variant,
		orientation: orientation
	};

	/**
	 * Retrieves all tabs that the component has as children
	 * and adds a click event listener so that it can listen
	 * to tab changes.
	 */
	function setupTabs() {
		const tabs = element.querySelectorAll(':scope > div > [role="tablist"] > .svelteui-Tab');

		for (let [index, tab] of Array.from(tabs).entries()) {
			const key = tab.getAttribute('data-key');
			tab.addEventListener('click', () => onTabClick(index, key));
			tab.addEventListener('keydown', (event) => onTabKeyDown(event as KeyboardEvent));
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

	function onTabKeyDown(event: KeyboardEvent) {
		const tabs = element.querySelectorAll('.svelteui-Tab');

		let _index = _active;
		if (event.code === nextTabCode) {
			if (_index + 1 >= tabs.length) return;
			_index += 1;
		} else if (event.code === previousTabCode) {
			if (_index - 1 < 0) return;
			_index -= 1;
		}

		event.preventDefault();
		const tab = Array.from(tabs)[_index];
		const key = tab.getAttribute('data-key');

		dispatch('change', { index: _index, key: key });
		_active = _index;
		contextStore.set({ ...$contextStore, [tabsId]: { ...$contextStore[tabsId], active: _index } });
	}

	// check if item is still checked when the context store updates
	$: _active = active === -1 ? initialTab : active;
	$: nextTabCode = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
	$: previousTabCode = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
	$: $contextStore, _active, calculateActive();

	$: ({ cx, classes } = useStyles({ orientation, tabPadding }, { override, name: 'Tabs' }));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display list of events in chronological order

@see https://svelteui.org/core/timeline
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
<Box bind:element {use} class={cx(className, classes.root)} {...$$restProps}>
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
			<slot />
		</Group>
	</div>
	<div role="tabpanel" class={cx('tabs-content', classes.content)} />
</Box>
