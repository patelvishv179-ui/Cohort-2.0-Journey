/*
Sylabuss:
Introduction to Error Handling ✅
Common types of errors in JavaScript - [ Syntax errors , Runtime errors , Logical
errors ] ✅
Understanding the Error object - [ message , name , stack ] ✅
Handling exceptions using try-catch , try-catch-finally ✅
How to Throw Errors in JavaScript
How to create custom error in JavaScript
Error Handling in Asynchronous Code
*/

// SyntaxError Apne code likhte waqt galti kardi / formate me galti ho
//Example : a let = 12;

//Runtime Error - likhte waqt error nahi ayega chalaoge tab ayega
// function abcd(){
//     let a = 12;
//     console.log(a.name.first);
// }
// abcd();

//Logical Errors -> Appne Apke Code ko Kuchh Karana Chahiye tha par wo kar kuchh aur raha he
// function add(a,b){
//     return a-b;
// }
// console.log(add(1,2)); hame add chaihye tha milega substraction


//Try and Catch best for handle the error part it does not stoped a excution of code even if error occured in normal flow if error accure code stop next line execution but its solution is try and catch
       
        //Exmaple Without try Catch Program Stop it execution after error line
        // console.log(a);
        // console.log("Hello")

        //Example With Try 
        // try{
        //     console.log(a);
        // }catch(e){
        //     console.log(e.message);
        //     console.log(e.stack);
        //     console.log(e.name);
        // }
        // console.log("Hello")

/*
    finally block will be execute even any error ocuure not not
*/

        // try{
        //     let a = 10;
        //     console.log(a);
        // }catch(e){
        //     console.log(e);
        // }
        // finally{
        //     console.log("No Error Occure Still I am Logging");
        // }

/*
    How to Throw Errors in JavaScript
*/

        //  try{
        //     let a = 10;
        //     // if(a>9) throw new Error("Error aa gaya a is bigger than 9");
        //                         // OR 
        //     if(a>9) throw("Error aa gaya a is bigger than 9");

        // }catch(e){
        //     console.log(e);
        // }
        // finally{
        //     console.log("Finnaaly Executed");
        // }

