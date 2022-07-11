"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
})(profissao || (profissao = {}));
const pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: 'Desenvolvedora'
};
//pessoa1.idade = '19';
const andre = {
    nome: 'André',
    idade: 20,
    profissao: 'Desenvolvedor'
};
const paula = {
    nome: 'Paula',
    idade: 21,
    profissao: 'Desenvolvedora'
};
const vanessa = {
    nome: 'Vanessa',
    idade: 20,
    profissao: profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 21,
    profissao: profissao.Desenvolvedora,
    materias: ['Estatistica', 'Historia', 'Geografia']
};
const monica = {
    nome: 'Monica',
    idade: 23,
    materias: ['Estatistica', 'Historia', 'Geografia']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ' + item);
    }
}
listar(monica.materias);
