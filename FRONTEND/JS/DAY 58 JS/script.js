/*
    ================= Class Expression In Java Script ==================
    Note: Store a Class In Variable is called Class Expression
    What is Feature of This : Class Can not Use Before Initialization
*/

        // let Person = class{
        //     constructor(name,age){
        //         this.name = name;
        //         this.age = age;
        //     }
        // }
        // let person1 = new Person("Vishv",20);
        // console.log(person1);

/*
    ========================= Inheritence =========================
*/

        // class Animal{
        //     constructor(){
        //         this.hands = 4;
        //         this.legs = 7;
        //     }
        //     eat(){
        //         console.log("Eat");
        //     }
        //     breathe(){}
        // }

        // let Animal1 = new Animal();
        // console.log(Animal1);

        // class Human extends Animal{
        //     constructor(){
        //         super(); //Call Parent Class Contructor
        //         this.legs = 4;
        //     }
        //     susu(){}
        // }
        // let Human1 = new Human();
        // console.log(Human1);

/*
    ================= private variable =================
    this._age = 20;
    Ahi Je Age ni agad _ Karel chhe e joine samjaya ke aa private varible che but ane apne change to kari j sakiye but industry ma pan loko ane private varible j kahe chhe
    anu protection meddvva apne use karsu getter and setter

    ================== Getter and Setter
*/

        // class User{
        //     constructor(){
        //         this._age = 20;
        //     }
        //     get age(){
        //         return this._age;
        //     }
        //     set age(val){
        //         if(val<0){
        //             console.error("Not Possible");
        //             return; //agd no code nai chale return na karane
        //         }
        //         this._age = val;
        //         return this._age;
        //     }
        // }

        // let u1 = new User();
        // u1.age = 27;
        // console.log(u1.age);

/*
    ==================  Questions  ===============
*/

// Q1: Create a User Object That Stores name and Email and Has a Login Method Which Prints "User Logged In";

    // let User = {
    //     name : "Vishv",
    //     email : "vishv123@gmail.com",
    //     login : function(){
    //         console.log("User Logged In");
    //     }
    // }
    // User.login()

// Q2: Convert Q1 In Class So Multiple User can create in small code

    // class User{
    //     constructor(name,email){
    //         this.name = name;
    //         this.email = email;
    //     }
    //     loggedin(){
    //         console.log("User Logged in");
    //     }
    // }

    // let user1 = new User("Vishv","v23@gmai.com")
    // console.log(user1);
    // let user2 = new User("Ram","ram@gmail.com")
    // console.log(user2);
    // let user3 = new User("Harsh","harsh@gmai.com")
    // console.log(user3);

// Q 3: Create a Product Object With name and price and also have method which return price after discount

        // let Product = {
        //     name : "Cap",
        //     price : 20000,
        //     getFinalPrice : function(){
        //         return (this.price - (this.price * 20 / 100));
        //     }
        // }
        // console.log(Product.getFinalPrice())

// Q 4: Create a Car Class with the following:
//brand , speed, a drive method that prints the car brand and speed

        // class Car{
        //     constructor(brand,speed){
        //         this.brand = brand;
        //         this.speed = speed;
        //     }
        //     drive(){
        //         console.log(this.brand,this.speed);
        //     }
        // }

        // let car1 = new Car("BMW","320");
        // car1.drive();
        // let car2 = new Car("Maruti","120");
        // car2.drive()

// Q 5: Create a Student Class Whose Contructor accopts a name and roll number
// Add a Method introduce that prints both values
// Inside The Contrutor set values using this
// Then Try  Removing this and notice what error occure

        // class Student{
        //     constructor(name,rollno){
        //         this.name = name;
        //         this.rollno = rollno;
        //     }
        //     introduce(){
        //         console.log(this.name + " - " + this.rollno);
        //     }
        // }

        // let stud1 = new Student("Vishv","12");
        // stud1.introduce();
        // let stud2 = new Student("Ram","40");
        // stud2.introduce()


//Q 6:
 // Create a Object Using Normal Function and Using Arrow Function
 //Print This Value Inside Both Function

        // let obj = {
        //     sayNormalName : function(){
        //         console.log(this)
        //     },
        //     sayArrowName : ()=>{
        //         console.log(this)
        //     }
        // }
        // obj.sayNormalName();
        // obj.sayArrowName();

// Q :7
// Create a User Contructor Function DO Not Use Clas Syntax
// Add a Login Methods in Two Ways
//First Inside the constructor 
//Then , Move method to prototype

        // function Car(name,speed){
        //     this.name = name;
        //     this.speed = speed;
        // }
        // Car.prototype.drive = function(){
        //     console.log("Drive");
        // }
        // let car1 = new Car("Bugaty",200);
        // console.log(car1);
        // car1.drive();
        // let car2 = new Car("Toyoto",150);
        // console.log(car2);
        // car2.drive();

//Q8: Create a Fucntion That Print this.name call using bind
        
        // let obj = {
        //     name: "Vishv"
        // }
        // function abcd(){
        //     console.log(this.name);
        // }
        // let newabcd = abcd.bind(obj);
        // newabcd();