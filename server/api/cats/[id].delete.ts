import {EventHandlerRequest, getRouterParam, H3Event} from "h3";
import {Prisma, PrismaClient} from "@prisma/client";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const prisma = new PrismaClient()
  try {
    const catId = getRouterParam(event, 'id')

    if (!catId)
      return createError({
        statusCode: 404,
        message: 'Cat id is missing!'
      });

    const cat = await prisma.cat.delete({
      where: {id: parseInt(catId)},
    })

    setResponseStatus(event, 200);

    return {
      message: 'Cat success deleted',
      status: 200
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.statusCode === 404) {
        throw createError({
          statusCode: 404,
          message: 'Cat not found.',
        });
      }

      throw createError({
        statusCode: e?.statusCode || 500,
        message: e?.message || 'Internal Server Error',
        fatal: true,
        // data: { cat },
      });
    }
  } finally {
    await prisma.$disconnect();
  }
})