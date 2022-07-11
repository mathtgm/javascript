let valorAny : any;

valorAny = 3;
valorAny = true;

console.log(valorAny);

let valorString : string = 'Teste';
//valorString = true;
valorString = valorAny;

function somarString(string1 : string , string2 : string) {
    console.log(string1 + string2);
}

somarString(valorAny, valorString);