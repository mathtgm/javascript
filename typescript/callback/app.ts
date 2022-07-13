function somarValores(input1 : number, input2 : number, callback : (numero : number) => number) : number {
    let resultado = input1 + input2;
    return callback(resultado);
}

function aoQuadrado(numero : number) : number {
    return numero * numero;
}

console.log(somarValores(1, 2, aoQuadrado));