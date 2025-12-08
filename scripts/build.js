import assert from 'node:assert'
import fs from 'node:fs/promises'
import {inspect} from 'node:util'
import * as cheerio from 'cheerio'
import {outdent} from 'outdent'
import writePrettierFile from 'write-prettier-file'
import {downloadText, writeTextFile} from './utilities.js'

const SPEC_URL = new URL('https://github.github.com/gfm/')
const CACHE_DIRECTORY = new URL('../.cache/', import.meta.url)

function escape(code) {
  return code.replaceAll('→', '\t')
}

function getSection(example) {
  for (let node = example; node; node = node.prev) {
    if (node.type === 'tag' && node.name === 'h2') {
      return node
    }
  }
}

function parseSpec(html) {
  const $ = cheerio.load(html)

  const {version, date} = $('.version')
    .text()
    .match(
      /^Version (?<version>[0-9a-z\-.]+) \((?<date>\d{4}-\d{2}-\d{2})\)$/,
    ).groups

  const testCases = []
  for (const example of $('.example')) {
    const exampleId = example.attribs.id
    assert.ok(/^example-\d+$/.test(exampleId))
    const exampleNumber = Number(exampleId.slice('example-'.length))
    const section = Array.from(getSection(example).children, (node) =>
      $(node).text(),
    )
      .join(' ')
      .replaceAll(/\s+/g, ' ')
      .trim()
    testCases.push({
      section,
      example: exampleNumber,
      markdown: escape($('pre > code.language-markdown', example).text()),
      html: escape($('pre > code.language-html', example).text()),
    })
  }

  return {version, date, testCases}
}

const text = await downloadText(
  SPEC_URL,
  new URL('./spec.html', CACHE_DIRECTORY),
)
const data = parseSpec(text)

await writePrettierFile(
  new URL('../index.json', import.meta.url),
  JSON.stringify(data, undefined, 2),
)
