<script >import { css } from '@stitches/core';
import { theme } from '../_internal';
import { sizes } from './Button.styles';
import { get_current_component } from 'svelte/internal';
import { createEventForwarder } from '../_internal';
import { getSharedColorScheme } from '../_styles/utils/index';
import Loader from '../Loader/Loader.svelte';
/** Button Component Props*/
export let override = {};
export let variant = 'filled';
export let color = 'blue';
export let size = 'sm';
export let radius = 'sm';
export let type = 'button';
export let loaderPosition = 'left';
export let gradientFrom = 'indigo';
export let gradientTo = 'cyan';
export let gradientDeg = 45;
/** Custom classes to be applied to the button e.g. Tailwind classes */
export let className = '';
export { className as class };
/**
 * - Applies an href to the button component and converts it to an anchor tag
 * - If external is set to true, target = _blank
 */
export let href = '';
export let external = false;
/** Conditional class props that are either true or false
 * - disabled: will set button to disabled state
 * - compact: will set button to compact state
 * - loading: will set button to loading state
 * - uppercase: will set button text to uppercase
 * - fullSize: will set button width to 100%
 */
export let disabled = false;
export let compact = false;
export let loading = false;
export let uppercase = false;
export let fullSize = false;
/** An action that forwards inner dom node events to parent component */
const forwardEvents = createEventForwarder(get_current_component());
/** Varient theme functions
 * - Need the objects to pass theme store as function parameters
 */
const sharedColorSchemeValues = { color, theme: $theme, variant };
const gradColorSchemeValues = {
    color,
    theme: $theme,
    variant: 'gradient',
    gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg }
};
const variantStyles = getSharedColorScheme(sharedColorSchemeValues);
const gradient = getSharedColorScheme(gradColorSchemeValues);
/** Button theme only gets applied on page render
 * @todo ssr for Button component
 */
const ButtonStyles = css({
    color: variant === 'gradient' ? gradient.color : variantStyles.color,
    backgroundColor: variantStyles.background,
    background: variant === 'gradient' ? gradient.background : null,
    borderRadius: typeof radius === 'number' ? radius : `${$theme.radius[radius]}px`,
    border: variant === 'gradient' ? '0px' : `1px solid ${variantStyles.border}`,
    height: sizes[compact ? `compact-${size}` : size].height,
    padding: sizes[compact ? `compact-${size}` : size].padding,
    fontFamily: $theme.fontFamily,
    fontWeight: 600,
    fontSize: $theme.fontSizes.sm,
    lineHeight: 1,
    flexGrow: 0,
    width: fullSize ? '100%' : 'auto',
    '&:hover': {
        backgroundColor: variant === 'gradient' ? null : variantStyles.hover,
        backgroundSize: variant === 'gradient' ? '200%' : null
    },
    '&:active': {
        transform: 'translateY(1px)'
    },
    [`&.loading`]: {
        pointerEvents: 'none',
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: -1,
            backgroundColor: 'rgba(255, 255, 255, .5)',
            borderRadius: $theme.radius[radius],
            cursor: 'not-allowed'
        }
    }
});
</script>

<!--
@component
A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.

@see https://svelteui-docs.vercel.app/core/button
@example
    ```tsx
    <Button>Click</Button> // standard button
    ```
-->
{#if href && !disabled}
	<a
		{href}
		use:forwardEvents
		class:disabled
		class:compact
		class:uppercase
		class:loading
		class="button {className} {ButtonStyles({ css: override })}"
		role="button"
		rel="noreferrer noopener"
		target={external ? '_blank' : '_self'}
		{...$$restProps}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="loader-left">
				<Loader size={'xs'} color={'white'} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader size={'xs'} color={'white'} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</a>
{:else}
	<button
		use:forwardEvents
		class="button {className} {ButtonStyles({ css: override })}"
		class:disabled
		class:compact
		class:uppercase
		class:loading
		{disabled}
		{type}
		{...$$restProps}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="loader-left">
				<Loader size={'xs'} color={'white'} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader size={'xs'} color={'white'} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</button>
{/if}

<style>.button{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.disabled{background-color:#e9ecef;background:#e9ecef;border-color:transparent;color:#adb5bd;cursor:not-allowed;pointer-events:none}.uppercase{text-transform:uppercase}.loader-left{margin-right:10px}.loader-right{margin-left:10px}</style>
