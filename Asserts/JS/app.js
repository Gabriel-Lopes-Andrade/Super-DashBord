// checa se já tinha tema salvo e aplica
  if (localStorage.getItem("modo") === "noturno") {
      document.body.classList.add("noturno");
      document.getElementById("btn-modo").textContent = " Modo Claro";
  }

  document.getElementById("btn-modo").addEventListener("click", function() {
      document.body.classList.toggle("noturno");

      // Dependendo do resultado do negc, atualiza botão e salva.
      //Quando tá com a classe noturna, quando clica vai para a claro, e vice-versa. Então o que tem no if é o resultado do clique, ou seja, o estado atual.
      if (document.body.classList.contains("noturno")) {
          document.getElementById("btn-modo").textContent = " Modo Claro";
          localStorage.setItem("modo", "noturno");
      } else {
          document.getElementById("btn-modo").textContent = " Modo Noturno";
          localStorage.setItem("modo", "claro");
      }
  });

  //DESAFIO 1 :P
 
const btnMoeda = document.getElementById('btn-moeda');

if (btnMoeda) {
    btnMoeda.addEventListener('click', async () => {
        const valor = parseFloat(document.getElementById('valor-moeda').value);
        const direcao = document.getElementById('direcao-moeda').value;
        const resultadoDiv = document.getElementById('resultado-moeda');

        // Validação p entrada
        if (isNaN(valor) || valor <= 0) {
            resultadoDiv.innerHTML = `<p style="color: red;">Por favor, insira um valor válido.</p>`;
            return;
        }

        // Segurando o usuário até chegar n resultado
        resultadoDiv.innerHTML = `<p>Buscando cotação em tempo real...</p>`;

        try {
            
            const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
            const dados = await resposta.json();
            
            
            const taxaUsdBrl = parseFloat(dados.USDBRL.bid); 
            let resultado = 0;

            //Localização e formatação do resultado p nós meros mortais

            if (direcao === 'brl-usd') {
                // Real -> DOla
                resultado = valor / taxaUsdBrl;
                resultadoDiv.innerHTML = `
                    <p><strong>R$ ${valor.toFixed(2)}</strong> equivale a <strong>US$ ${resultado.toFixed(2)}</strong></p>
                    <p><small>Cotação atual usada: 1 USD = R$ ${taxaUsdBrl.toFixed(2)}</small></p>
                `;
            } else if (direcao === 'usd-brl') {
                //Dola -> REal
                resultado = valor * taxaUsdBrl;
                resultadoDiv.innerHTML = `
                    <p><strong>US$ ${valor.toFixed(2)}</strong> equivale a <strong>R$ ${resultado.toFixed(2)}</strong></p>
                    <p><small>Cotação atual usada: 1 USD = R$ ${taxaUsdBrl.toFixed(2)}</small></p>
                `;
            }
        } catch (erro) {
           
            resultadoDiv.innerHTML = `<p style="color: red;">Erro ao buscar a cotação. Verifique sua conexão e tente novamente.</p>`;
            console.error('Erro na requisição da API:', erro);
        }
    });
}


//DESAFIO 2 :P

const btnImc = document.getElementById('btn-imc');

if (btnImc) {
    btnImc.addEventListener('click', () => {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const resultadoDiv = document.getElementById('resultado-imc');

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoDiv.innerHTML = `<p class="erro">Insira valores válidos para peso e altura.</p>`;
            return;
        }

        // Cálculo do IMC
        const imc = peso / (altura * altura);
        let classificacao = '';

        // Classificação OMS
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 24.9) {
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

// DESAFIO 3 :p

const btnTemperatura = document.getElementById('btn-temperatura');

if (btnTemperatura) {
    btnTemperatura.addEventListener('click', () => {
        const valor = parseFloat(document.getElementById('valor-temperatura').value);
        const direcao = document.getElementById('direcao-temperatura').value;
        const resultadoDiv = document.getElementById('resultado-temperatura');

        if (isNaN(valor)) {
            resultadoDiv.innerHTML = `<p class="erro">Por favor, insira um número válido.</p>`;
            return;
        }

        let resultado = 0;

        if (direcao === 'c-f') {
            // Celsius para Fahrenheit: 
            resultado = (valor * 9/5) + 32;
            resultadoDiv.innerHTML = `<p><strong>${valor}°C</strong> é igual a <strong>${resultado.toFixed(1)}°F</strong></p>`;
        } else if (direcao === 'f-c') {
            // Fahrenheit para Celsius: 
            resultado = (valor - 32) * 5/9;
            resultadoDiv.innerHTML = `<p><strong>${valor}°F</strong> é igual a <strong>${resultado.toFixed(1)}°C</strong></p>`;
        }
    });
}


//Desafio 4 :p
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

