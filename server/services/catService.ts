import {PrismaClient} from '@prisma/client'
import {H3Event} from "h3";

const prisma = new PrismaClient()

export const fetchAll = async (event: H3Event) => {
  const cats = await prisma.cat.findMany()

  if (!cats.length || cats.length === 0) {
    setResponseStatus(event, 404)
    return 'No cats found'
  }

  return cats
}
