<script>
	import { Badge, Center, Title, Image } from '@svelteuidev/core';
	import { mobile } from 'components';
	import { page } from '../stores';

	const override = {
		gap: '0.5rem'
	};
</script>

<a style="text-decoration: none;" href="/">
	<Center {override} inline>
		{#if $mobile}
			<Image width={40} src="static/logo.png" alt="Logo" />
		{:else}
			<div style="display: flex;">
				<Title order={2} inline>Svelte</Title>
				<Title order={2} inline color="blue">UI</Title>
			</div>
		{/if}
		<Badge override={{ display: `${$mobile ? 'none' : 'inline-block'}` }} variant="outline">
			Beta
		</Badge>
	</Center>
</a>
