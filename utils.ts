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
