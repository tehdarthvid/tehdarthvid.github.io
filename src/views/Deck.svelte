<script>
  import Card from "../components/Card.svelte";
  import { deck } from "../stores/deckStore.js";
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<div>
  {#if null != $deck}
    <h2>cache of interests</h2>
    <div class="container">
      {#each $deck as card}
        <Card {...card} />
      {/each}
    </div>
  {/if}
</div>
