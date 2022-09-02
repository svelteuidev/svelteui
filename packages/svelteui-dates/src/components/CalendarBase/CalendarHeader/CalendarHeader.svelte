<script lang="ts">
	import { ActionIcon, UnstyledButton } from '@svelteuidev/core';
	import useStyles from './CalendarHeader.styles';
	import SelectChevronIcon from './SelectChevronIcon.svelte';
	import ArrowIcon from './ArrowIcon.svelte';
	import type { CalendarHeaderProps as $$CalendarHeaderProps } from './CalendarHeader.styles';

	export let use: $$CalendarHeaderProps['use'] = [],
		element: $$CalendarHeaderProps['element'] = undefined,
		className: $$CalendarHeaderProps['className'] = '',
		override: $$CalendarHeaderProps['override'] = {},
		hasPrevious: $$CalendarHeaderProps['hasPrevious'] = null,
		hasNext: $$CalendarHeaderProps['hasNext'] = null,
		label: $$CalendarHeaderProps['label'] = null,
		nextLevelDisabled: $$CalendarHeaderProps['nextLevelDisabled'] = null,
		size: $$CalendarHeaderProps['size'] = null,
		nextLabel: $$CalendarHeaderProps['nextLabel'] = null,
		previousLabel: $$CalendarHeaderProps['previousLabel'] = null,
		preventLevelFocus: $$CalendarHeaderProps['preventLevelFocus'] = null,
		preventFocus: $$CalendarHeaderProps['preventFocus'] = null,
		onNext: $$CalendarHeaderProps['onNext'] = null,
		onPrevious: $$CalendarHeaderProps['onPrevious'] = null,
		onNextLevel: $$CalendarHeaderProps['onNextLevel'] = null;
	export { className as class };

	const iconSizes = {
		xs: 12,
		sm: 14,
		md: 18,
		lg: 22,
		xl: 28
	};
	$: ({ cx, classes, theme } = useStyles({ size }, { override }));
	$: iconSize = theme;
</script>

<div use:use bind:this={element} class={cx(classes.root, className)}>
	<ActionIcon
		class={classes.calendarHeaderControl}
		disabled={!hasPrevious}
		onClick={onPrevious}
		aria-label={previousLabel}
		onMouseDown={(event) => preventFocus && event.preventDefault()}
	>
		<ArrowIcon direction="left" width={iconSize} height={iconSize} />
	</ActionIcon>

	<UnstyledButton
		class={classes.calendarHeaderLevel}
		disabled={nextLevelDisabled}
		onClick={onNextLevel}
		tabIndex={preventLevelFocus ? -1 : 0}
		onMouseDown={(event) => preventFocus && event.preventDefault()}
	>
		{label}
		{#if !nextLevelDisabled}
			<!-- content here -->
			<SelectChevronIcon error={false} {size} class={classes.calendarHeaderLevelIcon} />
		{/if}
	</UnstyledButton>

	<ActionIcon
		class={classes.calendarHeaderControl}
		disabled={!hasNext}
		onClick={onNext}
		aria-label={nextLabel}
		onMouseDown={(event) => preventFocus && event.preventDefault()}
	>
		<ArrowIcon direction="right" width={iconSize} height={iconSize} />
	</ActionIcon>
</div>
