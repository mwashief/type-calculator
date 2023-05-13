type Operation = 'add' | 'subtract' | 'multiply'
type ArithSign = '+' | '-'
type MultSign = '*'
type Sign = ArithSign | MultSign
type SpecialSymbol = '/' | '?' | ':'
type StartingChar =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | '_'
type StartingBracket = '(' | '{'
type EndingBracket = ')' | '}'
type Bracket = StartingBracket | EndingBracket

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

type TokenType<S extends string> =
  | `${number}`
  | Bracket
  | IdentifiersUsed<S>
  | Sign

type MatchLongestPrefixUtil<
  S extends string,
  T extends string,
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
  SymbolTable extends { [key in IdentifiersUsed<S>]: `${number}` | number }
> = S extends `${MatchLongestPrefix<S>}${infer Rest}`
  ? S extends `${infer Token}${Rest}`
    ? [
        Token extends keyof SymbolTable ? `${SymbolTable[Token]}` : Token,
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

type EvalUtil<E extends string[]> = E extends [
  infer Op1 extends ArithSign,
  infer Op2 extends ArithSign,
  ...infer Right extends string[]
]
  ? EvalUtil<[Op2 extends '-' ? Exclude<ArithSign, Op1> : Op1, ...Right]>
  : E extends [
      infer N extends string,
      infer Op1 extends ArithSign,
      infer Op2 extends ArithSign,
      ...infer Right extends string[]
    ]
  ? EvalUtil<[N, Op2 extends '-' ? Exclude<ArithSign, Op1> : Op1, ...Right]>
  : E extends [
      infer Op1 extends string,
      infer Op extends ArithSign,
      infer Op2 extends string,
      ...infer Right extends string[]
    ]
  ? EvalUtil<[Op extends '+' ? Add<Op1, Op2> : Subtract<Op1, Op2>, ...Right]>
  : E extends [
      infer Op extends ArithSign,
      infer Op2 extends string,
      ...infer Right extends string[]
    ]
  ? EvalUtil<[Op extends '+' ? Add<0, Op2> : Subtract<0, Op2>, ...Right]>
  : E extends [infer Res]
  ? Res
  : never

type HandleMul<S extends string[], U extends string[] = []> = S extends [
  '*',
  infer Op2 extends string,
  ...infer Rest extends string[]
]
  ? U extends [...infer FirstU extends string[], infer Op1 extends string]
    ? HandleMul<Rest, [...FirstU, Multiply<Op1, Op2>]>
    : never
  : S extends [infer First extends string, ...infer Rest extends string[]]
  ? HandleMul<Rest, [...U, First]>
  : EvalUtil<U>

type Eval<
  S extends string[],
  Current extends string[] = [],
  Stack extends string[][] = []
> = S extends [infer First extends string, ...infer Rest extends string[]]
  ? First extends StartingBracket
    ? Eval<Rest, [], [...Stack, Current]>
    : First extends EndingBracket
    ? Eval<
        Rest,
        [...StackPop<Stack>[1], HandleMul<Current>],
        StackPop<Stack>[0]
      >
    : Eval<Rest, [...Current, First], Stack>
  : HandleMul<Current>
