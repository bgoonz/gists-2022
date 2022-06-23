from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        # check for some base cases
        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1])
        # now we know there are at least 3 houses
        # dynamic programming part
        # start at the end of the row of houses
        # and build up our partial solution as we work backwards
        right_house = nums[-1]
        left_house = max(nums[-2], nums[-1])
        for current_house_num in range(len(nums) -3, -1, -1):
            current_house_val = max(left_house, nums[current_house_num] + right_house)
            right_house = left_house
            left_house = current_house_val
        return current_house_val
