export * from './homepage';
export * from './mainpages';
export * from './svgs';

// needed to use alias for exporting components
export { default as CodeBlock } from './CodeBlock.svelte';
export { default as MinorHeading } from './MinorHeading.svelte';
export { default as Heading } from './Heading.svelte';
export { default as Preview } from './ComponentPreview.svelte';
export { default as ToolTip } from './temp/ToolTip.svelte';
export { default as Device } from './Device.svelte';
export { mobile, screenH, screenW, scrollY, mouse } from './Device.svelte';
export { colors } from './temp/colors';
