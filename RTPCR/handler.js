import { checkEmptyInput } from "./validation";
import { addHtmlTableRow } from "./collection.js";
import { selectedRowToInput, myFunction } from "./tabledisplay.js";

var addData = document.getElementById("add-btn");
addData.addEventListener("click", function () {
 addHtmlTableRow();
});

function callSearch() {
 myFunction();
}
window.callSearch = callSearch;

