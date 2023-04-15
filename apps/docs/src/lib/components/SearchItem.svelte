<script lang="ts">
  import { Paper, Group } from "@svelteuidev/core"
  type SearchType = {
    title: String,
    link: String,
    section?: String
  }
  export let search: SearchType
</script>

<Paper class="searchTerm" withBorder>
  <Group position="apart">
    <div>
      <p class="searchItemTitle">{search.title}</p>
      {#if search.section}
        <p class="searchItemDescription">{search.section}</p>
      {/if}
    </div>
    <Group position="center" direction="column" override={{ color: "#f5f5f5" }}>
      <p class="searchLink">{search.link}</p>
    </Group>
  </Group>
</Paper>
