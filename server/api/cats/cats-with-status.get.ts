import { EventHandlerRequest, H3Event, setResponseStatus, createError } from "h3";
import { PrismaClient, Prisma } from "@prisma/client";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
  const prisma = new PrismaClient()
  
  try {
    const cats = await prisma.cat.findMany({
      include: {
        adoptions: true,
      },
    })
    
    if (!cats.length) {
      setResponseStatus(event, 404);
      return {
        message: 'No cats found',
        status: 404,
      };
    }
    
    const catsWithAdoptionStatus = cats.map(cat => ({
      ...cat,
      isAdopted: cat.adoptions.length > 0
    }));
    
    return {
      message: 'Cats retrieved successfully',
      status: 200,
      cats: catsWithAdoptionStatus,
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        throw createError({
          statusCode: 400,
          message: 'A cat with this name already exists.',
        });
      }
    }
    
    throw createError({
      statusCode: e?.statusCode || 500,
      message: e?.message || 'Internal Server Error',
      fatal: true,
    });
  } finally {
    await prisma.$disconnect();
  }
});
