type EqualNumberofZeros<
  U extends DigitArray,
  Res extends DigitArray = []
> = U extends [infer _, ...infer Rest extends DigitArray]
  ? EqualNumberofZeros<Rest, ['0', ...Res]>
  : Res
