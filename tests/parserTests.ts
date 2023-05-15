import { Eval } from '../src/index'
type Expression = '4%3+ 5(a + b.val - (b.x - ab )* 4/2)'
type SymbolTable = { a: 1; b: { val: 2; x: 3 }; ab: 55 }
type ValueExpression = Eval<Expression, SymbolTable>
//   ^?
type ParserTest4 = Expecting<Equal<ValueExpression, 536>>
