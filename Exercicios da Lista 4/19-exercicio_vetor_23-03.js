//exercicio 1
    function vetor1(){
        // declaração dos vetores
        let vetor = []; let pares = []; let impares = [];
        // entradas de dados
        for (let i = 1; i <= 6; i++){
            vetor.push(prompt(`Informe o valor do elemento ${i}`))
        }

        // entrada de dados sem o push
        // for(let i = 0; i < 6; i++){
        // vetor [i] = (prompt(`Informe o elemento ${i+1}`))    
        // }
        // criando os vetores de pares e de ímpares

    for(let i = 0; i < 6; i++){
        if (vetor[i] % 2 == 0){
        pares.push(vetor[i]) // alimento o vetor par
    }
        else {
            impares.push(vetor[i]) //alimento o vetor ímpar
        }
    }
        /* criando os vetores de pares e de ímpares sem o push
        let iPares = 0; let iImpares = 0
        for(let i = 0; i < 6; i++){
            if (vetor[i] % 2 == 0){
                pares[iPares] = (vetor[i]) // alimento o vetor par
                iPares++
            }
            else {
                impares[vetor] = vetor[i] //alimento o vetor ímpar
                iImpares++
            }
        }
        */
        alert (pares)
        alert (`Qtde de pares ${pares.length}`)
        alert (impares)
        alert (`Qtde de ímpares ${impares.length}`)
    }

//exercicio 2
    function vetor2(){
        //declaração dos vetores
        let vetor = []; let multiplos2 = []; let multiplos3 = []; let multiplos23 = [];
        for (let i = 0; i < 7; i++){
            vetor.push(prompt(`Informe o valor do elemento ${i+1}`))
        }
        // criação de outros vetores
        for(let i = 0; i < 7; i++){
            if (vetor[i] % 2 == 0){
                multiplos2.push(vetor[i]) // alimento o vetor multiplos2
            }
            if (vetor[i] % 3 == 0){
                multiplos3.push(vetor[i]) // alimento o vetor multiplos3
            }
            if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
                multiplos23.push(vetor[i]) //alimenta o valor multiplos23
            }
        }
        alert(multiplos2)
        alert(multiplos3) 
        alert(multiplos23)   
    }

//exercicio 4
    function vetor4(){
    //declaração dos vetores
    let vetor = []; let posicoes = [];
    //entrada
    for(let i = 0; i < 15; i++){
        vetor.push(prompt(`Informe o elemento ${i+1}`))
    }
    // verifica os elementos iguais a 30
    for(let i = 0; i < 15; i++){ //adiciona no vetor posições
        if(vetor[i] == 30) {
            posicoes.push(i)
        }
    }
        alert(posicoes)
    }

//exercicio 5
    function vetor5(){
        //declaração das variaveis
        let logica = []; let linguagem = []; let interseccao = [];
        // entrada de dados
        // o indice i será utilizado para percorrer vetor lógica
        for (let i = 0; i < 15; i++){
            logica.push(prompt(`Informe o RA do aluno ${i+1} que faz a disciplina de Lógica`))
        }
        // o indice j será utilizado para percorrer vetor linguagem
        for (let j = 0; j < 10; j++){
            linguagem.push(prompt(`Informe RA do aluno ${j+1} que faz a disciplina de Linguagem`))
        }
        // criar o vetor de intersecção
        for(let i = 0; i < 15; i++){ //para cada aluno de logica
            for(let j = 0; j < 10; j++){ //para cada aluno de linguagem
                if (logica [i] == linguagem[j]){
                    interseccao.push(logica[i])
                    break // sai do for mais interno pois não precisa continuar procurando
                }
            } 
        }
        alert(interseccao)       
    }