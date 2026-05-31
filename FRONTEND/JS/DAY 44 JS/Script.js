let btn = document.querySelector('button');
let body = document.querySelector('body');

let arr = ['Hii Vishv !', 'Hii Radha !', 'Hii Krishna'];



btn.addEventListener('click',()=>{

var arrelem = Math.floor(Math.random()*arr.length);

   var div = document.createElement('div');

    var a = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = Math.floor(Math.random()*256);

    var x =  Math.floor(Math.random()*100); 
    var y =  Math.floor(Math.random()*100);

    var rotate = Math.floor(Math.random()*361);

    div.classList.add('toast');
    div.style.backgroundColor = `rgb(${a},${b},${c})`;
    div.style.left = x+"%";
    div.style.top = y+"%";

    div.style.rotate = rotate + "deg";

    div.innerHTML = `${arr[arrelem]}`;

    body.appendChild(div);

});