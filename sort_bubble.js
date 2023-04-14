const arr = [-2, 4, 44, 24, 2, 0, 125, -111, 33, -88, 12500, 102, -32, -521]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(arr))
console.log(count)