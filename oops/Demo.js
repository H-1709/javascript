
// class KIct {
//   show() {
//     console.log("Show KICT  method");
//   }
// }

// const obj= new KIct()
// obj.show()


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // Instance Method
    introduce(){
        return `Hi , i am ${this.name} and i am ${this.age}`;
    }
}

class Student extends Person{
    constructor(name,age,StudentID){
        super(name,age);
        this.StudentID=StudentID;
    }
     static introduce(){
        return `${super.introduce()} MY student ID is  ${this.StudentID}`;
    }   
}

const  obj = new Student("AK",22,200123)
console.log(obj.introduce());
// Static 

