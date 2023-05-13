type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false
type Expecting<T extends true> = T

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

type Head<S extends Array<string | Array<string>>> = S extends [
  infer H,
  ...infer _
]
  ? H
  : never

type Tail<S extends Array<string | Array<string>>> = S extends [
  infer _,
  ...infer T
]
  ? T
  : []

type RHead<S extends Array<string | Array<string>>> = S extends [
  ...infer _,
  infer RH
]
  ? RH
  : never

type RTail<S extends Array<string | Array<string>>> = S extends [
  ...infer RT,
  infer _
]
  ? RT
  : []
