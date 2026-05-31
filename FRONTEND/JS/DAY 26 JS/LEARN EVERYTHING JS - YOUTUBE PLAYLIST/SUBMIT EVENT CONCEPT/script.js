let form = document.querySelector("form");
    let card = document.querySelector(".card");


form.addEventListener("submit", function (evtdetails) {

    evtdetails.preventDefault();

    let inputs = document.querySelectorAll("input");

    let profilpic = document.querySelector("img");


    let name= document.querySelector("h3");
    let proffession= document.querySelector("#Proffesion");
    let email= document.querySelector("h5");



    profilpic.setAttribute("src",`${inputs[3].value}`);

    card.style.visibility = "visible";

    name.textContent = `${inputs[0].value}`;
    proffession.textContent = `${inputs[2].value}`;
    email.textContent = `${inputs[1].value}`;


});

    let cancel = document.querySelector("#cancle");

    cancel.addEventListener("click",function(){
    card.style.visibility = "hidden";
        
    })
