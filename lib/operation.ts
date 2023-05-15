export type Add<
  U extends `${number}` | number,
  V extends `${number}` | number
> = SignedIntegerToNumber<
  AddSignedInteger<ToSignedInteger<U>, ToSignedInteger<V>>
>

export type Subtract<
  U extends `${number}` | number,
  V extends `${number}` | number
> = SignedIntegerToNumber<
  SubtractSignedInteger<ToSignedInteger<U>, ToSignedInteger<V>>
>

export type Multiply<
  U extends `${number}` | number,
  V extends `${number}` | number
> = SignedIntegerToNumber<
  MultiplySignedInteger<ToSignedInteger<U>, ToSignedInteger<V>>
>

export type Divide<
  U extends `${number}` | number,
  V extends `${number}` | number
> = SignedIntegerToNumber<
  DivideSignedInteger<ToSignedInteger<U>, ToSignedInteger<V>>
>

export type Modulus<
  U extends `${number}` | number,
  V extends `${number}` | number
> = SignedIntegerToNumber<
  ModulusSignedInteger<ToSignedInteger<U>, ToSignedInteger<V>>
>
