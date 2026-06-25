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