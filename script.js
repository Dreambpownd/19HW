class Apliance {
    constructor(name) {
        this.voltage = '220v'
        this.name = name
    }
}

class Luminosity extends Apliance {
    constructor(lumen) {
        super(Apliance);
        this.lumen = lumen;
    }
    getPower(name, power) {
        console.log(`${name} voltage is ${this.voltage}, Luminosity is ${this.lumen}lm and power is ${power}w`)
    }
}

Luminosity.prototype = new Apliance()

const lamp = new Luminosity (500)
const fridge = new Luminosity(200)

lamp.getPower("lamp", 9)
fridge.getPower("fridge", 800)

console.log(lamp)
console.log(fridge)