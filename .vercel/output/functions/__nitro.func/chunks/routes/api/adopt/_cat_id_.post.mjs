import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../runtime.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import { z } from 'zod';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const createAdoptionCatSchema = z.object({
  full_name: z.string({
    required_error: "Full Name is required",
    invalid_type_error: "Full Name must be a string"
  }).min(5, { message: "Full name must contain at least 5 characters" }),
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string"
  }).email("Invalid email address"),
  phone: z.string({
    invalid_type_error: "Telephone must be a string"
  }).optional(),
  reason: z.string({
    required_error: "Reason is required",
    invalid_type_error: "Reason must be a string"
  }).max(100, { message: "The field cannot be longer than 100 characters" })
});

const _cat_id__post = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  try {
    const catId = getRouterParam(event, "cat_id");
    const body = await readBody(event).catch((error) => {
      throw createError({
        statusCode: 400,
        message: "Invalid JSON body",
        stack: error.stack
      });
    });
    if (!catId)
      return createError({
        statusCode: 404,
        message: "Cat id is missing!"
      });
    const validatedData = createAdoptionCatSchema.parse(body);
    const existingAdoption = await prisma.adoption.findFirst({
      where: { cat_id: parseInt(catId) }
    });
    if (existingAdoption) {
      throw createError({
        statusCode: 400,
        message: "This cat has already been adopted."
      });
    }
    const adoptionRequest = await prisma.adoption.create({
      data: {
        ...validatedData,
        cat: {
          connect: { id: parseInt(catId) }
        }
      },
      include: {
        cat: true
      }
    });
    return {
      message: "Cat adopted with success",
      status: 200,
      adoptionRequest
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw createError({
          statusCode: 400,
          message: "Duplicate entry, the adoption request could not be processed."
        });
      }
      throw createError({
        statusCode: (e == null ? void 0 : e.statusCode) || 500,
        message: (e == null ? void 0 : e.message) || "Internal Server Error",
        fatal: true
      });
    } else {
      throw createError({
        statusCode: (e == null ? void 0 : e.statusCode) || 500,
        message: (e == null ? void 0 : e.message) || "Internal Server Error",
        fatal: true
      });
    }
  } finally {
    await prisma.$disconnect();
  }
});

export { _cat_id__post as default };
//# sourceMappingURL=_cat_id_.post.mjs.map
