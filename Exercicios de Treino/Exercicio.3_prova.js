/* Utilizando dois vetores de objetos, faça um programa que execute as atividades abaixo:
1) Cadastrar 10 pessoas contendo rg, cpf e nome
2) Cadastrar 10 imóveis contendo endereço, tamanho, valor e rg do dono. Não pode criar imóvel de pessoa que não esteja cadastrada
3) A partir do RG informado, calcule e mostre o valor total em imóvel desta pessoa, mostrando também o nome */

function Ex3() {

    let pessoas = []
    let imoveis = []
    let objeto1
    let objeto2
    let opcoes = 0
    let rg = 0
    let valorTotal = 0
    let achou = 0

    while (opcoes != 4) {

        opcoes = Number(prompt(`Escolha uma das opções abaixo: \n \n1- Cadastrar o proprietário(a) \n2- Cadastrar o imóvel \n3- Cadastrar o valor total dos imóveis \n4- Sair do Programa`))

        if (opcoes == 1) {
            objeto1 = new Object

            objeto1.nome = prompt(`Digite o nome do(a) proprietário(a)`)
            objeto1.rg = Number(prompt(`Digite o Rg do(a) ${objeto1.nome}`))
            objeto1.cpf = Number(prompt(`Digite o CPF do(a) ${objeto1.nome}`))

            pessoas.push(objeto1)
        }

        else if (opcoes == 2) {
            objeto2 = new Object
            let cadastro = 0

            objeto2.rgDono = Number(prompt(`Digite o RG do(a) dono(a) do imóvel`))

            for (let i = 0; i < pessoas.length; i++) {
                if (objeto2.rgDono == pessoas[i].rg) {

                    objeto2.endereço = prompt(`Digite o endereço de imóvel`)
                    objeto2.tamanho = Number(prompt(`Digite o tamanho do terreno do imóvel`))
                    objeto2.valor = Number(prompt(`Digite o valor do imóvel`))
                    cadastro = 1
                }
            }

            if (cadastro == 0) {
                alert(`O proprietário não foi cadastrado`)
            }
            else if (cadastro == 1) {
                imoveis.push(objeto2)
            }
        }

        else if (opcoes == 3) {

            rg = Number(prompt(`Digite o Rg da pessoa que você deseja ver o valor total de imóveis:`))

            for (let i = 0; i < imoveis.length; i++) {
                if (rg == imoveis[i].rgDono) {
                    valorTotal += imoveis[i].valor
                    achou = 1
                }
            }

            let nome = 0
            for (let j = 0; j < pessoas.length; j++) {
                if (rg == pessoas[j].rg) {
                    nome == pessoas[j].nome
                }
            }

            if (achou == 1) {
                alert(`O valor total do imóvel do(a) ${nome} é de R$ ${valorTotal}`)
            }
            else {
                alert(`O valor total do imóvel não foi encontrado`)
            }
        }

        else if (opcoes == 4) {
            alert(`Saindo do programa`)
        }
        else {
            alert(`Opção Inválida`)
        }
    }
    console.log(pessoas)
    console.log(imoveis)
}


