let apples: number = 5;

let speed: string = "fast";

let isRaining: boolen = true;

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
