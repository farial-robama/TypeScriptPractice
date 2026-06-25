// What is Zod

import { z } from "zod";

const nameSchema = z.string();

console.log(nameSchema.parse("Sakib"));




// Why do we need Zod

// Without Zod:

const user = {
  name: "Sakib",
  age: "25",
};

console.log(user.age + 10);

// With Zod:

import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

UserSchema.parse({
  name: "Sakib",
  age: 25,
});