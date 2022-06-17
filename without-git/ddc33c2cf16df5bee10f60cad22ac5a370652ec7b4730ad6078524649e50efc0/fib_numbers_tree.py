import os
# Enter your code here. Read input from STDIN. Print output to STDOUT

def nth_fib_sequence(n):
    prev, next = 0, 1

    for i in range(n):
        prev, next = next, prev + next

    return prev

class Node:
    def __init__(self, name, parent):
        self.parent = parent
        self.value = 0
        self.name = name
        self.children = []

    def __str__(self):
        return f"Node {self.parent}, {self.value}"

    def print_children(self):
        for child in self.children:
            print(child)

    def op1(self, node_name, nodes, n):
        # you have to locate the node in the tree by its name
        node = nodes[node_name]
        # add the nth Fib number the node's value 
        node.value += nth_fib(n)
        # recurse with the next level of children and n+1
        for child in node.children:
            self.op1(child.name, nodes, n+1)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    num_nodes, num_ops = input().split()

    node_names = [int(input()) for _ in range(int(num_nodes)-1)]

    ops = []

    for _ in range(int(num_ops)-1):
        x, y, z = input().split()
        ops.append((x, y, z))

    nodes = {1: Node(1, 0)}

    for index, parent in enumerate(node_names):
        new_node = Node(index + 2, parent)
        nodes[index+2] = new_node
        nodes[parent].children.append(new_node)

    nodes[1].op1(1, nodes, 1)

    for name, node in nodes.items():
        print(name, node)

    # fptr.write(' '.join(map(str, result)))
    # fptr.write('\n')

    fptr.close()