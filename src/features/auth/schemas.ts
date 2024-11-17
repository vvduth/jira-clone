import {z} from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Put password in bro"),
  });

export const  registerSchema = z.object({
  name: z.string().trim().min(1, "Put ur name in man"),
  email: z.string().email(),
  password: z.string().min(8, "Min 8 chars"),
});