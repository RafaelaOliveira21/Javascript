function Ex2(){
    let vetor = []
    let quantidadeMaquinas = 0
    let media = 0
    let alturaInferior = 0
    let idadeMaquinas = 0

    for (let i = 0; i < 2; i++){
        objeto = new Object

        objeto.idade = Number(prompt(`Digite a idade da ${i+1}ª máquina: `))
        objeto.peso = Number(prompt(`Digite o peso da ${i+1}ª máquina: `))
        objeto.altura = Number(prompt(`Digite a altura da ${i+1}ª máquina:`))
        objeto.funcao = prompt(`Escolha uma das opções abaixo para a função da máquina: \n \nC - Para corte \nA - Para aparar \nX - Para chanfrar`)
        objeto.departamento = prompt(`Escolha uma das opções abaixo para o departamento da máquina: \n \nA - Para acabamento \nC - Para criação \nP - Para produção`)

        vetor.push(objeto)

        if (vetor[i].idade > 3 && vetor[i].peso < 10.5) {
            quantidadeMaquinas++
        }

        else if (vetor[i].altura < 8.5) {
            alturaInferior++
            idadeMaquinas += vetor[i].idade
            media = idadeMaquinas / alturaInferior
        }
        

    }
    console.log(vetor)
}
