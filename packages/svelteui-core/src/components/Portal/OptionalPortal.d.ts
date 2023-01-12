import { SvelteComponentTyped } from 'svelte';
import { PortalProps } from './Portal';

export interface OptionalPortalProps extends PortalProps {
	withinPortal?: boolean;
}

export interface OptionalPortalSlots {
	default: Record<string, never>;
}

export default class OptionalPortal extends SvelteComponentTyped<
	OptionalPortalProps,
	Record<string, never>,
	OptionalPortalSlots
> {}
