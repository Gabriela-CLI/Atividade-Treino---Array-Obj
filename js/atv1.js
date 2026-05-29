const pokedex = [];
const pokemon = {};

alert("Hora de buildar seu pokemon para a liga, está preparado?")

do {
    pokemon.nome=prompt("Nome do Pokemon");
    pokemon.regiao=prompt("Região");
    pokemon.tipo=prompt("Tipo:");
    pokemon.habilidade=prompt("Habilidade");
    pokemon.natureza=prompt("Natureza");

    alert("Parabéns, você já escolheu seu pokemon! Agora é hora de definir o status!");

    pokemon.hp=prompt("Valor HP");
    pokemon.atk=prompt("Ataque:");
    pokemon.def=prompt("Defensa");
    pokemon.spatk=prompt("Ataque Especial");
    pokemon.spdef=prompt("Defesa Especial");
    pokemon.speed=prompt("Velocidade")

    pokedex.push(pokemon);

    resposta=confirm("Deseja inserir mais algum pokemon?")

} while (resposta==true);

pokedex.forEach(pok => {
    alert(`POKEMON
        Nome: ${pok.nome}
        Região: ${pok.regiao}
        Tipo: ${pok.tipo}
        Habilidade: ${pok.habilidade}
        Natureza: ${pok.natureza}

        STATUS
        HP: ${pok.hp}
        Ataque: ${pok.atk}
        Defesa: ${pok.def}
        Ataque Especial: ${pok.spatk}
        Defesa Especial: ${pok.spdef}
        Velocidade: ${pok.speed}
        `)
});

alert(pokedex.length)