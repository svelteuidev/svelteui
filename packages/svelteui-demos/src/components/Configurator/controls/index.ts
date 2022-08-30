import SelectControl from './SelectControl.svelte';
import ColorControl from './ColorControl.svelte';
import BooleanControl from './BooleanControl.svelte';
import StringControl from './StringControl.svelte';
import SizeControl from './SizeControl.svelte';
import SegmentedControl from './SegmentedControl.svelte';
import NumberControl from './NumberControl.svelte';
import CompositeControl from './CompositeControl.svelte';

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
