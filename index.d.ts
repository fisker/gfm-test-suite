export type TestCase = {
  readonly markdown: string;
  readonly section: string;
  readonly html: string;
  readonly example: number;
}

export type Suite = {
  readonly version: string;
  readonly date: string;
  readonly testCases: readonly TestCase[];
}

declare const _: Suite

export default _;
