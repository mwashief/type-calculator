type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false
type Expecting<T extends true> = T

type UnRoll<S> = S extends string
  ? S
  : {
      [key in keyof S]: S[key] extends {} ? UnRoll<S[key]> : S[key]
    }

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

type StackPop<S extends MathToken[][]> = S extends [
  ...infer First extends MathToken[][],
  infer Last extends MathToken[]
]
  ? [First, Last]
  : never
