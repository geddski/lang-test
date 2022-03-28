import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import stripIndent from 'strip-indent';
import {tags, HighlightStyle} from "@codemirror/highlight";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { test } from "../../dist/index";
import { oneDark } from "@codemirror/theme-one-dark";

const startingCode = stripIndent(`
  true "true"
`);

const myHighlightStyle = HighlightStyle.define([
  {tag: tags.string, color: "#fe9f9b"}
]);

function Example() {

  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewRef.current) {
      return;
    }

    let view = new EditorView({
      state: EditorState.create({
        doc: startingCode,
        extensions: [
          basicSetup,
          test(),
          myHighlightStyle,
          oneDark
        ]
      }),
      parent: viewRef.current
    });
  }, []);

  return <div ref={viewRef} />
}

ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('root')
);