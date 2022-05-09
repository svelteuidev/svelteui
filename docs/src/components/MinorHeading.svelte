<script lang="ts">
  import { current_page } from '@svelte-docs/get/routes';
  import { Stack, Text, Group, Center } from '@svelteuidev/core';
  import { Calendar } from 'radix-icons-svelte';
</script>

<Stack>
  <Stack override={{ mb: 20, h1: { mb: 0 } }} spacing="xs">
    <h1>{$current_page.meta.title}</h1>
  </Stack>
  {#if $current_page.meta?.date}
    <Group spacing={55}>
      <Text color="dimmed">Release Date</Text>
      <Text>
        <Center override={{ gap: '$4' }} inline>
          <Calendar />
          {$current_page.meta.date}
        </Center>
      </Text>
    </Group>
  {/if}
</Stack>

<hr />
