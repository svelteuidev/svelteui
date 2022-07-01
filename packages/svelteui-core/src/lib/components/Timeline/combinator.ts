import _Timeline from './Timeline.svelte';
import TimelineItem from './TimelineItem/TimelineItem.svelte';

// Combine Timeline and TimelineItem
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
_Timeline.Item = TimelineItem;
const Timeline = _Timeline as typeof _Timeline & { Item: typeof TimelineItem };

export { Timeline };
