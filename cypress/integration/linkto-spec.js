import LinkTo from "../../src/components/linkto.svelte";
import mount from "cypress-svelte-unit-test";

/* eslint-env mocha */
describe("test LinkTo", () => {
  beforeEach(() => {
    //mount(HelloWorld);
    mount(LinkTo, {
      props: {
        title: "Test Title",
        itemURL: "https://example.com/1.png"
      }
    });
  });

  it("shows darthvid", () => {
    cy.contains("Test Title");
  });
});
