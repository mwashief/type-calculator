type Sign = "+" | "-" | "*";
type NumberSign = "+" | "-";
type Operation = "add" | "subtract" | "multiply";

type DigitArray = Digit[];
type SanitizeDigitArray<T extends DigitArray> = T extends [
  "0",
  ...infer Rest extends DigitArray
]
  ? SanitizeDigitArray<Rest>
  : T;
type StringTokenizeHead<
  S extends string,
  U extends string
> = S extends `${U}${infer Rest}`
  ? S extends `${infer Res}${Rest}`
    ? [Res, Rest]
    : ["", S]
  : ["", S];
type StringTokenizeTail<
  S extends string,
  U extends string
> = S extends `${infer Rest}${U}`
  ? S extends `${Rest}${infer Res}`
    ? [Rest, Res]
    : [S, ""]
  : [S, ""];
type ToDigitArray<T extends string> = StringTokenizeTail<
  T,
  Digit
>[1] extends Digit
  ? [
      StringTokenizeTail<T, Digit>[1],
      ...ToDigitArray<StringTokenizeTail<T, Digit>[0]>
    ]
  : [];

type AddDigitArray<
  U extends DigitArray,
  V extends DigitArray,
  Carry extends Digit = "0"
> = U extends [infer First1 extends Digit, ...infer Rest1 extends DigitArray]
  ? V extends [infer First2 extends Digit, ...infer Rest2 extends DigitArray]
    ? [
        DigitAdd<First1, First2, Carry>["val"],
        ...AddDigitArray<Rest1, Rest2, DigitAdd<First1, First2, Carry>["carry"]>
      ]
    : [
        DigitAdd<First1, "0", Carry>["val"],
        ...AddDigitArray<Rest1, V, DigitAdd<First1, "0", Carry>["carry"]>
      ]
  : V extends [infer First3 extends Digit, ...infer Rest3 extends DigitArray]
  ? [
      DigitAdd<"0", First3, Carry>["val"],
      ...AddDigitArray<U, Rest3, DigitAdd<"0", First3, Carry>["carry"]>
    ]
  : Carry extends "0"
  ? []
  : [Carry];

type SubtractDigitArray<
  U extends DigitArray,
  V extends DigitArray,
  Carry extends Digit = "0"
> = U extends [infer First1 extends Digit, ...infer Rest1 extends DigitArray]
  ? V extends [infer First2 extends Digit, ...infer Rest2 extends DigitArray]
    ? [
        DigitSubtract<First1, First2, Carry>["val"],
        ...SubtractDigitArray<
          Rest1,
          Rest2,
          DigitSubtract<First1, First2, Carry>["carry"]
        >
      ]
    : [
        DigitSubtract<First1, "0", Carry>["val"],
        ...SubtractDigitArray<
          Rest1,
          V,
          DigitSubtract<First1, "0", Carry>["carry"]
        >
      ]
  : V extends [infer First3 extends Digit, ...infer Rest3 extends DigitArray]
  ? [
      DigitSubtract<"0", First3, Carry>["val"],
      ...SubtractDigitArray<
        U,
        Rest3,
        DigitSubtract<"0", First3, Carry>["carry"]
      >
    ]
  : Carry extends "0"
  ? []
  : [Carry];

type d1 = ToDigitArray<"17">;
//   ^?
type d2 = ToDigitArray<"457">;
//   ^?

type a = AddDigitArray<d1, d2>;
//   ^?
type c = DigitAdd<"5", "8", "9">;
//   ^?
