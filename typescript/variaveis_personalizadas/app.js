"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}
console.log(somarValores(1, 2));
console.log(somarValores('2', '2'));
console.log(somarValores('3', 5));
console.log(somarValores('Olá, ', 'tudo bem?'));