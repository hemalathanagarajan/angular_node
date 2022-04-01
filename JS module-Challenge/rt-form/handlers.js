import { checkEmptyInput } from "./validation.js";
import { addHtmlTableRow, reload } from "./collection.js";
import { selectedRowToInput, myFunction } from "./tabledisplay.js";

var addData = document.getElementById("add-btn");
addData.addEventListener("click", function () {
  addHtmlTableRow();
});

function Search() {
  myFunction();
}
window.callSearch = Search;
var x = document.getElementById("reload");
x.addEventListener("click", function () {
  reload();
})

