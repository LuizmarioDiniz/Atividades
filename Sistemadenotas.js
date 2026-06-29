function verificarNota() {

    const nota = parseFloat(document.getElementById("caixa3").value);
    const resultado = document.getElementById("resultado");
   
    if (isNaN(nota)) {
        alert("Digite uma nota válida.");
        return;
    }

    if (nota < 0 || nota > 10) {
        alert("Aceitamos apenas pontuação que se limite por entre 0 a 10.");
        return;
    }

    if (nota >= 6) {
        resultado.innerHTML = "Aprovado";
        resultado.style.color = "green";
    }
    else if (nota >= 1) {
        resultado.innerHTML = "Recuperação";
        resultado.style.color = "orange";
    }
    else {
        resultado.innerHTML = "Reprovado";
        resultado.style.color = "red";
    }

}