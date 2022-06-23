from solution import Solution

tests = [
    ([1,2,3,1], 4),
    ([2,7,9,3,1], 12),
]


def run_tests():
    for nums, answer in tests:
        s = Solution()
        print(f"testing {nums}, {answer}")
        found = s.rob(nums)
        print(f"\ffound {found}")
        assert found == answer

if __name__ == "__main__":
    run_tests()
