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
	import { css, dark, Box } from '@svelteuidev/core';
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

	$: code = generateCode(codeTemplate, propsCode, children).trim();

	function isDemoControl(control: ConfiguratorDemoControl): control is DemoControl {
		return control && control.type !== '_DO_NOT_USE_';
	}

	function dataReducer(acc, { name, initialValue, type, controls }) {
		acc[name] = type !== 'composite' ? initialValue : controls.reduce(dataReducer, {});
		return acc;
	}

	function onChange(event) {
		data = event.detail;
	}

	function generateCode(
		codeTemplate: ConfiguratorDemoConfiguration['codeTemplate'],
		propsCode: string,
		children?: string
	): string {
		if (!codeTemplate) {
			return '';
		}

		// add space before props when they are set
		const preSpace = !multiline && propsCode.length > 0 ? ' ' : '';
		let postSpace = '';

		// add space before '/>'
		if (!children) {
			if (!multiline) {
				postSpace = ' ';
			} else {
				if (!propsCode.length && multilineEndNewLine) {
					postSpace = ' ';
				}
			}
		}

		const props = `${preSpace}${propsCode}${postSpace}`;

		if (typeof codeTemplate === 'function') {
			// replace used for fix excess trailing space when children didn't set and codeTemplate still has children
			return codeTemplate(props, children).replace(/(<.+)( >)/, (match, p1) => `${p1}>`);
		}

		const { component, from } = codeTemplate;

		if (children) {
			return `
<script>
  import { ${component} } from '${from}';
<\/script>

<${component}${props}>
  ${children}
</${component}>
`;
		}

		return `
<script>
  import { ${component} } from '${from}';
<\/script>

<${component}${props}/>
`;
	}

	const mobileBreakpoint = `@media (max-width: ${BREAKPOINT}px)`;

	const styles = css({
		border: '1px solid $gray200',
		borderRadius: '$sm',

		'& .preview': {
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

		'& .preview > .controls': {
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

		'& .preview > .controls > .control + .control': {
			marginTop: '$8'
		},

		'& .code': {
			borderTop: '1px solid $gray200',
			overflow: 'hidden',
			borderBottomRightRadius: '$sm',
			borderBottomLeftRadius: '$sm'
		},

		[`.${dark} &`]: {
			borderColor: '$gray800',

			'& .preview > .component': {
				background: previewBackground ? previewBackground.dark : undefined
			},

			'& .preview > .controls, .code': {
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
			<ControlsRenderer value={data} controls={demoControls} on:change={onChange} />
			<!--			<button {data}> test </button>-->
			<!--			<button {data} />-->
			<!--			<button />-->
		</div>
	</div>
	{#if code}
		<div class="code">
			<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
				<Prism
					language="svelte"
					{code}
					size="sm"
					normalizeWhiteSpaceConfig={{
						'remove-trailing': true,
						'remove-indent': true,
						'left-trim': true,
						'right-trim': true,
						'break-lines': 140,
						'remove-initial-line-feed': false,
						'tabs-to-spaces': 4,
						'spaces-to-tabs': 4
					}}
					override={{
						padding: '$8'
					}}
				/>
			</Box>
		</div>
	{/if}
</div>
