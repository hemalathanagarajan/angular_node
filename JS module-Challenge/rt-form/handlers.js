import { checkEmptyInput } from "./validation.js";
import { addHtmlTableRow, reload } from "./collection.js";
import { selectedRowToInput, myFunction } from "./tabledisplay.js";

var addData = document.getElementById("add");
addData.addEventListener("click", function () {
  addHtmlTableRow();
});

function callSearch() {
  myFunction();
}
window.callSearch = callSearch;
var x = document.getElementById("reload");
x.addEventListener("click", function () {
  reload();
})

