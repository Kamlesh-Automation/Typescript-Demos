/*
Objects:
Using the class
*/

class Person
{
    ssn:string;
    firstname:string;
    lastname:string;

    constructor(ssn:string,fname:string,lname:string)
    {
        this.firstname=fname;
        this.lastname=lname;
        this.ssn=ssn;
    }

    getFullname():string
    {
        return `${this.firstname} and ${this.lastname}`;
    }
    getDetails():string
    {
        return `This id ${this.ssn} is ${this.firstname} and ${this.lastname}`;
    }
}

// how to call constructor

let cons1 = new Person("111","JavaScript","TypeScript");
console.log(cons1.getFullname());
console.log(cons1.getDetails());
