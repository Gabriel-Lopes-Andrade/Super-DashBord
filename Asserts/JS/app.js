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

  async function getMoney() {
    const response = await fetch(" https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const data = await response.json();
    return data.rates;
  }

//DESAFIO 2 :P

const elemento = {
  form: document.querySelector(".campo"),
  inputSexo: document.querySelector("#sexo"),
  inputPeso: document.querySelector("#peso"),
  inputAltura: document.querySelector("#altura"),
  btnCalcular: document.querySelector("#btn-imc"),
  resultado: document.querySelector("#resultado-imc"),
};

// elemento.form.addEventListener("submit", function (evento) {
//   evento.preventDefault();
// });

// elemento.btnCalcular.addEventListener("click", function () {
//   console.log("Pressionou o botão Calcular...");
//   calcularIMC();
// });


//Função para calcular o IMC
function calcularIMC(peso,altura,sexo){
let imc = peso /  altura **2 ;

return imc;

}


//Função de exemplo de como capturar o rádio selecionado
function getSexoSelecionado() {
  document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault();
  });
  //2. Captura o ENDEREÇO do botão enviar
  let btnEnviar = document.querySelector("#btn-imc");

  //3. Adiciona um ouvinte de evento para o clique do botão
  btnEnviar.addEventListener("click", (evento) => {
    //4. Dentro do ouvinte, captura o valor do rádio selecionado
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').id;
 
    let imc = calcularIMC(peso,altura,sexo);
    console.log(imc);
});
}

getSexoSelecionado();




// ─── CALCULADORA DE IMC ────────────────────────────────────────

// Retorna a classificação de IMC conforme tabela OMS
function classificarIMC(imc, sexo) {
    // Tabela OMS (os limites são iguais para ambos os sexos na versão padrão)
    if (imc < 18.5) return { texto: "Abaixo do peso", cor: "#3b82f6" };
    if (imc < 25)   return { texto: "Peso normal", cor: "#22c55e" };
    if (imc < 30)   return { texto: "Sobrepeso", cor: "#f59e0b" };
    if (imc < 35)   return { texto: "Obesidade grau I", cor: "#f97316" };
    if (imc < 40)   return { texto: "Obesidade grau II", cor: "#ef4444" };
    return           { texto: "Obesidade grau III", cor: "#7f1d1d" };
}

// Calcula e exibe o resultado
function calcularIMC() {
    const peso   = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);
 
    const sexo   = document.querySelector("#sexo").value;

    const resultado = document.querySelector("#resultado-imc");

    // Validação básica
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.innerHTML = `<p style="color:#ef4444;"> Preencha peso e altura corretamente.</p>`;
        return;
    }

    const imc = peso / altura ** 2;
    const { texto, cor } = classificarIMC(imc, sexo);

    // Exibe o resultado formatado
    resultado.innerHTML = `
        <p>Seu IMC é: <strong style="color:${cor};">${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong style="color:${cor};">${texto}</strong></p>
    `;
}

// Associa o clique do botão à função (sem submit desnecessário)
document.querySelector("#btn-imc").addEventListener("click", calcularIMC);

