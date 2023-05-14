type Expression = '4+ 5(a + b.val - (b.x - ab )* 2)'
type SanitizedEx = SanitizeExpression<Expression>
//   ^?
type Identifiers = IdentifiersUsed<SanitizedEx>
//   ^?
type SymbolTableStruct = SymbolTableStructure<IdentifiersUsedUtil<SanitizedEx>>
//   ^?

type SymbolTable = { a: 1; b: { val: 2; x: 3 }; ab: 55 }
type Tokens = Tokenize<SanitizedEx, SymbolTable>
//   ^?
type ParserTest1 = Expecting<
  Equal<ResolveValue<'a', SymbolTable, never>, SymbolTable['a']>
>
type ParserTest2 = Expecting<
  Equal<ResolveValue<'b.val', SymbolTable, never>, SymbolTable['b']['val']>
>
type ParserTest3 = Expecting<
  Equal<ResolveValue<'ab', SymbolTable, never>, SymbolTable['ab']>
>
type ValueExpression = Eval<Expression, SymbolTable>
//   ^?
type ParserTest4 = Expecting<Equal<ValueExpression, 539>>
