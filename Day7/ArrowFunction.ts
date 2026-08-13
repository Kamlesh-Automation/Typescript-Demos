// Arrow Function/Lamda function

/* Lamba referes to anonymous function is programming.
   Lamba function are a concis mechanism to represent anonymous function.
   These function are also called as Arrow function.

   There are 3 parts to a Lambda function.

   1. Parmaeters - A function may optionally have parameters.
   2. The fat arrow notation/lambda notation (=>) - it is also called as the goes to operator
   3. Statements - represent the functions instruction set

   Syntax:

    let variable = (parameters) =>
    {
        // block of code
    }
    
    variable();
*/

// Example 1: Arrow function with no parameter and no return type
/*
let greet = ():void=>
{
    console.log("Hello India");
}
greet();
*/



//Example 2: Arrow function with parameters and a return type 

/* 
let add = (a:number, b:number):number => 
{
    return a*b;
}
console.log(add(10,5));
*/ 





//Example 3: Arrow function with "implecit rerurn"
/*
let add = (a:number, b:number):number => a+b;
let multiply = (a:number, b:number):number => a*b;
console.log(add(10,5));
console.log(multiply(10,20));
*/





// Example 4: Arrow funtion with optional parameters
/*
let op = (id:number, name:string, email?:string)=>
{
    console.log("Id:",id);
    console.log("Name:",name);
    if(email!=undefined)
    {
        console.log("Email:",email);
    }
}
op(101,"Kamlesh");
*/




// Example 5: Arrow function with default parameter
/*
let intrest = (price:number, rate:number):number =>
{
        return price*rate;
}
console.log(intrest(1000,0.6));
*/
/*
let intrest = (price:number, rate:number=0.11):void =>
{
        let discount:number = price*rate;
        console.log("Discount Price",discount);
}
//intrest(100,0.5);
intrest(100);
*/



// Example 6: Arrow function with Rest parameter (Multi type)
/*
let findElements = (...findlist:(number | string)[]) =>
{
    console.log(findlist.length);
}
findElements(1,2,4,"kamlesh","chaugule",1010);
findElements(1,2,4,8,6)
*/

// Example 7: Arrow function with Rest parameter (Same type)
/*
let i:number;
let sum = 0;

let add = (...num:number[])=>
{
    for(i=0;i<num.length;i++)
    {
        sum = sum + num[i];
    }
    console.log(sum);
}
add(1,10,100);
*/