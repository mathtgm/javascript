function soma(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

console.log(soma(...numbers)); // O spread pegará cada número dentro do array e enviara para variavel da função