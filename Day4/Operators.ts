//Arithmatic Operator

let a:number=10, b:number=20;
/*
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
*/

//Relational operator 

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

// == and === difference

let num1:any="10";
let num2:any=10;
console.log("== and === difference");
console.log(num1===num2);  //compare value with datatype
console.log(num1==num2);  //compare only value

//Assigment operator

a=10;
b=5;

//a=a+b;

console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);


//Logical Operator  && and || and !

let x:number=10;
let y:number=15;
let z:boolean=true;

console.log(x>y && x<y);
console.log(x<y || x>y);
console.log(!z);