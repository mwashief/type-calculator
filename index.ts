type Add<
  U extends string | number,
  V extends string | number
> = RithNumberToNumber<AddRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Subtract<
  U extends string | number,
  V extends string | number
> = RithNumberToNumber<SubtractRithNumber<ToRithNumber<U>, ToRithNumber<V>>>

type Multiply<
  U extends string | number,
  V extends string | number
> = RithNumberToNumber<MultiplyRithNumber<ToRithNumber<U>, ToRithNumber<V>>>
