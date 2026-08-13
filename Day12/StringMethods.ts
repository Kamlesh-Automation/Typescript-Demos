/*
String Method
*/

let str="hello welcome to typescript";

//1. length
console.log(str.length);   //27

//2. toLowercase() /toUppercase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//3. charAt() and indexOf()
console.log(str.charAt(7));
console.log(str.indexOf('w'));

//4. subString()
console.log(str.substring(6,14));

//5. includes()
console.log(str.includes("hellO"));

//6. Startwith()
console.log(str.startsWith("hello"));
console.log(str.endsWith("typescript"));

//7. replace()
console.log(str.replace("typescript","javascript"))

//8. split()
console.log(str.split(" "));

//9. trim() / trimStart() / trimEnd()
let str1= "  new String  "
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

//10. concat()
let s1="kamlesh";
let s2="chaugule"

console.log(s1.concat(s2));
console.log(s1);



