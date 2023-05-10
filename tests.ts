type d1 = ToDigitArray<'5911'>
//   ^?
type d2 = ToDigitArray<'590'>
//   ^?

type digcom1 = HasLessDigits<d1, d2>
//   ^?
type digcom2 = HasLessDigits<d2, d1>
//   ^?
type lr = IsLessThanDigitArray<d1, d2>
//   ^?
type rl = IsLessThanDigitArray<d2, d1>
//   ^?
type d = IsLessThanDigit<'0', '5'>
//   ^?

type a = ToString<MultiplyDigitArray<d1, d2>>
//   ^?
type c = MultiplyDigit<'8', '8', '9'>
//   ^?
