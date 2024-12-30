<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */
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

	interface Props {
		component: ConfiguratorDemoType['default'];
		previewBackground?: ConfiguratorDemoType['previewBackground'];
		previewMaxWidth?: ConfiguratorDemoType['previewMaxWidth'];
		codeTemplate?: ConfiguratorDemoConfiguration['codeTemplate'];
		configurator: ConfiguratorDemoConfiguration['configurator'];
		multiline?: ConfiguratorDemoConfiguration['multiline'];
		multilineEndNewLine?: ConfiguratorDemoConfiguration['multilineEndNewLine'];
		center?: ConfiguratorDemoConfiguration['center'];
		hideCode?: ConfiguratorDemoConfiguration['hideCode'];
	}

	let {
		component,
		previewBackground,
		previewMaxWidth,
		codeTemplate,
		configurator,
		multiline = false,
		multilineEndNewLine = true,
		center = true,
		hideCode = false
	}: Props = $props();

	const BREAKPOINT = 885;

	// Filter out control type which we use only for making typescript work as we wanted
	let demoControls: DemoControl[] = $derived(configurator.filter(isDemoControl));
	let data: Record<string, any> = $state({});
	let { children, ...componentProps }: Record<string, any> = $derived(
		getConditionalData(demoControls, data)
	);

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

	$effect.pre(() => {
		data = demoControls.reduce(dataReducer, {});
	});

	let propsCode = $derived(
		propsToString({
			props: demoControls,
			values: { children, ...componentProps },
			multiline,
			multilineEndNewLine
		})
	);
	let code = $derived(generateCode(codeTemplate, propsCode, children).trim());

	const SvelteComponent = $derived(component);
</script>

<div class={styles()}>
	<div class="preview">
		<div class="component">
			<div class="wrapper">
				<SvelteComponent props={componentProps}>{children}</SvelteComponent>
			</div>
		</div>
		<div class="controls">
			<ControlsRenderer value={data} controls={demoControls} onchange={onChange} />
			<!--			<button {data}> test </button>-->
			<!--			<button {data} />-->
			<!--			<button />-->
		</div>
	</div>
	{#if code && !hideCode}
		<div class="code">
			<Box>
				<Prism
					language="svelte"
					code={code.trim()}
					normalizeWhiteSpace
					size="sm"
					normalizeWhiteSpaceConfig={{
						'remove-trailing': true,
						'remove-indent': true,
						'left-trim': true,
						'right-trim': true,
						'break-lines': 1000,
						'remove-initial-line-feed': false,
						'tabs-to-spaces': 8,
						'spaces-to-tabs': 8
					}}
					override={{
						padding: '$8'
					}}
				/>
			</Box>
		</div>
	{/if}
</div>
