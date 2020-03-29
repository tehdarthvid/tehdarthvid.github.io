<script>
  export let gaID;
  export let git_hash;

  import * as json_data from "./stores/data.json";
  var site_data;
  try {
    site_data = json_data;
    if (null == site_data) {
      site_data = {};
    }
  } catch {
    site_data = {};
  }

  import Icon from "./components/icon.svelte";
  import LinkTo from "./components/linkto.svelte";
  import Deck from "./views/Deck.svelte";

  import { googleAnalytics } from "./utils/google-analytics.js";
  if (gaID) googleAnalytics(gaID);

  var strGitHash = git_hash;
  strGitHash = strGitHash.slice(0, 7);
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lexend+Deca|Noto+Sans+JP|Source+Code+Pro|Ubuntu&display=swap");
  header,
  main,
  footer {
    text-align: center;
  }
  #build {
    font-size: 0.38195em;
  }

  .wrapus {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<header>
  {#if null != site_data.name}
    <h1>
      <a href="/">{site_data.name}</a>
    </h1>
  {/if}
  {#if null != site_data.welcome_msg}
    <p>{site_data.welcome_msg}</p>
  {/if}
</header>

<main>
  {#if null != site_data.links}
    <h2>is at</h2>
    <div class="wrapus">
      {#each site_data.links as linkData}
        <LinkTo {...linkData} />
      {/each}
    </div>
  {/if}

  <Deck />
  <!--
    <Deck />
  -->

  {#if null != site_data.projects}
    <h2>pet projects</h2>
    <div class="wrapus">
      {#each site_data.projects as linkData}
        <LinkTo {...linkData} />
      {/each}
    </div>
  {/if}

  {#if null != site_data.dabbles}
    <h2>dabbles in</h2>
    <div class="wrapus">
      {#each site_data.dabbles as linkData}
        <Icon {...linkData} />
      {/each}
    </div>
  {/if}
</main>

<footer>
  <div id="build">
    &nbsp;
    <p>
      <a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">
        source
      </a>
    </p>
    <a
      href="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/{git_hash}">
      build {strGitHash}
    </a>
  </div>
</footer>
