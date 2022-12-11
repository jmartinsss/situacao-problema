


function tipoEntrada(){
      let text;
      //Todo inicio de sistema o mesmo deve pedir o saldo inicial da peça!
      let saldoInicial = prompt('Qual o saldo inicial?');
      console.log(`Saldo Inicial: ${saldoInicial}`);
      //Definir o tipo de entrada
      //Definir as possíveis opções de tipos de entrada!
      let venda = "venda"
      let compra = "compra"
      let tipoEntrada = prompt("Qual o tipo de entrada?",venda,compra);
      console.log(`Tipo de Entrada: ${tipoEntrada}`);
      //Definir a quantidade da entrada!
      let Quantidade = prompt('Qual a quantidade?');
      console.log(`Quantidade: ${Quantidade}`);
if(tipoEntrada<saldoInicial){
      switch (tipoEntrada) {
            case venda:
                  let resultado = parseInt(saldoInicial) - parseInt(Quantidade);
                text = `Saldo atualizado: ${resultado}`;
                  break;
      
            case compra:
                  let resultado1 = parseInt(saldoInicial) + parseInt(Quantidade);
                  text = `Saldo atualizado:` + ' ' + resultado1;
                  break;
      }
}
      document.getElementById("tipoEntrada").innerHTML = text;
}
