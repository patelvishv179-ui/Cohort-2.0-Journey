let btn = document.querySelector("button");

let percent = document.querySelector("h2");

let inner = document.querySelector(".inner");

let a;
let int;

btn.addEventListener("click",()=>{
    console.log("Clicked");

    a = 0;
    
    int = setInterval(()=>{

        a++;
        percent.textContent = a + " %";
        inner.style.width = a+"%";

        if(a==100){
            clearInterval(int);
            btn.textContent  = "Downloaded !";
            btn.disabled = true;
        }

    },20);

});