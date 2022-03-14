
const mobileBtn=document.querySelector(".header__hamburger")
const nav=document.querySelector("nav")
const closes = document.querySelector(".header__close")


const link=document.querySelectorAll(".header__links")

for (i = 0; i < link.length; i++){
    link[i].addEventListener('click', function () {
        this.classList.toggle("active")
    }) 
}



mobileBtn.addEventListener("click",()=>{
    nav.classList.add("header__nav")
    mobileBtn.style.display = "none";
    closes.style.display = "block";
    
})
closes.addEventListener("click",()=>{
    nav.classList.remove("header__nav")
    mobileBtn.style.display = "block";
    closes.style.display = "none";
})