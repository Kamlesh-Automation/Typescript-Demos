/*
class
Readonly proeprty
optional Proeprty
Static variable and methods
*/

class Student
{
    readonly studentId:number;
    name:string;
    email?:string;
    static schoolName="MIS School";

    constructor(studentid:number,name:string,email:string)
    {
        this.studentId=studentid;
        this.name=name;
        this.email=email;
    }
    display()
    {
        console.log("Student iD:",this.studentId);
        console.log("Student Name:",this.name);
        if(this.email)
        {
             console.log("email:",this.email);
        }
        else
        {
            console.log("Email is not provided");
        }

        console.log("SchoolName:", Student.schoolName);
    }

    static changeSchoolName(schoolName:string):void
    {
        Student.schoolName=schoolName;
    }
}

//let st2 = new Student(101,"John");
let st1 = new Student(101,"John1","john1@test.com");
st1.display();
Student.changeSchoolName("SunRise English School")
st1 = new Student(102,"John2","john2@test.com");
st1.display();
