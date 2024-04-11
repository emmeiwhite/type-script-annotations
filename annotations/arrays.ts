// const carMakers: string[] = ["ford", "toyota", "chevy"];
const carMakers = ["ford", "toyota", "chevy"]; // type inference in action automatically

// Complex Types within arrays
class Color {}

const red = new Color();
const orange = new Color();

const colors = [red, orange]; // Type inference | const colors: Colors[]

// 1. Type inference of Arrays helps with inference when extracting a value from the array

const car = carMakers[1];
const myCar = carMakers.pop(); // hover over myCar and it shows String | undefined!

// 2. Helps Prevent incompatible types

/* --- carMakers.push(45); --- */

// 3. Help with 'map' and get auto suggested functions for strings in this case when

carMakers.map((car) => car.toLowerCase()); // if we type dot (.) after the car we'll get auto access to the functions that the string type has

/** --- Multiple Types --- */

const multipleDate: (string | Date)[] = [new Date(), "13-May-1992"];

multipleDate.push(new Date());
