<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { Container } from '@svelteuidev/core'
    <\/script>

    <Container override={{bc: 'AliceBlue'}}>
        Default container
    </Container>

    <Container size="xs" override={{px: 'xs', bc: 'AliceBlue'}}>
        xs container with xs horizontal padding
    </Container>

    <Container size={200} override={{px: 0, bc: 'AliceBlue'}}>
        200px container with 0px horizontal padding
    </Container>
    
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { theme, Container } from '@svelteuidev/core';

	const color = theme.colors['blue50'].value;
</script>

<Container override={{ backgroundColor: color, height: 50 }}>Default container</Container>

<Container size="xs" override={{ backgroundColor: color, height: 50, px: '$sm', mt: 20 }} mt={20}>
	xs container with xs horizontal padding
</Container>

<Container size={200} override={{ backgroundColor: color, height: 50, px: 0, mt: 20 }}>
	200px container with 0px horizontal padding
</Container>
