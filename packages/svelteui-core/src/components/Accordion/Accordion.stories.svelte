<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Accordion } from './index';
</script>

<Meta title="Components/Accordion" component={Accordion} />

<Template let:args>
	<Accordion {...args} defaultValue="typescript">
		<Accordion.Item value="typescript">
      <Accordion.Control>
        Typescript Based
      </Accordion.Control>
      Build type safe applications. All SvelteUI packages are built with TypeScript and support it by default. All components and functions export types, are documented, and give developers autocomplete features!
    </Accordion.Item>
		<Accordion.Item value="packed">
      <Accordion.Control>
        Feature packed
      </Accordion.Control>
      SvelteUI contains more than just components. With Actions, Transitions, and Utilities available to you, development will be fun and easy!
    </Accordion.Item>
		<Accordion.Item value="sccessible">
      <Accordion.Control>
        Accessible and usable
      </Accordion.Control>
      All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus ring. It will appear only when user navigates with keyboard.
    </Accordion.Item>
	</Accordion>
</Template>

<Story name="Accordion" id="accordionStory" />
