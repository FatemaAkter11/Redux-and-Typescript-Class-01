const a = "Hello World"; //string
const b: string = "Hello World"; //string
const c: number = 88; //number
const d: number = 98; //number

// type=> string, number, Array, null, undefined, bollean, never, unknown
//any type
function getLowerCase(str: string) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello world!"));
console.log(getLowerCase(""));
// console.log(getLowerCase((45))); 

function add(number1: number, number2: number): number {
    return number1 + number2;
}
add(3, 3);
add(c, d);

const subtract = (number1: number, number2: number): number => {
    return number1 - number2;
}
subtract(33, 12);

// Array<T>
const arr: number[] = [123, 234, 456];
const arr1: string[] = ["123", "234", "456"];
const arr2: (string | number)[] = [123, 234, "Rashed"];
const arr3: Array<string | number> = [123, 234, "Rashed"];

type numberAndString = number | string;
const id: numberAndString = "76";

interface IPerson {
    name: string,
    age: number,
    hobby?: string
}
const person1: IPerson = {
    name: "Rashed",
    age: 23,
    hobby: "Programming"
};
const person2: IPerson = {
    name: "Mezba",
    age: 25,
    hobby: "Travelling"
};
const person3: IPerson = {
    name: "Mehzabin",
    age: 52,
};


// Enums
const PI = 3.1416;

enum Colors {
    color1 = "#ededed",
    color2 = "#ededff",
    color3 = "#ededee"
}
console.log(Colors.color1);
console.log(Colors.color2);
console.log(Colors.color3);


// Generic ->
// function _concat<T>(a: T, b: T): T {
//     return a + b;
// }
// _concat<number>(1, 3);
// _concat<string>("hello", "world");