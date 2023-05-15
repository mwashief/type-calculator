type EqualNumberofZeros<
  UU extends DigitArray,
  Res extends DigitArray = [],
  U extends DigitArray = SanitizeDigitArray<UU>
> = U extends [infer _, ...infer Rest extends DigitArray]
  ? EqualNumberofZeros<Rest, ['0', ...Res]>
  : Res
