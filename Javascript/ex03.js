//Função simples
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("Ana"));

//Função anônima
const soma = function (a, b) {
    return a + b;
};

console.log(soma(5, 3));

//Arrow function (função de seta)
const multiplicacao = (a, b) => a * b;

console.log(multiplicacao(4, 2));

const pessoa = {
    nome: "Carlos",
    idade: 28,
    profissao: "Desenvolvedor",
    saudar: function () {
        return "Oi, meu nome é " + this.nome + " e eu sou um " +
            this.profissao + ".";
    }
};

console.log(pessoa.nome); 
console.log(pessoa.saudar()); 