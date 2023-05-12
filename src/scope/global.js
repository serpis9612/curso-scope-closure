// variables

var a; //declaramos
var b = "b"//declaramos y asignamos
b = "bb";//reasignacion
var a = "aa"; //redeclaracion

//Global Scope
var fruit = "Apple"; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = "Colombia"; // Global si no la declaras
    console.log(country);
}

countries();
console.log(country);