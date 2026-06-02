
if (localStorage.getItem("modo") === "noturno") {
    document.body.classList.add("noturno");
    document.getElementById("btn-modo").textContent = " Modo Claro";
}

// Quando clicar no botão, alterna entre os modos
document.getElementById("btn-modo").addEventListener("click", function() {

    document.body.classList.toggle("noturno");


    if (document.body.classList.contains("noturno")) {
        document.getElementById("btn-modo").textContent = " Modo Claro";
        localStorage.setItem("modo", "noturno");
    } else {
        document.getElementById("btn-modo").textContent = " Modo Noturno";
        localStorage.setItem("modo", "claro");
    }
});





//  DESAFIO 4 - Desafio p Velocidade


var FATOR_KM_PARA_MPH = 0.621371;
function converterVelocidade(valor, direcao) {
    if (direcao === "km-mph") {
        return valor * FATOR_KM_PARA_MPH;   // km/h → mph
    } else {
        return valor / FATOR_KM_PARA_MPH;   // mph → km/h
    }
}

// Função de tela: lê inputs, chama a função pura, exibe resultado
function mostrarResultadoVelocidade() {
    var valor          = parseFloat(document.getElementById("valor-vel").value);
    var direcao        = document.getElementById("direcao-vel").value;
    var caixaResultado = document.getElementById("resultado-vel");

    if (isNaN(valor)) {
        caixaResultado.textContent = " Digite um número válido.";
        return;
    }

    var convertido = converterVelocidade(valor, direcao);

    if (direcao === "km-mph") {
        caixaResultado.textContent = valor + " km/h  =  " + convertido.toFixed(2) + " mph";
    } else {
        caixaResultado.textContent = valor + " mph  =  " + convertido.toFixed(2) + " km/h";
    }
}

document.getElementById("btn-vel").addEventListener("click", mostrarResultadoVelocidade);