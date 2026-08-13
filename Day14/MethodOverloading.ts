// constructor and method overloading

class Overload
{
    constructor();
    constructor(a:number,b:number);

    constructor(a?:number,b?:number)
    {
        if(a!=undefined && b!=undefined)
        {
            console.log(a*b);
        }
        else
        {
            console.log("Default Constructor Called")
        }
    }


    add(a:number,b:number):number
    add(a:number,b:number,c:number):number

    add(a:number,b:number,c?:number):number
    {
            if(c!=undefined)
            {
                return a*b*c;
            } 
            return a*b;
    }
}
//constructor
let co1 = new Overload(); //Default Constructor Called
let co2 = new Overload(10,20); //200

//method overloading
console.log(co1.add(5,5));
console.log(co2.add(5,5,5));




