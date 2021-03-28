class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    
    info(){
        console.log("car Name "+this.name);
        console.log("car Year "+this.year);
    }
}
var logger = (message)=>{
    console.log(message);
}
const name = "Amit";
module.exports.log = logger;
module.exports.car = Car;
module.exports.name = name;