let para = document.querySelector("p");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let text = para.innerText;

let iteration = 0;

let int = setInterval(() => {

    let str = text.split("").map((char, index) => {

        if(index < iteration){
            return char;
        }

        return characters[Math.floor(Math.random() * characters.length)];

    }).join("");

    para.innerText = str;

    iteration += 1/3;

    if(iteration >= text.length){
        clearInterval(int);
    }

}, 30);