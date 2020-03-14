<script>
  export let title;
  export let itemURL;
  export let imgURL;
</script>

<style scoped>
  .icon {
    height: 8vh;
  }
  .icon:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, rgb(66, 99, 66) 0 0 0 1px;
  }
</style>

<div class="icon">
  <a href={itemURL} {title} target="_blank">
    <img class="icon" alt={title} src={imgURL} />
  </a>
</div>
