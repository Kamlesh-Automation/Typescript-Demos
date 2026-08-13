/*
Tuple in Typescript:
it is fixed.
*/

let person:[string,number]=["kamlesh",1001];
console.log(person);

let mixeddata:[string,boolean,number,string]=["kamlesh",true,101,"chaugule"];

for(let i in mixeddata)
{
    console.log(mixeddata[i]);
}

for(let value of mixeddata)
{
    console.log(value);
}

// tuple in Array

let student:[string,number][]=[["john",101],["peter",102],["smith",103]];

console.log(student); 
console.log(student[0]);