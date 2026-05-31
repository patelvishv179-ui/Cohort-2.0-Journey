/*
Scenario 1 — Weather Dashboard with Error Handling

Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).
You Must Make The API request asynchronously using fetch with async/await

If The API request fails (for example, due to an invalid city name),you must handle the error using `try/catch`.

Additonally , create and throw custom erros based on weather conditions

For Example:
If the temparature is extremely high or extremely low, throw error and handle it properly in your code
*/


// Step 1: Go to https://openweathermap.org/api/one-call-api -> Copy API CALL
// Step 2: Go to https://home.openweathermap.org/api_keys if not sigin please first sign in then go.

    //url ma data change karvano hovathi backtick ma rakhvo
    // let apiKey = 'a3ca555efaa55b38fa87339444aaf6d8';

    //First Try Using Promise Then We Try Using async await
    // function getWeather(city){
    
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    //     .then(raw => raw.json())
    //     .then(result => console.log(result))
    //      .catch(err => console.log(err));
    
    // }
    // getWeather("Bhopal") 

    //  Try Using async await
    // let apiKey = 'a3ca555efaa55b38fa87339444aaf6d8';
    // const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    // async function getWeather(city){
    
    //     try{   
    //         let rowdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        
    //         if(!rowdata.ok){
    //             throw Error("City Not Found Try Something Else");
    //         }

    //         let data = await rowdata.json();
    //         console.log(data);
    //         console.log("City Name : " +data.name);
    //         console.log("Temprature : " + kelvinToCelsius(data.main.temp).toFixed(2) + " Celsious");
    //         console.log("Description : " + data.weather[0].description);
    //     }catch(e){
    //         console.log(e.message);
    //     }
    
    // }
    // getWeather("Harij") 

    /*
        ================ My Effort Without Watch Solution Second Time =================
    */

    // Solution 1 : Using Promise With (No (Try and Catch -> promis ma try catch nahi but then catch use thay chhe) ----------------

    // let APIKey = 'a3ca555efaa55b38fa87339444aaf6d8';
    // function getWeather(city){
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    //     .then(rowdata=>{
    //             if(!rowdata.ok){
    //                 throw new Error("This City Realated Data Not Found");
    //             }
    //             return rowdata.json()
    //     })
    //     .then(data=>{

    //         console.log("City Name : " + data.name);
    //         console.log("Description  : " + data.weather[0].description);
    //     })
    //     .catch((e)=>console.log(e.message));
    // }
    // getWeather("Patan");

    // Solution 2 : Using async await With Try and Catch 

    // let APIkey = 'a3ca555efaa55b38fa87339444aaf6d8';
    // async function getWeather(city){

    // try{
    //     let rowadata  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
    //     if(!rowadata.ok){
    //         throw new Error(city + " City Related Data Not Found \n Please Carefully Check Your City Name");
    //     }
    //     let data = await rowadata.json();
        
    //     if(data.main.temp > 30){
    //         console.warn("Temprature is Very Much Hot")
    //     } //aa case check karva city name Banda Nakhvu

    //     if(data.main.temp < 5){
    //         console.warn("Temprature is Very Much Cold");
    //     }//aa case check karva city name leh nakhvu

    //     console.log("City : " + data.name);
    //     console.log("Temprature : " + data.main.temp + " °c");
    //     console.log("Weather Descriiption : " + data.weather[0].description);
    // }catch(e){
    //     console.log(e.message);
    // }
    // }

    // getWeather("Ramdevra");


    /*

    Scenario 2:  Bulk Email Sending Simulation with Parallel Promises and Error Handling

    Think of a Scenario Where you must simulate sending bulk emials to 5 users
    Treat each email sending operation as a Promis (You may simulate it using setTimeout)

    All Email Must be sent in parallel using Promise.all

    If any email fails (For Example, due to random failure condition) YYou Must Catch the error and clearly show which specific email failed

    In Addtionally, use a finally block to display a message indicating that the "Email Process is Completed"

    */

    // Ek Array Hoga of emails

    const users = ["Vishv@gmail.com","Ram@gmail.com","Krishna@gmail.com"];

    function sendEamil(email){
        return new Promise((resolve,reject)=>{
            let time = Math.floor(Math.random()*5)*1000;
            setTimeout(()=>{
                let random = Math.floor(Math.random()*10);
                if(random<=5)
                    resolve("Email Sent SuccessFully");
                else
                    reject("Email Not Sent");
            },time)
        })
    }

    async function sendEmails(emails){

        let allresponses = emails.map((email)=>{
            return sendEamil(email)
            .then(msg=>{return msg})
            .catch(err=>{return err})
        })

        console.log(allresponses); //promises no array made

        let ans = await Promise.all(allresponses);
        //ahi wait nu kam Promise.all pan ek promise return kare chhe jene reslove await kare chhe tame ane chatgpt ma nakhi joi sko chho
        
        console.log(ans);

    }

    sendEmails(users);
