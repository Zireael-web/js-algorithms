// FIFO - First in - First out
// breadthFirst - figures out whether there is a solution for the graph(returns True or False)

let graphCount = 0;

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        graphCount += 1;
        const current = queue.shift()
        if (!graph[current]) {              
            graph[current] = []
        }
        if (graph[current].includes(end)) { 
            return true                             
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))     
console.log(`iterations required - ${graphCount}`)
