class Solution:
    def dailyTemperatures(self, temps: List[int]) -> List[int]:
        ans = [0] * len(temps)
        stack = [0]
        for x in range(1, len(temps)):
            if temps[x] <= temps[stack[-1]]:
                stack.append(x)
            else:
                while stack and temps[x] > temps[stack[-1]]:
                    index = stack.pop()
                    ans[index] = x - index
                stack.append(x)
        return ans