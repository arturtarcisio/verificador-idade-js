function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('genero')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada : ${idade} anos`
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/masculino/crianca.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/masculino/jovem.png')
            } else if (idade <50){
                img.setAttribute('src', 'imagens/masculino/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/masculino/idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/feminino/crianca.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/feminino/jovem.png')
            } else if (idade <50){
                img.setAttribute('src', 'imagens/feminino/adulta.png')
            } else {
                img.setAttribute('src', 'imagens/feminino/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }

}

