import { default as SelectControl } from './SelectControl.svelte';
import { default as ColorControl } from './ColorControl.svelte';
import { default as BooleanControl } from './BooleanControl.svelte';
import { default as StringControl } from './StringControl.svelte';
import { default as SizeControl } from './SizeControl.svelte';
import { default as SegmentedControl } from './SegmentedControl.svelte';
import { default as NumberControl } from './NumberControl.svelte';
import { default as CompositeControl } from './CompositeControl.svelte';

export const controls = {
	select: SelectControl,
	color: ColorControl,
	boolean: BooleanControl,
	string: StringControl,
	size: SizeControl,
	segmented: SegmentedControl,
	number: NumberControl,
	composite: CompositeControl
};

export { default as ControlsRenderer } from './ControlsRenderer.svelte';
