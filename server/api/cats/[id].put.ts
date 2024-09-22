import {EventHandlerRequest, getRouterParam, H3Event, readBody, createError} from "h3";
import {PrismaClient} from "@prisma/client";
import {createCatSchema} from "~/server/schemas/cat";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
  const prisma = new PrismaClient();
  
  try {
    const catId = getRouterParam(event, 'id');
    const body = await readBody(event);
    const validatedData = createCatSchema.parse(body);
    
    if (!catId) {
      throw createError({
        statusCode: 404,
        message: 'Cat id is missing!'
      });
    }
    
    const existingCat = await prisma.cat.findUnique({
      where: {id: parseInt(catId)}
    });
    
    if (!existingCat) {
      throw createError({
        statusCode: 404,
        message: 'Cat not found!'
      });
    }
    
    const cat = await prisma.cat.update({
      where: {id: parseInt(catId)},
      data: validatedData
    });
    
    return {
      message: 'Cat updated successfully',
      status: 200,
      cat
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        throw createError({
          statusCode: 400,
          message: e.message
        });
      }
    }
    throw createError({
      statusCode: e.statusCode || 500,
      message: e.message || 'Internal Server Error',
      fatal: true
    });
  } finally {
    await prisma.$disconnect();
  }
});
