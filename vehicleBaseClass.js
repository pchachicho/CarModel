class Vehicle {
    constructor(make, model, year, color, transmission) {
        this.make = make; 
        this.model = model;
        this.year = year;
        this.color = color;
        this.transmission = transmission;
    }
    addMileage(mileage) {
        this.mileage = mileage
    }
}
let brz = new Vehicle("Subaru", "Brz", "2020", "blue", "manual")

brz.addMileage('50,000')


let accord = new Vehicle("Honda", "Accord", "2022", "Black", "Hybrid")
console.log(accord)