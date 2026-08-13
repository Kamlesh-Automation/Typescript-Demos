// Named Function: A function that is declared with a name.

/*
function functionName(parameter): ruturnType
{
    //block of code
}

functionName(); // calling the function or invoking
*/

/* Example 1: named function that is declared with a name no return value.

function display():void
{
    console.log("welcome to typescript");
}

display();
*/

/*Example 2: Named function that is declared with Parameters.

function addNumber(x:number, y:number):number
{
    return x+y;
}
console.log(addNumber(2,3));
*/

/*Example 3: Named Function with Rest Parameters - same types

function addNumbers(...nums:number[])
{
    let i;
    let sum:number=0;

    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];
    }
    console.log("sum of number",sum);
}
addNumbers(1,2);
addNumbers(1,2,3);
*/

/*Example 4: Named function with Rest parameter - Multiple types

function findElements(...elements:(number | string)[]):number
{
     return elements.length;
}
console.log(findElements(3,"john",10,7,"chaugule"));
console.log(findElements("kamlesh","chaugule"));
console.log(findElements(1,2,3,4,5,10))
*/

/*Example 5: Named function with optional Parameters

function displaydetails(id:number, name?:string, mailId?:string):void
{
    console.log("ID:",id);
    console.log("Name:",name);
    if(mailId!==undefined)
    {
        console.log("Email:",mailId);
    }
    
}
displaydetails(1);
*/

// Example 6: Named function with Default Parameter
/*
function calculateDiscount(price:number, rate:number=0.40):void
{
    let dicount:number = price*rate;
    console.log(dicount);
}
calculateDiscount(1000);
//calculateDiscount(1000,0.50);
*/
