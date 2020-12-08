const apiKey = "";

const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey}`;
fetch(url).then(resposta => {
    if (!resposta.ok) throw new Error(`Ocorreu um erro na requisição, status do erro ${resposta.status}`);
    return resposta.json();
}).then(resposta => {
    console.log(resposta);
}).catch(erro => console.erro(erro));