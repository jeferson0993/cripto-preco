//Fetch the value of Bitcoin
const api_url = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json';
const time_interval = 2;

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('A string original é: "' + stringToSplit + '"');
    console.log('O separador é: "' + separator + '"');
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
    return arrayOfStrings[0] + arrayOfStrings[1];
}

function addLeadingZero(num) {
    return (num <= 9) ? ("0" + num) : num;
}
function clientDateTime() {
    var date_time = new Date();
    var curr_hour = date_time.getHours();
    var zero_added_curr_hour = addLeadingZero(curr_hour);
    var curr_min = date_time.getMinutes();
    var curr_sec = date_time.getSeconds();
    var curr_time = zero_added_curr_hour + ':' + curr_min + ':' + curr_sec;
    return curr_time
}
function makeHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { console.error(error.message) }
}
function bitcoinGetData() {
    var request = makeHttpObject();
    request.open("GET", api_url, false);
    request.send(null);
    return request.responseText;
}
function bitcoinDataHandler() {
    var raw_data_string = bitcoinGetData();
    var data = JSON.parse(raw_data_string);
    console.log(data);
    var price = (data["bpi"]["BRL"]["rate"]);
    console.log({price});    
    return price;
}