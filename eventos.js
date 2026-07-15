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

let cliques = 0;

function trocarImagem() {

    alert("Me clicou!");

    cliques++;


    const imagem = document.getElementById("imagem");

    if (imagem.src.includes("emoji%20feliz.jpg")) {
        imagem.src = "emoji%20infeliz.jpg";

    } else {

        imagem.src = "emoji%20feliz.jpg";

    }

     if (cliques === 5) {
        alert("PARA DE ME CLICAR!!!");
    }

    if (cliques === 10) {
        alert("AAAAAAAAH");
    imagem.src = "emoji evaporando.gif";
    cliques = 0;
}
}