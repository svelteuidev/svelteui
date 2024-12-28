<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Skeleton } from '@svelteuidev/core';

  let loading = false;
<\/script>

<Skeleton visible={loading}>
    Lorem ipsum dolor sit amet...
</Skeleton>
<Button on:click={() => (loading = !loading)}>
    Toggle Skeleton
</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Skeleton, Stack } from '@svelteuidev/core';

	let loading = $state(true);
</script>

<Stack align="center">
	<Skeleton visible={loading}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam
		optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur
		aperiam magnam debitis facere odio? Laborum fuga quam voluptas aut pariatur delectus repudiandae
		commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero
		molestias similique nemo eum! Dolore maxime voluptate inventore atque.
	</Skeleton>
	<Button on:click={() => (loading = !loading)}>Toggle Skeleton</Button>
</Stack>
