function calcular() {
    var media, final;
    media = calculo.media.value.replace(",", ".");
    media = parseFloat(media);
    final = 12.5 - (media * 1.5);
    if (media >= 0 && media <= 10) {
        if (media < 3.5) {
            msgReprovado();
        }
        else if (media >= 7) {
            document.getElementById("msg").innerHTML = "<p class=center>Parabéns! Você estudou e</p><p class=center><span class=nota>passou!</span></p>";
        }
        else {
            msgProvaFinal(final);
        }
    }
    else {
        document.getElementById("msg").innerHTML = "<p class=center>Digite uma nota entre</p><p class=center><span class=nota>0 e 10!</span></p>";
    }
}

function msgReprovado() {
    var frases = [
        "Você deveria ter estudado mais... Está",
        "Agora é tarde pra se arrepender, você está",
        "Você já deveria saber que com essa nota você está",
        "Se você aprendeu algo na disciplina, <br />guarde que vai precisar no próximo semestre, <br />pois você foi",
        "A boa notícia é que você não vai precisar fazer prova final. <br />A péssima é que você está",
        ];
    document.getElementById("msg").innerHTML = "<p class=center>" + frases[getRandomInt(0, frases.length)] + "</p><p class=center><span class=nota>reprovado!</span></p>";
}

function msgProvaFinal(final) {
    if (final <= 2.75) {
        document.getElementById("msg").innerHTML = "<p class=center>Não reclame do professor! <br />Agradeça que você precisa de apenas</p><p class=center><span class=nota>" + final.toFixed(2) + "</span></p><p class=center>na prova final.</p>"
    }
    else if (final < 5) {
        document.getElementById("msg").innerHTML = "<p class=center>Sua missão não é das mais difíceis, <br />você precisa tirar</p><p class=center><span class=nota>" + final.toFixed(2) + "</span></p><p class=center>na prova final.</p>"
    }
    else if (final < 7) {
        document.getElementById("msg").innerHTML = "<p class=center>Comece a estudar agora mesmo! <br />Você precisa tirar</p><p class=center><span class=nota>" + final.toFixed(2) + "</span></p><p class=center>na prova final.</p>"
    }
    else {
        document.getElementById("msg").innerHTML = "<p class=center>Nada é impossível... você precisa tirar</p><p class=center><span class=nota>" + final.toFixed(2) + "</span></p><p class=center>na prova final.</p>"
    }
}

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function formReset() {
    document.getElementById("calculo").reset();
    document.getElementById("msg").innerHTML = "";
}
