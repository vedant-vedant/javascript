// Datatypes  are classified as on the basis of storing in memory
// they are mainly of two Types
// 1 Primitive and 2 Non Primitive or refrence type
// primitive data types are call by value
//Js is dynamically typed language
//demonstration of symbol
const id =Symbol('123')
const anotherid =Symbol('123')
console.log(id== anotherid);

//7 types of Primitive: string, Number, boolean, Null, Undefined, symbol, bIgint

//Refrence (Non primitive)
//ARRay, objects, Functions

//Array declaration
const hero =["spiderman", "batman","shaktiman"] ;

//Object Declaration
// {
//     name:"vedant", //key:value
//     age:20,
// }//anything declare in parenthesis is object
//another way of declaring object
let myObj = {
    name_sec :"sam",
    age_sec : 20 

}

//Function Declaration
//function(){}
const myFunction = function(){
    console.log("hello world");
}
// All the non- primitive data types are of object type
