type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type DigitOperationResult = { val: Digit; carry: Digit };
type DOR<V extends Digit, C extends Digit> = { val: V; carry: C };

type DigitAdd<
  U extends Digit,
  V extends Digit,
  C extends Digit = "0"
> = U extends "0"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"3", "0">
      : C extends "4"
      ? DOR<"4", "0">
      : C extends "5"
      ? DOR<"5", "0">
      : C extends "6"
      ? DOR<"6", "0">
      : C extends "7"
      ? DOR<"7", "0">
      : C extends "8"
      ? DOR<"8", "0">
      : C extends "9"
      ? DOR<"9", "0">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"4", "0">
      : C extends "4"
      ? DOR<"5", "0">
      : C extends "5"
      ? DOR<"6", "0">
      : C extends "6"
      ? DOR<"7", "0">
      : C extends "7"
      ? DOR<"8", "0">
      : C extends "8"
      ? DOR<"9", "0">
      : C extends "9"
      ? DOR<"0", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"5", "0">
      : C extends "4"
      ? DOR<"6", "0">
      : C extends "5"
      ? DOR<"7", "0">
      : C extends "6"
      ? DOR<"8", "0">
      : C extends "7"
      ? DOR<"9", "0">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"6", "0">
      : C extends "4"
      ? DOR<"7", "0">
      : C extends "5"
      ? DOR<"8", "0">
      : C extends "6"
      ? DOR<"9", "0">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"7", "0">
      : C extends "4"
      ? DOR<"8", "0">
      : C extends "5"
      ? DOR<"9", "0">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"8", "0">
      : C extends "4"
      ? DOR<"9", "0">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : never
  : U extends "1"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"4", "0">
      : C extends "4"
      ? DOR<"5", "0">
      : C extends "5"
      ? DOR<"6", "0">
      : C extends "6"
      ? DOR<"7", "0">
      : C extends "7"
      ? DOR<"8", "0">
      : C extends "8"
      ? DOR<"9", "0">
      : C extends "9"
      ? DOR<"0", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"5", "0">
      : C extends "4"
      ? DOR<"6", "0">
      : C extends "5"
      ? DOR<"7", "0">
      : C extends "6"
      ? DOR<"8", "0">
      : C extends "7"
      ? DOR<"9", "0">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"6", "0">
      : C extends "4"
      ? DOR<"7", "0">
      : C extends "5"
      ? DOR<"8", "0">
      : C extends "6"
      ? DOR<"9", "0">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"7", "0">
      : C extends "4"
      ? DOR<"8", "0">
      : C extends "5"
      ? DOR<"9", "0">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"8", "0">
      : C extends "4"
      ? DOR<"9", "0">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : never
  : U extends "2"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"5", "0">
      : C extends "4"
      ? DOR<"6", "0">
      : C extends "5"
      ? DOR<"7", "0">
      : C extends "6"
      ? DOR<"8", "0">
      : C extends "7"
      ? DOR<"9", "0">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"6", "0">
      : C extends "4"
      ? DOR<"7", "0">
      : C extends "5"
      ? DOR<"8", "0">
      : C extends "6"
      ? DOR<"9", "0">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"7", "0">
      : C extends "4"
      ? DOR<"8", "0">
      : C extends "5"
      ? DOR<"9", "0">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"8", "0">
      : C extends "4"
      ? DOR<"9", "0">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : never
  : U extends "3"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"6", "0">
      : C extends "4"
      ? DOR<"7", "0">
      : C extends "5"
      ? DOR<"8", "0">
      : C extends "6"
      ? DOR<"9", "0">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"7", "0">
      : C extends "4"
      ? DOR<"8", "0">
      : C extends "5"
      ? DOR<"9", "0">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"8", "0">
      : C extends "4"
      ? DOR<"9", "0">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : never
  : U extends "4"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"7", "0">
      : C extends "4"
      ? DOR<"8", "0">
      : C extends "5"
      ? DOR<"9", "0">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"8", "0">
      : C extends "4"
      ? DOR<"9", "0">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"0", "2">
      : C extends "8"
      ? DOR<"1", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : never
    : never
  : U extends "5"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"8", "0">
      : C extends "4"
      ? DOR<"9", "0">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"0", "2">
      : C extends "8"
      ? DOR<"1", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"0", "2">
      : C extends "7"
      ? DOR<"1", "2">
      : C extends "8"
      ? DOR<"2", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : never
    : never
  : U extends "6"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"8", "0">
      : C extends "3"
      ? DOR<"9", "0">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"0", "2">
      : C extends "8"
      ? DOR<"1", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"0", "2">
      : C extends "7"
      ? DOR<"1", "2">
      : C extends "8"
      ? DOR<"2", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"0", "2">
      : C extends "6"
      ? DOR<"1", "2">
      : C extends "7"
      ? DOR<"2", "2">
      : C extends "8"
      ? DOR<"3", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : never
    : never
  : U extends "7"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"9", "0">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"0", "2">
      : C extends "8"
      ? DOR<"1", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"0", "2">
      : C extends "7"
      ? DOR<"1", "2">
      : C extends "8"
      ? DOR<"2", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"0", "2">
      : C extends "6"
      ? DOR<"1", "2">
      : C extends "7"
      ? DOR<"2", "2">
      : C extends "8"
      ? DOR<"3", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"0", "2">
      : C extends "5"
      ? DOR<"1", "2">
      : C extends "6"
      ? DOR<"2", "2">
      : C extends "7"
      ? DOR<"3", "2">
      : C extends "8"
      ? DOR<"4", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : never
    : never
  : U extends "8"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"9", "0">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"0", "2">
      : C extends "8"
      ? DOR<"1", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"0", "2">
      : C extends "7"
      ? DOR<"1", "2">
      : C extends "8"
      ? DOR<"2", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"0", "2">
      : C extends "6"
      ? DOR<"1", "2">
      : C extends "7"
      ? DOR<"2", "2">
      : C extends "8"
      ? DOR<"3", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"0", "2">
      : C extends "5"
      ? DOR<"1", "2">
      : C extends "6"
      ? DOR<"2", "2">
      : C extends "7"
      ? DOR<"3", "2">
      : C extends "8"
      ? DOR<"4", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"0", "2">
      : C extends "4"
      ? DOR<"1", "2">
      : C extends "5"
      ? DOR<"2", "2">
      : C extends "6"
      ? DOR<"3", "2">
      : C extends "7"
      ? DOR<"4", "2">
      : C extends "8"
      ? DOR<"5", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : never
    : never
  : U extends "9"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : never
    : V extends "1"
    ? C extends "0"
      ? DOR<"0", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"9", "1">
      : never
    : V extends "2"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"0", "2">
      : never
    : V extends "3"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"0", "2">
      : C extends "9"
      ? DOR<"1", "2">
      : never
    : V extends "4"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"0", "2">
      : C extends "8"
      ? DOR<"1", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : never
    : V extends "5"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"0", "2">
      : C extends "7"
      ? DOR<"1", "2">
      : C extends "8"
      ? DOR<"2", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : never
    : V extends "6"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"0", "2">
      : C extends "6"
      ? DOR<"1", "2">
      : C extends "7"
      ? DOR<"2", "2">
      : C extends "8"
      ? DOR<"3", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : never
    : V extends "7"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"0", "2">
      : C extends "5"
      ? DOR<"1", "2">
      : C extends "6"
      ? DOR<"2", "2">
      : C extends "7"
      ? DOR<"3", "2">
      : C extends "8"
      ? DOR<"4", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : never
    : V extends "8"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"0", "2">
      : C extends "4"
      ? DOR<"1", "2">
      : C extends "5"
      ? DOR<"2", "2">
      : C extends "6"
      ? DOR<"3", "2">
      : C extends "7"
      ? DOR<"4", "2">
      : C extends "8"
      ? DOR<"5", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : never
    : V extends "9"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"0", "2">
      : C extends "3"
      ? DOR<"1", "2">
      : C extends "4"
      ? DOR<"2", "2">
      : C extends "5"
      ? DOR<"3", "2">
      : C extends "6"
      ? DOR<"4", "2">
      : C extends "7"
      ? DOR<"5", "2">
      : C extends "8"
      ? DOR<"6", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : never
    : never
  : never;

type DigitSubtract<
  U extends Digit,
  V extends Digit,
  C extends Digit = "0"
> = U extends "0"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"9", "2">
      : C extends "8"
      ? DOR<"8", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"9", "2">
      : C extends "7"
      ? DOR<"8", "2">
      : C extends "8"
      ? DOR<"7", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"9", "2">
      : C extends "6"
      ? DOR<"8", "2">
      : C extends "7"
      ? DOR<"7", "2">
      : C extends "8"
      ? DOR<"6", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"9", "2">
      : C extends "5"
      ? DOR<"8", "2">
      : C extends "6"
      ? DOR<"7", "2">
      : C extends "7"
      ? DOR<"6", "2">
      : C extends "8"
      ? DOR<"5", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"9", "2">
      : C extends "4"
      ? DOR<"8", "2">
      : C extends "5"
      ? DOR<"7", "2">
      : C extends "6"
      ? DOR<"6", "2">
      : C extends "7"
      ? DOR<"5", "2">
      : C extends "8"
      ? DOR<"4", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"1", "1">
      : C extends "1"
      ? DOR<"0", "1">
      : C extends "2"
      ? DOR<"9", "2">
      : C extends "3"
      ? DOR<"8", "2">
      : C extends "4"
      ? DOR<"7", "2">
      : C extends "5"
      ? DOR<"6", "2">
      : C extends "6"
      ? DOR<"5", "2">
      : C extends "7"
      ? DOR<"4", "2">
      : C extends "8"
      ? DOR<"3", "2">
      : C extends "9"
      ? DOR<"2", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "1"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"9", "2">
      : C extends "8"
      ? DOR<"8", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"9", "2">
      : C extends "7"
      ? DOR<"8", "2">
      : C extends "8"
      ? DOR<"7", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"9", "2">
      : C extends "6"
      ? DOR<"8", "2">
      : C extends "7"
      ? DOR<"7", "2">
      : C extends "8"
      ? DOR<"6", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"9", "2">
      : C extends "5"
      ? DOR<"8", "2">
      : C extends "6"
      ? DOR<"7", "2">
      : C extends "7"
      ? DOR<"6", "2">
      : C extends "8"
      ? DOR<"5", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"2", "1">
      : C extends "1"
      ? DOR<"1", "1">
      : C extends "2"
      ? DOR<"0", "1">
      : C extends "3"
      ? DOR<"9", "2">
      : C extends "4"
      ? DOR<"8", "2">
      : C extends "5"
      ? DOR<"7", "2">
      : C extends "6"
      ? DOR<"6", "2">
      : C extends "7"
      ? DOR<"5", "2">
      : C extends "8"
      ? DOR<"4", "2">
      : C extends "9"
      ? DOR<"3", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "2"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"9", "2">
      : C extends "8"
      ? DOR<"8", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"9", "2">
      : C extends "7"
      ? DOR<"8", "2">
      : C extends "8"
      ? DOR<"7", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"9", "2">
      : C extends "6"
      ? DOR<"8", "2">
      : C extends "7"
      ? DOR<"7", "2">
      : C extends "8"
      ? DOR<"6", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"3", "1">
      : C extends "1"
      ? DOR<"2", "1">
      : C extends "2"
      ? DOR<"1", "1">
      : C extends "3"
      ? DOR<"0", "1">
      : C extends "4"
      ? DOR<"9", "2">
      : C extends "5"
      ? DOR<"8", "2">
      : C extends "6"
      ? DOR<"7", "2">
      : C extends "7"
      ? DOR<"6", "2">
      : C extends "8"
      ? DOR<"5", "2">
      : C extends "9"
      ? DOR<"4", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "3"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"9", "2">
      : C extends "8"
      ? DOR<"8", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"9", "2">
      : C extends "7"
      ? DOR<"8", "2">
      : C extends "8"
      ? DOR<"7", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"4", "1">
      : C extends "1"
      ? DOR<"3", "1">
      : C extends "2"
      ? DOR<"2", "1">
      : C extends "3"
      ? DOR<"1", "1">
      : C extends "4"
      ? DOR<"0", "1">
      : C extends "5"
      ? DOR<"9", "2">
      : C extends "6"
      ? DOR<"8", "2">
      : C extends "7"
      ? DOR<"7", "2">
      : C extends "8"
      ? DOR<"6", "2">
      : C extends "9"
      ? DOR<"5", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "4"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"1", "0">
      : C extends "4"
      ? DOR<"0", "0">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"9", "2">
      : C extends "8"
      ? DOR<"8", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"5", "1">
      : C extends "1"
      ? DOR<"4", "1">
      : C extends "2"
      ? DOR<"3", "1">
      : C extends "3"
      ? DOR<"2", "1">
      : C extends "4"
      ? DOR<"1", "1">
      : C extends "5"
      ? DOR<"0", "1">
      : C extends "6"
      ? DOR<"9", "2">
      : C extends "7"
      ? DOR<"8", "2">
      : C extends "8"
      ? DOR<"7", "2">
      : C extends "9"
      ? DOR<"6", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "5"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"2", "0">
      : C extends "4"
      ? DOR<"1", "0">
      : C extends "5"
      ? DOR<"0", "0">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"1", "0">
      : C extends "4"
      ? DOR<"0", "0">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"6", "1">
      : C extends "1"
      ? DOR<"5", "1">
      : C extends "2"
      ? DOR<"4", "1">
      : C extends "3"
      ? DOR<"3", "1">
      : C extends "4"
      ? DOR<"2", "1">
      : C extends "5"
      ? DOR<"1", "1">
      : C extends "6"
      ? DOR<"0", "1">
      : C extends "7"
      ? DOR<"9", "2">
      : C extends "8"
      ? DOR<"8", "2">
      : C extends "9"
      ? DOR<"7", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "6"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"3", "0">
      : C extends "4"
      ? DOR<"2", "0">
      : C extends "5"
      ? DOR<"1", "0">
      : C extends "6"
      ? DOR<"0", "0">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"2", "0">
      : C extends "4"
      ? DOR<"1", "0">
      : C extends "5"
      ? DOR<"0", "0">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"1", "0">
      : C extends "4"
      ? DOR<"0", "0">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"7", "1">
      : C extends "1"
      ? DOR<"6", "1">
      : C extends "2"
      ? DOR<"5", "1">
      : C extends "3"
      ? DOR<"4", "1">
      : C extends "4"
      ? DOR<"3", "1">
      : C extends "5"
      ? DOR<"2", "1">
      : C extends "6"
      ? DOR<"1", "1">
      : C extends "7"
      ? DOR<"0", "1">
      : C extends "8"
      ? DOR<"9", "2">
      : C extends "9"
      ? DOR<"8", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "7"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"4", "0">
      : C extends "4"
      ? DOR<"3", "0">
      : C extends "5"
      ? DOR<"2", "0">
      : C extends "6"
      ? DOR<"1", "0">
      : C extends "7"
      ? DOR<"0", "0">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"3", "0">
      : C extends "4"
      ? DOR<"2", "0">
      : C extends "5"
      ? DOR<"1", "0">
      : C extends "6"
      ? DOR<"0", "0">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"2", "0">
      : C extends "4"
      ? DOR<"1", "0">
      : C extends "5"
      ? DOR<"0", "0">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"1", "0">
      : C extends "4"
      ? DOR<"0", "0">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"8", "1">
      : C extends "1"
      ? DOR<"7", "1">
      : C extends "2"
      ? DOR<"6", "1">
      : C extends "3"
      ? DOR<"5", "1">
      : C extends "4"
      ? DOR<"4", "1">
      : C extends "5"
      ? DOR<"3", "1">
      : C extends "6"
      ? DOR<"2", "1">
      : C extends "7"
      ? DOR<"1", "1">
      : C extends "8"
      ? DOR<"0", "1">
      : C extends "9"
      ? DOR<"9", "2">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "8"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"5", "0">
      : C extends "4"
      ? DOR<"4", "0">
      : C extends "5"
      ? DOR<"3", "0">
      : C extends "6"
      ? DOR<"2", "0">
      : C extends "7"
      ? DOR<"1", "0">
      : C extends "8"
      ? DOR<"0", "0">
      : C extends "9"
      ? DOR<"9", "1">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"4", "0">
      : C extends "4"
      ? DOR<"3", "0">
      : C extends "5"
      ? DOR<"2", "0">
      : C extends "6"
      ? DOR<"1", "0">
      : C extends "7"
      ? DOR<"0", "0">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"3", "0">
      : C extends "4"
      ? DOR<"2", "0">
      : C extends "5"
      ? DOR<"1", "0">
      : C extends "6"
      ? DOR<"0", "0">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"2", "0">
      : C extends "4"
      ? DOR<"1", "0">
      : C extends "5"
      ? DOR<"0", "0">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"1", "0">
      : C extends "4"
      ? DOR<"0", "0">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"9", "1">
      : C extends "1"
      ? DOR<"8", "1">
      : C extends "2"
      ? DOR<"7", "1">
      : C extends "3"
      ? DOR<"6", "1">
      : C extends "4"
      ? DOR<"5", "1">
      : C extends "5"
      ? DOR<"4", "1">
      : C extends "6"
      ? DOR<"3", "1">
      : C extends "7"
      ? DOR<"2", "1">
      : C extends "8"
      ? DOR<"1", "1">
      : C extends "9"
      ? DOR<"0", "1">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : U extends "9"
  ? V extends "0"
    ? C extends "0"
      ? DOR<"9", "0">
      : C extends "1"
      ? DOR<"8", "0">
      : C extends "2"
      ? DOR<"7", "0">
      : C extends "3"
      ? DOR<"6", "0">
      : C extends "4"
      ? DOR<"5", "0">
      : C extends "5"
      ? DOR<"4", "0">
      : C extends "6"
      ? DOR<"3", "0">
      : C extends "7"
      ? DOR<"2", "0">
      : C extends "8"
      ? DOR<"1", "0">
      : C extends "9"
      ? DOR<"0", "0">
      : DOR<"0", "0">
    : V extends "1"
    ? C extends "0"
      ? DOR<"8", "0">
      : C extends "1"
      ? DOR<"7", "0">
      : C extends "2"
      ? DOR<"6", "0">
      : C extends "3"
      ? DOR<"5", "0">
      : C extends "4"
      ? DOR<"4", "0">
      : C extends "5"
      ? DOR<"3", "0">
      : C extends "6"
      ? DOR<"2", "0">
      : C extends "7"
      ? DOR<"1", "0">
      : C extends "8"
      ? DOR<"0", "0">
      : C extends "9"
      ? DOR<"9", "1">
      : DOR<"0", "0">
    : V extends "2"
    ? C extends "0"
      ? DOR<"7", "0">
      : C extends "1"
      ? DOR<"6", "0">
      : C extends "2"
      ? DOR<"5", "0">
      : C extends "3"
      ? DOR<"4", "0">
      : C extends "4"
      ? DOR<"3", "0">
      : C extends "5"
      ? DOR<"2", "0">
      : C extends "6"
      ? DOR<"1", "0">
      : C extends "7"
      ? DOR<"0", "0">
      : C extends "8"
      ? DOR<"9", "1">
      : C extends "9"
      ? DOR<"8", "1">
      : DOR<"0", "0">
    : V extends "3"
    ? C extends "0"
      ? DOR<"6", "0">
      : C extends "1"
      ? DOR<"5", "0">
      : C extends "2"
      ? DOR<"4", "0">
      : C extends "3"
      ? DOR<"3", "0">
      : C extends "4"
      ? DOR<"2", "0">
      : C extends "5"
      ? DOR<"1", "0">
      : C extends "6"
      ? DOR<"0", "0">
      : C extends "7"
      ? DOR<"9", "1">
      : C extends "8"
      ? DOR<"8", "1">
      : C extends "9"
      ? DOR<"7", "1">
      : DOR<"0", "0">
    : V extends "4"
    ? C extends "0"
      ? DOR<"5", "0">
      : C extends "1"
      ? DOR<"4", "0">
      : C extends "2"
      ? DOR<"3", "0">
      : C extends "3"
      ? DOR<"2", "0">
      : C extends "4"
      ? DOR<"1", "0">
      : C extends "5"
      ? DOR<"0", "0">
      : C extends "6"
      ? DOR<"9", "1">
      : C extends "7"
      ? DOR<"8", "1">
      : C extends "8"
      ? DOR<"7", "1">
      : C extends "9"
      ? DOR<"6", "1">
      : DOR<"0", "0">
    : V extends "5"
    ? C extends "0"
      ? DOR<"4", "0">
      : C extends "1"
      ? DOR<"3", "0">
      : C extends "2"
      ? DOR<"2", "0">
      : C extends "3"
      ? DOR<"1", "0">
      : C extends "4"
      ? DOR<"0", "0">
      : C extends "5"
      ? DOR<"9", "1">
      : C extends "6"
      ? DOR<"8", "1">
      : C extends "7"
      ? DOR<"7", "1">
      : C extends "8"
      ? DOR<"6", "1">
      : C extends "9"
      ? DOR<"5", "1">
      : DOR<"0", "0">
    : V extends "6"
    ? C extends "0"
      ? DOR<"3", "0">
      : C extends "1"
      ? DOR<"2", "0">
      : C extends "2"
      ? DOR<"1", "0">
      : C extends "3"
      ? DOR<"0", "0">
      : C extends "4"
      ? DOR<"9", "1">
      : C extends "5"
      ? DOR<"8", "1">
      : C extends "6"
      ? DOR<"7", "1">
      : C extends "7"
      ? DOR<"6", "1">
      : C extends "8"
      ? DOR<"5", "1">
      : C extends "9"
      ? DOR<"4", "1">
      : DOR<"0", "0">
    : V extends "7"
    ? C extends "0"
      ? DOR<"2", "0">
      : C extends "1"
      ? DOR<"1", "0">
      : C extends "2"
      ? DOR<"0", "0">
      : C extends "3"
      ? DOR<"9", "1">
      : C extends "4"
      ? DOR<"8", "1">
      : C extends "5"
      ? DOR<"7", "1">
      : C extends "6"
      ? DOR<"6", "1">
      : C extends "7"
      ? DOR<"5", "1">
      : C extends "8"
      ? DOR<"4", "1">
      : C extends "9"
      ? DOR<"3", "1">
      : DOR<"0", "0">
    : V extends "8"
    ? C extends "0"
      ? DOR<"1", "0">
      : C extends "1"
      ? DOR<"0", "0">
      : C extends "2"
      ? DOR<"9", "1">
      : C extends "3"
      ? DOR<"8", "1">
      : C extends "4"
      ? DOR<"7", "1">
      : C extends "5"
      ? DOR<"6", "1">
      : C extends "6"
      ? DOR<"5", "1">
      : C extends "7"
      ? DOR<"4", "1">
      : C extends "8"
      ? DOR<"3", "1">
      : C extends "9"
      ? DOR<"2", "1">
      : DOR<"0", "0">
    : V extends "9"
    ? C extends "0"
      ? DOR<"0", "0">
      : C extends "1"
      ? DOR<"9", "1">
      : C extends "2"
      ? DOR<"8", "1">
      : C extends "3"
      ? DOR<"7", "1">
      : C extends "4"
      ? DOR<"6", "1">
      : C extends "5"
      ? DOR<"5", "1">
      : C extends "6"
      ? DOR<"4", "1">
      : C extends "7"
      ? DOR<"3", "1">
      : C extends "8"
      ? DOR<"2", "1">
      : C extends "9"
      ? DOR<"1", "1">
      : DOR<"0", "0">
    : DOR<"0", "0">
  : DOR<"0", "0">;
