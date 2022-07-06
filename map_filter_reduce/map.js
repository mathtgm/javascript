const desconto = 0.2;
const carrinho = [10, 120.99, 150, 5, 5.3];

function aplicaDesconto(array, thisArg) {
    return array.map(function(item) {
        return item - (item * this) ;
    }, thisArg);
}

console.log(aplicaDesconto(carrinho, desconto));