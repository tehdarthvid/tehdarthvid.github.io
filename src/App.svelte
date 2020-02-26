<script>
  import Icon from "./components/icon.svelte";
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

  .wrapus {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<main>
  <h1>
    <a href="/">darthvid</a>
  </h1>
  <p>サイトへようこそ!</p>
  <h2>social</h2>
  <div class="wrapus">
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
  </div>

  <h2>projects</h2>
  <div class="wrapus">
    <div>
      【
      <a href="https://dna.darthvid.com">influences</a>
      】
    </div>
  </div>

  <h2>dabbles-in</h2>
  <div class="wrapus">
    <Icon
      title="Node.js"
      itemURL="https://nodejs.org/"
      imgURL="/assets/images/nodejs.svg" />
    <Icon
      title="Amazon Web Services"
      itemURL="https://aws.amazon.com/"
      imgURL="/assets/images/aws.png" />
    <Icon
      title="C"
      itemURL="http://csapp.cs.cmu.edu/3e/docs/chistory.html"
      imgURL="/assets/images/clang.jpg" />
  </div>
  <div class="wrapus">
    <Icon
      title="Google Cloud Platform"
      itemURL="https://cloud.google.com/"
      imgURL="/assets/images/gcp.png" />
    <Icon
      title="Svelte"
      itemURL="https://svelte.dev/"
      imgURL="/assets/images/svelte.png" />
    <Icon
      title="Vue.js"
      itemURL="https://vuejs.org/"
      imgURL="/assets/images/vue.png" />
  </div>
  <div class="wrapus">
    <Icon
      title="fish"
      itemURL="https://fishshell.com/"
      imgURL="/assets/images/fish.png" />
    <Icon
      title="kitty"
      itemURL="https://sw.kovidgoyal.net/kitty/"
      imgURL="/assets/images/kitty.png" />
    <Icon
      title="Visual Studio Code"
      itemURL="https://code.visualstudio.com/"
      imgURL="/assets/images/vscode.png" />
  </div>
  <div class="wrapus">
    <Icon
      title="GitHub Actions"
      itemURL="https://github.com/features/actions"
      imgURL="/assets/images/gh-actions.svg" />
    <Icon
      title="GitLab CI/CD"
      itemURL="https://docs.gitlab.com/ee/ci/introduction/"
      imgURL="/assets/images/gl-cicd.png" />
  </div>
  <div class="wrapus">
    <Icon
      title="Go"
      itemURL="https://golang.org/"
      imgURL="/assets/images/go-gopher.png" />
    <Icon
      title="Rust"
      itemURL="https://www.rust-lang.org/"
      imgURL="/assets/images/rust-ferris.svg" />
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
