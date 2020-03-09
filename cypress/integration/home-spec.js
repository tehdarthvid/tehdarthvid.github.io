//import App from "../../src/components/linkto.svelte";
import App from "../../src/App.svelte";
import mount from "cypress-svelte-unit-test";
//import mount from "../utils";

/* eslint-env mocha */
describe("test LinkTo", () => {
  beforeEach(() => {
    //mount(HelloWorld);
    mount(App, {
      props: {
        gaID: "xx-1234567-0",
        git_hash: "0123456789012345678901234567890123456789"
      }
    });
  });

  it("shows darthvid", () => {
    cy.contains("h1", "darthvid");
  });
});
