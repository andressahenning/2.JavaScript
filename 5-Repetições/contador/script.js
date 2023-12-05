function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')

    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f){
            // Contagem crescente
            for(let contador = i; contador <= f; contador += p){
                resultado.innerHTML += `👉 ${contador} `
            }
            
        } else {
            // Contagem decrescente
            for(let contador = i; contador >= f; contador -= p){
                resultado.innerHTML += `👉 ${contador} `
            }
        }
        resultado.innerHTML += `🏴`        
    }
}