import { TextareaProps } from '../Textarea/Textarea';

export interface JsonInputProps extends TextareaProps {
	validationError?: string;
	serialize?: typeof JSON.stringify;
	deserialize?: typeof JSON.parse;
	formatOnBlur?: boolean;
}
