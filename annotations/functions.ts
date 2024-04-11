// Annotating function definitions

const add = (a: number, b: number): number => {
  return a + b;
};

// Function declarations

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

// Void: When we have a function which doesn't need to return anything

const logger = function (message: string): void {
  console.log(message);
};

// Never: When we throw Error, function will not technically return anything, to indicate the same we use a "never" type

const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with Annotations
const todayzWeather = {
  date: new Date(),
  weather: "sunny",
};

// This is normal object literal annotated!
const logWeather = (obj: { date: Date; weather: string }): void => {
  console.log(obj.date, obj.weather);
};

logWeather(todayzWeather);

// Let's annotate the object with de-structuring
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather2(todayzWeather);

// Annotations Around Objects

const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

profile.setAge(45);

// Let's do a normal de-structuring of an object in TS
const { age, coords }: { age: number; coords: { lat: number; lng: number } } =
  profile;
