//Todo inicio de sistema o mesmo deve pedir o saldo inicial da peça!
    let saldoInicial = prompt('Qual o saldo inicial?');
    let resultado = "Saldo Inicial:" + " " + saldoInicial;
    console.log(resultado);
//Definir o tipo de entrada + quantidade
//tipo 1: compra (saldo inicial + quantidade)
//tipo 2: venda (saldo inicial - quantidade)...
//Definir as possíveis opções de tipos de entrada!
    let tipoEntrada1 = prompt('Qual o tipo de entrada?')
        tipoEntrada1 = 'compra','venda'
//Definir a quantidade das entradas!
    let tipoQuantidade = prompt('Qual a quantidade?')
        result1 = "Quantidade:" + " " + tipoQuantidade;
        console.log(result1);
//Definir os calculos de cada tipo de entrada
    let compra = tipoQuantidade
    while(compra + saldoInicial) {
        alertaCompra = "Total atualizado:" + " "
        console.log(alertaCompra,(parseInt(tipoQuantidade) + parseInt(saldoInicial)))
    };
    let venda = tipoQuantidade
    if (saldoInicial <= venda){
        venda = parseInt(tipoQuantidade) - parseInt(saldoInicial)
        console.log('Total atualizado: ${venda}');
    }
    else if (venda > saldoInicial) {
        alert('Saldo Insuficiente!')
    };