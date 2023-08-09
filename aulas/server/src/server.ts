import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
// import { json } from 'stream/consumers'

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello', async () => {
  const user = await prisma.user.findMany()

  return user
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server Api rodando')
  })
