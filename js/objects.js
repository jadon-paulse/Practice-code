// "use strict",
// Objects are used too stream data through websites
// Objects is a unit that stores multiple variables

// let user = {}; //"Object literal" syntax

// let student = {        // An Object
//     name: "Jadon", //by key "name" store store value "Marcus"
//     age: 19,         //by key "age" store value 27
//     // "loves coffee":true //true
//     suburb: "northern",
//     modules:"html, css, javascript, learning how too learn"
// };

// //delete
// delete student.suburb;

// //Get fields of object:

// alert(student.name + " " + student.age + " " + student.modules);


//     document.write(student.name +" " + student.age + " " + student.suburb + " " + student.modules);

    // let userAdmin = {
    //     name: "Nate",
    //     surname: "Smith",
    //     name: "Jadon",
        
    // }

    // delete userAdmin.name;
    // console.log(userAdmin);
    // // alert(userAdmin.name + " " + userAdmin.surname)

    // let wages ={
    //     nkosi: 80,
    //     rustin: 100,
    //     chad: 0,
    //     umr: 50,
    //     waahaj: 200,
    //     yasseen: 100,
    //     jaimie: 8000,
    //     michael: 20,
    //     teresa: 25,
    //     sithule: 45,
    //     diteboho: 1500,
    //     ridhaa: 300,
    //     jarod: 40,
    //     vicario: 0,
    //     speciouse: 3000,

    // };

    // let sum = 0;

    // for (let key in wages) {
    //     sum += wages[key];
    // }

    // console.log(sum);

    // let user = {
    //     name: "Emma",
    //     age: 26
    // };

    // user.sayHi = function (){
    //     console.log("Hello!");
    // };

    // user.sayHi(); //Hello!

    // let user = {
    //     name: "Emma",
    //     age: 26,

    //     sayHi() {
    //         alert(this.name);
    //     }
    // };

    // user.sayHi();

    // let user = {
    //     name: "Emma",
    //     age: 26,

    //     sayHi() {
    //     alert(user.name);
    //  }
    // };
    
    // let admin = user;

    // user = null; //overwrite to make things obvious


    // admin.sayHi();

    // let user = {
    //     firstName: "Thor",
    //     sayHi() {
    //         let arrow = () => alert(this.firstName);
    //         arrow();
    //     }
    // };

    // user.sayHi(); // Thor

    //Create an object calculator with three methods:
    //read() prompts for two values and saves them as object properties.
    //sum() returns the sum of saved values.
    //dif() returns the difference of saved values.
    //mul() multiplies saved values and returns the result.

    var txt;
    var person;

        read() {
            var person = prompt("Enter values");
        };
        
        sum() {
            if (person == null){
                txt = "User cancelled input";
            }

            else{

                txt = person + person;
            }

        };
    


