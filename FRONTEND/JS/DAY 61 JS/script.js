/*
    Promises 
    Status -> Pendind, Resolve, Reject
    we can print prm to see state before time out and after time out
    example: 
    before timeout : console.log(prm); //output: Promise {<pending>}
    after timeout if resolve: console.log(prm); //output: Promise {<fulfilled>: 'Success'}
*/
        // const prm = new Promise((resolve,reject)=>{
        //     console.log("Fetching Status.....");
        //     setTimeout(()=>{
        //         let n = 2;
        //         if(n==2)
        //             resolve("Success");
        //         else
        //             reject("Fail");
        //     },3000);
        // })
        // prm
        //     .then((msg)=>{
        //         console.log(msg)
        //     }).catch((error)=>{
        //         console.log(error);
        //     })


/*
    Fetch Daata From API
    
    // Fact About fetch 
    fetch ka data readable nahi hota 
    use json banake readable karte he
    iske bad jo data milta he vo readable hota he 

*/

    // fetch('https://randomuser.me/api/').then((nonreadabledata)=>{
    //     return nonreadabledata.json();
    // })
    // .then((aslidata)=>{
    //     console.log(aslidata.results[0].name.first) // ahi dar reaload ma random name made chhe karan ke dar vakhte api cal thay tyare 0 index badlay chhe 
    // })
    // .catch((error)=>{
    //     console.log("Error is " + error);
    // })


/*
    async / await
    agar promis bana he to async await chalega
*/

        // function getUserData(){
        //     return new Promise((resolve,reject)=>{
        //         setTimeout(()=>{
        //             let num = Math.floor(Math.random()*10);
        //             if(num<=5)resolve("Success");
        //             else reject("Fail");
        //         },50);
        //     })
        // }
        // async function abbcd(){
        //     let msg = await getUserData()
        //     console.log(msg);
        // }
        // abbcd();