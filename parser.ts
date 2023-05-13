type SanitizeExpression<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? First extends WhiteSpace
      ? SanitizeExpression<Rest>
      : `${First}${SanitizeExpression<Rest>}`
    : ''

type IdentifiersUsed<
  S extends string,
  Current extends string = ''
> = S extends `${infer Start extends StartingChar}${infer Rest}`
  ? IdentifiersUsed<Rest, `${Current}${Start}`>
  : S extends `${infer Head}${infer Tail}`
  ? Head extends `${number}` | '.'
    ? IdentifiersUsed<Tail, Current extends '' ? '' : `${Current}${Head}`>
    : Current extends ''
    ? IdentifiersUsed<Tail>
    : Current | IdentifiersUsed<Tail>
  : Current extends ''
  ? never
  : Current

type TokenType<S extends string> = MathToken | IdentifiersUsed<S>

type MatchLongestPrefixUtil<
  S extends string,
  T,
  Seen extends string = '',
  Token extends string = ''
> = S extends `${infer First}${infer Last}`
  ? `${Seen}${First}` extends T
    ? MatchLongestPrefixUtil<Last, T, `${Seen}${First}`, `${Seen}${First}`>
    : MatchLongestPrefixUtil<Last, T, `${Seen}${First}`, Token>
  : Token extends ''
  ? never
  : Token

type MatchLongestPrefix<S extends string> =
  S extends `${infer T extends Sign}${infer Rest}`
    ? T
    : MatchLongestPrefixUtil<S, TokenType<S>>

type Tokenize<
  S extends string,
  SymbolTable extends { [key in IdentifiersUsed<S>]: OperandToken }
> = S extends `${MatchLongestPrefix<S>}${infer Rest}`
  ? S extends `${infer Token}${Rest}`
    ? [
        Token extends IdentifiersUsed<S> ? `${SymbolTable[Token]}` : Token,
        ...Tokenize<
          Rest,
          {
            [key in IdentifiersUsed<Rest>]: key extends keyof SymbolTable
              ? `${SymbolTable[key]}`
              : '0'
          }
        >
      ]
    : []
  : []

type EvalUtil<E extends MathToken[]> = E extends [
  infer Op1 extends ArithSign,
  infer Op2 extends ArithSign,
  ...infer Right extends MathToken[]
]
  ? EvalUtil<[Op2 extends '-' ? Exclude<ArithSign, Op1> : Op1, ...Right]>
  : E extends [
      infer N extends MathToken,
      infer Op1 extends ArithSign,
      infer Op2 extends ArithSign,
      ...infer Right extends MathToken[]
    ]
  ? EvalUtil<[N, Op2 extends '-' ? Exclude<ArithSign, Op1> : Op1, ...Right]>
  : E extends [
      infer Op1 extends OperandToken,
      infer Op extends ArithSign,
      infer Op2 extends OperandToken,
      ...infer Right extends MathToken[]
    ]
  ? EvalUtil<[Op extends '+' ? Add<Op1, Op2> : Subtract<Op1, Op2>, ...Right]>
  : E extends [
      infer Op extends ArithSign,
      infer Op2 extends OperandToken,
      ...infer Right extends MathToken[]
    ]
  ? EvalUtil<[Op extends '+' ? Add<0, Op2> : Subtract<0, Op2>, ...Right]>
  : E extends [infer Res]
  ? Res
  : never

type HandleMul<S extends MathToken[], U extends MathToken[] = []> = S extends [
  '*',
  infer Op2 extends OperandToken,
  ...infer Rest extends MathToken[]
]
  ? U extends [
      ...infer FirstU extends MathToken[],
      infer Op1 extends OperandToken
    ]
    ? HandleMul<Rest, [...FirstU, Multiply<Op1, Op2>]>
    : never
  : S extends [infer First extends MathToken, ...infer Rest extends MathToken[]]
  ? HandleMul<Rest, [...U, First]>
  : EvalUtil<U>

type Eval<
  S extends MathToken[],
  Current extends MathToken[] = [],
  Stack extends MathToken[][] = []
> = S extends [infer First extends MathToken, ...infer Rest extends MathToken[]]
  ? First extends StartingBracket
    ? Eval<
        Rest,
        [],
        [
          ...Stack,
          Current extends [...infer _, `${number}`]
            ? [...Current, '*']
            : Current
        ]
      >
    : First extends EndingBracket
    ? Eval<
        Rest,
        [...StackPop<Stack>[1], HandleMul<Current>],
        StackPop<Stack>[0]
      >
    : Eval<Rest, [...Current, First], Stack>
  : HandleMul<Current>

//'24+al+jg*54+u8.ki'
type UnsanitizedEx = '-5*2 + 4 (1 -8) * u'
type Ex = SanitizeExpression<UnsanitizedEx>
//   ^?
type Tt = TokenType<Ex>
//   ^?
type T = MatchLongestPrefix<Ex>
//   ^?
type Iu = IdentifiersUsed<Ex>
//   ^?
type St = { [key in Iu]: 2 }
//   ^?
type c = Tokenize<Ex, St>
//   ^?
type k = Eval<c>
//   ^?
