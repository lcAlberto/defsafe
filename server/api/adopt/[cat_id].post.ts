import {EventHandlerRequest, getRouterParam, H3Event} from "h3";
import {Prisma, PrismaClient} from "@prisma/client";
import {createAdoptionCatSchema} from "~/server/schemas/adoption";

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const prisma = new PrismaClient()
  try {
    const catId = getRouterParam(event, 'cat_id')
    const body = await readBody(event).catch((error) => {
      throw createError({
        statusCode: 400,
        message: 'Invalid JSON body',
        stack: error.stack,
      });
    });

    if (!catId)
      return createError({
        statusCode: 404,
        message: 'Cat id is missing!'
      });

    const validatedData = createAdoptionCatSchema.parse(body);
    
    const existingAdoption = await prisma.adoption.findFirst({
      where: { cat_id: parseInt(catId) },
    });
    
    if (existingAdoption) {
      throw createError({
        statusCode: 400,
        message: 'This cat has already been adopted.'
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
        cat: true,
      },
    });

    return {
      message: 'Cat adopted with success',
      status: 200,
      adoptionRequest
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        throw createError({
          statusCode: 400,
          message: 'Duplicate entry, the adoption request could not be processed.'
        });
      }
      
      throw createError({
        statusCode: e?.statusCode || 500,
        message: e?.message || 'Internal Server Error',
        fatal: true
      });
    } else {
      throw createError({
        statusCode: e?.statusCode || 500,
        message: e?.message || 'Internal Server Error',
        fatal: true
      });
    }
  } finally {
    await prisma.$disconnect();
  }
})