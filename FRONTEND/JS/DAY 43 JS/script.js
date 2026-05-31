let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let div = document.querySelector("div");

let teams = [

    csk = {
        name : "CSK",
        bgclr: "Yellow"
    },
    mi = {
        name: "MI",
        bgclr: "Blue"
    },  
    rcb = {
        name: "RCB",
        bgclr: "Red"
    },
    lsg = {
        name: "LSG",
        bgclr: "Crimson"
    },
    srh = {
        name: "SRH",
        bgclr: "Orange"
    },
    rr = {
        name: "RR",
        bgclr: "Pink"
    },
    gt = {
        name: "GT",
        bgclr: "Navy"
    },
    kkr = {
        name: "KKR",
        bgclr: "purple"
    },
    pbks = {
        name: "PBKS",
        bgclr : "red"
    },
    dc = {
        name: "DC",
        bgclr : "RoyalBlue"
    }

];


btn.addEventListener('click',()=>{

    let random = Math.floor(Math.random()*teams.length);
    h1.textContent = teams[random].name;
    div.style.backgroundColor = teams[random].bgclr;

});