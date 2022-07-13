"use strict";
function somarValores(input1, input2, callback) {
    let resultado = input1 + input2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValores(1, 2, aoQuadrado));
