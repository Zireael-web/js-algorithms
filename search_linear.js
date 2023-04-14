const array = [1, 2, 19, 51, 424, 0, -1, 5, 26, 130];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return 'error';
}

console.log(linearSearch(array, 26));
console.log(`count - ${count}`);