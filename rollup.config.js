import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";

import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";

const production = !process.env.ROLLUP_WATCH;

/*
TODO: forRemoval: Current code reads from life, not URL. 
if (null == process.env.URL_RECENT_DECK) {
throw new Error("Missing environment variable `URL_RECENT_DECK`");
}
*/
if (null == process.env.GITHUB_SHA) {
  throw new Error("Missing environment variable `GITHUB_SHA`");
}
if (null == process.env.GA_TRACKING_ID) {
  throw new Error("Missing environment variable `GA_TRACKING_ID`");
}

// delete public/build so all artifacts will be freshly made
// holefully this will catch build problems by dirty artifacts in generated folders
cleanBuildFolder();

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      preventAssignment: true,
      ENV_GAID: JSON.stringify(process.env.GA_TRACKING_ID),
      ENV_GITHASH: JSON.stringify(process.env.GITHUB_SHA),
    }),
    json(),
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function cleanBuildFolder() {
  require("child_process").spawn("rm", ["-rf", "public/build"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
  });
}
