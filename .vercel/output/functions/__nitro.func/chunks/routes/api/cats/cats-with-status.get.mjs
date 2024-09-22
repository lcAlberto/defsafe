import { d as defineEventHandler, s as setResponseStatus, c as createError } from '../../../runtime.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';

const catsWithStatus_get = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  try {
    const cats = await prisma.cat.findMany({
      include: {
        adoptions: true
      }
    });
    if (!cats.length) {
      setResponseStatus(event, 404);
      return {
        message: "No cats found",
        status: 404
      };
    }
    const catsWithAdoptionStatus = cats.map((cat) => ({
      ...cat,
      isAdopted: cat.adoptions.length > 0
    }));
    return {
      message: "Cats retrieved successfully",
      status: 200,
      cats: catsWithAdoptionStatus
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw createError({
          statusCode: 400,
          message: "A cat with this name already exists."
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

export { catsWithStatus_get as default };
//# sourceMappingURL=cats-with-status.get.mjs.map
