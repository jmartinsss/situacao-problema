//Todo inicio de sistema o mesmo deve pedir o saldo inicial da peça!
    let saldoInicial = prompt('Qual o saldo inicial?');
    let result = 'Saldo Inicial:' + ' ' + saldoInicial;
    console.log(result);

//Proximo passo é o sistema perguntar qual o tipo de entrada:
//tipo 1: compra
//tipo 2: venda
let tipoEntrada = prompt('Qual o tipo de entrada?');
let quantidadeTipo1 = prompt('Qual a quantidade?');
console.log(quantidadeTipo1);

function tipoEntrada(); {
    tipoEntrada = quantidadeTipo1 + result;
}

let tipoEntrada = 'compra'
console.log(tipoEntrada);
//chamar o fuction no código!
tipoEntrada();

let resultTipo = tipoEntrada;
console.log(resultTipo);
//Proximo passo é desenvolver as possibilidades:
//tipo 1: saldo + quantidade de peças (Se saldo > quantidade = 'Saldo Atualizado')
//tipo 2: saldo - quantidade de peças (Se saldo < quantidade = "Saldo Insuficiente")
