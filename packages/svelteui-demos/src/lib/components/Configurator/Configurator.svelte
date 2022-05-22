<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import type {
		ConfiguratorDemoType,
		ConfiguratorDemoConfiguration,
		DemoControl,
		ConfiguratorDemoControl
	} from '$lib/types';
	import { ControlsRenderer } from './controls';
	import { propsToString, isEnabled } from '../../utils';
	import { css, dark } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';

	export let component: ConfiguratorDemoType['default'];
	export let previewBackground: ConfiguratorDemoType['previewBackground'];
	export let previewMaxWidth: ConfiguratorDemoType['previewMaxWidth'];
	export let codeTemplate: ConfiguratorDemoConfiguration['codeTemplate'];
	export let configurator: ConfiguratorDemoConfiguration['configurator'];
	export let multiline: ConfiguratorDemoConfiguration['multiline'] = false;
	export let multilineEndNewLine: ConfiguratorDemoConfiguration['multilineEndNewLine'] = true;
	export let center: ConfiguratorDemoConfiguration['center'] = true;

	const BREAKPOINT = 885;

	let demoControls: DemoControl[] = [];
	let data: Record<string, any> = {};
	let conditionalData: Record<string, any> = {};
	let children, componentProps;

	// Filter out control type which we use only for making typescript work as we wanted
	$: demoControls = configurator.filter(isDemoControl);
	$: data = demoControls.reduce(dataReducer, {});

	// Contain data which match conditions
	$: conditionalData = getConditionalData(demoControls, data);

	function getConditionalData(
		demoControls: DemoControl[],
		data: Record<string, any>,
		isControlEnabled?: boolean
	): Record<string, any> {
		function conditionalDataReducer(acc, control: DemoControl) {
			const { name, defaultValue, type, controls } = control;
			const enabled = isControlEnabled !== undefined ? isControlEnabled : isEnabled(control, data);

			if (type !== 'composite') {
				acc[name] = enabled ? data[name] : defaultValue;
			} else {
				acc[name] = getConditionalData(controls, data[name] ?? {}, enabled);
			}

			return acc;
		}

		return demoControls.reduce(conditionalDataReducer, {});
	}

	$: ({ children, ...componentProps } = conditionalData);
	$: propsCode = propsToString({
		props: demoControls,
		values: conditionalData,
		multiline,
		multilineEndNewLine
	});

	$: code = codeTemplate
		? codeTemplate(propsCode.length > 0 ? ` ${propsCode}` : propsCode, children).trim()
		: '';

	function isDemoControl(control: ConfiguratorDemoControl): control is DemoControl {
		return control && control.type !== '_DO_NOT_USE_';
	}

	function dataReducer(acc, { name, initialValue, type, controls }) {
		acc[name] = type !== 'composite' ? initialValue : controls.reduce(dataReducer, {});
		return acc;
	}

	function onChange(newData) {
		data = newData;
	}

	const mobileBreakpoint = `@media (max-width: ${BREAKPOINT}px)`;

	const styles = css({
		border: '1px solid $gray200',
		borderRadius: '$sm',

		'.preview': {
			display: 'flex',

			[mobileBreakpoint]: {
				flexDirection: 'column'
			},

			'& > .component': {
				background: previewBackground ? previewBackground.light : undefined,
				borderTopLeftRadius: '$sm',
				flex: 1,
				display: 'flex',
				padding: '$8',
				flexDirection: 'column',
				justifyContent: center ? 'center' : 'flex-start',

				[mobileBreakpoint]: {
					borderTopRightRadius: '$sm'
				},

				'& > .wrapper': {
					width: '100%',
					maxWidth: previewMaxWidth,
					margin: '0 auto'
				}
			}
		},

		'.controls': {
			boxSizing: 'border-box',
			width: 270,
			padding: '$8',
			borderLeft: '1px solid $gray200',

			[mobileBreakpoint]: {
				borderLeft: 'none',
				borderTop: '1px solid $gray200',
				width: 'auto'
			}
		},

		'.control + .control': {
			marginTop: '$8'
		},

		'.code': {
			borderTop: '1px solid $gray200',
			overflow: 'hidden',
			borderBottomRightRadius: '$sm',
			borderBottomLeftRadius: '$sm'
		},

		[`.${dark} &`]: {
			borderColor: '$gray800',

			'.preview > .component': {
				background: previewBackground ? previewBackground.dark : undefined
			},

			'.controls, .code': {
				borderColor: '$gray800'
			}
		}
	});
</script>

<div class={styles()}>
	<div class="preview">
		<div class="component">
			<div class="wrapper">
				<svelte:component this={component} props={componentProps}>{children}</svelte:component>
			</div>
		</div>
		<div class="controls">
			<ControlsRenderer value={data} controls={demoControls} {onChange} />
		</div>
	</div>
	{#if code}
		<div class="code">
			<Prism
				language="svelte"
				{code}
				override={{
					padding: '$8'
				}}
			/>
		</div>
	{/if}
</div>
