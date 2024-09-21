import {EventHandlerRequest, H3Event} from "h3";
import {PrismaClient, Prisma} from "@prisma/client";
import {createCatSchema} from "~/server/schemas/cat";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const prisma = new PrismaClient()
  try {
    const body = await readBody(event)
    const validatedData = createCatSchema.parse(body);

    const cat = await prisma.cat.create({
      data: validatedData
    })

    return {
      message: 'Cat created with success',
      status: 200,
      cat
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        throw createError({
          statusCode: 400,
          message: 'A cat with this name already exists.',
        });
      }

      throw createError({
        statusCode: e?.statusCode || 500,
        message: e?.message || 'Internal Server Error',
        fatal: true,
      });
    }
  } finally {
    await prisma.$disconnect();
  }
})