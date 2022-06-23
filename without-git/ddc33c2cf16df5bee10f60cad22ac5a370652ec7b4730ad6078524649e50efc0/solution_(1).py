from functools import reduce

def andReducer(left: int, right: int) -> int:
    return left & right

class Solution:
    # this is the accepted solution
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        bits_shifted_right = 0
        while left != right:
            left >>= 1
            right >>= 1
            bits_shifted_right += 1
        return left << bits_shifted_right
    
    # this is the brute force solution.
    # It has linear runtime with respect to the length of the range
    def rangeBitwiseAndReduce(self, left: int, right: int) -> int:
        return reduce(andReducer,range(left, right + 1))
