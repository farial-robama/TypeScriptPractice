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


# Zod Questions & Answers

## 1. What is Zod?

### Answer:
Zod is a TypeScript-first schema validation library used to validate data at runtime. It helps ensure that data matches the expected structure and types before it is used in an application.

### Example:

```ts
import { z } from "zod";

const NameSchema = z.string();

NameSchema.parse("Sakib");
```

---

## 2. Why do we need Zod?

### Answer:
TypeScript only checks types during development. When data comes from APIs, forms, or external sources, TypeScript cannot validate it at runtime. Zod provides runtime validation to ensure the data is correct.

### Example:

```ts
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

UserSchema.parse({
  name: "Sakib",
  age: 25,
});
```

---

## 3. What is a Zod Schema?

### Answer:
A Zod schema defines the expected structure and validation rules for data. It acts as a blueprint that describes what data should look like.

### Example:

```ts
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});
```

---

## 4. What is the difference between parse() and safeParse()?

### Answer:
- `parse()` throws an error if validation fails.
- `safeParse()` returns an object containing success or error information without throwing an exception.

### Example:

```ts
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const result = UserSchema.safeParse({
  name: "Sakib",
  age: 25,
});

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error);
}
```

---

## 5. What is z.infer and why is it useful?

### Answer:
`z.infer` automatically generates a TypeScript type from a Zod schema. This prevents duplication and keeps TypeScript types synchronized with validation rules.

### Example:

```ts
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  name: "Sakib",
  age: 25,
};

console.log(user);
```

### Benefits of z.infer:
- Reduces duplicate code.
- Keeps types and validation rules synchronized.
- Improves maintainability and type safety.
