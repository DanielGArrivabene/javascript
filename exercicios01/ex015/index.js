function verify() {
    var agora = new Date()
    var data = agora.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    var img = document.getElementsByTagName('img')[0]

    if (fano.value == 0 || fano.value > data) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sex = window.document.getElementsByName('radiosex')
        var idade = data - Number(fano.value)
        var genero = ''

        if (sex[0].checked) {
            genero = 'Homem'
            
            if (idade <= 28) {
                var idade = 'j'
            } else if (idade <= 60) {
                idade = 'a'
            } else {
                idade = 'i'
            }

            switch (idade) {
                case 'j': 
                    res.style.display = 'block'
                    break
                case 'a':
                    res.style.display = 'block'
                    img.src = 'imagens/ah.png'
                    break
                case 'i':
                    res.style.display = 'block'
                    img.src = 'imagens/ih.png'
                    break
            }

        } else {
            genero = 'Mulher'

            if (idade <= 28) {
                var idade = 'j'
            } else if (idade <= 60) {
                idade = 'a'
            } else {
                idade = 'i'
            }

            switch (idade) {
                case 'j': 
                    res.style.display = 'block'
                    img.src = 'imagens/jm.png'
                    break
                case 'a':
                    res.style.display = 'block'
                    img.src = 'imagens/am.png'
                    break
                case 'i':
                    res.style.display = 'block'
                    img.src = 'imagens/im.png'
                    break

            }
        }
        
    }

}