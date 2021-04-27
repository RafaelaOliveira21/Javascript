let totalVendas = []
let percentual = []
let nomes = []
let comissao = []

for(let i = 0; i < 2; i++){
    nomes.push(prompt(`Digite o nome do ${i+1}º vendedor:`))
    totalVendas.push(Number(prompt(`Digite o valor de vendas do ${nomes[i]}:`)))
    percentual.push(Number(prompt(`Digite o percentual do vendedor(a) ${nomes[i]}:`)))

    comissao.push(totalVendas[i] * percentual[i] / 100)

}

for(let j = 0; j < nomes.length; j++){
    document.getElementById('resultado').innerHTML = `Vendedor(a) ${nomes[j]} tem o total de R$ ${comissao[j]} para receber`
}


console.log(nomes)
console.log(totalVendas)
console.log(percentual)
console.log(comissao)
