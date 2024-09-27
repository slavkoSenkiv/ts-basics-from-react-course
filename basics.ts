// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// primitives
let age: number;
age = 21;

let userName: string;
userName = 'Slav';

let isInstructor: boolean;
isInstructor = true;

// more complex types
let hobbies: string[];
hobbies = ['sport', 'cookies'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'slav',
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

// type inference
let course = 'test string';
course = '123';

// union types
let course2: string | number = 'test string';
course2 = 123;

// type allies

type Person = {
  name: string;
  age: number;
};

let person2: Person;
person2 = { name: 'x', age: 1 };

let people2: Person[];
people2 = [
  { name: 'x', age: 1 },
  { name: 'y', age: 2 },
];

// functions and types
function add2(a: number, b: number) {
  return a + b;
}

//void
function printOutput(value: any) {
  console.log(value);
}

//generics
function inserAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = inserAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split('') // won't work
