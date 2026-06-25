import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const user = {
  name: "Sakib",
  age: 25,
};

const result = UserSchema.safeParse(user);

console.log(result);