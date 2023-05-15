<table>
  <tr>
    <td valign="top"><img src="https://github.com/mwashief/type-calculator/blob/main/static/logo.png?raw=true" width='200'/></td>
    <td valign="top"><h1><p>Type Calculator</h1>Simple arithmatics for compile-time type evaluation</p></td>
  </tr>
</table>

### Usage
Import the types
```ts
import { Add, Subtract, Multiply, Divide, Modulus, Eval } from '../src/index'
```

### Arithmatics

```ts
type Test1 = Add<-4339879, 9410365> // Results in 5070486
type Test2 = Subtract<-4339879, 9410365> // Results in -13750244
type Test3 = Multiply<-4339879, 9410365> // Results in -40839845445835
type Test4 = Divide<-4339879, 9410365> // Results in -1
type Test5 = Modulus<-4339879, 9410365> // Results in 5070486

// Operands can be string also. Example:
type Test1 = Add<-4339879, 9410365> // Results in 5070486
type Test2 = Subtract<-4339879, '9410365'> // Results in -13750244
type Test3 = Multiply<'-4339879', 9410365> // Results in -40839845445835
type Test4 = Divide<'-4339879', '9410365'> // Results in -1
type Test5 = Modulus<-4339879, `${9410365}`> // Results in 5070486

```
### Evaluating Expression
```ts

type Expression = '4%3+ 5(a + b.x - (b.y - anotherVariable)* 4/2)'
type SymbolTable = { a: 1; b: { x: 2; y: 3 }; anotherVariable: 55 }
type ValueExpression = Eval<Expression, SymbolTable> // Results in 536

```
