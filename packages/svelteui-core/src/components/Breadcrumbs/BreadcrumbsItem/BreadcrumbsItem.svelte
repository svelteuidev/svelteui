<script lang="ts">
	import { getContext } from 'svelte';

	import { IconRenderer } from '../../IconRenderer';
	import { Box } from '../../Box';
	import type { BreadcrumbContext } from '../Breadcrumbs';
	import { ctx } from '../Breadcrumbs.svelte';
	import type { BreadcrumbItemProps } from './BreadcrumbsItem';
	import useStyles from './BreadcrumbsItem.styles';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		href = undefined,
		active = false,
		iconComponent = undefined,
		icon,
		children
	}: BreadcrumbItemProps = $props();

	const { separator, size, color }: BreadcrumbContext = $derived.by(getContext(ctx));

	let { cx, classes, getStyles } = $derived(
		useStyles({ color, size }, { name: 'BreadcrumbsItem' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))}>
	{#if href}
		<div class={cx(classes.wrapper, { active: active })}>
			<a {href}>
				{#if iconComponent}
					<IconRenderer className={classes.icon} icon={iconComponent} />
				{/if}
				{#if icon}
					{@render icon({ class: cx(classes.icon) })}
				{/if}
				<span class={cx(classes.innerText)}>
					{@render children?.()}
				</span>
			</a>
			{#if !active}
				<span class={cx(classes.separator)}>{separator}</span>
			{/if}
		</div>
	{:else}
		<div class={cx(classes.wrapper, { active: active })}>
			{#if iconComponent}
				<IconRenderer className={classes.icon} icon={iconComponent} />
			{/if}
			{#if icon}
				{@render icon({ class: cx(classes.icon) })}
			{/if}
			<span class={cx(classes.innerText)}>
				{@render children?.()}
			</span>
			{#if !active}
				<span class={cx(classes.separator)}>{separator}</span>
			{/if}
		</div>
	{/if}
</Box>
