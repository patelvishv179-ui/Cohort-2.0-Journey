let img = document.querySelector("img");
let i = document.querySelector("#heart");

img.addEventListener("dblclick",()=>{

    i.style.transition = "0s";
    i.style.opacity = 1;
    i.style.transform = 'translate(-50%,-50%) scale(0)';

    setTimeout(()=>{
        i.style.transition = "0.5s";
        i.style.transform = 'translate(-50%,-50%) scale(1.5)';
    },10);

    setTimeout(()=>{
        i.style.transform = 'translate(-50%,-400%) scale(2) rotate(60deg)';
        i.style.opacity = 0;
    },600);

    setTimeout(()=>{
        i.style.transition = "0s";
        i.style.transform = 'translate(-50%,-50%) scale(0)';
    },1100);

});