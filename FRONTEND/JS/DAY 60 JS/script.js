/*
Example 1 Callback:

Ek Function Banao afterDelay-> Jo 2 Cheeje Lega : Time(MiliSeconds) and Callback Function
Given Time KE BAd CallBack ko Call Kardo
Callback ke andar Callback Executed Print Hona Chahiye
*/

        // function afterDelay(time,cb){
        //     setTimeout(function(){
        //         cb();
        //     },time);
        // }
        // afterDelay(2000,function(){
        //     console.log("Callback Executed");
        // });
        
/*
Example 2 Callback:

Ek Function Banao getUser-> Jo username lega 1 second ke bad call back ko ek object de :
 id username
Then Callback ke andar ek aur function call karo getUserPosts
getUserPosts:
UserId Lega 
1 second ke baad callback ko post ka array de
final output
user ka username print ho
fir uske bad post print ho
*/

        // function getUser(username,cb){
        //     setTimeout(()=>{
        //         cb({id: 1, username: "Vishv"});
        //     },2000);
        // }

        // function getPosts(id,cb){
        //     setTimeout(()=>{
        //         cb(["Nature, Hello"]);
        //     },500);
        // }

        // getUser("Vishv",function(data){
        //     getPosts(data.id,function(allpost){
        //         console.log(data.username,allpost);
        //     })
        // }); 
        
        //Badha Function Andar ni Andar Call  Karya  Karan ke Jyare User  Details Made Pachhi j getPost Call Karvanu


/*
Example 3 Callback:

Teen Function Banao: 
getUser -> 1 Second badd calback ko object de
fetchPermissions -> userId Lega -> 1 Second baad callback ko permissions array de
loadDashboard = permissions lega -> 1 second bad callback ko "Dashboard Loaded Dega"
*/

        // function getUser(username,cb){
        //     console.log("Getting User Details....");
        //     setTimeout(()=>{
        //         cb({userid: 1, username: "Vishv"});
        //     },1000);
        // }

        // function fetchPermissions(id,cb){
        //     console.log("Fetching User Permissions....");
        //     setTimeout(()=>{
        //         cb(["Read","Write"]);
        //     },1000); 
        // }

        // function loadDashboard(permissions,cb){
        //     console.log("Loadding Dashboard....");
        //     setTimeout(()=>{
        //         cb("✅ Dashboard Loaded");
        //     },1000); 
        // }

        // getUser("Vishv",function(data){
        //     fetchPermissions(data.id,function(permissions){
        //         loadDashboard(permissions,function(message){
        //             console.log(message);
        //         })
        //     })
        // });


/*
    Example 3 Solution Using : Promises
*/
        
        function getUser(username) {
            console.log("Getting User Details....");
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({userid: 1,username: username});
                    reject("sorry we can't get user data");
                }, 1000);
            });
        }
        function fetchPermissions(id) {
            console.log("Fetching User Permissions....");
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(["Read", "Write"]);
                    reject("sorry we cant able to fetch permissions");
                }, 1000);
            });
        }

        function loadDashboard(permissions) {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("✅ Dashboard Loaded");
                    reject("sorry we cant able to load Dashboard");
                }, 1000);
            });
        }

        getUser("Vishv")
            .then(function(data) {
                console.log(data);
                return fetchPermissions(data.userid);
        })
        .then(function(permissions) {
            console.log(permissions);
            return loadDashboard(permissions);
        })
        .then(function(msg) {
            console.log(msg);
        })
        .catch(function(error) {
            console.log(error);
        });