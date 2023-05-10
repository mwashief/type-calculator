type d1 = ToDigitArray<'59'>
//   ^?
type d2 = ToDigitArray<'60'>
//   ^?

type less = IsLessThanDigitArray<d1, d2>

type a = AddDigitArray<d1, d2>
//   ^?
type c = AddDigit<'5', '8', '9'>
