class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello(x) {
      return "Hello " + x.carname;
    }
  }
  
  mycar = new Car("Ford");
  
  document.getElementById("demo").innerHTML = Car.hello(mycar);