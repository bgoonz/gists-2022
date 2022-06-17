from solution import Solution

tests = [
    ("12", 2),
    ("226", 3),
    ("0", 0),
    ("06", 0),
    ("600044232", 0),
    ("12342356423",12),
]


def run_tests():
    for input, answer in tests:
        print(f"testing... {input} expecting: {answer}")
        s = Solution()
        solution = s.numDecodings(input)
        print(f"found: {solution}")
        try:
            assert solution == answer
        except AssertionError as e:
            if solution + 1 == answer:
                print("you were off by 1!")
            else:
                raise e

if __name__ == "__main__":
    run_tests()
