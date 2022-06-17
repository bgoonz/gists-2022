class Solution:

    def _recursiveDecode(self, s: str) -> int:
        # first check if my cached value exists
        if s in self.cache:
            return self.cache[s]
        # let's look for edge cases
        # if s is empty
        if not s:
            return 1
        if s[0] == "0":
            return 0
        if len(s) == 1:
            return 1
        # I know that there are at least 2 digits in s
        sum_so_far = 0
        sum_so_far += self._recursiveDecode(s[1:])
        if int(s[:2]) <= 26:
            sum_so_far += self._recursiveDecode(s[2:])
        self.cache[s] = sum_so_far
        return sum_so_far

    def numDecodings(self, s: str) -> int:
        # define a cache
        self.cache = {}
        # handle edge cases
        if not s or s[0] == "0":
            return 0
        return self._recursiveDecode(s)
