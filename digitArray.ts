type Sign = '+' | '-' | '*'
type NumberSign = '+' | '-'
type Operation = 'add' | 'subtract' | 'multiply'
type DigitArray = Digit[]

type SanitizeDigitArray<T extends DigitArray> = T extends [
  '0',
  ...infer Rest extends DigitArray
]
  ? SanitizeDigitArray<Rest>
  : T

type StringTokenizeHead<
  S extends string,
  U extends string
> = S extends `${U}${infer Rest}`
  ? S extends `${infer Res}${Rest}`
    ? [Res, Rest]
    : ['', S]
  : ['', S]

type StringTokenizeTail<
  S extends string,
  U extends string
> = S extends `${infer Rest}${U}`
  ? S extends `${Rest}${infer Res}`
    ? [Rest, Res]
    : [S, '']
  : [S, '']

type ToDigitArray<T extends string> = StringTokenizeTail<
  T,
  Digit
>[1] extends Digit
  ? [
      StringTokenizeTail<T, Digit>[1],
      ...ToDigitArray<StringTokenizeTail<T, Digit>[0]>
    ]
  : []

type HasLessDigits<
  U extends DigitArray,
  V extends DigitArray
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
  U extends DigitArray,
  V extends DigitArray
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
      ? IsEqualDigitArray<RestU, RestV>
      : IsLessThanDigit<MsdU, MsdV> extends true
      ? true
      : false
    : never
  : never

type IsLessThanDigitArray<
  U extends DigitArray,
  V extends DigitArray
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

type AddDigitArray<
  U extends DigitArray,
  V extends DigitArray,
  Carry extends Digit = '0'
> = U extends [infer First1 extends Digit, ...infer Rest1 extends DigitArray]
  ? V extends [infer First2 extends Digit, ...infer Rest2 extends DigitArray]
    ? [
        AddDigit<First1, First2, Carry>['val'],
        ...AddDigitArray<Rest1, Rest2, AddDigit<First1, First2, Carry>['carry']>
      ]
    : [
        AddDigit<First1, '0', Carry>['val'],
        ...AddDigitArray<Rest1, V, AddDigit<First1, '0', Carry>['carry']>
      ]
  : V extends [infer First3 extends Digit, ...infer Rest3 extends DigitArray]
  ? [
      AddDigit<'0', First3, Carry>['val'],
      ...AddDigitArray<U, Rest3, AddDigit<'0', First3, Carry>['carry']>
    ]
  : Carry extends '0'
  ? []
  : [Carry]

type SubtractDigitArray<
  U extends DigitArray,
  V extends DigitArray,
  Carry extends Digit = '0'
> = U extends [infer First1 extends Digit, ...infer Rest1 extends DigitArray]
  ? V extends [infer First2 extends Digit, ...infer Rest2 extends DigitArray]
    ? [
        SubtractDigit<First1, First2, Carry>['val'],
        ...SubtractDigitArray<
          Rest1,
          Rest2,
          SubtractDigit<First1, First2, Carry>['carry']
        >
      ]
    : [
        SubtractDigit<First1, '0', Carry>['val'],
        ...SubtractDigitArray<
          Rest1,
          V,
          SubtractDigit<First1, '0', Carry>['carry']
        >
      ]
  : V extends [infer First3 extends Digit, ...infer Rest3 extends DigitArray]
  ? [
      SubtractDigit<'0', First3, Carry>['val'],
      ...SubtractDigitArray<
        U,
        Rest3,
        SubtractDigit<'0', First3, Carry>['carry']
      >
    ]
  : Carry extends '0'
  ? []
  : [Carry]
//   ^?
