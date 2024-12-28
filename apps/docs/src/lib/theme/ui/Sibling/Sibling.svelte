<script lang="ts">
	import useStyles from './Sibling.styles';
	import { Anchor, Text } from '@svelteuidev/core';
	import { ArrowLeft, ArrowRight } from 'radix-icons-svelte';
	import { upperFirst } from '@svelteuidev/composables';
	import { base } from '$app/paths';

	interface Props {
		data?: any;
		override?: any;
		type?: string;
		class?: string;
	}

	let {
		data = {
			slug: '/',
			title: 'Title Here',
			package: 'Package Here'
		},
		override = {},
		type = 'next',
		class: className = ''
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles({ type }));
</script>

<Anchor
	underline={false}
	href="{base}{data.slug}"
	class={`${cx(
		getStyles({
			// @ts-ignore
			css: override
		}),
		{ next: type === 'next' },
		className
	)} sibling`}
>
	{#if type === 'prev'}
		<ArrowLeft size={22} />
	{/if}

	<div class={classes.body}>
		<Text
			size="lg"
			align={type === 'next' ? 'left' : 'right'}
			override={{ lineHeight: '$md' }}
			class={classes.text}
		>
			{type === 'next' ? 'Up next' : 'Go back'}
		</Text>
		<Text color="dimmed" size="sm" align={type === 'next' ? 'left' : 'right'}>
			{data.title} - {data.package || upperFirst(data.group)}
		</Text>
	</div>

	{#if type === 'next'}
		<ArrowRight size={22} />
	{/if}
</Anchor>
