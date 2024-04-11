let apples: number = 5;

let speed: string = "fast";

let isRaining: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// build in objects
let date: Date = new Date();

/** Type Annotations are used with any type of value - literally any type of value */

// Array

const friends: string[] = [
  "Mumin",
  "Haris",
  "Mr. Malik",
  "Sahil",
  "Wasim",
  "Shakil",
];

let myNumbers: number[] = [12, 54, 45];
let truths: boolean[] = [true, true, false];

// Class
class Car {}

let ferari: Car = new Car();

// Object literal
let object: { x: number; y: number } = {
  x: 10,
  y: 23,
};

// 2. Type Inference: If the declaration and initialization are on the same line, TypeScript will figure out the type for us.

let wizardName = "Gandalf!";
let numbers = [2, 3];

/** --- Question: When to use type annotations ? --- */
// 1. Functions that return the "any" type

const json = '{ "x": 12, "y": 45 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
// Here the parse function returns the "any" type

// Let's annotate coordinates variable to have the type as in the object literal const coordinates: { x: number; y: number } = JSON.parse(json);

// coordinates.k = 3; So now TS will give an error !

// 2. When we declare the variable on one line and initialize it later

const words = ["never", "give", "up"];
let isWordFound: boolean; // So, we type annotated it here itself

if (words.includes("give")) {
  isWordFound = true;
}

// 3. When the TypeScript cannot guess the correct type or variables whole type cannot be inferred!

// we have a numberArray, if the number is above 0, we'll set the numberAboveZero to the same value or keep it as boolean false
let numberArray = [-12, 4, -32];
let numberAboveZero: boolean | number = false;

numberArray.forEach((num) => {
  if (num > 0) numberAboveZero = num;
});

// It was just a silly example, never the less we covered all 3 cases where we as a developer will annotate and inference cannot be done by TS!
