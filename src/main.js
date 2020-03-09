import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    gaID: process.env.gaID,
    git_hash: process.env.git_hash
  }
});

export default app;
