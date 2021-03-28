// inheritance //
class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    
    info(){
        console.log("car Name "+this.name);
        console.log("car Year "+this.year);
    }
}

class honda extends car{
    constructor(name,year,speed){
        super(name,year);
        this.speed = speed;
    }
    info(){
        super.info();
        console.log("Car speed "+this.speed);
    }
}
var _hondacar = new honda("Honda",2021,"100 KM/H");
_hondacar.info();