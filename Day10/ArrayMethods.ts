//Arrays Methods

let num:number[]=[1,2,3,4,5,6];
let fruits:string[]=["apple","banana","grape","orange"];

console.log("Number Arrays:",num);
console.log("Number Fruits:",fruits);

console.log("Length of Number Arrays:",num.length);
console.log("Length of Fruits Arrays:",fruits.length);

//1. Push() Add single or multi element at end of the Array.

num.push(7);
console.log("After push:",num);

fruits.push("kiwi");
console.log("After push Fruit:",fruits);

//2. pop(): remove element form last on array

let reomvedfruit = fruits.pop();
console.log("After remove fruit array:",fruits);
console.log("Removed fruit:",reomvedfruit);

//3. shift():  remove first emlement

let firstElement = num.shift();
console.log("after remove first element",num);
console.log("which element removed",firstElement);

let firstElement1 = fruits.shift();
console.log("after remove first element",fruits);
console.log("which element removed",firstElement1);

//4. unshift(): Add elements at begining

num.unshift(10,20);
console.log("After adding element",num);

fruits.unshift("pineapple","Papaya");
console.log("After adding first:",fruits);

//5. concat(); combine th two array

let concatArrays = num.concat([8,9],[100]);
console.log(concatArrays);


//6. Slice() extract a section of aaray

let sliceArr= num.slice(2,8);
console.log(sliceArr);

let slicefruit = fruits.slice(2,5);
console.log(slicefruit);

//7. Splice() add/remove element from everywhere

console.log("Current Fruits Array:",fruits);

let splicFruitArray = fruits.splice(1,3);
console.log("Original Fruit:",fruits);
console.log("Removed Items:",splicFruitArray);

//ex:2

fruits.splice(2,0,'kiwi','watermelon','mango');
console.log("After adding using splice:",fruits);

//ex:3

fruits.splice(0,3,'guava','cherry');
console.log("After splice array:",fruits);

//8. indexof()finding index of element
console.log(num);
let ind = num.indexOf(2);
console.log(ind);

console.log(fruits.indexOf("cherry"));

//9. include(): check if element is exist or not

console.log(fruits.includes("mango")); //true
console.log(fruits.includes("avacado")); //false

//10. toString convert array to string

console.log("Converted String:",num.toString());

let myarr:string[]=['h','e','l','l','o'];

console.log("original array:",myarr);

console.log("Converted MyArray to toString:",myarr.toString());
