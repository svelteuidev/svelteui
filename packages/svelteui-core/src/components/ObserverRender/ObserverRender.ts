import { IoConfig } from '@svelteuidev/composables';
import type { TextInputProps } from '../TextInput/TextInput';

export type Formatter = (value: string | undefined) => string;
export type Parser = (value: string | undefined) => string | undefined;

export interface ObserverRenderProps extends Omit<TextInputProps, 'value'> {
	options?: IoConfig.Options;
}
