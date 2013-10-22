function calcular() {
    var media, final;
    media = calculo.media.value.replace(",", ".");
    media = parseFloat(media);
    final = 12.5 - (media * 1.5);
    if (media >= 0 && media <= 10){
        if (media < 3.5) {
            document.getElementById("msg").innerHTML = "<p class=center>Você foi</p><p class=center><span class=nota>reprovado!</span></p>";
        }
        else if (media >= 7) {
            document.getElementById("msg").innerHTML = "<p class=center>Parabéns! Você estudou e</p><p class=center><span class=nota>passou!</span></p>";
        }
        else {
            document.getElementById("msg").innerHTML = "<p class=center>Você precisa tirar</p><p class=center><span class=nota>" + final.toFixed(2) + "</span></p><p class=center>na prova final.</p>";
        }
    }
    else {
        document.getElementById("msg").innerHTML = "<p class=center>Digite uma nota entre</p><p class=center><span class=nota>0 e 10!</span></p>";
    }
}

function formReset() {
    document.getElementById("calculo").reset();
    document.getElementById("msg").innerHTML = "";
}
