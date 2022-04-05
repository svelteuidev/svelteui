import { SvelteComponentTyped } from 'svelte';
import type {
	ButtonVariant,
	LoaderProps
} from '../../../../svelteui-core/src/lib/Button/Button.styles';
import type { Override, SvelteuiColor, SvelteuiNumberSize, SvelteuiGradient } from '../../index';

declare const Button: {
	props: {
		[x: string]: any;
		override?: Override['props'];
		variant?: ButtonVariant;
		color?: SvelteuiColor;
		size?: SvelteuiNumberSize;
		radius?: SvelteuiNumberSize | number;
		type?: 'button' | 'reset' | 'submit' | 'menu';
		gradient?: SvelteuiGradient;
		loaderPosition?: 'left' | 'right';
		loaderProps?: LoaderProps;
		class?: string;
		href?: string;
		external?: boolean;
		disabled?: boolean;
		compact?: boolean;
		loading?: boolean;
		uppercase?: boolean;
		fullSize?: boolean;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
};
export declare type ButtonProps = typeof Button.props;
export declare type ButtonEvents = typeof Button.events;
