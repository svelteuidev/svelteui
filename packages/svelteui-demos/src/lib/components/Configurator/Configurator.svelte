<script lang="ts">
	import type {
		ConfiguratorDemoType,
		ConfiguratorDemoConfiguration,
		DemoControl,
		ConfiguratorDemoControl
	} from '$lib/types';
	import { controls as controlsComponents } from './controls';
	import { propsToString, upperFirst } from '../../utils';
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
	let children, componentProps, controls;

	// Filter out control type which we use only for make typescript work as we wanted
	$: demoControls = configurator.filter(isDemoControl);

	$: data = demoControls.reduce((acc, prop) => {
		acc[prop.name] = prop.initialValue;
		return acc;
	}, {});
	$: ({ children, ...componentProps } = data);
	$: propsCode = propsToString({
		props: demoControls,
		values: data,
		multiline,
		multilineEndNewLine
	});

	$: code = codeTemplate
		? codeTemplate(propsCode.length > 0 ? ` ${propsCode}` : propsCode, children).trim()
		: '';

	$: controls = demoControls.map((control) => {
		const { type, label, name, initialValue, defaultValue, ...props } = control;

		return {
			component: controlsComponents[type],
			label: upperFirst(control.label || control.name),
			value: data[name],
			onChange(e) {
				const value = e.currentTarget ? e.currentTarget.value : e.detail;
				changeData(name, value);
			},
			props
		};
	});

	function changeData(name: string, value: any) {
		data = { ...data, [name]: value };
	}

	function isDemoControl(control: ConfiguratorDemoControl): control is DemoControl {
		return control && control.type !== '_DO_NOT_USE_';
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
			{#each controls as { component, label, value, props, onChange }, i}
				<!-- TODO: remove condition when all controls will be done -->
				{#if component}
					<div class="control">
						<svelte:component this={component} {label} {value} {...props} on:change={onChange} />
					</div>
				{/if}
			{/each}
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
