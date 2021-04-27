function ex1() {
    let opt = 0; 
    let metragem = 0; 
    let quantidade = 0; 
    let valor = 0; 
    let andar = 0; 
    let posicaoSol = ''; 
    let valorFinal = 0;
 
    while (opt != 4) {
        opt = Number(prompt('Menu de opções: \n1- Valor total: \n2- Acréscimo em função do andar: \n3- Acréscimo em função da posição do sol: \n4- Sair:'))
 
        if (opt == 1) {
          metragem = Number(prompt('Digite a metragem do apartamento em m²: '))
          quantidade = Number(prompt('Digite a quantidade de garagem do apartamento: '))
   
          if (metragem <= 80) {
              if (quantidade == 1) {
                  valor = 300000
              } else if (quantidade == 2) {
                  valor = 320000
              } else if (quantidade == 3) {
                  valor = 340000
              }
          } else if (metragem > 80 && metragem < 120) {
              if (quantidade == 1) {
                  valor = 400000
              } else if (quantidade == 2) {
                  valor = 420000
              } else if (quantidade == 3) {
                  valor = 440000
              }
          } else if (metragem > 120) {
              if (quantidade == 1) {
                  valor = 500000
              } else if (quantidade == 2) {
                  valor = 520000
              } else if (quantidade == 3) {
                  valor = 540000
              }
          }
        } else if (opt == 2) {
          andar = Number(prompt('Digite o andar do apartamento que comprará:'))
 
          if (andar == 1) {
              valor = valor + 10000
          } else if (andar == 2) {
              valor = valor + 20000
          } else if (andar == 3) {
              valor =  valor + 30000
          }
        } else if (opt == 3) {
          posicaoSol = prompt('Digite a posição do sol que mais encomoda (M - Manhã ou T - Tarde!)').toUpperCase()
 
          if (posicaoSol == 'M') {
              valorFinal = valor + (valor * 0.05)
          } else if (posicaoSol == 'T') {
              valorFinal = valor + (valor * 0.08)
          }
        } else if (opt == 4) {
            alert('Obrigado!')
        } else {
            alert('Opção Inválida! Tente novamente.')
        }
    }
 
    if (valorFinal > 0) {
       alert(`O valor final do apartamento é de R$ ${valorFinal.toFixed(2)}`)
    } else {
       alert(`O valor final do apartamento é de R$ ${valor.toFixed(2)}`)
    }
 }

function ex2(){
    let maquina
    let vetor = []
    let maior3 = 0
    let idade = 0
    let media = 0
    let contador = 0
    let funcao = 0
    let porcentagem = 0
    let acabamento = 0

    for(let i = 0; i < 2; i++){
        maquina = new Object()
        maquina.idade = Number(prompt(`Digite a idade da máquina`))
        maquina.peso = Number(prompt(`Digite o peso da máquina`))
        maquina.altura = Number(prompt(`Digite a altura da máquina`))

        maquina.funcao = prompt(`Função da Máquina: \nC - para Corte \nA - para Aparar \nX - Chanfrar`).toUpperCase()
        maquina.departamento = prompt (`Departamento da máquina: \nA - para Acabamento \nC - para Criação \nP - Produção`).toUpperCase()

        vetor.push(maquina)
        maior3++
        if(vetor[i].idade > 3 && vetor[i].peso < 10.5){
        }

        if (vetor[i].altura < 8.5){
            contador++
            idade = idade + vetor[i].idade
            media = idade / contador
        }

        if(vetor[i].funcao === 'C'){
            funcao++
        }

        if (vetor[i].funcao != 'X' && vetor[i].departamento === 'A'){
            acabamento++
        }
        alert(maquina)
    }
    porcentagem = funcao * 100 / vetor.length
    alert(`maquinas com idades maiores que 3 anos e peso menor que 10.5kg é: ${maior3}`)
    alert(`a media de idade das maquinas com altura menor a 8.5 é: ${media}`)
    alert(`a porcentagem de maquinas com função de corte é de: ${porcentagem}`)
    alert(`a quantidade de maquinas de acabamento é de: ${acabamento}`)
    alert(vetor)
}

function ex3(){
    let opcoes = 0
    let vetPessoas = []
    let vetImoveis = []
    let pessoas
    let imoveis
    let total = 0
 
    while (opcoes != 4) {
       opcoes = Number(prompt(`Escolha uma opção: \n1. Cadastrar pessoa \n2. Cadastrar imóvel \n3. Mostrar valor do património: \n4. Sair`))
 
       if(opcoes == 1){
          pessoas = new Object
    
          pessoas.nome = prompt(`Informe o nome:`)
          pessoas.rg = prompt(`Informe o RG:`)
          pessoas.cpf = prompt(`Informe o CPF:`)
    
          vetPessoas.push(pessoas)
       }
 
       if(opcoes == 2){
          imoveis = new Object
    
          imoveis.endereco = prompt(`Informe o endereço do imóvel:`)
          imoveis.tamanho = prompt(`Informe o tamanho do imóvel:`)
          imoveis.valor = Number(prompt(`Informe o valor do imóvel:`))
          imoveis.rg = prompt(`Informe do RG do dono do imóvel:`)
          
          vetImoveis.push(imoveis)
       }
 
       for(let i = 0; i < vetImoveis.length; i++){
          if(vetPessoas[i].rg === vetImoveis[i].rg){
             pessoas.total = pessoas.total + vetImoveis[i].valor 
          }
       }
    }
    alert(vetPessoas)
    alert(vetImoveis)
    alert(total)
 }
