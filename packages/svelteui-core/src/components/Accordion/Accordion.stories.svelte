<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Accordion } from './index';

	let value = 'typescript';
</script>

<Meta title="Components/Accordion" component={Accordion} />

<Template let:args>
	<Accordion {...args} defaultValue="typescript">
		<Accordion.Item value="typescript">
			<div slot="control">Typescript Based</div>
			Build type safe applications. All SvelteUI packages are built with TypeScript and support it by
			default. All components and functions export types, are documented, and give developers autocomplete
			features!
		</Accordion.Item>
		<Accordion.Item value="packed">
			<div slot="control">Feature packed</div>
			SvelteUI contains more than just components. With Actions, Transitions, and Utilities available
			to you, development will be fun and easy!
		</Accordion.Item>
		<Accordion.Item value="accessible">
			<div slot="control">Accessible and usable</div>
			All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
			ring. It will appear only when user navigates with keyboard.
		</Accordion.Item>
	</Accordion>
</Template>

<Story name="Accordion" id="accordionStory" />

<Story name="Multiple Tabs Open" id="accordionMultipleStory" args={{ multiple: true }} />

<Story name="Disabled Tabs" id="accordionDisabledStory">
	<Accordion defaultValue="typescript">
		<Accordion.Item value="typescript">
			<div slot="control">Typescript Based</div>
			Build type safe applications. All SvelteUI packages are built with TypeScript and support it by
			default. All components and functions export types, are documented, and give developers autocomplete
			features!
		</Accordion.Item>
		<Accordion.Item value="packed" disabled>
			<div slot="control">Feature packed</div>
			SvelteUI contains more than just components. With Actions, Transitions, and Utilities available
			to you, development will be fun and easy!
		</Accordion.Item>
		<Accordion.Item value="accessible">
			<div slot="control">Accessible and usable</div>
			All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
			ring. It will appear only when user navigates with keyboard.
		</Accordion.Item>
	</Accordion>
</Story>

<Story name="Multiple Tabs Open With Default" id="accordionMultipleDefaultStory">
	<Accordion multiple={true} defaultValue={['packed', 'accessible']}>
		<Accordion.Item value="typescript">
			<div slot="control">Typescript Based</div>
			Build type safe applications. All SvelteUI packages are built with TypeScript and support it by
			default. All components and functions export types, are documented, and give developers autocomplete
			features!
		</Accordion.Item>
		<Accordion.Item value="packed">
			<div slot="control">Feature packed</div>
			SvelteUI contains more than just components. With Actions, Transitions, and Utilities available
			to you, development will be fun and easy!
		</Accordion.Item>
		<Accordion.Item value="accessible">
			<div slot="control">Accessible and usable</div>
			All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
			ring. It will appear only when user navigates with keyboard.
		</Accordion.Item>
	</Accordion>
</Story>

<Story name="Controlled" id="accordionControlledStory">
	<Accordion {value} on:change={(e) => (value = e.detail)}>
		<Accordion.Item value="typescript">
			<div slot="control">Typescript Based</div>
			Build type safe applications. All SvelteUI packages are built with TypeScript and support it by
			default. All components and functions export types, are documented, and give developers autocomplete
			features!
		</Accordion.Item>
		<Accordion.Item value="packed">
			<div slot="control">Feature packed</div>
			SvelteUI contains more than just components. With Actions, Transitions, and Utilities available
			to you, development will be fun and easy!
		</Accordion.Item>
		<Accordion.Item value="accessible">
			<div slot="control">Accessible and usable</div>
			All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
			ring. It will appear only when user navigates with keyboard.
		</Accordion.Item>
	</Accordion>
</Story>
