var a = "Hello World"; //string
var b = "Hello World"; //string
var c = 88; //number
var d = 98; //number
// type=> string, number, Array, null, undefined, bollean, never, unknown
//any type
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello world!"));
console.log(getLowerCase(""));
// console.log(getLowerCase((45))); 
function add(number1, number2) {
    return number1 + number2;
}
add(3, 3);
add(c, d);
var subtract = function (number1, number2) {
    return number1 - number2;
};
subtract(33, 12);
// Array<T>
var arr = [123, 234, 456];
var arr1 = ["123", "234", "456"];
var arr2 = [123, 234, "Rashed"];
var arr3 = [123, 234, "Rashed"];
var id = "76";
var person1 = {
    name: "Rashed",
    age: 23,
    hobby: "Programming"
};
var person2 = {
    name: "Mezba",
    age: 25,
    hobby: "Travelling"
};
var person3 = {
    name: "Mehzabin",
    age: 52
};
var personArr = [person1, person2];
// Enums
var PI = 3.1416;
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color1);
console.log(Colors.color2);
console.log(Colors.color3);
// Generic ->
// function _concat<T>(a: T, b: T): T {
//     return a + b;
// }
// _concat<number>(1, 3);
// _concat<string>("hello", "world");
