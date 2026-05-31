/*
    Async JS :
    Turant Hone Wale Kam Ko Kar do Agar Data Ane Me Time Lag Raha he(Side Me Data Late Raho Lekin Uske Bad Ka Kam Bhi Chale Raho Ruko Mat) 
*/

    // console.log("Hello 1");
    // setTimeout(()=>{console.log("Hello 2")},2000)
    // console.log("Hello 3");

/*
    CallBack -> Function Which Not Execute Immediatly Instead it Execute When Some Work Is Done OR We Can Say Callback is a Function Which  Pass In as a Argument For Another Function

    example:
    jab insta data ajye to uske bad jo function he wo chala dena
    getDataFromInstagram("vishv179",function(){});
*/

//=============  Call Back Hell ==========
//Jis line pe funcion call ho raha he vaha function pass kardo

        // function abcd(fn){
        //     fn(function(fn3){
        //         fn3(function(fn5){
        //             fn5();
        //         });
        //     });
        // }
        // abcd(function(fn2){
        //     fn2(function(fn4){
        //         fn4(function(){
        //         });
        //     });
        // })

// -------- Call Back Hell Example ================ //

        // function ConnectToServer(fetchCources){
        //     console.log("Connecting ....");

        //     setTimeout(()=>{
        //         console.log("Connected..");
        //         fetchCources(function(print){
        //             console.log("Fetched ...");
        //             print(function(){
        //                 setTimeout(()=>{
        //                     console.log("Printed...");
        //                 },5000);
        //             });
        //         });
        //     },2000);

        // }
        // ConnectToServer(function(fetchCources){
        //     console.log("Fetching ..");
        //     setTimeout(()=>{
        //         fetchCources(function(printed){
        //             console.log("Printing...");
        //             p    rinted();
        //         });
        //     },2000);
        // });

/*
    ===== Factorial Using Recursion===
*/

        // function getFactorial(n){
        //     if(n==0 || n==1)
        //         return 1;

        //     return n * getFactorial(n-1);
        // }
        // console.log(getFactorial(5));

/*
    Get Prime Number By Minimal Memory and Time
*/

        // let n = +prompt("Enter an Number : ")
        // if(n==1){
        //     console.log("Not a Prime");
        // }
        // else if(n==2){
        //     console.log("Prime");
        // }
        // else if(n%2==0){
        //     console.log("Not a Prime");
        // }
        // else{
        //     let isPrime = 1;
        //     for(let i=3; i<=(Math.floor(Math.sqrt(n))); i++){
        //         if(n%i==0)
        //             isPrime = 0;
        //     }
        //     if(isPrime){
        //         console.log("Prime");
        //     }else{
        //         console.log("Not a Prime");
        //     }
        // }

// ============= Calback Hell Another One Example ========================= //

        function amitSeDetailsLao(address,fnc){
            console.log("Dukan ka Adress Laa Raha hu ...");
            setTimeout(function(){
                fnc("Dukan ka Adress -> Dukan 120",function(samaan,gharpejao){
                    console.log("Samana Laa Raha hu...");
                    setTimeout(function(){
                        console.log(samaan + " Vagera Samaan Laa Diya");
                        gharpejao("130,Patel vas , Harij");
                    },4000);
                });
            },4000);
        }
        amitSeDetailsLao("120,Patel vas",function(details,fnc){
            console.log(details);
            fnc(["Haldi","Mirchi"],function(address){
                console.log("Ghar pe Jaa raha hu ...");
                setTimeout(function(){
                    console.log("Ghar pe pahunch gaya adress he :-> " + address);
                },4000);
            });
        })