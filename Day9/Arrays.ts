/*Arrays in Typescript
----------------------------
- An array is a special type of variable that stores multiple values
- The Values can be of the same data type or different  data types.
- Arrays are declared using `[]` or the generic `Array<T>` type.
- Indexing starts from 0.
- Arrays are an ordered collection of elements.
*/

//Approch 1: Using leteral

let names:string[]=[]; // declaration

//Initialization / assigning values
names[0]="john";
names[1]="steve";
names[2]="johney";
names[3]="Rickey";
names[4]="Marsh";

//let names:string[] = ["Rohit","Sachin","Sehwag","Jadeja"]; //declaration + Initialization

//console.log(names);

//Approch 2: Using generic way (Array<T>)

let empName:Array<string> =["Rohit","Sachin","Sehwag","Jadeja","Yuvraj"];
let empid:Array<number> = [101,102,103,104,105];
let data:Array<string | number> = ["Mitchel",1001,"Kane",2001];
let mixed:Array<any> = [1,"Tailor",true,null];

//console.log(empName);
//console.log(empid);
//console.log(data);
//console.log(mixed);

// Example 1: Iterating over an array using a traditional for loop

//console.log("Employee Names:....");

for(let i=0;i<empName.length;i++)     // i<=empNames.lenght-1
{
    //onsole.log(empName[i]);        // i is representing an index
}

// Example 2: Iterating using the 'for..in' loop(indexes)
for(let i in empid)
{
    //console.log(empid[i]);
}

// Example 3: Iterating using the 'for..of' loop(values)
//console.log("Mixed Data.....")
for(let values of data)
{
    //console.log(values);
}

// Example 4: Pasing an array to the function
//search the element in an array using function
/*
function search(ele:number, arr:number[]):boolean
{
    for(let i=0;i<arr.length;i++)
    {
        if(ele == arr[i])
        {
            return true;
        }
    }
    return false;
}
let arr:number[]=[10,20,30,40,50];

console.log(search(10,arr));     //true
console.log(search(100,arr));    //false
*/


// Example 5: A function takes array and returns an array

function capitalizedWords(arrr:string[]): string[]
{
    let result:string[]=[];

        for(let i=0;i<arrr.length;i++)
        {
            result[i] = arrr[i].toUpperCase();
        }

        return result;
}

let arrr:string[]=["hello","world"];
console.log(capitalizedWords(arrr));


