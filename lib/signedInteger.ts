type NumberSign = '+' | '-'

// Signed Integer
type SignedInteger = { integral: DigitArray; sign: NumberSign }

type SanitizeSignedInteger<T extends SignedInteger> = {
  integral: SanitizeDigitArray<T['integral']>
  sign: SanitizeDigitArray<T['integral']>['length'] extends 0 ? '+' : T['sign']
}

type StringToSignedInteger<T extends string> = StringTokenizeHead<
  T,
  NumberSign
>[0] extends NumberSign
  ? {
      sign: StringTokenizeHead<T, NumberSign>[0]
      integral: ToDigitArray<StringTokenizeHead<T, NumberSign>[1]>
    }
  : { sign: '+'; integral: ToDigitArray<T> }

type ToSignedInteger<T extends `${number}` | number> = T extends string
  ? StringToSignedInteger<T>
  : `${T}` extends `${infer X}${'.'}${infer _}`
  ? StringToSignedInteger<X>
  : StringToSignedInteger<`${T}`>

type SignedIntegerToString<
  UU extends SignedInteger,
  U extends SignedInteger = SanitizeSignedInteger<UU>
> = `${U['sign'] extends '-' ? '-' : ''}${DigitArrayToString<U['integral']>}`

type SignedIntegerToNumber<
  UU extends SignedInteger,
  U extends SignedInteger = SanitizeSignedInteger<UU>
> = `${U['sign'] extends '-' ? '-' : ''}${DigitArrayToString<
  U['integral']
>}` extends `${infer num extends number}`
  ? num
  : 0

type AddSignedInteger<
  U extends SignedInteger,
  V extends SignedInteger
> = U['sign'] extends '+'
  ? V['sign'] extends '+'
    ? { sign: '+'; integral: AddDigitArray<U['integral'], V['integral']> }
    : IsGreaterThanOrEqualDigitArray<U['integral'], V['integral']> extends true
    ? { sign: '+'; integral: SubtractDigitArray<U['integral'], V['integral']> }
    : { sign: '-'; integral: SubtractDigitArray<V['integral'], U['integral']> }
  : V['sign'] extends '-'
  ? { sign: '-'; integral: AddDigitArray<U['integral'], V['integral']> }
  : IsGreaterThanOrEqualDigitArray<V['integral'], U['integral']> extends true
  ? { sign: '+'; integral: SubtractDigitArray<V['integral'], U['integral']> }
  : { sign: '-'; integral: SubtractDigitArray<U['integral'], V['integral']> }

type SubtractSignedInteger<
  U extends SignedInteger,
  V extends SignedInteger
> = AddSignedInteger<
  U,
  { sign: V['sign'] extends '+' ? '-' : '+'; integral: V['integral'] }
>

type MultiplySignedInteger<U extends SignedInteger, V extends SignedInteger> = {
  sign: V['sign'] extends U['sign'] ? '+' : '-'
  integral: MultiplyDigitArray<U['integral'], V['integral']>
}

type DivideSignedInteger<U extends SignedInteger, V extends SignedInteger> = {
  sign: V['sign'] extends U['sign'] ? '+' : '-'
  integral: V['sign'] extends U['sign']
    ? DivideDigitArray<U['integral'], V['integral']>
    : IsEqualDigitArray<
        ModulusDigitArray<U['integral'], V['integral']>,
        ['0']
      > extends true
    ? DivideDigitArray<U['integral'], V['integral']>
    : AddDigitArray<DivideDigitArray<U['integral'], V['integral']>, ['1']>
}

// TODO: Correct this
type ModulusSignedInteger<U extends SignedInteger, V extends SignedInteger> = {
  sign: V['sign']
  integral: ModulusDigitArray<
    V['sign'] extends U['sign']
      ? U['integral']
      : IsGreaterThanOrEqualDigitArray<
          U['integral'],
          V['integral']
        > extends true
      ? SubtractDigitArray<U['integral'], V['integral']>
      : SubtractDigitArray<V['integral'], U['integral']>,
    V['integral']
  >
}
