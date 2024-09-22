import {z} from 'zod';

export const loginFormSchema = z.object({
  email: z.string({
    required_error: "email is required",
    invalid_type_error: "email must be a string",
  }).min(5, {message: 'email must contain at least 5 characters'}),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
});
