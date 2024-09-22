import useSupabase from "~/composables/use-supabase";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {data, error} = await useSupabase().auth.signInWithPassword(body);
    
    if (error) {
      throw createError({
        statusCode: error?.statusCode || 500,
        message: error?.message || 'Internal Server Error',
        fatal: true
      });
    } else
      return {
        message: 'Welcome!',
        status: 200,
        data
      }
    
  } catch (e) {
    // if (e instanceof Prisma.PrismaClientKnownRequestError) {
    //   //
    // }
    throw createError({
      statusCode: e?.statusCode || 500,
      message: e?.message || 'Internal Server Error',
      fatal: true
    });
  }
})