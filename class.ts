class Car {
    model: string
    price: number
    private _millage: number
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 1000000;
    }
    getActualMillage(): number {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax: number): number {
        const textAmount = this.price * tax / 100;
        const total = this.price + textAmount;
        return total;
    }
}

const toyota = new Car('toyota', 1000000);
const totalPrice: number = toyota.getTotalPrice(25);