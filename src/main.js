import App from "./App.svelte";

if ("undefined" == typeof ENV_GAID) {
  console.log("Error Code 1.");
}

if ("undefined" == typeof ENV_GITHASH) {
  console.log("Error Code 1.");
}

const app = new App({
  target: document.body,
  props: {
    gaID: ENV_GAID,
    git_hash: ENV_GITHASH,
  },
});

export default app;
