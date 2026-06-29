let cores = [
    "purple",
    "rgb(8, 13, 19)"
];
let indice = 0;
function mudarCor() {
    document.body.style.backgroundColor = cores[indice];
    indice++;
    if (indice >= cores.length) {
        indice = 0;
    }
}
function atualizarRelogio() {
    let agora = new Date();

    document.getElementById("dataHora").innerHTML =
        agora.toLocaleString("pt-BR");
        dataHora.style.color = "rgb(204, 235, 120)";

}
function iniciarRelogio() {
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);

}

function trocarImagem() {

    alert("Me clicou!");
    const imagem = document.getElementById("imagem");

    if (imagem.src.includes("emoji feliz.jpg")) {
        imagem.src = "emoji feliz.jpg";

    } else {

        imagem.src = "emoji infeliz.jpg";

    }

}