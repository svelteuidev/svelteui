<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Burger } from './index';
	import { Button } from '../Button';

	let opened = false;
</script>

<Meta title="Components/Burger" component={Burger} />

<Template let:args>
	<Burger {opened} on:click={() => (opened = !opened)} {...args} />
</Template>

<Story name="Burger" id="burgerStory" />

<Story name="Burger inside a button" id="burgerButtonStory">
	<Button ripple variant="default" color="black" on:click={() => (opened = !opened)}>
		<Burger {opened} size="sm" />
		Menu
	</Button>
</Story>
