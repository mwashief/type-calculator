import random
import math

test_no = 1



def test_case(what, expected):
    global test_no
    print(f"type Test{test_no} = Expecting<Equal<{what}, {expected}>>")
    # print(f"//{' '*(int(math.log10(test_no))+1)}                ^?")
    test_no += 1

for i in range(0, 10):
    x = random.randint(-10000000, 10000000)
    y = random.randint(-10000000, 10000000)
    test_case(f"Add<{x}, {y}>", x+y)
    test_case(f"Subtract<{x}, {y}>", x-y)
    test_case(f"Multiply<{x}, {y}>", x*y)