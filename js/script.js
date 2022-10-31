console.log("Pozdrawiam Team YouCode!")

let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.77;
let USD = 4.84;
let GBP = 5.46;
let UAH = 0.13;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let input = inputElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = input / EUR;
            break;

        case "USD":
            result = input / USD;
            break;

        case "GBP":
            result = input / GBP;
            break;

        case "UAH":
            result = input / UAH;
            break;
    }
    
    resultElement.innerText = result.toFixed(2);
});