<script>
	import useStyles from './Sibling.styles';
	import { Anchor, Text } from '@svelteuidev/core';
	import { ArrowLeft, ArrowRight } from 'radix-icons-svelte';
	import { upperFirst } from '@svelteuidev/composables';

	export let data = {
			slug: '/',
			title: 'Title Here',
			package: 'Package Here'
		},
		override = {},
		type = 'next',
		className = '';
	export { className as class };

	$: ({ cx, classes, getStyles } = useStyles({ type }));
</script>

<Anchor
	underline={false}
	href={data.slug}
	class={cx(
		getStyles({
			// @ts-ignore
			css: override
		}),
		{ next: type === 'next' },
		className
	)}
>
	{#if type === 'prev'}
		<ArrowLeft size={22} />
	{/if}

	<div class={classes.body}>
		<Text size="lg" align={type === 'next' ? 'left' : 'right'} override={{ lineHeight: '$md' }}>
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
