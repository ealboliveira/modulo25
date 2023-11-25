class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno('Eduardo', 10),
    new Aluno('Leonardo', 6),
    new Aluno('Isabela', 8),
    new Aluno('Luiz', 3),
];

function obterAlunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >=8);
}

const alunosAprovados = obterAlunosAprovados(alunos);

console.log('Todos os Alunos: ', alunos);
console.log('Alunos APROVADOS: ', alunosAprovados);
