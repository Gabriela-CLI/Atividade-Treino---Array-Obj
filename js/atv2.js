const veiculos = [];

let veiculo ={
    marca: "Opala",
    modelo: "Chevrolet",
    cor: "Preto com listas amarelas",
    potencia: "196cv",
    preco: 26900
}

alert("Marca: " + veiculo.marca + "\n" + "Modelo: " + veiculo.modelo + "\n" + "Cor: " + veiculo.cor + "\n" + "Potência: " + veiculo.potencia + "\n" + "Preço: R$ " + veiculo.preco)

let quantidade = Number(prompt("Quantos veículos deseja cadastrar hoje?"));

for (let i = 0; i < quantidade; i++) {

    const veiculo = {
        marca: prompt("Digite a marca do veículo:"),
        modelo: prompt("Digite o modelo do veículo:"),
        cor: prompt("Digite a cor do veículo:"),
        potencia: prompt("Digite a potência do veículo:"),
        preco: Number(prompt("Digite o preço do veículo:"))
    };

    veiculos.push(veiculo);
}

console.log("VEÍCULOS ABAIXO DE R$100.000");

veiculos.forEach(function(veiculo) {

    if (veiculo.preco < 100000) {

        console.log(
            "Marca: " + veiculo.marca +
            " | Modelo: " + veiculo.modelo +
            " | Cor: " + veiculo.cor +
            " | Potência: " + veiculo.potencia +
            " | Preço: R$ " + veiculo.preco
        );

        alert(
            "Veículo abaixo de R$100.000\n\n" +
            "Marca: " + veiculo.marca + "\n" +
            "Modelo: " + veiculo.modelo + "\n" +
            "Cor: " + veiculo.cor + "\n" +
            "Potência: " + veiculo.potencia + "\n" +
            "Preço: R$ " + veiculo.preco
        );
    }

});
