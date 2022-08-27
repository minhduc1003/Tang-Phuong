const open = document.querySelector(".open")
const conten = document.querySelector(".main")
const openBox = document.querySelector(".open-box")
open.addEventListener("click", function e(){
    openBox.style.display = "flex"
    // conten.style.animation = " hide 2s ease forwards"
    conten.style.display = "none";
    // setTimeout(function ani (){
    // },1800)
})