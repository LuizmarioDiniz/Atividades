const visor = document.getElementById('caixa');

function adicionarValor(a) {
    visor.value += a;
    console.log(visor.value);
}

function limparVisor() {
    visor.value = ' ';
}

function apagar() {
    visor.value = visor.value.slice(0, -1);
}

function calcularResultado() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = '';
        alert('Expressão inválida. Por favor, insira uma expressão válida.');
    }
}

