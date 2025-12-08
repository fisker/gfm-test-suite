# gfm-test-suite

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/gfm-test-suite.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/gfm-test-suite
[license_badge]: https://img.shields.io/npm/l/gfm-test-suite.svg?style=flat-square
[license_link]: https://github.com/fisker/gfm-test-suite/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/gfm-test-suite.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/gfm-test-suite

> GitHub Flavored Markdown Test Suite.

[GitHub Flavored Markdown (GFM) Spec](https://github.github.com/gfm/) data in JavaScript.

## Install

```bash
yarn add gfm-test-suite
```

## Usage

```js
import gfmTestSuite from 'gfm-test-suite'

console.log(latest)
// =>
// {
//   version: '0.29-gfm',
//   date: '2019-04-06',
//   testCases: [
//     {
//       section: '\n2.2Tabs\n',
//       example: 1,
//       markdown: '\tfoo\tbaz\t\tbim\n',
//       html: '<pre><code>foo\tbaz\t\tbim\n</code></pre>\n'
//     },
//     // ...,
//   ]
// }
```
