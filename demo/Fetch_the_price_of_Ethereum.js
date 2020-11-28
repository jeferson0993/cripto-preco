//Fetch the price of Ethereum
const eth_api_url = 'https://api.cryptonator.com/api/ticker/eth-brl';
function ethereumHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { console.error(error.message) }
}
function ethereumGetData() {
    var request = ethereumHttpObject();
    request.open("GET", eth_api_url, false);
    request.send(null);
    // console.log(request.responseText);
    return request.responseText;
}
function ethereumDataHandler() {
    var raw_data_string = ethereumGetData();
    var data = JSON.parse(raw_data_string);
    var price = data.ticker.price;
    console.log({price});
    document.getElementById("eth_val").innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}