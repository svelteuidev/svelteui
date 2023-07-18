import { DefaultProps } from '$lib/styles';
import { InputProps } from '../Input/Input';
import { InputWrapperProps } from '../InputWrapper/InputWrapper';

type BaseProps = Omit<InputProps, 'rightSection' | 'type' | 'showRightSection'> &
	InputWrapperProps &
	DefaultProps<HTMLInputElement>;

export interface PasswordInputProps extends BaseProps {
	toggleTabIndex?: -1 | 0;
	visibilityToggleLabel?: string;
	visible?: boolean;
	defaultVisible?: boolean;
	onVisibilityChange?(visible: boolean): void;
}
