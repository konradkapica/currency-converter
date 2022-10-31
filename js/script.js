{
    const welcome = () => {
        console.log("Pozdrawiam YouCode Team!");
    };

    const calculateResult = (input, currency) => {
        const rateEUR = 4.77;
        const rateUSD = 4.84;
        const rateGBP = 5.46;
        const rateUAH = 0.13;

        switch (currency) {
            case "EUR":
                return input / rateEUR;

            case "USD":
                return input / rateUSD;

            case "GBP":
                return input / rateGBP;

            case "UAH":
                return input / rateUAH;
        }
    };

    const updateResultText = (input, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${input.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-input");
        const currencyElement = document.querySelector(".js-currency");

        const input = +inputElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(input, currency);

        updateResultText(input, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}