# TypeScript Interview Questions and Answers

## 1. What is TypeScript?

**Answer:**
TypeScript is a superset of JavaScript that adds static typing and additional features to help developers write safer and more maintainable code.

```ts
let name: string = "Sakib";
```

### Benefits

* Static type checking
* Better IDE support
* Easier debugging
* Improved code maintainability

---

## 2. What is the difference between JavaScript and TypeScript?

| JavaScript        | TypeScript             |
| ----------------- | ---------------------- |
| Dynamically typed | Statically typed       |
| Errors at runtime | Errors at compile time |
| No interfaces     | Supports interfaces    |
| Less maintainable | More maintainable      |

```ts
let age: number = 24;
// age = "twenty four"; // Error
```

---

## 3. What are Primitive Data Types in TypeScript?

**Answer:**
Primitive data types include:

```ts
let name: string = "Sakib";
let age: number = 24;
let isStudent: boolean = true;
let value: null = null;
let data: undefined = undefined;
```

---

## 4. How do Arrays work in TypeScript?

**Answer:**
Arrays can store multiple values of the same type.

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Sakib", "Rahim"];
```

---

## 5. What is an Interface?

**Answer:**
An interface defines the structure of an object.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Sakib",
  age: 24,
};
```

---

## 6. What is a Type Alias?

**Answer:**
A type alias creates a custom type.

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Sakib",
  age: 24,
};
```

---

## 7. What is the Difference Between Type and Interface?

**Answer:**

### Type

```ts
type Student = {
  name: string;
};
```

### Interface

```ts
interface Teacher {
  name: string;
}
```

### Example

```ts
const student: Student = {
  name: "Sakib",
};

const teacher: Teacher = {
  name: "Rahim",
};
```

### Key Difference

Type supports unions:

```ts
type ID = string | number;
```

Interface does not directly support union types.

---

## 8. What are Optional Properties?

**Answer:**
Optional properties are marked with `?`.

```ts
interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Sakib",
};
```

---

## 9. What is Readonly?

**Answer:**
Readonly properties cannot be modified after initialization.

```ts
interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Sakib",
};

// user.id = 2; // Error
```

---

## 10. What are Union Types?

**Answer:**
Union types allow a variable to store more than one type.

```ts
let id: string | number;

id = 101;
id = "TS101";
```

---

## Bonus Question: What is the Difference Between Any and Unknown?

### Any

```ts
let value: any = "Hello";
value = 100;
```

No type checking is performed.

### Unknown

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Unknown is safer because TypeScript requires type checking before use.

---

## Conclusion

TypeScript helps developers build scalable and maintainable applications by providing static typing, interfaces, type aliases, union types, and many other powerful features on top of JavaScript.
