import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    gaID: ENV_GAID,
    git_hash: ENV_GITHASH,
  },
});

export default app;
