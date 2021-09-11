const myNumber = 7;
const myName = "Shah Jalal";
console.log("hello! from typescript", myNumber, myName);

let honey: number = 99;
let goney: string = "All will be OK insallah.";
let noney: boolean = true;


function myAdd(first: number, second: number): number {
    let sum = first + second;
    return sum;
}
const output: number = myAdd(45, 65);

function dobleConsole(number: number): void {
    console.log(2 * number)
}

//multi purpose
/* function add(first: number|string, second: number|string): number|string {
    let sum = first + second;
    return sum;
}
const output: number = add(45, 65); */