// hw1

function hw1(object){
    for (let key in object){
        if (object.hasOwnProperty(key))
            console.log(key)
    }
    
}

const obj1 = {
    student: 'Andrey',
    city: 'Kazan',
    OwnCity: 'Tashkent'
}

hw1(obj1)

// hw2

function hw2(string,object){
    if(string in object){
        return true
    }else{
        return false
    }
}

console.log(hw2('city', obj1))
console.log(hw2('name', obj1))

// hw3

function obj2(){
     Object.create(null)
}