 export function displayResult () {
   let currency = document.getElementById("given-input");

   let result =Math.floor( Math.random(currency)*10000);
document.getElementById("result-currency").innerHTML = result;
 }
