//super():used to invoked immediate parent class constructor
//super:used to invoked immediate parent class method.
//super: can not be used to invoke the "parent class proeprty"


class Parent
{
    num:number=10;

    constructor()
    {
        console.log("This is parent class constructor.")
    }

    dispaly()
    {
        console.log("This is parent class method.")
    }
}
class child extends Parent
{
    num:number=100;

    constructor()
    {
        super()
        console.log("This is child class constructor.")
    }
    show()
    {
        //super(this.num) // this is not posible
        console.log(this.num)
        console.log("This is child class method.")
    }
    dispaly()
    {
        console.log("This is child class method.")
    }
}

let ch = new child()
ch.dispaly();
ch.show();