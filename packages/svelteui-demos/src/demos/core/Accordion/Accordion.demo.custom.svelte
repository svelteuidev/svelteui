<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `<script>
  import { Accordion, Center, Flex, Stack, Title, Text } from '@svelteuidev/core';
	import { Face, HobbyKnife, Moon } from 'radix-icons-svelte';
<\/script>

<Accordion>
  <Accordion.Item value="buffy">
    {#snippet control()}
		<div>
			<Flex>
				<Center mr="lg">
					<HobbyKnife size={24} />
				</Center>
				<Stack>
					<Title order={4} color="blue">Buffy Summers</Title>
					<Text size="sm" color="gray">Main character and resident bad-ass.</Text>
				</Stack>
			</Flex>
		</div>
	{/snippet}
    Initially a reluctant hero who constantly wished for nothing more than a normal life, Buffy eventually grew to embrace her destiny. She was unique as a Slayer in many ways; she refused to sacrifice her ordinary life for her supernatural destiny, often operated as part of a team with her friends the Scooby Gang,
  </Accordion.Item>
  <Accordion.Item value="willow">
    {#snippet control()}
		<div>
			<Flex>
				<Center mr="lg">
					<Moon size={24} />
				</Center>
				<Stack>
					<Title order={4} color="blue">Willow Rosenberg</Title>
					<Text size="sm" color="gray">Computer nerd and witch, Buffy best friend.</Text>
				</Stack>
			</Flex>
		</div>
	{/snippet}
    Willow started out as a shy computer nerd, eventually developing her talents to become a powerful and assertive witch. Willow was quick to grasp basic spells and, with support from her girlfriend Tara, her powers blossomed even more rapidly.
  </Accordion.Item>
  <Accordion.Item value="xander">
    {#snippet control()}
		<div>
			<Flex>
				<Center mr="lg">
					<Face size={24} />
				</Center>
				<Stack>
					<Title order={4} color="blue">Xander Harris</Title>
					<Text size="sm" color="gray">Clown of the group and the real down to earth guy.</Text>
				</Stack>
			</Flex>
		</div>
	{/snippet}
    Being the only one of his group of friends to not possess any supernatural abilities, Xander was usually the one who saw beyond the supernatural. Besides this, he was known to be very humorous and sarcastic, especially in the face of danger.
  </Accordion.Item>
</Accordion>`;
	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import { Accordion, Center, Flex, Stack, Title, Text } from '@svelteuidev/core';
	import { Face, HobbyKnife, Moon } from 'radix-icons-svelte';
</script>

<Accordion>
	<Accordion.Item value="buffy">
		{#snippet control()}
			<div>
				<Flex>
					<Center mr="lg">
						<HobbyKnife size={24} />
					</Center>
					<Stack>
						<Title order={4} color="blue">Buffy Summers</Title>
						<Text size="sm" color="gray">Main character and resident bad-ass.</Text>
					</Stack>
				</Flex>
			</div>
		{/snippet}
		Initially a reluctant hero who constantly wished for nothing more than a normal life, Buffy eventually
		grew to embrace her destiny. She was unique as a Slayer in many ways; she refused to sacrifice her
		ordinary life for her supernatural destiny, often operated as part of a team with her friends the
		Scooby Gang,
	</Accordion.Item>
	<Accordion.Item value="willow">
		{#snippet control()}
			<div>
				<Flex>
					<Center mr="lg">
						<Moon size={24} />
					</Center>
					<Stack>
						<Title order={4} color="blue">Willow Rosenberg</Title>
						<Text size="sm" color="gray">Computer nerd and witch, Buffy best friend.</Text>
					</Stack>
				</Flex>
			</div>
		{/snippet}
		Willow started out as a shy computer nerd, eventually developing her talents to become a powerful
		and assertive witch. Willow was quick to grasp basic spells and, with support from her girlfriend
		Tara, her powers blossomed even more rapidly.
	</Accordion.Item>
	<Accordion.Item value="xander">
		{#snippet control()}
			<div>
				<Flex>
					<Center mr="lg">
						<Face size={24} />
					</Center>
					<Stack>
						<Title order={4} color="blue">Xander Harris</Title>
						<Text size="sm" color="gray">Clown of the group and the real down to earth guy.</Text>
					</Stack>
				</Flex>
			</div>
		{/snippet}
		Being the only one of his group of friends to not possess any supernatural abilities, Xander was
		usually the one who saw beyond the supernatural. Besides this, he was known to be very humorous and
		sarcastic, especially in the face of danger.
	</Accordion.Item>
</Accordion>
