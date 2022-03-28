import { currency } from "./currency.js";
import { displayResult } from './money.js';
import { generateOptions } from "./handlers.js";

const from = document.querySelector('[name = country]');
const to = document.querySelector('[name = to-country]');
const input = document.querySelector('.given-currency');
const country = generateOptions(currency);
from.innerHTML = country;
to.innerHTML = country;
document.getElementById("given-input").addEventListener("change", displayResult);
