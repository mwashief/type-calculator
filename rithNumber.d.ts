type NumberSign = '+' | '-'

// Signed Integer
type RithNumber = { integral: DigitArray; sign: NumberSign }

type SanitizeRithNumber<T extends RithNumber> = {
  integral: SanitizeDigitArray<T['integral']>
  sign: SanitizeDigitArray<T['integral']>['length'] extends 0 ? '+' : T['sign']
}

type StringToRithNumber<T extends string> = StringTokenizeHead<
  T,
  NumberSign
>[0] extends NumberSign
  ? {
      sign: StringTokenizeHead<T, NumberSign>[0]
      integral: ToDigitArray<StringTokenizeHead<T, NumberSign>[1]>
    }
  : { sign: '+'; integral: ToDigitArray<T> }

type ToRithNumber<T extends `${number}` | number> = T extends string
  ? StringToRithNumber<T>
  : `${T}` extends `${infer X}${'.'}${infer _}`
  ? StringToRithNumber<X>
  : StringToRithNumber<`${T}`>

type RithNumberToString<
  UU extends RithNumber,
  U extends RithNumber = SanitizeRithNumber<UU>
> = `${U['sign'] extends '-' ? '-' : ''}${DigitArrayToString<U['integral']>}`

type RithNumberToNumber<
  UU extends RithNumber,
  U extends RithNumber = SanitizeRithNumber<UU>
> = `${U['sign'] extends '-' ? '-' : ''}${DigitArrayToString<
  U['integral']
>}` extends `${infer num extends number}`
  ? num
  : 0

type AddRithNumber<
  U extends RithNumber,
  V extends RithNumber
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

type SubtractRithNumber<
  U extends RithNumber,
  V extends RithNumber
> = AddRithNumber<
  U,
  { sign: V['sign'] extends '+' ? '-' : '+'; integral: V['integral'] }
>

type MultiplyRithNumber<U extends RithNumber, V extends RithNumber> = {
  sign: V['sign'] extends U['sign'] ? '+' : '-'
  integral: MultiplyDigitArray<U['integral'], V['integral']>
}
