function Appliance () {
    this.powered = "electricity"
}

Appliance.prototype.getVoltage = function(voltage){
    if(voltage >= 220 && voltage <= 230){
        this.voltage = voltage + 'v'
    }else{
        this.power = 0 + 'w',
        this.lumen = 0 + 'lm'
    }
}

function Device(name, power, lumen){
    this.name = name,
    this.power = power + 'w',
    this.lumen = lumen + 'lm'
}

Device.prototype = new Appliance()


const lamp = new Device('lamp', 40, 500)
const fridge = new Device('fridge', 800, 200)

lamp.getVoltage(220)
fridge.getVoltage(0)

console.log(lamp)
console.log(fridge)



