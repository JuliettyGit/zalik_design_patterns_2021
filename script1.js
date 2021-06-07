//Builder Pattern

class Salad {
    constructor(hasOnion, hasCucumber, hasTomato, hasSourCream) {
        this.hasOnion = hasOnion;
        this.hasCucumber = hasCucumber;
        this.hasTomato = hasTomato;
        this.hasSourCream = hasSourCream;
    }
}

class SaladBuilder {
    constructor() {
        this.salad = new Salad();
    }

    withOnion(hasOnion) {
        this.salad.hasOnion = hasOnion;
        return this;
    }

    withCucumber(hasCucumber) {
        this.salad.hasCucumber = hasCucumber;
        return this;
    }

    withTomato(hasTomato){
        this.salad.hasTomato = hasTomato;
        return this;
    }

    withSourCream(hasSourCream){
        this.salad.hasSourCream =hasSourCream;
        return this;
    }

    makeSalad() {
        return this.salad;
    }
}

const firstSaladBuilder = new SaladBuilder();

const salad = firstSaladBuilder
    .withOnion(true)
    .withCucumber(true)
    .withTomato(true)
    .withSourCream(true)
    .makeSalad();

const secondSaladBuilder = new SaladBuilder();

const salad2 = secondSaladBuilder
    .withOnion(false)
    .withCucumber(true)
    .withTomato(true)
    .withSourCream(true)
    .makeSalad();

console.log(salad, salad2);