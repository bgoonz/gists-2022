from typing import List
from math import floor


class Solution:
    def linearFindPeakElement(self, nums: List[int]) -> int:
        # case when nums is single element
        if len(nums) == 1:
            return 0
        if len(nums) == 2:
            if nums[0] < nums[1]:
                return 1
            else:
                return 0
        # we know we have at least 3 elements in nums
        if nums[0] > nums[1]:
            return 0
        # do something in the middle
        for position, num in enumerate(nums[1:-1]):
            position += 1
            # print(f"testing position: {position}, value: {num}")
            if nums[position-1] < num and num > nums[position + 1]:
                return position
        # check the right side
        if nums[-1] > nums[-2]:
            return len(nums) - 1

    def logarithmicFindPeakElement(self, nums: List[int]) -> int:
        # case when nums is single element
        if len(nums) == 1:
            return 0
        if len(nums) == 2:
            if nums[0] < nums[1]:
                return 1
            else:
                return 0
        # we know we have at least 3 elements in nums
        # pick the middle element
        left = 0
        right = len(nums) - 1
        middle = floor((left + right) / 2)
        while right > left + 1:
            # check to see if middle position is in an increasing, decreasing etc
            # check if peak
            if nums[middle - 1] < nums[middle] and nums[middle] > nums[middle + 1]:
                return middle
            # check if decreasing
            if nums[middle - 1] > nums[middle]:
                right = middle - 1
            else:
                left = middle + 1
            middle = floor((left + right) / 2)
        # I've only got 2 elements left in my sub-array
        if nums[left] > nums[right]:
            return left
        else:
            return right
