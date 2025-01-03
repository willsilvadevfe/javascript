function verificar(){
    var hora = new Date()
    var ano = hora.getFullYear()
    var res = document.getElementById('res')
    var nasc = document.getElementById('txtano')
    var idade = ano - nasc.value
    res.style.textAlign = 'center'
    res.style.paddingTop = '40px'
    res.innerHTML = `Sua idade é ${idade}`

    
}