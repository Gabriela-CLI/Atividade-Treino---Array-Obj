const Alunos = [];

do{
    const aluno = {
        nome: prompt("Digite o nome do aluno:"),
        disciplina: prompt("Digite a disciplina do aluno:"),
        qtdFaltas: Number(prompt("Digite a quantidade de faltas do aluno:")),
        notaFinal: Number(prompt("Digite a nota final do aluno:"))
    }
    Alunos.push(aluno);
}while(confirm("Deseja cadastrar um novo aluno?"));

console.log(Object.values(Alunos))

Alunos.forEach(aluno => {
    if(aluno.qtdFaltas == 0)
    alert(`Aluno: ${aluno.nome}
        Disciplina: ${aluno.disciplina}
        Quantidade de faltas: ${aluno.qtdFaltas}
        Nota final: ${aluno.notaFinal}
    `)
    });

