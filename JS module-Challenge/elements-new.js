// This file creates a link between html and other JS files its named as util.js 
// this is not usable file others are usable

import { currency } from "./currency.js";
import { displayResult } from './money.js';
import { generateOptions } from "./handlers.js";
// we need to separate these JS files for DOM Elements  which make use of DOM id 
const from = document.querySelector('[name = country]');
const to = document.querySelector('[name = to-country]');
const input = document.querySelector('.given-currency');
// from start to end of this line should be separate elements.js

// this is another function named init()
// It will returns a key and value pair 
const country = generateOptions(currency);
from.innerHTML = country;
to.innerHTML = country;
document.getElementById("given-input").addEventListener("change", displayResult);
//
// init() -- it takes data from source and bind it with  the Js files  and with only one html file