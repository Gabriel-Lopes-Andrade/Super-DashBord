// Temas escuro/claro
if (localStorage.getItem("modo") === "noturno") {
    document.body.classList.add("noturno");
    document.getElementById("btn-modo").textContent = " Modo Claro";
}

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

// Navegação de página uninificada ;-;
const linksMenu = document.querySelectorAll('#menu-navegacao a');
const sessoesDesafio = document.querySelectorAll('.card-desafio');

linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
    
        linksMenu.forEach(l => l.classList.remove('ativo'));
        link.classList.add('ativo');

        sessoesDesafio.forEach(sessao => sessao.classList.add('oculto'));

        const alvo = link.getAttribute('data-target');
        document.getElementById(alvo).classList.remove('oculto');
    });
});

// --- DESAFIOS :D ---

// DESAFIO 1
const btnMoeda = document.getElementById('btn-moeda');
if (btnMoeda) {
    btnMoeda.addEventListener('click', async () => {
        const valor = parseFloat(document.getElementById('valor-moeda').value);
        const direcao = document.getElementById('direcao-moeda').value;
        const resultadoDiv = document.getElementById('resultado-moeda');

        if (isNaN(valor) || valor <= 0) {
            resultadoDiv.innerHTML = `<p style="color: red;">Por favor, insira um valor válido.</p>`;
            return;
        }

        resultadoDiv.innerHTML = `<p>Buscando cotação em tempo real...</p>`;

        try {
            const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
            const dados = await resposta.json();
            const taxaUsdBrl = parseFloat(dados.USDBRL.bid); 
            let resultado = 0;

            if (direcao === 'brl-usd') {
                resultado = valor / taxaUsdBrl;
                resultadoDiv.innerHTML = `
                    <p><strong>R$ ${valor.toFixed(2)}</strong> equivale a <strong>US$ ${resultado.toFixed(2)}</strong></p>
                    <p><small>Cotação atual usada: 1 USD = R$ ${taxaUsdBrl.toFixed(2)}</small></p>
                `;
            } else if (direcao === 'usd-brl') {
                resultado = valor * taxaUsdBrl;
                resultadoDiv.innerHTML = `
                    <p><strong>US$ ${valor.toFixed(2)}</strong> equivale a <strong>R$ ${resultado.toFixed(2)}</strong></p>
                    <p><small>Cotação atual usada: 1 USD = R$ ${taxaUsdBrl.toFixed(2)}</small></p>
                `;
            }
        } catch (erro) {
            resultadoDiv.innerHTML = `<p style="color: red;">Erro ao buscar a cotação. Verifique sua conexão.</p>`;
            console.error('Erro na requisição da API:', erro);
        }
    });
}

// DESAFIO 2
const btnImc = document.getElementById('btn-imc');
if (btnImc) {
    btnImc.addEventListener('click', () => {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const resultadoDiv = document.getElementById('resultado-imc');

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoDiv.innerHTML = `<p class="erro" style="color: red;">Insira valores válidos para peso e altura.</p>`;
            return;
        }

        const imc = peso / (altura * altura);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) { // Corrigido erro de lógica de classificação da OMS
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        resultadoDiv.innerHTML = `
            <p>Seu IMC é <strong>${imc.toFixed(2)}</strong></p>
            <p>Classificação: <strong>${classificacao}</strong></p>
        `;
    });
}

// DESAFIO 3
const btnTemperatura = document.getElementById('btn-temperatura');
if (btnTemperatura) {
    btnTemperatura.addEventListener('click', () => {
        const valor = parseFloat(document.getElementById('valor-temperatura').value);
        const direcao = document.getElementById('direcao-temperatura').value;
        const resultadoDiv = document.getElementById('resultado-temperatura');

        if (isNaN(valor)) {
            resultadoDiv.innerHTML = `<p class="erro" style="color: red;">Por favor, insira um número válido.</p>`;
            return;
        }

        let resultado = 0;

        if (direcao === 'c-f') {
            resultado = (valor * 9/5) + 32;
            resultadoDiv.innerHTML = `<p><strong>${valor}°C</strong> é igual a <strong>${resultado.toFixed(1)}°F</strong></p>`;
        } else if (direcao === 'f-c') {
            resultado = (valor - 32) * 5/9;
            resultadoDiv.innerHTML = `<p><strong>${valor}°F</strong> é igual a <strong>${resultado.toFixed(1)}°C</strong></p>`;
        }
    });
}

// DESAFIO 4
var FATOR_KM_PARA_MPH = 0.621371; 

function converterVelocidade(valor, direcao) {
   if (direcao === "km-mph") return valor * FATOR_KM_PARA_MPH;
   return valor / FATOR_KM_PARA_MPH;
}

const btnVel = document.getElementById("btn-vel");
if (btnVel) {
    btnVel.addEventListener("click", () => {
        var valor = parseFloat(document.getElementById("valor-vel").value);
        var direcao = document.getElementById("direcao-vel").value;
        var caixaResultado = document.getElementById("resultado-vel");

        if (isNaN(valor)) {
            caixaResultado.innerHTML = "<p style='color: red;'>Digite um número válido.</p>";
            return;
        }
        var convertido = converterVelocidade(valor, direcao);

        if (direcao === "km-mph") {
            caixaResultado.innerHTML = `<p>${valor} km/h = <strong>${convertido.toFixed(2)} mph</strong></p>`;
        } else {
            caixaResultado.innerHTML = `<p>${valor} mph = <strong>${convertido.toFixed(2)} km/h</strong></p>`;
        }
    });
}

