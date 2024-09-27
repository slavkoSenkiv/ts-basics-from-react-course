"use strict";
// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters
// primitives
let age;
age = 21;
let userName;
userName = 'Slav';
let isInstructor;
isInstructor = true;
// more complex types
let hobbies;
hobbies = ['sport', 'cookies'];
let person;
person = {
    name: 'slav',
    age: 32,
};
let people;
// type inference
let course = 'test string';
course = '123';
// union types
let course2 = 'test string';
course2 = 123;
let person2;
person2 = { name: 'x', age: 1 };
let people2;
people2 = [
    { name: 'x', age: 1 },
    { name: 'y', age: 2 },
];
// functions and types
function add(a, b) {
    return a + b;
}
