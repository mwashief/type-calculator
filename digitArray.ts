type DigitArray = Digit[]

type SanitizeDigitArray<T extends DigitArray> = T extends [
  ...infer Rest extends DigitArray,
  '0'
]
  ? SanitizeDigitArray<Rest>
  : T

type ToDigitArray<T extends string> = StringTokenizeTail<
  T,
  Digit
>[1] extends Digit
  ? [
      StringTokenizeTail<T, Digit>[1],
      ...ToDigitArray<StringTokenizeTail<T, Digit>[0]>
    ]
  : []

type ToString<U extends DigitArray> = U extends [
  ...infer Rest extends DigitArray,
  infer Msb extends Digit
]
  ? `${Msb}${ToString<Rest>}`
  : ''

type HasLessDigits<
  UU extends DigitArray,
  VV extends DigitArray,
  U extends DigitArray = SanitizeDigitArray<UU>,
  V extends DigitArray = SanitizeDigitArray<VV>
> = V['length'] extends 0
  ? false
  : U['length'] extends 0
  ? true
  : U extends [infer _, ...infer RestU extends DigitArray]
  ? V extends [infer _, ...infer RestV extends DigitArray]
    ? HasLessDigits<RestU, RestV>
    : never
  : never

type HasMoreDigits<U extends DigitArray, V extends DigitArray> = HasLessDigits<
  V,
  U
>

type HasEqualDigits<
  UU extends DigitArray,
  VV extends DigitArray,
  U extends DigitArray = SanitizeDigitArray<UU>,
  V extends DigitArray = SanitizeDigitArray<VV>
> = U['length'] extends V['length'] ? true : false

type IsLessThanDigitArrayUtil<
  U extends DigitArray,
  V extends DigitArray
> = V['length'] extends 0
  ? false
  : U['length'] extends 0
  ? true
  : U extends [...infer RestU extends DigitArray, infer MsdU extends Digit]
  ? V extends [...infer RestV extends DigitArray, infer MsdV extends Digit]
    ? IsEqualDigit<MsdU, MsdV> extends true
      ? IsLessThanDigitArrayUtil<RestU, RestV>
      : IsLessThanDigit<MsdU, MsdV> extends true
      ? true
      : false
    : never
  : never

type IsLessThanDigitArray<
  UU extends DigitArray,
  VV extends DigitArray,
  U extends DigitArray = SanitizeDigitArray<UU>,
  V extends DigitArray = SanitizeDigitArray<VV>
> = HasLessDigits<U, V> extends true
  ? true
  : HasMoreDigits<U, V> extends true
  ? false
  : IsLessThanDigitArrayUtil<U, V>

type IsGreaterThanDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = IsLessThanDigitArray<V, U>

type IsLessThanOrEqualDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = IsGreaterThanDigitArray<U, V> extends false ? true : false

type IsGreaterThanOrEqualDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = IsLessThanDigitArray<U, V> extends false ? true : false

type IsEqualDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = IsLessThanDigitArray<U, V> extends false
  ? IsGreaterThanDigitArray<U, V> extends false
    ? true
    : false
  : false

type AddDigitArrayUtil<
  UU extends DigitArray,
  VV extends DigitArray,
  Carry extends Digit = '0',
  U extends DigitArray = SanitizeDigitArray<UU>,
  V extends DigitArray = SanitizeDigitArray<VV>
> = U extends [infer FirstU extends Digit, ...infer RestU extends DigitArray]
  ? V extends [infer FirstV extends Digit, ...infer RestV extends DigitArray]
    ? [
        AddDigit<FirstU, FirstV, Carry>['val'],
        ...AddDigitArrayUtil<
          RestU,
          RestV,
          AddDigit<FirstU, FirstV, Carry>['carry']
        >
      ]
    : [
        AddDigit<FirstU, '0', Carry>['val'],
        ...AddDigitArrayUtil<RestU, V, AddDigit<FirstU, '0', Carry>['carry']>
      ]
  : V extends [infer First3 extends Digit, ...infer Rest3 extends DigitArray]
  ? [
      AddDigit<'0', First3, Carry>['val'],
      ...AddDigitArrayUtil<U, Rest3, AddDigit<'0', First3, Carry>['carry']>
    ]
  : Carry extends '0'
  ? []
  : [Carry]

type AddDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = SanitizeDigitArray<AddDigitArrayUtil<U, V>>

type SubtractDigitArrayUtil<
  UU extends DigitArray,
  VV extends DigitArray,
  Carry extends Digit = '0',
  U extends DigitArray = SanitizeDigitArray<UU>,
  V extends DigitArray = SanitizeDigitArray<VV>
> = IsGreaterThanDigitArray<V, U> extends true
  ? never
  : U extends [infer FirstU extends Digit, ...infer RestU extends DigitArray]
  ? V extends [infer FirstV extends Digit, ...infer RestV extends DigitArray]
    ? [
        SubtractDigit<FirstU, FirstV, Carry>['val'],
        ...SubtractDigitArrayUtil<
          RestU,
          RestV,
          SubtractDigit<FirstU, FirstV, Carry>['carry']
        >
      ]
    : [
        SubtractDigit<FirstU, '0', Carry>['val'],
        ...SubtractDigitArrayUtil<
          RestU,
          V,
          SubtractDigit<FirstU, '0', Carry>['carry']
        >
      ]
  : []

type SubtractDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = SanitizeDigitArray<SubtractDigitArrayUtil<U, V>>

type MultiplyDigitArrayWithDigit<
  UU extends DigitArray,
  D extends Digit,
  C extends Digit = '0',
  U extends DigitArray = SanitizeDigitArray<UU>
> = U extends [infer Lsd extends Digit, ...infer Rest extends DigitArray]
  ? [
      MultiplyDigit<Lsd, D, C>['val'],
      ...MultiplyDigitArrayWithDigit<Rest, D, MultiplyDigit<Lsd, D, C>['carry']>
    ]
  : C extends '0'
  ? []
  : [C]

type MultiplyDigitArrayUtil<
  UU extends DigitArray,
  VV extends DigitArray,
  P extends DigitArray = [],
  U extends DigitArray = SanitizeDigitArray<UU>,
  V extends DigitArray = SanitizeDigitArray<VV>
> = V extends [infer Lsd extends Digit, ...infer Rest extends DigitArray]
  ? AddDigitArray<
      [...P, ...MultiplyDigitArrayWithDigit<U, Lsd>],
      MultiplyDigitArrayUtil<U, Rest, [...P, '0']>
    >
  : []

type MultiplyDigitArray<
  U extends DigitArray,
  V extends DigitArray
> = MultiplyDigitArrayUtil<U, V>
