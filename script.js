function load() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('image')

    let date = new Date()
    let hour = date.getHours()
    msg.innerHTML = `Now are ${hour} hours`

    if (hour >= 0 && hour < 12){
        img.src = './images/morning.jpg'
        document.body.style.background = 'rgb(210, 229, 115)'
    } else if (hour >= 12 && hour < 18){
        img.src = './images/afternoon.jpg'
        document.body.style.background = 'rgb(228, 158, 100)'
    } else {
        img.src = './images/night.jpg'
        document.body.style.background = 'rgb(50, 113, 169)'
    }
}
