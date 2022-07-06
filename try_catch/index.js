function validaArray(array, numero) {

    try {

        if(!array && !numero) throw new ReferenceError('Parametros não inseridos');

        if(typeof array !== 'object') throw new TypeError('O array precisa ser um Object');

        if(typeof numero !== 'number') throw new TypeError('O numero precisa ser um number');

        if(array.length !== numero) throw new RangeError('Tamanho inválido');

        return array;

    } catch (error) {
        if(error instanceof ReferenceError) {
            console.log('Esse erro é um ReferenceError');
            console.log(error.name);
            console.log(error.stack);
        } else if(error instanceof TypeError) {
            console.log('Este é um erro de TypeError');
        } else if (error instanceof RangeError) {
            console.log('Fora do tamanho');
        } else {
            console.log(`Erro não identificado: ${error.name}`);
        }
    }

}

console.log(validaArray([1, 2, 3, 4, 5], 5));