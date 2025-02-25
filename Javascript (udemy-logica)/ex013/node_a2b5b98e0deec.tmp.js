/*Jogue dois dados quantas vezes forem necessárias até que a soma de pontos dos dados seja par por 10 vezes. Quantas vezes os dados foram jogados ?*/

let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)
let res = (dado1+dado2) % 2
let contador = 1


while(res < 6){
    let dado1 = parseInt(Math.random() * 6 + 1)
    let dado2 = parseInt(Math.random() * 6 + 1)
    console.log(dado1, dado2)
    contador++
    continue
}
    


/*for(let p = 0;p < 5;p++){
    let dado1 = parseInt(Math.random() * 6 + 1)
    let dado2 = parseInt(Math.random() * 6 + 1)
    console.log(dado1, dado2)
     if(res === true){
        console.log('Números pares detectados ... Continuando ...')
        continue
     }
    }

    

//let respar = (dado1+dado2) % 2
//let loop = 0*/


