<script>
	import { features } from '../../data';
	import { Title, Text, SimpleGrid, ThemeIcon, Center, Stack, Paper } from '@svelteuidev/core';
  import { fly } from "svelte/transition"
  import { onMount } from "svelte"
  let featuresVisible = false

  onMount(() => {
    const wrapper = document.querySelector("#wrapper")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          featuresVisible = true
        }
      })
    }, {
      threshold: 0.5
    })
    observer.observe(wrapper)
  })

</script>

<div id="wrapper">
  {#if featuresVisible}
    <SimpleGrid
      breakpoints={[
        { minWidth: 1024, cols: 3, spacing: 'md' },
        { minWidth: 768, cols: 2, spacing: 'sm' },
        { minWidth: 640, cols: 1, spacing: 'sm' }
      ]}
    >
      {#each features as { description, icon, title }, i}
        <div in:fly="{{ y: 200, duration: (i + 1) * 500 }}" style="height: 100%">
          <Paper shadow="xl">
            <Stack>
              <Center override={{ jc: 'start', gap: '$10' }} inline>
                <ThemeIcon variant="gradient" size="xl">
                  <svelte:component this={icon} size={25} />
                </ThemeIcon>
                <Title order={3} weight="extrabold">{title}</Title>
              </Center>
              <Text size="lg" override={{ lineHeight: '$md' }}>{description}</Text>
            </Stack>
          </Paper>
        </div>
      {/each}
    </SimpleGrid>
  {/if}
</div>
