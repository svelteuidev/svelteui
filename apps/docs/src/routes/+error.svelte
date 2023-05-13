<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Error</title>
</svelte:head>

<h1>Page not found!</h1>

<a href="{base}/">Go to start page</a>

<style>
    h1, a {
      text-align:center
    }
    h1 {
      color: var(--svelteui-colors-primary)
    }
</style>
