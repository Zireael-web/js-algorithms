const arr = [5, 1, 8]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1; 
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr))
console.log(count)






// const factorial = (n) => {
//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(2))

// const fibonachi = (n) => {
//     if (n === 1 || n === 2) {
//         return 1
//     } 
//     return fibonachi(n-1) + fibonachi(n-2)
// }

// console.log(fibonachi(3))