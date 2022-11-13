let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amountPln");
let currencyElement = document.querySelector(".js-currency");
let resultsElement = document.querySelector(".js-results");

let EUR = 4.69;
let USD = 4.66;
let GBP = 5.34;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;

    case "USD":
      result = amount / USD;
      break;

    case "GBP":
      result = amount / GBP;
      break;
  }

  resultsElement.innerText = `
  ${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}
  `;

});
