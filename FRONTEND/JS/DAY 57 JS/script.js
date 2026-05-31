/*
    ===================== Classes In Java Script ===========================
*/

        class User{
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            sansLo(){
                console.log("Sans Leli");
            }
        }

        let user1 = new User("Vishv",20);
        console.log(user1);
        user1.sansLo();

        let user2 = new User("Ram",22);
        console.log(user2);
        user1.sansLo();

/*
    ========================== ProtoTypes in Java Script ===========================
*/

        let u1 = {
            name: "Vishv",
            age : 20,
        }
        let u2 = {
            name: "Ram",
            age : 22,
        }

        Object.prototype.sansLo = function(){
                console.log("Sans Leli");
        }

        u1.sansLo();
        u2.sansLo();


/*
   ========================  This Key word ===========================

   Note: Arrow Function Apne This Ki Value Parent Se Leta he
*/

        //1. This value Globally -> Window
        console.log(this); //Window

        //2. This value -> Global Function(Any ES5 Or ES6) -> Window
        function abcd(){
            console.log(this); //Window
        }
        abcd();

        //3. Es5 Function in Object (Dhyn Rakhvu Object ma Function Hoy ene Method Kevay) -> Object
        let obj = {
            name : "Object 1",
            fnc : function(){
                console.log(this); 
            }
        }
        obj.fnc();//Object

        //4. Es6 Function In Object  -> Window
        //Note: Only var keyword thi banavela variable tame Window Maa Add kari sako
        let obj2 = {
            name : "Object 2",
            fnc : ()=>{
                console.log(this); 
            }
        }
        obj2.fnc();//Window

        //5. Es5 Function Inside Es5 Function in Object -> Window
        let obj3 = {
            name: "Object 3",
            fnc : function(){
                console.log(this); //Object
                function abcd(){
                    console.log(this); //Window
                }
                abcd();
            }
        }
        obj3.fnc()

        //5. Es6 Function Inside Es5 Function in Object -> Object 

        let obj4 = {
            name: "Object 4",
            fnc : function(){
                console.log(this); //Object
                let abcd = ()=>{
                    console.log(this); //Object
                }
                abcd();
            }
        }
        obj4.fnc()

/*

 ============================= Call And Apply And Bind =============================

    Note: Ek Function mein this ki value window hoti he par app chahte ho ki vo value window naa ho par koi aur object ho tab app use karte ho call apply bind

*/

        // 1. Call
        //Syntax : abcd.call(Object nu nam je this ni value apvi chhe te , fucntion ni arguments)
        // Exmaple: abcd.call(obj5,1,2,3);
        let obj5 = {
            name: "Object 5",
            age : 20
        }
        function abcd(a,b){
            console.log(this,a,b);
        }
        abcd.call(obj5,10,20);

        // 2. Apply
        // Call and Apply ma Fakt Etlo Fark Chhe ke Call ma je Bija Parameter ma Function ni        arguments one by one apo chho eni jagya e array ma bhari ne apvi
        //Syntax : abcd.call(Object nu nam je this ni value apvi chhe te , fucntion ni arguments        array na form ma)
        // Exmaple: abcd.call(obj5,[1,2,3]);
        let obj6 = {
            name: "Object 6",
            age : 20
        }
        function abcd(a,b){
            console.log(this,a,b);
        }
        abcd.apply(obj6,[10,20]);

        // 3. bind 
        // same like a call (argument ==not== pass as array)
        // dont execute function
        // return a new function
        let obj7 = {
            name: "Object 7",
            age : 20
        }
        function abcd(a,b){
            console.log(this,a,b);
        }
        let newabcd = abcd.bind(obj6,10,20);
        newabcd();