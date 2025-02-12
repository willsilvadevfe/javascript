    alert('Coloque o valor para 2 dados com os valores entre 0 e 6.')
    let d1 = parseInt(prompt('Valor do primeiro dado:'))
    let d2 = parseInt(prompt('Valor do segundo dado:'))

    if(isNaN(d1) || isNaN(d2)){
        alert('Digite apenas números.')
    }

    while(!isNaN(d1) || !isNaN(d2) && d1<=6 && d2<=6 && d1>0 && d2>0){
        let res = 0
        d1 = parseInt(prompt('Valor do primeiro dado:'))
        d2 = parseInt(prompt('Valor do segundo dado:'))
        res++
    }

/*if(d1 < 6 || d1 > 0 || d2 < 6 || d2 > 0){
    for(let res = 0;d1 != d2;res++){
        alert('Valores diferentes, tente novamente!')
        d1 = parseInt(prompt('Valor do primeiro dado:'))
        d2 = parseInt(prompt('Valor do segundo dado:'))
}}else{
    alert('Os valores do dado são apenas do 1 até o 6, digite os valores corretos.')
    }
*/
