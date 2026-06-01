// ============================================================
//  DESAFIO 4 — Conversor de Velocidade (km/h <-> mph)
//  Arquivo: desafio4.js
// ============================================================

// ----------------------------------------------------------
//  FATOR DE CONVERSÃO
//  1 quilômetro por hora equivale a 0.621371 milhas por hora.
//  Guardamos numa variável para não repetir o número no código.
// ----------------------------------------------------------
var FATOR_KM_PARA_MPH = 0.621371;


// ----------------------------------------------------------
//  FUNÇÃO PURA DE CÁLCULO
//  Essa função SÓ faz a conta — não mexe em nada da tela.
//  Recebe o valor e a direção, devolve o resultado numérico.
//
//  Por que separar? Porque se o professor pedir para testar
//  a lógica, você pode chamar converterVelocidade(100, "km-mph")
//  direto no console e ver se dá 62.13, sem precisar da tela.
// ----------------------------------------------------------
function converterVelocidade(valor, direcao) {

    if (direcao === "km-mph") {
        // km/h → mph: multiplica pelo fator
        return valor * FATOR_KM_PARA_MPH;
    } else {
        // mph → km/h: divide pelo fator (operação inversa)
        return valor / FATOR_KM_PARA_MPH;
    }
}


// ----------------------------------------------------------
//  FUNÇÃO DE TELA
//  Essa função lê os inputs, chama converterVelocidade()
//  e exibe o resultado no HTML.
//  Ela não faz nenhuma conta — só controla a tela.
// ----------------------------------------------------------
function mostrarResultadoVelocidade() {

    // Pega o que o usuário digitou e converte para número
    var valor   = parseFloat(document.getElementById("valor-vel").value);
    var direcao = document.getElementById("direcao-vel").value;

    // Pega o elemento onde vamos escrever o resultado
    var caixaResultado = document.getElementById("resultado-vel");

    // Validação: verifica se o número é válido
    // isNaN = "is Not a Number" — verdadeiro se não for número
    if (isNaN(valor)) {
        caixaResultado.textContent = "⚠️ Digite um número válido.";
        return; // para aqui, não continua o cálculo
    }

    // Chama a função pura para calcular
    var convertido = converterVelocidade(valor, direcao);

    // Monta a frase de resultado de acordo com a direção
    if (direcao === "km-mph") {
        caixaResultado.textContent =
            valor + " km/h  =  " + convertido.toFixed(2) + " mph";
        //              ↑ toFixed(2) arredonda para 2 casas decimais
    } else {
        caixaResultado.textContent =
            valor + " mph  =  " + convertido.toFixed(2) + " km/h";
    }
}


// ----------------------------------------------------------
//  EVENTO DE CLIQUE
//  Quando o botão for clicado, chama mostrarResultadoVelocidade.
//  querySelector("#btn-vel") encontra o elemento com id="btn-vel".
// ----------------------------------------------------------
document.querySelector("#btn-vel").addEventListener("click", mostrarResultadoVelocidade);


// ----------------------------------------------------------
//  DICA: para adicionar o Desafio 5 (ou qualquer outro),
//  basta criar um arquivo desafio5.js com a mesma estrutura:
//
//    1. Defina o fator de conversão
//    2. Crie a função pura de cálculo
//    3. Crie a função de tela
//    4. Adicione o addEventListener no botão
// ----------------------------------------------------------

// ============================================================
//  DESAFIO 5 — Conversor de Massa (kg <-> lbs)
//  Arquivo: desafio5.js
// ============================================================

// ----------------------------------------------------------
//  FATOR DE CONVERSÃO
//  1 quilograma equivale a 2.20462 libras.
// ----------------------------------------------------------
var FATOR_KG_PARA_LBS = 2.20462;


// ----------------------------------------------------------
//  FUNÇÃO PURA DE CÁLCULO
//  Recebe o valor e a direção, devolve apenas o número.
//  Nenhuma linha aqui toca no HTML.
// ----------------------------------------------------------
function converterMassa(valor, direcao) {

    if (direcao === "kg-lbs") {
        // kg → lbs: multiplica pelo fator
        return valor * FATOR_KG_PARA_LBS;
    } else {
        // lbs → kg: divide pelo fator (operação inversa)
        return valor / FATOR_KG_PARA_LBS;
    }
}


// ----------------------------------------------------------
//  FUNÇÃO DE TELA
//  Lê os inputs, valida, chama converterMassa() e exibe.
// ----------------------------------------------------------
function mostrarResultadoMassa() {

    var valor   = parseFloat(document.getElementById("valor-massa").value);
    var direcao = document.getElementById("direcao-massa").value;
    var caixaResultado = document.getElementById("resultado-massa");

    // Validação
    if (isNaN(valor)) {
        caixaResultado.textContent = "⚠️ Digite um número válido.";
        return;
    }

    var convertido = converterMassa(valor, direcao);

    if (direcao === "kg-lbs") {
        caixaResultado.textContent =
            valor + " kg  =  " + convertido.toFixed(2) + " lbs";
    } else {
        caixaResultado.textContent =
            valor + " lbs  =  " + convertido.toFixed(2) + " kg";
    }
}


// ----------------------------------------------------------
//  EVENTO DE CLIQUE
// ----------------------------------------------------------
document.querySelector("#btn-massa").addEventListener("click", mostrarResultadoMassa);


// ----------------------------------------------------------
//  MODELO PARA OS PRÓXIMOS DESAFIOS
//  Cada novo arquivo .js deve seguir esta ordem:
//
//    ① Variáveis / constantes necessárias
//    ② function calcular___(___, ___) { ... }   ← só a conta
//    ③ function mostrarResultado___() { ... }    ← só a tela
//    ④ document.querySelector("#btn-___")
//         .addEventListener("click", mostrarResultado___);
//
//  Crie um arquivo .js separado para cada desafio.
//  Isso mantém o código organizado e fácil de encontrar.
// ----------------------------------------------------------