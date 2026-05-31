let sounds = {};

for(let i=65; i<91; i++){
    let letter = String.fromCharCode(i).toLowerCase();
    sounds[letter] = new Audio(`Mp3s/${letter.toUpperCase()}.mp3`);
}

console.log(sounds);

let keys = document.querySelectorAll(".key");

function playSound(key){
    if(sounds[key]){
        sounds[key].currentTime = 0;
        sounds[key].play();

        let currentKey = document.getElementById(key);
        currentKey.style.transform = "scale(0.9)";
        setTimeout(()=>{
            currentKey.style.transform = "scale(1)";
        },100);

    }

}

//Key Press
window.addEventListener("keydown",(e)=>{
    let key = e.key.toLowerCase();
    playSound(key);    
});

// Mouse Click
keys.forEach((key)=>{
    key.addEventListener("click",()=>{
        playSound(key.id);
    });
});