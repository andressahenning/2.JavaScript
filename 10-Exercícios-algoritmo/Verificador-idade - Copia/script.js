function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        resultado.innerHTML = `Idade calculada: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        pessoa = ''

        if (fsex[0].checked) {
            
            if (idade >= 0 && idade <= 3) {
                // BEBÊ 
                img.setAttribute ('src', 'imagens/babyboy.png')
                document.body.style.background = '#04406F'
                resultado.innerHTML = `Detectamos um bebê com ${idade} anos de idade.`
                pessoa = 'bebê'

            } else if (idade <= 10) {
                // CRIANÇA
                img.setAttribute ('src', 'imagens/boy.png')
                document.body.style.background = '#AAB8D9'
                resultado.innerHTML = `Detectamos uma ${pessoa} com ${idade} anos de idade.`

            } else if (idade <= 21) {
                // ADOLESCENTE
                img.setAttribute ('src', 'imagens/teenboy.png')
                document.body.style.background = '#038AC2'
                resultado.innerHTML = `Detectamos um adolescente com ${idade} anos.`

            } else if (idade <= 50) {
                // ADULTO
                img.setAttribute ('src', 'imagens/man.png')
                document.body.style.background = '#A3C2C4'
                resultado.innerHTML = `Detectamos um homem com ${idade} anos.`

            } else if (idade <= 120) {
                // IDOSO
                img.setAttribute ('src', 'imagens/oldman.png')
                document.body.style.background = '#503B31'
                resultado.innerHTML = `Detectamos um senhor com ${idade} anos.`

            } else {
                // MÚMIA
                img.setAttribute ('src', 'imagens/mummy.png')
                document.body.style.background = '#17181A'
                resultado.innerHTML = `Detectamos uma múmia com ${idade} anos.`
            }            

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade <= 3) {
                // BEBÊ 
                img.setAttribute ('src', 'imagens/babygirl.png')
                document.body.style.background = '#A88B83'
                resultado.innerHTML = `Detectamos um bebê com ${idade} anos de idade.`

            } else if (idade <= 10) {
                // CRIANÇA
                img.setAttribute ('src', 'imagens/girl.png')
                document.body.style.background = '#D47A48'
                resultado.innerHTML = `Detectamos uma criança com ${idade} anos de idade.`

            } else if (idade <= 21) {
                // ADOLESCENTE
                img.setAttribute ('src', 'imagens/teengirl.png')
                document.body.style.background = '#C2C2B0'
                resultado.innerHTML = `Detectamos uma adolescente com ${idade} anos de idade.`

            } else if (idade <= 50) {
                // ADULTO
                img.setAttribute ('src', 'imagens/woman.png')
                document.body.style.background = '#B38059'
                resultado.innerHTML = `Detectamos uma mulher com ${idade} anos de idade.`

            } else if (idade <= 120) {
                // IDOSO
                img.setAttribute ('src', 'imagens/oldwoman.png')
                document.body.style.background = '#A29F7D'
                resultado.innerHTML = `Detectamos uma senhora com ${idade} anos de idade.`

            } else {
                // MÚMIA
                img.setAttribute ('src', 'imagens/mummy.png')
                document.body.style.background = '#17181A'
                resultado.innerHTML = `Detectamos uma múmia com ${idade} anos.`
            }
        }
        resultado.style.textAlign = 'center'

        
        /*resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`*/
        resultado.appendChild(img)
    }

}