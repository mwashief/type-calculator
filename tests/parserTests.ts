type Expression = '4+ 5(a + b.val - (b.x - ab )* 2)'
type SanitizedEx = SanitizeExpression<Expression>
//   ^?
type Identifiers = IdentifiersUsed<SanitizedEx>
//   ^?
type SymbolTableStruct = SymbolTableStructure<IdentifiersUsedUtil<SanitizedEx>>
//   ^?

type SymbolTable = { a: 1; b: { val: 2; x: 3 }; ab: 55 }
type ValueA = ResolveValue<'a', SymbolTable, never>
//   ^?
type ValueBx = ResolveValue<'b.x', SymbolTable, never>
//   ^?
type ValueBy = ResolveValue<'b.y', SymbolTable, never>
//   ^?
