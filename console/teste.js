function returnEvenValues(array) {

    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log('O número ' + array[i] + ' não é par')
        }
    }

    return evenNums;
}

console.log('Hello World!');
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('Os número pares são: ' + returnEvenValues(array));