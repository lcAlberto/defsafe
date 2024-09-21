import {z} from 'zod'

export const createCatSchema = z.object({
  name: z
    .string({required_error: "Name is required", invalid_type_error: "Name must be a string"})
    .min(5, {message: 'Name must contain at least 5 characters'}),

  description: z
    .string({required_error: "Description is required", invalid_type_error: "Description must be a string"})
    .min(5, {message: 'Description must contain at least 5 characters'})
    .max(100, {message: 'The field cannot be longer than 100 characters'}),

  image: z
    .string({required_error: "Image is required", invalid_type_error: "Image must be a string"})
    .min(5, {message: 'Image must contain at least 5 characters'})
    .max(100, {message: 'The field cannot be longer than 100 characters'}),
  
})