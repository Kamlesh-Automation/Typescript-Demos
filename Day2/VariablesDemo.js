"use strict";
//Variable  contail which can hold/store  some data.
// Var  vs let  vs const
//-----------------------------
/*
    1) Scope
    2) Declaration/ Value
    3) Re-declaration
    4) Re-intialization / Re-assigning
    5) Hoisting
*/
/*
function varScope()
{
    if(true)
    {
        var msg = "Hello world";
        //console.log(msg);
    }
    console.log(msg);

}
varScope();
*/
//let and const (blocklevel)
/*
function blockScope()
{
    if(true)
    {
        let msg = "this is let";
        const greet = "Hello const";

        //console.log(msg);
        //console.log(greet);
    }

        console.log(msg);
        console.log(greet);
}
blockScope()

*/
// Declaration/ Value assignment
// Example1: var can be declared without initialization
/*
var x;
console.log(x);
x=100;
console.log(x)
*/
// Example2: let can be declared without initialization
/*
let y;
console.log(y);
y=120;
console.log(y);
*/
// Example3: const cannot be declared without initialization
/*
const z;
console.log(z);
*/
//Re-declaration
//var - allows the re-declaration
/*
var a=10;
var a=30;
console.log(a);
*/
// let and const not allow to redecaration
/*
let a=10;
let a=100;
*/
// Reinitialization / Re-assignment
// var and let -> Re-assigment Allowed
// Example:1
/*
var age=10;
age=18;
console.log(age);
*/
// Example:2
/*
let age=10;
age=19;
console.log(age);
*/
// Example:2
/* Can not reinitiazation
const age=10;
age=19;
console.log(age);
*/
// Hoisting
//console.log(a);
/*var a=10;
console.log(a);
*/
console.log(b);
let b = 20;
console.log(b);
