import {parser} from "./syntax.grammar";
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language";
import {styleTags, tags} from "@codemirror/highlight";

export const testLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        String: tags.string
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  }
})

export function test() {
  return new LanguageSupport(testLanguage)
}
