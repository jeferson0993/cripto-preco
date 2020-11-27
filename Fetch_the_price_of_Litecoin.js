//Fetch the price of Litecoin
const ltc_api_url = 'https://api.cryptonator.com/api/ticker/ltc-brl';
function litecoinHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { console.error(error.message) }
}
function litecoinGetData() {
    var request = litecoinHttpObject();
    request.open("GET", ltc_api_url, false);
    request.send(null);	
    return request.responseText;
}
function litecoinDataHandler() {
    var raw_data_string = litecoinGetData();
    var data = JSON.parse(raw_data_string);
    var price = data.ticker.price;
    // console.log({price});
    document.getElementById("ltc_val").innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
    return price;
}