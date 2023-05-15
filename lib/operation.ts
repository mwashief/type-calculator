type Add<
  U extends `${number}` | number,
  V extends `${number}` | number
> = RithNumberToNumber<AddRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Subtract<
  U extends `${number}` | number,
  V extends `${number}` | number
> = RithNumberToNumber<SubtractRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Multiply<
  U extends `${number}` | number,
  V extends `${number}` | number
> = RithNumberToNumber<MultiplyRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Divide<
  U extends `${number}` | number,
  V extends `${number}` | number
> = RithNumberToNumber<DivideRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Modulus<
  U extends `${number}` | number,
  V extends `${number}` | number
> = RithNumberToNumber<ModulusRithNumber<ToRithNumber<U>, ToRithNumber<V>>>
