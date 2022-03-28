# Test language for debugging

## How this repo is structured

The language package is compiled by rollup, which creates `/dist/index.js`.

The examples are self-contained and use Vite/React/TS.

.npmignore is for keeping the installed package lean.

## Viewing examples

1. Start the examples with `yarn dev`.
2. Navigate to any of the examples e.g. `http://localhost:3000/examples/lang-test/index.html`.

## Using this package

Declare this package as a dependency in your `package.json`, using GitHub URL as the source

```.json
"dependencies" {
  "geddski/lang-test": "@geddski/lang-test"
}
```

Then `yarn install` or `npm install`.

Import the test language function and call it when you setup your CodeMirror instance:

```js
import { test } from "geddski/lang-test";

let view = new EditorView({
  state: EditorState.create({
    extensions: [
      test()
    ]
  }),
  parent: yourDomElementHere
});
```

## Running the tests

Run `yarn test` to start the test running in watch mode.
Run `yarn test:ci` to run them once.