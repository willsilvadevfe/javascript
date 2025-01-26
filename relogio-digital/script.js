let horas = document.getElementById('hour')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')


let relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()
    

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(sec < 10) sec = '0' + sec

    horas.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec
})

horas.style.color = 'orange'
horas.style.fontSize = '6.2em'
horas.style.fontFamily = 'Orbitron'
horas.style.fontWeight = 'bold'

minutes.style.color = 'orange'
minutes.style.fontSize = '6.2em'
minutes.style.fontFamily = 'Orbitron'
minutes.style.fontWeight = 'bold'

seconds.style.color = 'orange'
seconds.style.fontSize = '6.2em'
seconds.style.fontFamily = 'Orbitron'
seconds.style.fontWeight = 'bold'