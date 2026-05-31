let ul = document.querySelector("ul");

let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");

let inp = document.querySelector("input");
let lis = '';
function Select(){
lis = document.querySelectorAll("li");  

}

Select();

btnAdd.addEventListener("click",(e)=>{

    if(inp.value == ""){
        alert("Please Enter ITEM NAME FIRST");
    }else{

    let li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li); 
    alert("ITEM SUCCESSFULLY ADDED");
    Select();
    inp.value= "";
    }

})

btnRemove.addEventListener("click",(e)=>{
    
    if(inp.value == ""){
        alert("Please Enter ITEM NAME FIRST");
    }else{

    lis.forEach((val)=>{
        console.log(val);

        if(val.textContent == inp.value){
            ul.removeChild(val);
            alert("ITEM REMOVED  SUCESSFULLY");
        }
    })

    }

})