var config = require("config");
var request = require("request");
var apiKey = config.get("Quandl.api_key");
console.log(apiKey);
var qstr = config.get("Quandl.queryString");
console.log(qstr);

function formatDate(date) {
    const d = new Date(date);

    var month = `${d.getMonth() + 1}`,
        day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join("-");
}

var quandlDatabase = "WIKI";
var ticker = "MSFT";
var start_date = new Date();
var end_date = start_date.setDate(start_date.getDate() - 1);
start_date = start_date.setDate(start_date.getDate() - 7);

qstr = qstr.replace("DATABASE", quandlDatabase);
qstr = qstr.replace("TICKER", ticker);
qstr = qstr.replace("STARTDATE", formatDate(start_date));
qstr = qstr.replace("ENDDATE", formatDate(end_date));
qstr = qstr.replace("APIKEY", apiKey);
console.log(qstr);