/////if conditon Program

//Program:1
/*
let ch= 'k';

if(ch >= 'A' && ch<='Z')
{
    console.log("Uppercase");
}
else
{
    console.log("Lowercase");
}
*/

//Program:2

/*
let num:number=21;

if(num%10==0)
{
    console.log("Number is a multiple of 10");
}
else
{
    console.log("Number is not multiple of 10");
}
*/

/////if else condition program
//Program :1  Check if a person is a teenager (age between 13 and 19).
/*
let aged:number=17;

if(aged>13 && aged<19)
{
    console.log("teenager");
}
else
{
    console.log("Not teenager");
}
*/

//Program 2 Compare two numbers and print the larger one.
/*
let n1=10,n2=1;
if(n1>n2)
{
    console.log("n1 is bigger");
}   
else
{
    console.log("n2 is bigger");
} */

//Program 3 Check if a number is positive, negative, or zero.
/*
let z:number=0;
if(z>0)
{
    console.log(`${z} is positive number`);
}
else if(z<0)
{
    console.log(`${z} is negetive number`);
}
else
{
    console.log(`${z} it is zero`);
}
*/

// Program 4 Check if a person is eligible for a senior citizen discount (age >= 60).

/*
let age:number=6;

if(age>=60)
{
    console.log("elegible for discount");
}
else
{
    console.log("not elegible for discount");
}
*/

///// Nested if else program

//Program:1. Check if a number is positive and even.
/*
let num:number=80;

if(num>=0)
{
    if(num%2==0)
        {
            console.log(`${num} is a positive and even number`);
        }
}
*/

// Program2: Check if a character is an uppercase vowel.
/*
let ch:string='O'

if(ch>='A' && ch<='Z')
{
    if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
    {
        console.log(`${ch} is uppercase vowel`);
    }
    else
    {
        console.log("Invalid");
    }
}
*/

// Program3: Find the largest of three numbers.
/*
let a:number=10, b:number=30, c:number=110;

if(a>b && a>c)
{
    console.log("A is largest number from B and C")
}
else if(b>a && b>c)
{
    console.log("B is largest number from A and C")
}
else
{
    console.log("C is greater then A and B")
}
*/

//Program:4 Check if a number is a multiple of both 5 and 10.
/*
let num:number=7;
if(num%5==0 && num%10==0)
{
    console.log(`${num} is multiple of both 5 and 10`)
}
else
{
    console.log(`${num} is not mutliple of both 5 and 10`)
}
*/

// Program5: Check if a character is a vowel or consonant.
/*
let ch:string='U'

if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
{
    console.log(`${ch} is vowels`);
}
else
{
    console.log(`${ch} is consonant`);
} 
*/

//Program6: Check if a number is divisible by both 2 and 3.
/*
let num:number=6;
if(num%2==0 && num%3==0)
{
    console.log(`${num} is divisible of both 2 and 3`)
}
else
{
    console.log(`${num} is not divisible of both 2 and 3`)
}
*/

//// switch Statement Programs

// Program 7: Print the corresponding month name for a given month number
/*
let month:number=7;

switch (month)
{
    case 1: console.log("january");
    break;

    case 2: console.log("february");
    break;

    case 3: console.log("march");
    break;
    
    case 4: console.log("april");
    break;
    
    case 5: console.log("may");
    break;
    
    case 6: console.log("june");
    break;

    case 7: console.log("july");
    break;

    case 8: console.log("august");
    break;

    case 9: console.log("september");
    break;
    
    case 10: console.log("october");
    break;
    
    case 11: console.log("november");
    break;
    
    case 12: console.log("december");
    break;

    default: console.log("invalid month");
}
*/

// Program 8: Perform basic arithmetic operations based on user input

let ope:string='*';
let a:number=10, b:number=5;
switch(ope)
{
    case '+': 
    console.log(`Result: ${a + b}`);
    break;

     case '-': 
    console.log(`Result: ${a - b}`);
    break;

     case '*': 
    console.log(`Result: ${a * b}`);
    break;

     case '/': 
    console.log(`Result: ${a / b}`);
    break;

    default: console.log("Invalid operation");
}