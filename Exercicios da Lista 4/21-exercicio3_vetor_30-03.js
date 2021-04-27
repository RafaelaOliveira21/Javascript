function vetor3(){
    //declaração de vetor
    let vet = []
    //entrada de 10 códigos e 10 qtdes em estoque
    for (let i = 0; i < 10; i++){
        //cria o objeto
        let objeto = new Object()
        //alimenta o objeto
        objeto.codigo = prompt(`Informe o código do produto ${i+1}`)
        objeto.qtde = Number(prompt(`Informe a qtde em estoque do produto ${i+1}`))
        //insere o objeto no vetor
        vet.push(objeto)
        alert(`Produto inserido com sucesso`)
    }

    let cliente = prompt(`Informe o código do cliente`)
    do{
    let produto = prompt(`Informe o código do produto para compra`)
    //verifica se o produto existe
    let achou = 0 //achou o produto
    for (let i = 0; i < 10; i++){
        if (produto == vet[i].codigo){
            //encontramos na posição i
            let qtdeCompra = Number(prompt(`Vai comprar quanto?`))
            //tem em estoque suficiente
            if(qtdeCompra <= vet[i].qtde){
                //atualiza em estoque
                vet[i].qtde = vet[i].qtde - qtdeCompra
                alert(`Venda realizada com sucesso - estoque atualiza ${vet[i].qtde}`)
            }
            else {
                alert(`Estoque insuficiente`)
            }
        }
    }
        if (achou == 0){
            alert(`Produto não existe`)
        }
        cliente = prompt(`Informe código do novo cliente. Digite 0 para encerrar`)
    }
    while(cliente != 0)    
}

function vetor6(){
    //declaração das variáveis
    let vetor = []
    //entrada de dados
    for (let i = 0; i < 3; i++){
        //cria objeto
        let objeto = new Object
        objeto.vendas = Number (prompt(`Informe o total de vendas do vendedor ${i+1}`))
        objeto.nome = prompt(`Informe o nome do vendedor ${i+1}`)
        objeto.percentual = Number(prompt(`Informe o percentual de comissão do vendedor ${i+1}`))
        //calcula comissão
        objeto.comissao = (objeto.vendas * objeto.percentual) / 100
        //insere no vetor
        vetor.push(objeto)
    }
    //mostre o valor de comissão de cada vendedor
    console.log(vetor)
    //total das vendas de todos os vendedores
    let totalVendas = 0
    //maior e menor valor e quem os receberão
    let maiorComissao = vetor [0].comissao
    let nomeMaior = vetor[0].nome
    let menorComissao = vetor[0].comissao
    let nomeMenor = vetor[0].nome
    for (let i = 0; i < 3; i++){
        totalVendas = totalVendas + vetor[i].vendas
        if (vetor[i].comissao > maiorComissao){
            maiorComissao = vetor[i].comissao
            nomeMaior = vetor[i].nome
        }
        if (vetor[i].comissao < menorComissao){
            menorComissao = vetor[i].comissao
            nomeMenor = vetor[i].nome
        }
    }
    console.log(`Total de vendas é ${totalVendas}`)
    console.log(`Maior comissao é de ${maiorComissao} do vendedor ${nomeMenor}`)
    console.log(`Menor comissao é de ${menorComissao} do vendedor ${nomeMenor}`)
}