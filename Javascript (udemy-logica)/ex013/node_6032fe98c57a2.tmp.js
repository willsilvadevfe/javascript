/*Jogue dois dados quantas vezes forem necessárias até que a soma de pontos dos dados seja par por 10 vezes. Quantas vezes os dados foram jogados ?*/

let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)
let contador = 1

do{
    let dado1 = parseInt(Math.random() * 6 + 1)
    let dado2 = parseInt(Math.random() * 6 + 1)
    console.log(dado1, dado2)
}while(dado1 !== dado2)

//let respar = (dado1+dado2) % 2
//let loop = 0


