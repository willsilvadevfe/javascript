function clicar(){
    const tab = document.getElementById('tab')
    const btn = document.getElementById('btn')
    const boxValue = document.getElementById('numberbox')

    if(boxValue.value <= 0 || boxValue.value > 100 || boxValue.value == isNaN(boxValue)){
        alert('Digite apenas números entre 1 e 100 para gerar sua tabuada, números negativos, números iguais a 0 e qualquer outro tipo de caracter não é válido.')
    }else{
        let contador = 0
        while(contador <= 20){
            tab.innerHTML += `${boxValue.value} X ${contador} = ${boxValue.value * contador} </br>`
            contador++
          
        }
        
    }

    

}