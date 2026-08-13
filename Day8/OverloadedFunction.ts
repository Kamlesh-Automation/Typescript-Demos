//step1: Write a signature of functions
//step2: Implementation a function
//step3: calling function

//Example 1: diffrenet parameter type (data types)
/*
function getInfo(id:number):string
function getInfo(name:string):string

function getInfo(param: number | string):string
{
        if(typeof param=== "number")
        {
            return (`UserId is : ${param}`)
        }
        else
        {
            return(`Username is: ${param}`)
        }
}

console.log(getInfo(101));
console.log(getInfo("Kamlesh"));
*/

//Example 2: Number of parameter Different
/*
function add(a:number, b:number):number
function add(a:number, b:number, c:number):number

function add(a:number,b:number,c?:number):number
{
    if(c !== undefined)
    {
        return a+b+c;
    }
    else
    {
        return a+b;
    }
}

console.log(add(10,20));
console.log(add(10,20,30));
*/

//Example 3: different return type
/*
function processInput(input:number):number
function processInput(input:string):string

function processInput(input:number | string): number | string
{
    if(typeof input == "string")
    {
        return input.toUpperCase();
    }
    else
    {
        return input*5;
    }
}
console.log(processInput("welcome to india"));
console.log(processInput(12));
*/

//Example 4: 

function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string

function greet(value: string | number | boolean ):string
{
        if(typeof value==="string")
        {
            return (`Name is ${value}`);
        }
        else if(typeof value==="number")
        {
            return (`Age is ${value}`);
        }
        else
        {
            let res = value? "married" : "single";
            return res;
        }
}

console.log(greet(35));
console.log(greet("Kamlesh"));
console.log(greet(false));