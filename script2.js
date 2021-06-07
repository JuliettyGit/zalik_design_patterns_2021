class Car {
    constructor(name, price, description, color) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.color = color;
    }
}

class AudiFactory {
    create(name) {
        switch(name) {
            case 'RS6':
                return new Car(name, 110000, 'This is RS6', 'aquamarine');
            case 'RSQ8':
                return new Car(name, 220000, 'This is RSQ8', 'red');
            default:
                return null;
        }
    }
}

class MercedesFactory {
    create(name) {
        switch(name) {
            case 'AMG GT C':
                return new Car(name, 200000, 'This is AMG GT C', 'white');
            case 'GLS':
                return new Car(name, 500000, 'This is GLS', 'green');
            default:
                return 'В автосалоне нет такого автомобиля';
        }
    }
}

class BMWFactory {
    create(name) {
        switch(name) {
            case 'M7':
                return new Car(name, 10000, 'This is M7', 'black');
            case 'X6':
                return new Car(name, 20000, 'This is X6', 'blue');
            default:
                return 'В автосалоне нет такого автомобиля';
        }
    }
}


class CarAbstractFactory {
    static getFactory(type) {
        switch(type) {
            case 'Audi':
                return new AudiFactory();
            case 'Mercedes':
                return new MercedesFactory();
            case 'BMW':
                return new BMWFactory();

            default:
                return 'В автосалоне нет такого автомобиля';
        }
    }
}

const audiFactory = CarAbstractFactory.getFactory('Audi');
const aCar = audiFactory.create('RS6');

const mercedesFactory = CarAbstractFactory.getFactory('Mercedes');
const mCar = mercedesFactory.create('GLS');


const bmwFactory = CarAbstractFactory.getFactory('BMW');
const bCar = bmwFactory.create('X5');

console.log(aCar, mCar, bCar);