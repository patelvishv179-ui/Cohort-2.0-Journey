let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let p = document.querySelector("p");
let text = p.innerText;
let interval = 0;

addEventListener("mousemove",(e)=>{

    document.body.style.setProperty("--x",e.clientX + "px");
    document.body.style.setProperty("--y",e.clientY + "px");

})

p.addEventListener("mouseenter",(e)=>{
function randomText(){


    let str = text.split("").map((char,index)=>{

        if(index < interval){
            return char;
        }

        return characters.split("")[Math.floor(Math.random()*characters.length)]


    }).join("");

    p.innerText = str;
    interval+=0.50;


}

setInterval(randomText,40);

})