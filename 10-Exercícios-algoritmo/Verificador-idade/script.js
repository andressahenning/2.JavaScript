function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        resultado.innerHTML = `Idade calculada: ${idade}`
        var pessoa = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (idade > 150) {
            // MÚMIA
            img.setAttribute ('src', 'imagens/mummy.png')
            document.body.style.background = '#17181A'
            pessoa = 'uma múmia'
        } 
        
        if (fsex[0].checked) {
            
            if (idade >= 0 && idade <= 3) {
                // BEBÊ 
                img.setAttribute ('src', 'imagens/babyboy.png')
                document.body.style.background = '#04406F'
                pessoa = 'um bebê'

            } else if (idade <= 10) {
                // CRIANÇA
                img.setAttribute ('src', 'imagens/boy.png')
                document.body.style.background = '#AAB8D9'
                pessoa = 'uma criança'

            } else if (idade <= 21) {
                // ADOLESCENTE
                img.setAttribute ('src', 'imagens/teenboy.png')
                document.body.style.background = '#038AC2'
                pessoa = 'um adolescente'

            } else if (idade <= 50) {
                // ADULTO
                img.setAttribute ('src', 'imagens/man.png')
                document.body.style.background = '#A3C2C4'
                pessoa = 'um homem'

            } else if (idade <= 150) {
                // IDOSO
                img.setAttribute ('src', 'imagens/oldman.png')
                document.body.style.background = '#503B31'
                pessoa = 'um senhor'
            }  

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade <= 3) {
                // BEBÊ 
                img.setAttribute ('src', 'imagens/babygirl.png')
                document.body.style.background = '#A88B83'
                pessoa = 'um bebê'

            } else if (idade <= 10) {
                // CRIANÇA
                img.setAttribute ('src', 'imagens/girl.png')
                document.body.style.background = '#D47A48'
                pessoa = 'uma criança'

            } else if (idade <= 21) {
                // ADOLESCENTE
                img.setAttribute ('src', 'imagens/teengirl.png')
                document.body.style.background = '#C2C2B0'
                pessoa = 'uma adolescente'

            } else if (idade <= 50) {
                // ADULTO
                img.setAttribute ('src', 'imagens/woman.png')
                document.body.style.background = '#B38059'
                pessoa = 'uma mulher'

            } else if (idade <= 150) {
                // IDOSO
                img.setAttribute ('src', 'imagens/oldwoman.png')
                document.body.style.background = '#A29F7D'
                pessoa = 'uma senhora'
            }
                
        }



        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${pessoa} com ${idade} anos.`
        resultado.appendChild(img)
    }

}