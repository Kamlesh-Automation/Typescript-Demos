//forEach / map / filter / reduce / some / every


//1. forEach() : execute each element of array
/*
syn: array.forEach(currentvalue,index,arrays){})
*/

let fruit:string[] = ['Apple','Banana','grapes','cherry'];

for(let i in fruit)
{
    console.log(i, fruit[i]);
}
/*
fruit.forEach(function(element,index){

    console.log(index,element);
}) */

fruit.forEach((element,index)=>{

    console.log(element,index);
})

fruit.forEach((element)=>{

    console.log(element.toUpperCase());
})

//2. map() create a new array with the result of calling the function oe every element of an array

let num:number[]=[4,3,2,1]; //16 9 4 1

let sq = num.map((element)=>{

    return element*element;
})

console.log("squareroot of element:",sq);

let double = num.map(function(ele)
{ 
    return ele*2;
})
console.log("element got Double:",double);

//3. filter(): create new arrays will all element pass or satisfy the function

let even = num.filter((element)=>{
    return(element%2==0);
})
console.log("Evene number:",even);

let odd = num.filter(function(ele){

    return(ele%2!=0);
})

console.log("Odd number:",odd);

//4. reduce() (accumalator)Apply on every elemement of array return single value.

let reduceresult=num.reduce((total,ele)=>{
        return(total+ele);
},0)
console.log("Total value of element:",reduceresult);
//single line when single value return 
let redtotal = num.reduce((total,ele)=>total+ele);
console.log(redtotal);

//5. some(): check if ane element satisfy the condition (true or false)

let sometruevalue = num.some((ele)=>ele<=5);
console.log(sometruevalue); //false

//6. every(). check if all eleements are satisfy a condition (true or false)

let allEven = num.every((ele)=>ele%2==0);
console.log(allEven); //false

let allgreaterthanone = num.every((ele)=>ele>=1);
console.log(allgreaterthanone); //true

let positiveVal = num.every((ele)=>ele>0);
console.log(positiveVal); //true