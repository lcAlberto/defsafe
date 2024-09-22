import { d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import { c as createCatSchema } from '../../_/cat.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'zod';

const index_post = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  try {
    const body = await readBody(event);
    const validatedData = createCatSchema.parse(body);
    const cat = await prisma.cat.create({
      data: validatedData
    });
    return {
      message: "Cat created with success",
      status: 200,
      cat
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw createError({
          statusCode: 400,
          message: "A cat with this name already exists."
        });
      }
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

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
