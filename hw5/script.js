class Appliance {
    constructor(name) {
        this.powered = "electricity"
        this.name = name
    }
    getVoltage(voltage) {
        if (voltage >= 220 && voltage <= 230) {
            this.voltage = voltage + 'v'
        } else {
            this.power = 0 + 'w'
            this.lumen = 0 + 'lm'
        }
    }
}


class Device extends Appliance  {
    constructor(name, power, lumen) {
        super(name)
        this.name = name
        this.power = power + 'w'
        this.lumen = lumen + 'lm'
    }
}

Device.prototype = new Appliance()


const lamp = new Device('lamp', 40, 500)
const fridge = new Device('fridge', 800, 200)

lamp.getVoltage(220)
fridge.getVoltage(0)

console.log(lamp)
console.log(fridge)



