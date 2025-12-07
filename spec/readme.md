spec.txt is a text version of https://github.github.com/gfm/

File copied from https://github.com/ikatyang/tree-sitter-markdown/blob/master/gfm-spec/spec.txt

According to the update script https://github.com/ikatyang/tree-sitter-markdown/blob/master/gfm-spec/update.sh, it seems downloaded from https://github.github.com/gfm/spec.txt, but currently the link is dead.

The [test script](https://github.com/ikatyang/tree-sitter-markdown/blob/master/scripts/update-spec-corpus.js) contains following code

```
const fs = require("fs");

writeTest("./corpus/spec.txt", getSpecExamples("./gfm-spec/spec.txt"));

function getSpecExamples(specFilename) {
  const specText = fs.readFileSync(specFilename, "utf8");
  return specText
    .match(
      /```````````````````````````````` example([^]+?)````````````````````````````````/g,
    )
    .map(codeBlock =>
      codeBlock
        .split("\n")
        .slice(1, -1)
        .join("\n")
        .split(/^\.$/m)[0]
        .replace(/→/g, "\t"),
    );
}

function writeTest(filename, specExamples) {
  fs.writeFileSync(
    filename,
    specExamples
      .map((specExample, i) =>
        [
          "=".repeat(80),
          `Example ${i + 1} - https://github.github.com/gfm/#example-${i + 1}`,
          "=".repeat(80),
          specExample,
          "-".repeat(80),
          "",
          "()",
          "",
        ].join("\n"),
      )
      .join("\n"),
  );
}
```