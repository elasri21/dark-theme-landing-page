// open and close navigation menu
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "block";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    menu.style.display = "block";
});





const form = document.forms[0]
const email = document.getElementById('email')
const error = document.querySelector(".error")
form.addEventListener('submit', function(e){
    if(email.value === ''){
        error.style.opacity = "1"
        e.preventDefault()
    } 
})
email.addEventListener('focus', function(){
    error.style.opacity = "0"
})