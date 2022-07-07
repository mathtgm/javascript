class ContaBancaria {

    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Operação Negada';
        }

        return this._saldo -= valor;
    }

    depositar(valor) {
        return this._saldo += valor;
    }

}

class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito) {
        this._cartaoCredito = cartaoCredito;
    }
}

class contaPoupanca extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }

}

class contaUniversitaria extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitario';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada';
        }

        return this._saldo -= valor;
    }

}

