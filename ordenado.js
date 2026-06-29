let nomes = [];

  const input = document.getElementById("caixa2");
  const lista = document.getElementById("lista");

function adicionarNome() {
    let nome = input.value.trim();

    if (nome === "") {
        alert("Escreva um nome.");
        return;
    }

    let regex = /^[ A-Z a-z À-Ö Ø-ö ø-ÿ\s]+$/;

    if (!regex.test(nome)) {
        alert("Conjunto inválido. Apenas letras, letras acentuadas e espaços são permitidos.");
        input.focus();
        return;
    }

    nomes.push(nome);

    input.value = "";
    input.focus();

    mostrarNomes();
}

function organizarNomes() {
    nomes.sort((a, b) => a.localeCompare(b, "pt-BR"));
    mostrarNomes();
}

function mostrarNomes() {
    lista.innerHTML = "";

    for (let nome of nomes) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}