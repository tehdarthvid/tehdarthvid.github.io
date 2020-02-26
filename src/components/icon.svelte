<script>
  export let title;
  export let itemURL;
  export let imgURL;
</script>

<style scoped>
  .icon {
    height: 8vh;
  }
</style>

<div class="icon">
  <a href={itemURL} {title} target="_blank">
    <img class="icon" alt={title} src={imgURL} />
  </a>
</div>
