import type { Snippet } from 'svelte';

import type { DefaultProps } from '$lib/styles';
import type { InputProps } from '../Input/Input';
import type { InputWrapperProps } from '../InputWrapper/InputWrapper';

type BaseProps = Omit<InputProps, 'rightSection' | 'type' | 'showRightSection'> &
	InputWrapperProps &
	DefaultProps<HTMLInputElement>;

export interface PasswordInputProps extends BaseProps {
	toggleTabIndex?: -1 | 0;
	visibilityToggleLabel?: string;
	visible?: boolean;
	defaultVisible?: boolean;
	onVisibilityChange?(visible: boolean): void;
	visibilityToggleIcon?: Snippet<[boolean]>;
}
