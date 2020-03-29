import "./App.css";

import LinkTo from "./components/LinkTo";

console.log("hello");
console.log(process.env);

const git_hash = process.env.SOLID_APP_GITHUB_SHA;
const strGitHash = git_hash.slice(0, 7);
const strCommitURL =
  "https://github.com/tehdarthvid/tehdarthvid.github.io/commit/" + git_hash;

import * as json_data from "./data/site.json";
let site_data = {};
if ("object" == typeof json_data) {
  site_data = json_data.default;
  console.log("obj");
}

let title = () => {
  if ("string" != typeof site_data.name) {
    return;
  }
  return (
    <h1>
      <a href="/">{site_data.name}</a>
    </h1>
  );
};

let welcome_msg = () => {
  if ("string" != typeof site_data.welcome_msg) {
    return;
  }
  return <p>{site_data.welcome_msg}</p>;
};

let links_group = (title, links_list) => {
  if ("object" != typeof links_list) {
    return;
  }
  const listItems = links_list.map(itemData => <LinkTo {...itemData} />);
  return (
    <>
      <h2>{title}</h2>
      <div class="wrapus">{listItems}</div>
    </>
  );
};

function App() {
  return (
    <div class="App">
      {title}
      {welcome_msg}
      {links_group("is at", site_data.links)}
      {links_group("pet projects", site_data.projects)}

      <div id="build">
        &nbsp;
        <p>
          <a href="https://github.com/tehdarthvid/tehdarthvid.github.io/tree/dev">
            page source
          </a>
        </p>
        <a href={strCommitURL}>build {strGitHash}</a>
      </div>
    </div>
  );
}

export default App;

/*
<header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://github.com/ryansolid/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      */
