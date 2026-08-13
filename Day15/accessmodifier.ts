/*
public -->accessible everywhere
protected --> accessible within class and its subclass
private -->accessible only whithin class
*/
class Parent
{
    public named:string;
    protected mobile:number;
    private salary:number

    constructor(name:string,mobile:number,salary:number)
    {
        this.named=name;
        this.mobile=mobile;
        this.salary=salary;
    }
    display()
    {
        console.log(`Name:${this.named},Mobile:${this.mobile},Salary:${this.salary}`);
    }
}
class Child extends Parent
{
    designation:string;

    constructor(name:string,mobile:number,salary:number,designation:string)
    {
        super(name,mobile,salary);
        this.designation=designation;
    }
    showEmployeeDetails()
    {
        console.log(this.named)
        console.log(this.mobile)
        //console.log(this.salary)
        console.log(this.designation    )
    }
}

let ch=new Child("Johm",1234567890,10000,"Manager");
ch.display();
ch.showEmployeeDetails()
console.log(ch.named);
//console.log(ch.mobile);
console.log(ch.designation);

