<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Skeleton } from '@svelteuidev/core';
<\/script>

<Skeleton height={50} circle mb="xl" override={{ marginBottom: '24px' }} ${props} /> 
<Skeleton height={8} radius="xl" ${props} />
<Skeleton height={8} radius="xl" override={{ marginTop: '8px' }} ${props} />
<Skeleton height={8} width="70%" radius="xl" override={{ marginTop: '8px' }} ${props} />
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [{ name: 'animate', type: 'boolean', initialValue: true, defaultValue: true }]
	};
</script>

<script lang="ts">
	import type { SkeletonStyles } from '@svelteuidev/core';
	import { Skeleton } from '@svelteuidev/core';

	export let props: SkeletonStyles.SkeletonProps = {};
</script>

<Skeleton height={50} circle mb="xl" override={{ marginBottom: '24px' }} {...props} />
<Skeleton height={8} radius="xl" {...props} />
<Skeleton height={8} radius="xl" override={{ marginTop: '8px' }} {...props} />
<Skeleton height={8} width="70%" radius="xl" override={{ marginTop: '8px' }} {...props} />
