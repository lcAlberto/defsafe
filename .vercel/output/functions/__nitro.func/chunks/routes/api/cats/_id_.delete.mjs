import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../runtime.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const _id__delete = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  try {
    const catId = getRouterParam(event, "id");
    if (!catId) {
      throw createError({
        statusCode: 404,
        message: "Cat id is missing!"
      });
    }
    const id = parseInt(catId);
    const adoptions = await prisma.adoption.findMany({
      where: { cat_id: id }
    });
    if (adoptions.length > 0) {
      throw createError({
        statusCode: 400,
        message: "Cannot delete cat with adoptions associated. Please delete the adoptions first."
      });
    }
    const cat = await prisma.cat.delete({
      where: { id }
    });
    return {
      message: "Cat successfully deleted",
      data: cat,
      status: 200
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        throw createError({
          statusCode: 404,
          message: "Cat not found."
        });
      }
    }
    throw createError({
      statusCode: (e == null ? void 0 : e.statusCode) || 500,
      message: (e == null ? void 0 : e.message) || "Internal Server Error",
      fatal: true
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
