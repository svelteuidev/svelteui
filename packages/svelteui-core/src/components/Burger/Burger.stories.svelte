<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Burger } from './index';
	import { Button } from '../Button';

	let opened = $state(false);
</script>

<Meta title="Components/Burger" component={Burger} />

<Template >
	{#snippet children({ args })}
		<Burger {opened} on:click={() => (opened = !opened)} {...args} />
	{/snippet}
</Template>

<Story name="Burger" id="burgerStory" />

<Story name="Burger inside a button" id="burgerButtonStory">
	<Button ripple variant="default" color="black" on:click={() => (opened = !opened)}>
		<Burger {opened} size="sm" />
		Menu
	</Button>
</Story>
