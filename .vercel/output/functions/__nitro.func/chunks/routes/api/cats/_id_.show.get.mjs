import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../runtime.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const _id__show_get = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  try {
    const catId = getRouterParam(event, "id");
    if (!catId)
      return createError({
        statusCode: 404,
        message: "Cat id is missing!"
      });
    const cat = await prisma.cat.findUnique({
      where: { id: parseInt(catId) }
    });
    return {
      message: "Cat created with success",
      status: 200,
      cat
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.statusCode === 404) {
        throw createError({
          statusCode: 404,
          message: "Cat not found."
        });
      }
      throw createError({
        statusCode: (e == null ? void 0 : e.statusCode) || 500,
        message: (e == null ? void 0 : e.message) || "Internal Server Error",
        fatal: true
        // data: { cat },
      });
    }
  } finally {
    await prisma.$disconnect();
  }
});

export { _id__show_get as default };
//# sourceMappingURL=_id_.show.get.mjs.map
