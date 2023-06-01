class car {
    constructor ( name , model, year) {
      this.name = name;
      this.age = age;
      this.year = year;
    }
}   getDescription () {
    
     return ' $ {this.year} ${this.make} ${this.model}';
}



class ElectricCar extends car {
  constructor (make,model,year,range)
  super (make,model,year)
  this.range = range;
}

getDescription (){
  return '$ {this.year} ${this.make} ${this.model} ${this.range}';
}
const tesla = new ElectricCar ('tesla','m','2023', '352')
console.log (car)