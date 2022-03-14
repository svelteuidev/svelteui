<script >import { css } from '../_styles/index';
import { vFunc } from '../_styles/utils/get-variant-theme/get-variant-theme';
import { sizes } from './Button.styles';
import { get_current_component } from 'svelte/internal';
import { createEventForwarder } from '../_internal';
import Loader from '../Loader/Loader.svelte';
// --------------------------------------------
/** Override prop for custom theming the component */
export let override = {};
/** Controls button appearance 
 * @type {'filled' | 'light' | 'outline' | 'default' | 'white' | 'gradient' | 'subtle'}
*/
export let variant = 'filled';
/** Button color from theme */
export let color = 'blue';
/** Predefined button size */
export let size = 'sm';
/** Button border-radius from theme or number to set border-radius in px */
export let radius = 'sm';
/** Semantics for html to define the type of button when not an href */
export let type = 'button';
/** Controls gradient settings in gradient variant only */
export let gradient = { from: 'indigo', to: 'cyan', deg: 45 };
/** Loader position relative to button label */
export let loaderPosition = 'left';
/** Props passed to Loader component */
export let loaderProps = { size: 'xs', color: 'white', variant: 'circle' };
// --------------------------------------------
// --------------------------------------------
/** Used for custom classes to be applied to the button e.g. Tailwind classes */
export let className = '';
export { className as class };
/** Applies an href to the button component and converts it to an anchor tag */
export let href = '';
/** If external is set to true, target = _blank */
export let external = false;
/** disabled will set button to disabled state */
export let disabled = false;
/** compact will set button to compact state */
export let compact = false;
/** loading will set button to loading state */
export let loading = false;
/** uppercase will set button text to uppercase */
export let uppercase = false;
/** fullSize will set button width to 100% */
export let fullSize = false;
// --------------------------------------------
/** An action that forwards inner dom node events to parent component */
const forwardEvents = createEventForwarder(get_current_component());
/** Css function to generate button styles */
const ButtonStyles = css({
    color: 'White',
    backgroundColor: `$${color}600`,
    background: variant === 'gradient'
        ? `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`
        : null,
    borderRadius: typeof radius === 'number' ? radius : `$${radius}`,
    border: `1px solid $${color}600`,
    height: sizes[compact ? `compact-${size}` : size].height,
    padding: sizes[compact ? `compact-${size}` : size].padding,
    fontFamily: '$standard',
    fontWeight: '$SemiBold',
    fontSize: '$sm',
    lineHeight: 1,
    flexGrow: 0,
    width: fullSize ? '100%' : 'auto',
    '&:hover': {
        backgroundColor: variant === 'gradient' ? null : `$${color}700`,
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
            borderRadius: `$${radius}`,
            cursor: 'not-allowed'
        }
    },
    variants: {
        variation: vFunc(color, gradient)
    }
});
</script>

<!--
@component
A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.

@see https://svelteui-docs.vercel.app/docs/core/button
@example
    ```tsx
    <Button>Click</Button> // standard button
    <Button variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>Click Me</Button> // gradient button
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
		class="button {className} {ButtonStyles({ css: override, variation: variant })}"
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
		class="button {className} {ButtonStyles({ css: override, variation: variant })}"
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
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</button>
{/if}

<style>.button{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.disabled{background-color:#e9ecef;background:#e9ecef;border-color:transparent;color:#adb5bd;cursor:not-allowed;pointer-events:none}.uppercase{text-transform:uppercase}.loader-left{margin-right:10px}.loader-right{margin-left:10px}</style>
