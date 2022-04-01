<script >import CopyIcon from './CopyIcon.svelte';
import { css } from '../_styles/index';
import { clipboard } from '../_internal';
/** Override prop for custom theming the component */
export let override = {};
/** Code color and background from the default theme */
export let color = 'gray';
/** True for code block, false for inline code */
export let block = false;
/** The width of the code block when set to block */
export let width = 100;
/** With copy prop will allow for string in the associated method prop to be copied*/
export let copy = false;
/** Message prop will be the text that is copied when the copy prop is enabled */
export let message = 'Copied';
/** Copy logic */
let copied = false;
function toggle() {
    // sets the copied state for icon
    copied = true;
    setTimeout(() => (copied = false), 3000);
}
// Error handling for width prop
if (!block && width < 100) {
    throw new Error('Code Component: Width can only be modified when block prop is true');
}
// Error handling for copy prop
if (copy && message === 'Copied') {
    throw new Error('Code Component: If using the copy prop, a message must be assosciated with it');
}
/** Css function to generate button styles */
const CodeStyles = css({
    position: 'relative',
    lineHeight: 1.55,
    padding: `2px 10px`,
    borderRadius: '$sm',
    color: color === 'dark' ? `$dark400` : `$dark700`,
    backgroundColor: `$${color}50`,
    fontFamily: '$mono',
    fontSize: '$xs',
    width: block ? `${width}%` : null,
    [`& ${block}`]: {
        padding: '$xs',
        margin: 0,
        overflowX: 'auto'
    }
});
</script>

<!--
@component
The Code component creates ...

@see https://svelteui-docs.vercel.app/docs/core/code
@example
    ```tsx
    <Code color='green' size='lg' variant='bars' /> // standard code component
    <Code color='blue' block copy message={codeToCopy} /> // code with block and copy props
    ```
-->
{#if block}
	<pre class={CodeStyles({ css: override })} {...$$restProps}>
      <code><slot>Write some code</slot></code>
      {#if copy}
			<button on:click={toggle} use:clipboard={message} class:copy><CopyIcon {copied} /></button>
		{/if}
    </pre>
{:else}
	<code class={CodeStyles({ css: override })} {...$$restProps}>
		<slot>Write some code</slot>
	</code>
{/if}

<style>button{background:none;border:0;cursor:pointer;padding:0}.copy{position:absolute;right:2%;top:10%;z-index:2}</style>
