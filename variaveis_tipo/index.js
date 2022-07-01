numberOne = 1;

console.log(numberOne);

// let numberOne; //Vai dar erro, porque a variavel foi inicializada depois de atribuir um valor
var numberOne; //Vai dar certo, variaveis do tipo var pode ser inicializadas depois da atribuição de valor

var firstName = 'João';
var lastName = 'Souza'

if(firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva'; //Variavel presente dentro do escopo(if)

    console.log(firstName, lastName);
}

console.log(firstName, lastName);