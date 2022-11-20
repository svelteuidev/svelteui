<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { Group } from '../Group';
	import { Badge } from './index';
</script>

<Meta title="Components/Badge" component={Badge} />

<Template let:args>
    <Badge {...args}>Hello</Badge>
</Template>

<Story name="Badge" id="badge" />

<Story name="Gradient" parameters={{ controls:{ exclude:/.*/g} }}>
	<Group>
		<Badge variant='gradient'>Hello</Badge>
        <Badge variant='gradient' gradient={{ from: 'green', to: 'yellow', deg:90 }}>Hello</Badge>
	</Group>
</Story>
