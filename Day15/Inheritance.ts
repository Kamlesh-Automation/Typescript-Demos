//inheritance

class Car
{
    name:string;
    color:string;
    model:string;

    constructor(cname:string,ccolor:string,cmodel:string)
    {
        this.name=cname;
        this.color=ccolor;
        this.model=cmodel;
    }

    start()
    {
        console.log("Parent class start method.")
    }

      stop()
    {
        console.log("Parent class stop method.")
    }

    display()
    {
        console.log(`Name:${this.name}, Color:${this.color},Model:${this.model}`);
    }
}

class Hyundai extends Car
{
    year:number;

    constructor(cname:string,ccolor:string,cmodel:string,year:number)
    {
        super(cname,ccolor,cmodel)
        this.year=year;
    }

    start(): void 
    {
            console.log("child class start method.")
    }
    yom()
    {
        console.log(`Name:${this.name}, Color:${this.color},Model:${this.model},Year:${this.year}`)
    }
}

let hy = new Hyundai("Creta","White","Diesel",2020);
hy.start();
hy.stop();
hy.display();
hy.yom();

