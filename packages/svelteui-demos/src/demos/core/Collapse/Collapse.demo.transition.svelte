<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button, Collapse } from '@svelteuidev/core';

  let open = $state(false);
<\/script>

<Button onclick={() => open = !open}>Open</Button>
<Collapse {open} transitionDuration={1000}>
  Avatar: The Last Airbender, also known as Avatar: The Legend of Aang in some PAL regions, is an Emmy award-winning American animated television series that aired for three seasons on Nickelodeon and the Nicktoons Network. The series was created and produced by Michael Dante DiMartino and Bryan Konietzko, who served as executive producers along with Aaron Ehasz. Avatar is set in an Asian-influenced world of martial arts and elemental manipulation. The show drew on elements from East Asian, South Asian, and Western culture, making it a mixture of what were previously traditionally separate categories of Japanese anime and Western domestic cartoons.
</Collapse>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Collapse, Stack } from '@svelteuidev/core';

	let open = $state(false);
</script>

<Stack align="center">
	<Button onclick={() => (open = !open)}>Open</Button>
	<Collapse {open} transitionDuration={1000}>
		Avatar: The Last Airbender, also known as Avatar: The Legend of Aang in some PAL regions, is an
		Emmy award-winning American animated television series that aired for three seasons on
		Nickelodeon and the Nicktoons Network. The series was created and produced by Michael Dante
		DiMartino and Bryan Konietzko, who served as executive producers along with Aaron Ehasz. Avatar
		is set in an Asian-influenced world of martial arts and elemental manipulation. The show drew on
		elements from East Asian, South Asian, and Western culture, making it a mixture of what were
		previously traditionally separate categories of Japanese anime and Western domestic cartoons.
	</Collapse>
</Stack>
