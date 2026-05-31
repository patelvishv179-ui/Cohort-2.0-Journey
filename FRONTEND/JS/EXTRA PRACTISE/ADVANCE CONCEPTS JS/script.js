// // Callaback  Hell

// function ConnectToServer(clbk){

//     console.log("Connecting ...!");

//     setTimeout(()=>{
//         console.log("Connected ...!");
//         clbk();
//     },2000)

// }

// function fetchCourcse(cblb){

//     console.log("Fetching...!");

//     setTimeout(()=>{
//         console.log("Fetched ...!");
//         cblb(["Cource 1,Cource 2"]);
//     },2000)

// }

// function showCources(cbln){

//     console.log("Showing...!");

//     setTimeout(()=>{
//         console.log("Showed ...!");
//         cbln(["Cource One,Cource 2"]);
//     },2000)

// }

// ConnectToServer(function(){
//     fetchCourcse((data)=>{
//         console.log(data);
//         showCources((data)=>{
//             console.log(data);
//         })
//     });
// });

// Prommises

// function ConnectedTOServer(){

//     return new Promise((resolve,reject)=>{

//         console.log("Connecting ....");

//         setTimeout(()=>{
//             resolve("Connected...");
//         },2000);

//     });

// }

// function getCources(){

//     console.log("Getting ....");
    
//     return new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             resolve("Cource 1, Cource 2");
//         },2000);

//     });

// }

// ConnectedTOServer().then((response)=>{
//     console.log(response);
    
//     return getCources();
// })
// .then((response)=>{
//     console.log(response);
// })