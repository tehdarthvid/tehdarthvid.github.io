<script>
  import { googleAnalytics } from "./utils/google-analytics.js";
  if (process.env.gaID) googleAnalytics(process.env.gaID);

  var strGitHash = process.env.git_hash;
  strGitHash = strGitHash.slice(0, 7);
  //console.log(strHash);
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
</style>

<main>
  <h1>
    <a href="/">darthvid</a>
  </h1>
  <p>サイトへようこそ!</p>
  <h2>social</h2>
  <div>
    【
    <a href="https://twitter.com/darthvid">Twitter</a>
    】
  </div>
  <div>
    【
    <a href="https://github.com/tehdarthvid">GitHub</a>
    】
  </div>
  <div>
    【
    <a href="https://www.linkedin.com/in/darthvid/">LinkedIn</a>
    】
  </div>
  <h2>projects</h2>
  <div>
    【
    <a href="https://dna.darthvid.com">influences</a>
    】
  </div>

  <div id="build">
    &nbsp;
    <p>

      <a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">
        source
      </a>

    </p>
    <a
      href="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/{process.env.git_hash}">
      build {strGitHash}
    </a>

  </div>

</main>
