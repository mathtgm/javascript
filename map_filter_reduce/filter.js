const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornaPar(array) {
    return array.filter(function (item) {
        return item % 2 === 0;
    });
}

console.log(`Array original: ${array}`);
console.log(`Array com o filter: ${retornaPar(array)}`);
