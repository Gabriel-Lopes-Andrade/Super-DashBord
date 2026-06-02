// checa se já tinha tema salvo e aplica
if (localStorage.getItem("modo") === "noturno") {
    document.body.classList.add("noturno");
    document.getElementById("btn-modo").textContent = " Modo Claro";
}

document.getElementById("btn-modo").addEventListener("click", function() {
    document.body.classList.toggle("noturno");

    // dependendo do resultado do negc, atualiza botão e salva
    if (document.body.classList.contains("noturno")) {
        document.getElementById("btn-modo").textContent = " Modo Claro";
        localStorage.setItem("modo", "noturno");
    } else {
        document.getElementById("btn-modo").textContent = " Modo Noturno";
        localStorage.setItem("modo", "claro");
    }
});


// desafio 4 - velocidade

var FATOR_KM_PARA_MPH = 0.621371; // 1 km/h em mph

function converterVelocidade(valor, direcao) {
    // se for km pra mph multiplica, senão divide
    if (direcao === "km-mph") return valor * FATOR_KM_PARA_MPH;
    return valor / FATOR_KM_PARA_MPH;
}

function mostrarResultadoVelocidade() {
    var valor = parseFloat(document.getElementById("valor-vel").value);
    var direcao = document.getElementById("direcao-vel").value;
    var caixaResultado = document.getElementById("resultado-vel");

    if (isNaN(valor)) {
        caixaResultado.textContent = "Digite um número válido.";
        return;
    }

    var convertido = converterVelocidade(valor, direcao);

    if (direcao === "km-mph") {
        caixaResultado.textContent = valor + " km/h = " + convertido.toFixed(2) + " mph";
    } else {
        caixaResultado.textContent = valor + " mph = " + convertido.toFixed(2) + " km/h";
    }
}

document.getElementById("btn-vel").addEventListener("click", mostrarResultadoVelocidade);