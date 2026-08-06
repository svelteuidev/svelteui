<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
  <script>
    import { Divider } from '@svelteuidev/core';
  <\/script>

  <Divider size="xs" />
  <Divider size="sm" />
  <Divider size="md" />
  <Divider size="lg" />
  <Divider size="xl" />
  <Divider size={10} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Divider } from '@svelteuidev/core';
</script>

<Divider size="xs" />

<Divider size="sm" />

<Divider size="md" />

<Divider size="lg" />

<Divider size="xl" />

<Divider size={10} />
