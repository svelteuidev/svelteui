<script lang="ts">
	import { ActionIcon, UnstyledButton, useActions } from '@svelteuidev/core';
	import useStyles from './CalendarHeader.styles';
	import SelectChevronIcon from './SelectChevronIcon.svelte';
	import ArrowIcon from './ArrowIcon.svelte';
	import type { CalendarHeaderProps as $$CalendarHeaderProps } from './CalendarHeader.styles';

	interface Props {
		use?: $$CalendarHeaderProps['use'];
		element?: $$CalendarHeaderProps['element'];
		class?: $$CalendarHeaderProps['className'];
		override?: $$CalendarHeaderProps['override'];
		hasPrevious?: $$CalendarHeaderProps['hasPrevious'];
		hasNext?: $$CalendarHeaderProps['hasNext'];
		label?: $$CalendarHeaderProps['label'];
		nextLevelDisabled?: $$CalendarHeaderProps['nextLevelDisabled'];
		size?: $$CalendarHeaderProps['size'];
		nextLabel?: $$CalendarHeaderProps['nextLabel'];
		previousLabel?: $$CalendarHeaderProps['previousLabel'];
		preventLevelFocus?: $$CalendarHeaderProps['preventLevelFocus'];
		preventFocus?: $$CalendarHeaderProps['preventFocus'];
		onNext?: $$CalendarHeaderProps['onNext'];
		onPrevious?: $$CalendarHeaderProps['onPrevious'];
		onNextLevel?: $$CalendarHeaderProps['onNextLevel'];
	}

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		hasPrevious = null,
		hasNext = null,
		label = null,
		nextLevelDisabled = null,
		size = null,
		nextLabel = null,
		previousLabel = null,
		preventLevelFocus = null,
		preventFocus = null,
		onNext = null,
		onPrevious = null,
		onNextLevel = null
	}: Props = $props();

	let { cx, classes, theme } = $derived(useStyles({ size }, { override }));
	let iconSize = $derived(theme);
</script>

<div use:useActions={use} bind:this={element} class={cx(classes.root, className)}>
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
