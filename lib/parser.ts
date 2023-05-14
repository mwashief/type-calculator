type SanitizeExpression<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? First extends WhiteSpace
      ? SanitizeExpression<Rest>
      : `${First}${SanitizeExpression<Rest>}`
    : ''

type IdentifiersUsedUtil<
  S extends string,
  Current extends string = ''
> = S extends `${infer Start extends StartingChar}${infer Rest}`
  ? IdentifiersUsedUtil<Rest, `${Current}${Start}`>
  : S extends `${infer Head}${infer Tail}`
  ? Head extends `${number}` | '.'
    ? IdentifiersUsedUtil<Tail, Current extends '' ? '' : `${Current}${Head}`>
    : Current extends ''
    ? IdentifiersUsedUtil<Tail>
    : [Current, ...IdentifiersUsedUtil<Tail>]
  : Current extends ''
  ? []
  : [Current]

type IdentifiersUsed<S extends string> = IdentifiersUsedUtil<S>[number]

type ExpressionToken<S extends string> = MathToken | IdentifiersUsed<S>

type SymbolTableStructure<S extends string[]> = UnRoll<
  S extends [infer First extends string, ...infer Last extends string[]]
    ? First extends `${infer Token}.${infer Attr}`
      ? {
          [key in Token]: SymbolTableStructure<[Attr]>
        } & SymbolTableStructure<Last>
      : { [key in First]: OperandToken } & SymbolTableStructure<Last>
    : {}
>

type ResolveValue<
  Identifier extends string,
  SymbolTable extends any,
  Default extends OperandToken
> = Identifier extends `${infer First}.${infer Attr}`
  ? First extends keyof SymbolTable
    ? ResolveValue<Attr, SymbolTable[First], Default>
    : Default
  : Identifier extends keyof SymbolTable
  ? SymbolTable[Identifier]
  : Default

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
  S extends `${infer T extends Sign}${infer _Rest}`
    ? T
    : MatchLongestPrefixUtil<S, ExpressionToken<S>>

type Tokenize<
  S extends string,
  SymbolTable extends SymbolTableStructure<IdentifiersUsedUtil<S>>
> = S extends `${MatchLongestPrefix<S>}${infer Rest}`
  ? S extends `${infer Token}${Rest}`
    ? [
        Token extends MathToken
          ? Token
          : ResolveValue<Token, SymbolTable, never>,
        ...Tokenize<
          Rest,
          SymbolTable & SymbolTableStructure<IdentifiersUsedUtil<Rest>>
        >
      ]
    : []
  : []

type CalcArith<E extends MathToken[]> = E extends [
  infer Op1 extends ArithSign,
  infer Op2 extends ArithSign,
  ...infer Right extends MathToken[]
]
  ? CalcArith<[Op2 extends '-' ? Exclude<ArithSign, Op1> : Op1, ...Right]>
  : E extends [
      infer N extends MathToken,
      infer Op1 extends ArithSign,
      infer Op2 extends ArithSign,
      ...infer Right extends MathToken[]
    ]
  ? CalcArith<[N, Op2 extends '-' ? Exclude<ArithSign, Op1> : Op1, ...Right]>
  : E extends [
      infer Op1 extends OperandToken,
      infer Op extends ArithSign,
      infer Op2 extends OperandToken,
      ...infer Right extends MathToken[]
    ]
  ? CalcArith<[Op extends '+' ? Add<Op1, Op2> : Subtract<Op1, Op2>, ...Right]>
  : E extends [
      infer Op extends ArithSign,
      infer Op2 extends OperandToken,
      ...infer Right extends MathToken[]
    ]
  ? CalcArith<[Op extends '+' ? Add<0, Op2> : Subtract<0, Op2>, ...Right]>
  : E extends [infer Res extends OperandToken]
  ? `${Res}`
  : never

type CalcMul<S extends MathToken[], U extends MathToken[] = []> = S extends [
  '*',
  infer Op2 extends OperandToken,
  ...infer Rest extends MathToken[]
]
  ? U extends [
      ...infer FirstU extends MathToken[],
      infer Op1 extends OperandToken
    ]
    ? CalcMul<Rest, [...FirstU, Multiply<Op1, Op2>]>
    : never
  : S extends [infer First extends MathToken, ...infer Rest extends MathToken[]]
  ? CalcMul<Rest, [...U, First]>
  : CalcArith<U>

type Calc<
  S extends MathToken[],
  Current extends MathToken[] = [],
  Stack extends MathToken[][] = []
> = S extends [infer First extends MathToken, ...infer Rest extends MathToken[]]
  ? First extends StartingBracket
    ? Calc<
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
    ? Calc<Rest, [...StackPop<Stack>[1], CalcMul<Current>], StackPop<Stack>[0]>
    : Calc<Rest, [...Current, First], Stack>
  : CalcMul<Current>

type Eval<
  S extends string,
  SymbolTable extends SymbolTableStructure<
    IdentifiersUsedUtil<SanitizeExpression<S>>
  >
> = Calc<
  Tokenize<SanitizeExpression<S>, SymbolTable>
> extends `${infer Res extends number}`
  ? Res
  : never
