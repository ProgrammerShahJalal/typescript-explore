const myNumber = 7;
const myName = "Shah Jalal";
console.log("hello! from typescript", myNumber, myName);

let honey: number = 99;
let goney: string = "All will be OK insallah.";
let noney: boolean = true;


function add(first: number, second: number) {
    let sum = first + second;
    return sum;
}
// const output: number = add(45, 65);
add(45, 65);