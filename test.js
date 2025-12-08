import assert from 'node:assert/strict'
import test from 'node:test'
import gfmTestSuite from './index.js'

test(gfmTestSuite.version, () => {
  const {version, date, testCases} = gfmTestSuite
  assert.ok(typeof version === 'string')
  assert.ok(typeof date === 'string')
  assert.ok(Array.isArray(testCases) && testCases.length !== 0)

  const seenExamples = new Set()
  for (const [index, testCase] of testCases.entries()) {
    assert.equal(typeof testCase.markdown, 'string')
    assert.equal(typeof testCase.html, 'string')
    assert.equal(typeof testCase.section, 'string')
    assert.equal(typeof testCase.example, 'number')
    assert.equal(testCase.example, index + 1)
    assert.ok(!seenExamples.has(testCase.example))
    seenExamples.add(testCase.example)
  }
})
