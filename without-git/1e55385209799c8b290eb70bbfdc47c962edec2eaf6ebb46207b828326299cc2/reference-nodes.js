
    class GraphNode {
      constructor(val) {
        this.val = val;
        this.neighbors = [];
      }
    }

    let a = new GraphNode("a");
    let b = new GraphNode("b");
    let c = new GraphNode("c");
    let d = new GraphNode("d");
    let e = new GraphNode("e");
    let f = new GraphNode("f");
    a.neighbors = [e, c, b];
    c.neighbors = [b, d];
    e.neighbors = [a];
    f.neighbors = [e];