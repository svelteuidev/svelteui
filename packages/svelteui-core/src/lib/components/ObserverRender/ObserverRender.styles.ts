import type { useIoConfig } from '@svelteuidev/composables';
import type { DefaultProps } from '$lib/styles';

export interface ObserverRenderProps extends DefaultProps {
	options: useIoConfig.Options;
}
