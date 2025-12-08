import {expectType} from 'tsd'
import gfmTestSuite from './index.js'

expectType<string>(gfmTestSuite.version)
expectType<string>(gfmTestSuite.date)

for (const testCase of gfmTestSuite.testCases) {
  expectType<string>(testCase.markdown)
  expectType<string>(testCase.html)
  expectType<number>(testCase.example)
  expectType<string>(testCase.section)
}
