function temperatura() {
    // 1. Pegar os valores que o usuário digitou
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado = document.getElementById('resultado');
    let mercurio = document.getElementById('mercurio');
    // 2. Verificar se os campos não estão vazios
    if (isNaN(temperatura)) {
        resultado.innerText = "Por favor, digite o valor da temperatura! ❌";
        resultado.style.color = "red";
        mercurio.style.height = "0%";
        return;
    }
    // 1. Lógica de Status, Cores e Altura do Termômetro
    let statusText = "";
    let colorBody = ""; // Cor de fundo do body
    let colorResult = ""; // Cor do texto do resultado
    let colorMercurio = ""; // Cor do mercúrio dentro do termômetro
    let heightPercent = 0; // Altura da barra de mercúrio em %

    // Vamos mapear: 35°C = 0% de altura, 40°C = 100% de altura.
    // Fórmula: (temperatura - 35) * (100 / (40 - 35)) -> (temperatura - 35) * 20
    
    if (temperatura < 35.5) {
        statusText = "Hipotermia ❄️";
        colorBody = "#e3f2fd"; // Azul claro (frio)
        colorResult = "#1565c0"; // Azul escuro
        colorMercurio = "blue"; // O mercúrio fica azul
        heightPercent = 15; // Cálculo de altura

    } else if (temperatura <= 37.3) {
        statusText = "😊 Sem febre. Tudo normal! ✅";
        colorBody = "#d4edda"; // Verde claro
        colorResult = "#2e7d32"; // Verde forte
        colorMercurio = "green"; // O mercúrio fica verde
        heightPercent = (temperatura - 35) * 20; ; // Cálculo de altura

    } else if (temperatura <= 37.8) {
        statusText = "🌡️ Estado febril (pré-febre). 🤒";
        colorBody = "#fff3cd"; // Amarelo claro (atenção)
        colorResult = "#ff8f00"; // Laranja forte
        colorMercurio = "orange"; // O mercúrio fica laranja
        heightPercent = (temperatura - 35) * 20; // Cálculo de altura

    } else if (temperatura < 38.5) {
        statusText = "Febre. Descanse e tome água. 💧🤒";
        colorBody = "#f8d7da"; // Vermelho claro
        colorResult = "#c62828"; // Vermelho forte
        colorMercurio = "red"; // O mercúrio fica vermelho
        heightPercent = (temperatura - 35) * 20; // Cálculo de altura

    } else { // Temperatura >= 38.5
        statusText = "Febre alta 🥵. Procure um médico. 🏥";
        colorBody = "#ffebee"; // Um rosa/vermelho muito suave
        colorResult = "black";
        colorMercurio = "#8e0000"; // Vermelho muito escuro
        heightPercent = 100; // Barra cheia para febre alta
    }

    // 2. Aplicando a Mágica Visual ✨

    // Limites para a altura não explodir (se o usuário digitar 20 ou 1000, por exemplo)
    if (heightPercent > 100) heightPercent = 100;
    if (heightPercent < 0) heightPercent = 0;

    // Atualiza o resultado em texto
    resultado.innerText = `Temperatura = ${temperatura.toFixed(1)}°C! ${statusText}`;
    resultado.style.color = colorResult;
    document.body.style.backgroundColor = colorBody;

    // A MÁGICA DO TERMÔMETRO:
    mercurio.style.height = heightPercent + "%";
    mercurio.style.backgroundColor = colorMercurio;
}

    function limpar() {
    // Limpa os valores dos inputs
    document.getElementById('temperatura').value = "";
    // Limpa o texto do resultado 
    document.getElementById('resultado').innerText = "";
    document.getElementById('resultado').style.color = "";
    document.body.style.backgroundColor = "";
    // Limpa o termômetro
    document.getElementById('mercurio').style.height = "0%";
    document.getElementById('mercurio').style.backgroundColor = "";
}
