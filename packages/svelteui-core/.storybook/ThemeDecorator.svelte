<script lang='ts'>
  import { onMount } from 'svelte';
  import { SvelteUIProvider } from '@svelteuidev/core';
  import addons from '@storybook/addons';
  import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

  let channel;
  let theme = 'light';

  onMount(() => {
    channel = addons.getChannel();
    channel.on(DARK_MODE_EVENT_NAME, setTheme);
  })

  function setTheme(isDark) {
    theme = isDark ? 'dark' : 'light'
  }
</script>

<SvelteUIProvider themeObserver={theme} withNormalizeCSS withGlobalStyles>
    <slot />
</SvelteUIProvider>
