from typing import List
from collections import defaultdict

class Solution:

    def _search(self, row: int, col: int, word: str) -> bool:
        if not word:
            return True
        # check to see if I'm in a valid position
        if (
            row < 0 or row >= len(self.board)
            or col < 0 or col >= len(self.board[row])
            or self.visited_nodes[(row, col)]
            or self.board[row][col] != word[0]
        ):
            return False
        # start DFS
        self.visited_nodes[(row, col)] = True
        # I want to NOT check other nodes if I find true in a single path
        if self._search(row + 1, col, word[1:]):
            result = True
        elif self._search(row - 1, col, word[1:]):
            result = True
        elif self._search(row, col + 1, word[1:]):
            result = True
        elif self._search(row, col - 1, word[1:]):
            result = True
        else:
            result = False
        self.visited_nodes[(row, col)] = False
        return result

    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # build a dictionary with the positions of each letter as values
        # positions = {'a': [(0,1),(0,2),(1,2)], 'b': [...]}
        positions = defaultdict(list)
        self.board = board
        self.visited_nodes = defaultdict(bool)
        for row_num, row in enumerate(board):
            for col_num, letter in enumerate(row):
                positions[letter].append((row_num, col_num))
        
        result = []
        for word in words:
            # this any() generates the results of self._search() and takes the first True
            # result it finds and exits
            if any(self._search(row, col, word) for row, col in positions[word[0]]):
                result.append(word)
        return result