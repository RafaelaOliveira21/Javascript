function Ex2() {
    let vetor = []
    let quantidadeMaquinas = 0
    let alturaInferior = 0
    let idadeMaquinas = 0
    let media = 0
    let porcentagem = 0
    let maquinaCorte = 0
    let maquinaDepartamento = 0

    for(let i = 0; i < 20; i++){
        objeto = new Object 
        
        objeto.idade = Number(prompt(`Digite a idade da ${1+i}ª máquina: `))
        objeto.peso = Number(prompt(`Digite o peso da ${1+i}ª máquina: `))
        objeto.altura = Number(prompt(`Digite a altura da ${1+i}ª máquina: `))
        objeto.funcao = prompt(`Escolha uma das opções e digite: \nC - Para Corte \nA - Para Aparar \nX - Para Chanfrar`).toUpperCase()
        objeto.departamento = prompt(`Escolha uma das opções e digite: \nA - Para acabamento \nC - Para Criação \nP - Para Produção`).toUpperCase()

        vetor.push(objeto)
        console.log(vetor)

        if (vetor[i].idade > 3 && vetor[i].peso < 10.5){
            quantidadeMaquinas++
        }

        if (vetor[i].altura < 8.5){
            alturaInferior++
            idadeMaquinas += vetor[i].idade
            media = idadeMaquinas / alturaInferior 
        }

        if (vetor[i].funcao == 'C'){
           maquinaCorte++
        }

        if (vetor[i].departamento == 'A' && vetor[i].funcao != 'X'){
            maquinaDepartamento++
        }
            
    }
    porcentagem = maquinaCorte * 100 / vetor.length

    document.getElementById("resultado1").innerHTML = `A quantidade de máquinas com idade superior a 3 anos e peso inferior a 10.5kg é: ${quantidadeMaquinas}`
    document.getElementById("resultado2").innerHTML = `A media das idades das máquinas com altura inferior a 8.5 é: ${media}`
    document.getElementById("resultado3").innerHTML = `A porcentagem de máquinas com função para corte entre todas as máquinas analisadas: ${porcentagem}`
    document.getElementById("resultado4").innerHTML = `A quantidade de máquinas do departamento de acabamento e que não são utilizadas para chanfração é: ${maquinaDepartamento}`
}