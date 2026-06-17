/*
    Revision OF JS
*/

// 1. Array Destructuring

    /* let arr = [1,2,3];

    const[a,,c] = arr;

    console.log(a)
    console.log(c) */
    
// 2. Object Destructuring

    /* let obj = {
        name: "Vishv",
        age: 20,
        adress : {
            houseNo : 120,
            vas : "Patel Vas"
        }
    }
    const {name, adress:{houseNo} } = obj;
    console.log(name);
    console.log(houseNo); */

// 3. Spread operator

    /* let arr = [1,2,3];
    let arr2 = [...arr] //Spread Operator
    console.log();
    console.log("Before");
    console.log("Array 1 =>: " + arr);
    console.log("Array 2 =>: " + arr2);
    arr2.push(4);
    console.log();
    console.log("After Add 4 into Array 2");
    console.log("Array 1 =>: " + arr);
    console.log("Array 2 =>: " + arr2);
    console.log(); */
    
// 4. Rest Operator 

    /* function abcd(a,b,...arr){ //rest OPerator
        console.log(a)
        console.log(b)
        console.log(arr)
    }

    abcd(10,20,30,30,0); */

// 5. Promises

    /* function getConnection(){
        return new Promise((resolve,reject)=>{
            let success = true;
            if(success)
                resolve("Connected");
            else
                reject("Failed to Connect");
        })
    }
    getConnection()
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err)) */

// 6. Async / Await

    /* function getConnection() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([10, 20, 30]);
            }, 3000);
        });
    }
    async function getting() {
        let data = await getConnection();
        console.log(data);
    }

    getting(); */