function Ex1() {
    let opcao = 0
    let metragem = 0
    let garagem = 0
    let valor = 0
    let andar = 0
    let posicao = ""
    let porcentagem = 0

    while (opcao != 4) {
        opcao = Number(prompt(`Digite um número para o menu: \n \n1- Valor Total \n2- Acréscimo em função do Andar \n3- Acréscimo em função da posição do Sol \n4- Sair`))

        if (opcao == 1) {
            metragem = Number(prompt(`Digite o valor da metragem:`))
            garagem = Number(prompt(`Digite a quantidade de garagens: (Máximo até 3)`))

            if (metragem <= 80) {
                if (garagem == 1) {
                    valor = 300000
                }
                else if (garagem == 2) {
                    valor = 320000
                }
                else if (garagem == 3) {
                    valor = 340000
                }
            }
            else if (metragem > 80 && metragem <= 120) {
                if (garagem == 1) {
                    valor = 400000
                }
                else if (garagem == 2) {
                    valor = 420000
                }
                else if (garagem == 3) {
                    valor = 440000
                }
            }
            else if (metragem > 120) {
                if (garagem == 1) {
                    valor = 500000
                }
                else if (garagem == 2) {
                    valor = 520000
                }
                else if (garagem == 3) {
                    valor = 540000
                }
            }
        }

        
        else if (opcao == 2) {
            andar = Number(prompt(`Digite o valor do andar: (Máximo até 3)`))
            if (andar == 1) {
                valor += 10000
            }
            else if (andar == 2) {
                valor += 20000
            }
            else if (andar == 3) {
                valor += 30000
            }
        }


        else if (opcao == 3) {
            posicao = (prompt(`Digite: "M" - para manhã ou "T" - para tarde`)).toUpperCase()
            if (posicao == "M") {
                porcentagem = valor + (valor * 0.05)
            }
            else if (posicao == "T"){
                porcentagem = valor + (valor * 0.08)
            }
        }


        else if (opcao == 4){
            alert(`Fechando o programa`)
        }
        else {
            alert(`Opção Inválida`)
        }


        if (porcentagem > 0){
            document.getElementById("resultado").innerHTML = `O valor final é de: ${porcentagem}` 
        }
        else {
            document.getElementById("resultado").innerHTML = `O valor final é de: ${valor}`
        }
    }

}