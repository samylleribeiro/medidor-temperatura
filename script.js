function temperatura() {
    // 1. Pegar os valores que o usuário digitou
    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(temperatura)) {
        resultado.innerText = "Por favor, digite o valor da temperatura! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. temperatura
   // 4. resultado na tela
    if (temperatura < 35.5) {
        resultado.innerText = `Temperatura = ${temperatura}°C! 
        Hipotermia ❄️`;
        resultado.style.color = "orange";
        document.body.style.backgroundColor = "#fff3cd"; // Amarelo claro
    }
    else if (temperatura >= 35.5 && temperatura <= 37.3) {
        resultado.innerText = `Temperatura = ${temperatura}°C! 
         😊 Sem febre. Tudo normal! 🟢✅`;
        resultado.style.color = "green";
        document.body.style.backgroundColor = "#d4edda"; // Verde claro
    }
    else if (temperatura > 37.3 && temperatura <= 37.8) {
        resultado.innerText = `Temperatura = ${temperatura}°C! 
         🌡️ Estado febril (pré-febre). 🤒`;
        resultado.style.color = "orange";
        document.body.style.backgroundColor = "#fff3cd"; // Amarelo claro
    }
    else if (temperatura > 37.8 && temperatura < 38.5) {
        resultado.innerText = `Temperatura = ${temperatura}°C! 
         🤒 Febre. Descanse e tome água. 💧`;
        resultado.style.color = "red";
        document.body.style.backgroundColor = "#f8d7da"; // vermelho claro
    }
    else if (temperatura >= 38.5) {
        resultado.innerText = `Temperatura = ${temperatura}°C! 
         🤒 Febre alta 🥵. Procure um médico. 🏥`;
        resultado.style.color = "black";
        document.body.style.backgroundColor = "#828282"; // preto claro
    }
}
    function limpar() {
    // Limpa os valores dos inputs
    document.getElementById('temperatura').value = "";
    // Limpa o texto do resultado 
    document.getElementById('resultado').innerText = "";
    document.getElementById('resultado').style.color = "black";
    document.body.style.backgroundColor = "";
}
