// Primitive 

// 7 types : String, Number, Bolean, null, undefined, Stymbols, BigInt


const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 030020908


// Refrence (non primitive)

//Array, Objects, Function

const herors = ["IronMan", "Thor", "Superman"]
let myObj = {
    name: "umer",
    age: 22
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof score);

console.log(typeof myFunction);



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object 
//        Function  =>  function
//        Object  =>  object