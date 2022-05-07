<script lang="ts">
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
    import Checkbox from '../Checkbox.svelte';
	import type { CheckboxGroupProps as $$CheckboxGroupProps } from './CheckboxGroup.styles';

	/** Used for custom classes to be applied to the checkbox group e.g. Tailwind classes */
	export let className: $$CheckboxGroupProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$CheckboxGroupProps['override'] = {};
	/** Checkbox group color  when activated from theme */
	export let color: $$CheckboxGroupProps['color'] = 'gray';
	/** The values of the currently selected checkboxes */
	export let items: $$CheckboxGroupProps['items'] = [];
	/** The values of the currently selected checkboxes */
	export let value: $$CheckboxGroupProps['value'] = [];
	/** The label of the checkbox */
	export let label: $$CheckboxGroupProps['label'] = null;
	/** Predefined checkbox size */
	export let size: $$CheckboxGroupProps['size'] = 'md';
    /** Predefined checkbox radius */
	export let radius: $$CheckboxGroupProps['radius'] = 'sm';
	/** Predefined checkbox spacing between checkboxes in horizontal orientation */
	export let direction: $$CheckboxGroupProps['direction'] = 'row';
	/** Predefined checkbox spacing between checkboxes in horizontal orientation */
	export let align: $$CheckboxGroupProps['align'] = 'flex-start';
	/** Predefined checkbox spacing between checkboxes in horizontal orientation */
	export let spacing: $$CheckboxGroupProps['spacing'] = 'md';
	/** The props to pass to the wrapper component */
	export let wrapperProps: $$CheckboxGroupProps['wrapperProps'] = {};

    function onChanged(item, el) {        
        if (el.checked) value = [...value, item];
        else value = value.filter(val => val !== item);
    }
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

A checkbox group component using the theme styles and builds a set of checkboxes according to
the items passed.
	
@see https://svelteui-docs.vercel.app/docs/core/checkbox
@example
    ```svelte
    <CheckboxGroup bind:value items={items} />
    <CheckboxGroup label={"Choose your favorite framework"} description={"Choose carefuly"} bind:value={value} items={items} />
    <CheckboxGroup bind:value={value} items={items} direction={'column'}/>
    ```
-->

<InputWrapper class="{className}" {label} {override} {size} {...wrapperProps} {...$$restProps}>
    <Group {direction} {spacing} {align}>
        {#each items as item}
            <Checkbox
                label={item.label}
                value={item.value}
                checked={value.includes(item.value)}
                {radius}
                {size}
                {color}
                on:change={(e) => onChanged(item.value, e.target)}
            />
        {/each}
    </Group>
</InputWrapper>
