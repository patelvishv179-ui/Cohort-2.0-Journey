let info = document.querySelector("#info");
let error = document.querySelector("#error");
let city  = document.querySelector("#txtCity");
let btn = document.querySelector("button");

let APIkey = 'a3ca555efaa55b38fa87339444aaf6d8';
const kelvinToCelsius = (kelvin) => kelvin - 273.15;

let p = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let errorp = document.createElement("p");
let fetching = document.createElement("p");
let blanckerror = document.createElement("p");

async function getWeather(city){

    try{

        fetching.innerHTML = `Featching <br><br>`
        info.append(fetching);

        let rowdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
        
        fetching.style.display = "none";

        if(!rowdata.ok){
            throw new Error("This City Data Not Found");
        }
        let data = await rowdata.json();
        p.innerHTML = `City : ${data.name} <br><br>`
        p2.innerHTML = `Weather: ${data.weather[0].description} <br><br>`
        let temprature = kelvinToCelsius(data.main.temp);
        p3.innerHTML = `Temprature: ${temprature.toFixed(2)}◦c`
        info.append(p);
        info.append(p2);
        info.append(p3);

    }catch(e){
        errorp.textContent = e.message;
        error.append(errorp);
        errorp.style.display = "block";
        error.style.display = "block";
        setTimeout(()=>{
            errorp.style.display = "none";
        },2000);
    }
}

btn.addEventListener("click",()=>{

    if(city.value.trim()==""){
        blanckerror.textContent = "Please First Fill up City Name !";
        blanckerror.style.display = "block";
        error.append(blanckerror);
        error.style.display = "block";
        setTimeout(()=>{
            blanckerror.style.display = "none";
        },2000);
        return;
    }

    getWeather(city.value);

})