type ToRithNumber<T extends string> = StringTokenizeHead<
  T,
  NumberSign
>[0] extends NumberSign
  ? {
      sign: StringTokenizeHead<T, NumberSign>[0];
      integral: ToDigitArray<StringTokenizeHead<T, NumberSign>[1]>;
    }
  : { sign: "+"; integral: ToDigitArray<T> };

// Signed Integer
type RithNumber = { integral: DigitArray; sign: NumberSign };
type SanitizeRithNumber<T extends RithNumber> = {
  integral: SanitizeDigitArray<T["integral"]>;
  sign: SanitizeDigitArray<T["integral"]>["length"] extends 0 ? "+" : T["sign"];
};

type AddRithNumber<U extends RithNumber, V extends RithNumber> = V;
type SubtractRithNumber<
  U extends RithNumber,
  V extends RithNumber
> = V["sign"] extends "-"
  ? AddRithNumber<{ sign: "+"; integral: V["integral"] }, U>
  : V;

type kk = never extends Digit ? true : false;
type k = StringTokenizeHead<"+56", NumberSign>;
type num = ToRithNumber<"">;
//    ^?
