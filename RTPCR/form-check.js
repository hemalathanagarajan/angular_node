document.getElementById(".add-button").addEventListener("submit", validate);

 export function validate() {
    var name = document.getElementById('#name');  
        if (name.value.length <= 0) {  
            alert("Name is required");  
            name.focus();  
            return false;  
        }  


}