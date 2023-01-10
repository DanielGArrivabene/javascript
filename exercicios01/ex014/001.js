
function carregar() {
    var corpo = window.document.getElementById('corpo')
    var text = document.getElementById('texto')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    text.innerHTML = 'Agora são ' + hora + ':' + min

    if (hora <= 12) {
        img.src = 'imagens/manhaok.png'
        corpo.style.background = '#fdf8bd'
    } else if (hora > 12 && hora < 18) {
        img.src = 'imagens/tardeok.png'
        corpo.style.background = '#f9d09f'
    } else {
        img.src = 'imagens/noiteok.png'
        corpo.style.background = '#662f08'
    }
}
