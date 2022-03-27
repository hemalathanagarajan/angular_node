const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="to_currency"]');
function generateOptions(options) {
    return Object.entries(options)
      .map(([currencyCode, currencyName]) =>
          `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`)
      .join("");
  }
const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
