// debouncing and throttling

//Debouncing -> Jab User Rukega Tab Kam Karna he
    // Like Jab Amazon me app kuchh search karte ho like 
    // Bajaj Fan -> Man Lijiye apne bajaj fatafat likh liya or f likha or ruk gaye fir hi apko suggesions ayege beacuse har ek word pe request bhejna vyarth he agar user ko pata he kya search karna he 

    //Go to Chatgpt ->Search -> JS Code For Applying Debouncing on a one input search field
    //Kyoki Debounc Code Koi Jate Nathi Lkhu even moti companies pan

//Exmaple Debouncing: nichena code samjvo hoy to text file chhe folder ma juo clear des of Debounce Example

        // let inp = document.querySelector("input");
        // function deBounce(fnc,time){
        //     let timer;
        //     return function(){
        //         clearTimeout(timer);
        //         timer = setTimeout(fnc,time);
        //     }
        // }
        // inp.addEventListener("input",deBounce(function(){
        //     console.log("Hello");
        // },400));


// ========================== Throattling ===========

//Example: jab ap kuchh bolloge uske 2 second bad m kuchh bolunga apne bola hi hi hi mene 2 second ke bad bola hi apne bola hi hi hi mene 2 second ke bad bola hi ap ruk gaye to me bhi ruk gaya -> Throatling

        function throttle(fn,delay){
            let last = 0;
            return function(){
                const now = Date.now();
                if(now-last >= delay){
                    last = now;
                    fn();
                }
            }
        }

        window.addEventListener("mousemove",throttle(function(){
            console.log("Vishv")
        },2000))


// =================== JSON.parse and JSON.stringify =============

        // // Stringify thi json banavie chhie
        // JSON.stringify({name: "Vishv",age : 20})

        // //parse -json data ne normal form ma convert karava
        // console.log(JSON.parse('{"name":"Vishv","age":20}'));
        // //dhyan rakhvu json.stringify nu output j parse ma avse