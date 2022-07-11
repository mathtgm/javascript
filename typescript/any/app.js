"use strict";
let valorAny;
valorAny = 3;
valorAny = true;
console.log(valorAny);
let valorString = 'Teste';
//valorString = true;
valorString = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorAny, valorString);
