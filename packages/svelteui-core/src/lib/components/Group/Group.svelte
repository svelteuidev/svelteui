<script lang="ts">
	import { POSITIONS } from './Group.styles';
	import { GroupErrors } from './Group.errors';
	import Box from '../Box/Box.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { GroupProps as $$GroupProps } from './Group.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$GroupProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$GroupProps['override'] = {};
	/** Defines justify-content property */
	export let position: $$GroupProps['position'] = 'left';
	/** Defined flex-wrap property */
	export let noWrap: $$GroupProps['noWrap'] = false;
	/** Defines flex-grow property for each element, true -> 1, false -> 0 */
	export let grow: $$GroupProps['grow'] = false;
	/** Space between elements */
	export let spacing: $$GroupProps['spacing'] = 'md';
	/** Defines flex-direction property, row for horizontal, column for vertical */
	export let direction: $$GroupProps['direction'] = 'row';
	/** Defines align-items css property */
	export let align: $$GroupProps['align'] = 'center';
	/** The children being rendered */
	export let children: $$GroupProps['children'] = null;

	$: GroupStyles = {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: direction,
		alignItems:
			align ||
			(direction === 'row'
				? 'center'
				: grow
				? 'stretch'
				: position === 'apart'
				? 'flex-start'
				: POSITIONS[position]),
		flexWrap: noWrap ? 'nowrap' : 'wrap',
		justifyContent: direction === 'row' ? POSITIONS[position] : undefined,
		gap: typeof spacing === 'number' ? `${spacing}px` : `$${spacing}`,

		'& > *': {
			boxSizing: 'border-box',
			maxWidth:
				grow && direction === 'row'
					? `calc(${100 / children}% - ${
							typeof spacing === 'number' ? `${spacing}px` : `$${spacing}`
					  })px`
					: undefined,
			flexGrow: grow ? 1 : 0
		}
	};

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (grow && children === null) {
		observable = true;
		err = GroupErrors[0];
	}
	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="Group" code={err} />

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Compose elements and components in a vertical flex container.
	
@see https://svelteui-docs.vercel.app/docs/core/group
@example
    ```svelte
    <Group children={3} grow>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Group>
    ```
-->

<Box css={{ ...GroupStyles, ...override }} class={className} {...$$restProps}>
	<slot />
</Box>
