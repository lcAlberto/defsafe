import {z} from 'zod';

export const adoptionFormSchema = z.object({
  cat_id: z.number({
    required_error: "Cat id is required",
    invalid_type_error: "Cat id must be a number",
  }),
  full_name: z.string({
    required_error: "Full Name is required",
    invalid_type_error: "Full Name must be a string",
  }).min(5, {message: 'Full name must contain at least 5 characters'}),
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email('Invalid email address'),
  phone: z.string({
    invalid_type_error: "Telephone must be a string",
  }).optional(),
  reason: z.string({
    required_error: "Reason is required",
    invalid_type_error: "Reason must be a string",
  }).max(100, {message: 'The field cannot be longer than 100 characters'}),
  terms: z.boolean().refine(value => value, 'You must agree to the terms'),
});
