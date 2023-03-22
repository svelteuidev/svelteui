export * from './homepage';
export * from './mainpages';
export * from './svgs';

// needed to use alias for exporting components
export { default as CodeBlock } from './CodeBlock.svelte';
export { default as MinorHeading } from './MinorHeading.svelte';
export { default as Heading } from './Heading.svelte';
export { default as Device } from './Device.svelte';
export { default as BottomNav } from './BottomNav.svelte';
export { default as NavigationTitle } from './NavigationTitle.svelte';
export { default as Preview } from "./ComponentPreview.svelte"
export { default as Banner } from './Banner.svelte';
export { default as Global } from './Global.svelte';
export { default as Logo } from './Logo.svelte';
export { default as PageTransition } from './PageTransition.svelte';
export { default as TopBar } from './TopBar/TopBar.svelte';
export { default as Sidebar } from './Sidebar.svelte';
export { mobile, screenH, screenW, scrollY, mouse } from './Device.svelte';
export { colors } from './temp/colors';
