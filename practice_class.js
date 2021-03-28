var anonymous_function = function(name){
    console.log("Hello "+name);
} 
anonymous_function("rajendra");

var anonymous_function = (name)=>{
    console.log("Hello "+name);
} 
anonymous_function("rajendra negi");

class test{
    constructor(greeting){
      this.greeting = greeting;  
    }
    hello(name){
        console.log("Hello "+name);
    }
}
//var t1 = new test();
//t1.hello("rajendra");
class car{
    constructor(year){
        this.year = year;
    }
    set_name(name){
        this.name = name;
    }
    info(){
        console.log("car Name "+this.name);
        console.log("car Year "+this.year);
    }
}
var _car =new car(2020);
_car.set_name("Honda");
_car.info();
console.log(_car.name);
