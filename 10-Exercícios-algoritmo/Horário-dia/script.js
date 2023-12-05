function carregar() {
    var msg = window.document.getElementById('horario')
    var img = window.document.getElementById('img') 
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#ECD492'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#9CD4F5'
    } else {
        // BOA NOITE 
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1C243F'
    }
}