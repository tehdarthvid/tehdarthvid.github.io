<script>
  export let gaID;
  export let git_hash;

  import * as site_data from "./stores/data.json";

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
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  main {
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

<main>
  <h1>
    <a href="/">{site_data.name}</a>
  </h1>
  <p>{site_data.welcome_msg}</p>

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

</main>
