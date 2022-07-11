enum profissao {
    Professora,
    Atriz,
    Desenvolvedora
}

const pessoa1 = {
    nome : 'Maria',
    idade : 29,
    profissao : 'Desenvolvedora'
}

//pessoa1.idade = '19';

const andre : {nome : string, idade : number, profissao : string} = {
    nome : 'André',
    idade : 20,
    profissao : 'Desenvolvedor'
};

const paula : {nome : string, idade : number, profissao : string} = {
    nome : 'Paula',
    idade : 21,
    profissao : 'Desenvolvedora'
}

interface Pessoa {
    nome : string,
    idade : number,
    profissao? : profissao
}

const vanessa : Pessoa = {
    nome : 'Vanessa',
    idade : 20,
    profissao: profissao.Desenvolvedora
}

interface Aluno extends Pessoa {
    materias : string[]
}

const jessica : Aluno = {
    nome : 'Jessica',
    idade : 21,
    profissao : profissao.Desenvolvedora,
    materias : ['Estatistica', 'Historia', 'Geografia']
}

const monica : Aluno = {
    nome : 'Monica',
    idade : 23,
    materias : ['Estatistica', 'Historia', 'Geografia']
}

function listar(lista : string[]) {
    for(const item of lista) {
        console.log('- ' + item);
    }
}

listar(monica.materias);