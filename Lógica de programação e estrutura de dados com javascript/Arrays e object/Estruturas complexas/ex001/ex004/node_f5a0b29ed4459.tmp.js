//Dado um objeto com nome do aluna e um Array com notas, mostre na tela as seguintes informações: 
//Nome, lista com as notas, média e se foi aprovado ou reprovado (nota de corte 7).

const aluno = {
    nome: "Willian",
    notas: [1, 3, 3, 8]
}

let contador = 0

while(contador < aluno.notas.length){
    let contagem = aluno.notas[contador]
    
    console.log(contador)

}



for(let i = 0;i < aluno.notas.length;i++){
        contador += aluno.notas[i]

}
