import { currency } from "./currency.js";
import { displayResult } from './money.js';

const from = document.querySelector('[name = country]');
  const to = document.querySelector('[name = to-country]');
  const input = document.querySelector('.given-currency');
  const country = generateOptions(currency);
  from.innerHTML = country;
  to.innerHTML = country;

  function generateOptions(options) {
    return Object.entries(options)
      .map(
        ([currencyCode, currencyName]) =>
          // `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
          `<option value="${currencyCode}">${currencyCode == 'MSG' ? " " : currencyCode} - ${currencyName}</option>`
      );
      displayResult();
      }