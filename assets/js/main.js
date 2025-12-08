    document.querySelector("#converter").addEventListener('click', async()=>{
        const origem = document.querySelector("#moeda-origem").value;
        const destino = document.querySelector("#moeda-destino").value;
        const valor = Number(document.querySelector("#valor").value);
        const resultado = document.getElementById("resultado");

        const url = `https://api.exchangerate-api.com/v4/latest/${origem}`
        const resposta = await fetch(url);
        const dados = await resposta.json();

        const taxa = dados.rates[destino]
        const converter = valor * taxa;
        
        resultado.value = "";

        if(converter > 0) resultado.value = `${converter.toFixed(2)}`
    })

    async function carregarMoedas() {
    const url = "https://api.exchangerate-api.com/v4/latest/BRL";
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const moedas = Object.keys(dados.rates);

    const selectOrigem = document.querySelector("#moeda-origem");
    const selectDestino = document.querySelector("#moeda-destino");
    

    moedas.forEach(moeda => {
        const option1 = document.createElement("option");
        option1.value = moeda;
        option1.textContent = moeda;

        const option2 = option1.cloneNode(true);

        selectOrigem.appendChild(option1);
        selectDestino.appendChild(option2);
        });

    document.querySelector("#trocarMoedas").addEventListener("click", () => {
        const selectOrigem = document.querySelector("#moeda-origem");
        const selectDestino = document.querySelector("#moeda-destino");

    
    const temp = selectOrigem.value;

    
    selectOrigem.value = selectDestino.value;
    selectDestino.value = temp;
    });
}

carregarMoedas();


    
