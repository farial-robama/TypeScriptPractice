const message: string = "Hello TypeScript!";
console.log(message);


// Primitive Data Types
let userName: string = "Sakib";
let age: number = 24;
let isStudent: boolean = true;
let nothing: null = null;
let notAssigned: undefined = undefined;

console.log(userName, age, isStudent, nothing, notAssigned);


// Array
const numbers: number[] = [1, 2, 3, 4];
const names: string[] = ["Sakib", "Rahim", "Karim"];

console.log(numbers);
console.log(names);


// Object
const user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Sakib",
  age: 24,
  isAdmin: false,
};

console.log(user);


// Function
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));



//Optional / Readonly
type User = {
  readonly id: number;
  name: string;
  age?: number;
};

const user: User = {
  id: 1,
  name: "Sakib",
};


console.log(user);



// Type vs Interface
type Student = {
  name: string;
  age: number;
};

interface Teacher {
  name: string;
  subject: string;
}

const student: Student = {
  name: "Sakib",
  age: 24,
};

const teacher: Teacher = {
  name: "Rahim",
  subject: "Math",
};

console.log(student);
console.log(teacher);