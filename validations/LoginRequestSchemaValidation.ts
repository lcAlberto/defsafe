import {z} from 'zod';

export const loginFormSchema = z.object({
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }).min(5, {message: 'Username must contain at least 5 characters'}),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
});
