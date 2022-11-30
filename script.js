//Todo inicio de sistema o mesmo deve pedir o saldo inicial da peça!
    let saldoInicial = prompt('Qual o saldo inicial?');
    let resultado = "Saldo Inicial:" + " " + saldoInicial;
    alert(resultado);
//Definir o tipo de entrada + quantidade
//tipo 1: compra (saldo inicial + quantidade)
//tipo 2: venda (saldo inicial - quantidade)...
    let tipoEntrada1 = prompt('Qual o tipo de entrada?')
    let resultado1 = "Tipo de entrada:" + " " + tipoEntrada1;
    alert(resultado1);
//Definir as possíveis opções de tipos de entrada!
    if (tipoEntrada1 = "compra") {
        let compra = prompt('Qual a quantidade?')
        let result1 = "Quantidade:" + " " + compra;
        console.log(result1);
    }
    else if(tipoEntrada1= "venda") {
        let venda = prompt('Qual a quantidade?')
        let result2 = "Quantidade:" + " " + venda;
        console.log(result2);
    };
//Definir os calculos de cada tipo de entrada
if (venda < saldoInicial) {
    alert('Saldo Insuficiente');
}
