import { createStyles } from '$lib/styles';
import type { TabsVariant } from '../Tabs.styles';
import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface TabProps extends DefaultProps {
	active?: boolean;
	icon?: Component | HTMLOrSVGElement;
	label?: Component | string;
	color?: SvelteUIColor;
	variant?: TabsVariant;
	orientation?: 'horizontal' | 'vertical';
	tabKey?: string;
}

export interface TabStyleParams {}

export default createStyles((theme, {}: TabStyleParams) => {
	return {
		root: {},
		inner: {},
		icon: {},
		label: {}
	};
});
