const pokedex = [];
const pokemon = {};

alert("Hora de buildar seu pokemon para a liga, está preparado?")

do {
    const pokemon = {
        nome=prompt("Nome do Pokemon"),
        regiao=prompt("Região"),
        tipo=prompt("Tipo:"),
        habilidade=prompt("Habilidade"),
        natureza=prompt("Natureza"),
    }
    pokedex.push(pokemon)

    resposta=confirm("Deseja inserir mais algum pokemon?")

} while (resposta==true);

pokedex.forEach(pok => {
    alert(`POKEMON
        Nome: ${pok.nome}
        Região: ${pok.regiao}
        Tipo: ${pok.tipo}
        Habilidade: ${pok.habilidade}
        Natureza: ${pok.natureza}
        `)
});

alert(pokedex.length)