type Add<
  U extends string | number,
  V extends string | number
> = RithNumberToString<AddRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Subtract<
  U extends string | number,
  V extends string | number
> = RithNumberToString<SubtractRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Multiply<
  U extends string | number,
  V extends string | number
> = RithNumberToString<MultiplyRithNumber<ToRithNumber<U>, ToRithNumber<V>>>
