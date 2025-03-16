
let SelectCountry = document.getElementsByClassName("select-country")
let rate = document.getElementById("rate");
let usd = document.getElementById("usd");
let pkr = document.getElementById("pkr")
async function api() {
    let api = await fetch(" https://v6.exchangerate-api.com/v6/79484bb1b92b1ef1edd40d4a/latest/USD")
    let response = await api.json();
    let rates = response.conversion_rates;
    let arr = Object.entries(rates);
    let options = document.createElement("option");
    console.log(arr)
    usd.innerHTML = rates.USD;
    pkr.innerHTML = rates.PKR
}
api()