const array = [1, 2, 3, 4, 5, 6];

function somaItens(array) {
    return array.reduce(function(prevValue, item) {
        return prevValue + item;
    });
}

console.log(`A soma dos itens do array é ${somaItens(array)}`);