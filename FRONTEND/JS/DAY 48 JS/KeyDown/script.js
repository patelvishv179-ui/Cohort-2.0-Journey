let h1 = document.querySelector("h1");
document.body.addEventListener("keydown",(e)=>{
    console.log(e)
    h1.textContent = e.code;
})