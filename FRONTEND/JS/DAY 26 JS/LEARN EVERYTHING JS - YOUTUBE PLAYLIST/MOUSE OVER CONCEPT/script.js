
let div = document.querySelector(".card");

window.addEventListener("mousemove",function(details){

    div.style.top = details.clientY + "px"; 
    div.style.left = details.clientX + "px"; 

})