type Test1 = Expecting<Equal<Add<-6936792, -7432202>, -14368994>>
type Test2 = Expecting<Equal<Subtract<-6936792, -7432202>, 495410>>
type Test3 = Expecting<Equal<Multiply<-6936792, -7432202>, 51555639375984>>
type Test4 = Expecting<Equal<Divide<-6936792, -7432202>, 0>>
type Test5 = Expecting<Equal<Modulus<-6936792, -7432202>, -6936792>>
type Test6 = Expecting<Equal<Add<-4432946, -9002246>, -13435192>>
type Test7 = Expecting<Equal<Subtract<-4432946, -9002246>, 4569300>>
type Test8 = Expecting<Equal<Multiply<-4432946, -9002246>, 39906470396716>>
type Test9 = Expecting<Equal<Divide<-4432946, -9002246>, 0>>
type Test10 = Expecting<Equal<Modulus<-4432946, -9002246>, -4432946>>
type Test11 = Expecting<Equal<Add<-5937981, 7721057>, 1783076>>
type Test12 = Expecting<Equal<Subtract<-5937981, 7721057>, -13659038>>
type Test13 = Expecting<Equal<Multiply<-5937981, 7721057>, -45847489765917>>
type Test14 = Expecting<Equal<Divide<-5937981, 7721057>, -1>>
type Test15 = Expecting<Equal<Modulus<-5937981, 7721057>, 1783076>>
type Test16 = Expecting<Equal<Add<2830592, 1045845>, 3876437>>
type Test17 = Expecting<Equal<Subtract<2830592, 1045845>, 1784747>>
type Test18 = Expecting<Equal<Multiply<2830592, 1045845>, 2960360490240>>
type Test19 = Expecting<Equal<Divide<2830592, 1045845>, 2>>
type Test20 = Expecting<Equal<Modulus<2830592, 1045845>, 738902>>
type Test21 = Expecting<Equal<Add<-231233, 1171422>, 940189>>
type Test22 = Expecting<Equal<Subtract<-231233, 1171422>, -1402655>>
type Test23 = Expecting<Equal<Multiply<-231233, 1171422>, -270871423326>>
type Test24 = Expecting<Equal<Divide<-231233, 1171422>, -1>>
type Test25 = Expecting<Equal<Modulus<-231233, 1171422>, 940189>>
type Test26 = Expecting<Equal<Add<-9827814, -10645>, -9838459>>
type Test27 = Expecting<Equal<Subtract<-9827814, -10645>, -9817169>>
type Test28 = Expecting<Equal<Multiply<-9827814, -10645>, 104617080030>>
type Test29 = Expecting<Equal<Divide<-9827814, -10645>, 923>>
type Test30 = Expecting<Equal<Modulus<-9827814, -10645>, -2479>>
type Test31 = Expecting<Equal<Add<5056426, 7126705>, 12183131>>
type Test32 = Expecting<Equal<Subtract<5056426, 7126705>, -2070279>>
type Test33 = Expecting<Equal<Multiply<5056426, 7126705>, 36035656456330>>
type Test34 = Expecting<Equal<Divide<5056426, 7126705>, 0>>
type Test35 = Expecting<Equal<Modulus<5056426, 7126705>, 5056426>>
type Test36 = Expecting<Equal<Add<3802835, -6748943>, -2946108>>
type Test37 = Expecting<Equal<Subtract<3802835, -6748943>, 10551778>>
type Test38 = Expecting<Equal<Multiply<3802835, -6748943>, -25665116653405>>
type Test39 = Expecting<Equal<Divide<3802835, -6748943>, -1>>
type Test40 = Expecting<Equal<Modulus<3802835, -6748943>, -2946108>>
type Test41 = Expecting<Equal<Add<7389100, 9422298>, 16811398>>
type Test42 = Expecting<Equal<Subtract<7389100, 9422298>, -2033198>>
type Test43 = Expecting<Equal<Multiply<7389100, 9422298>, 69622302151800>>
type Test44 = Expecting<Equal<Divide<7389100, 9422298>, 0>>
type Test45 = Expecting<Equal<Modulus<7389100, 9422298>, 7389100>>
type Test46 = Expecting<Equal<Add<-5275636, 9311672>, 4036036>>
type Test47 = Expecting<Equal<Subtract<-5275636, 9311672>, -14587308>>
type Test48 = Expecting<Equal<Multiply<-5275636, 9311672>, -49124992023392>>
type Test49 = Expecting<Equal<Divide<-5275636, 9311672>, -1>>
type Test50 = Expecting<Equal<Modulus<-5275636, 9311672>, 4036036>>

type num1 = ToSignedInteger<208>
//   ^?
type num2 = ToSignedInteger<2>
//   ^?

type d = DivideDigitArrayUtil<num1['integral'], num2['integral']>
//   ^?

type k = Divide<208, 2>
//   ^?
