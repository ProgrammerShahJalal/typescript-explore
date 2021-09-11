"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 1000000;
    }
    getActualMillage() {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const textAmount = this.price * tax / 100;
        const total = this.price + textAmount;
        return total;
    }
}
const toyota = new Car('toyota', 1000000);
const totalPrice = toyota.getTotalPrice(25);
