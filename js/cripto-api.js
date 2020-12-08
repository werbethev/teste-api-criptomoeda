const apiKey = "";



const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey}`;
fetch(url).then(resposta => {
    if (!resposta.ok) throw new Error(`Ocorreu um erro na requisição, status do erro ${resposta.status}`);
    return resposta.json();
}).then(api => {
    let texto = "";
    for (let i = 0; i < 100; i++) {  //100 primeiras moedas
        const moeda = api.data[i];
        texto += `
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-body">
                    <h5 class="mt-2">${moeda.name}</h5>
                    <p class="mb-0">${moeda.symbol}</p>
                    <p>${new Date(moeda.first_historical_data).toLocaleString()}</p>
                </div>
            </div>
            `;

        document.getElementById("moedas").innerHTML = texto;
    }
}).catch(erro => console.erro(erro.message));
