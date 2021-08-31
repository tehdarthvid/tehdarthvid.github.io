import App from "./App.svelte";

let envGAID = "err1";
if ("undefined" == typeof ENV_GAID) {
  console.log("Error Code 1.");
} else {
  envGAID = ENV_GAID;
}

let envGITHASH = "err2";
if ("undefined" == typeof ENV_GITHASH) {
  console.log("Error Code 2.");
} else {
  envGITHASH = ENV_GITHASH;
}

const app = new App({
  target: document.body,
  props: {
    gaID: envGAID,
    git_hash: envGITHASH,
  },
});

export default app;
