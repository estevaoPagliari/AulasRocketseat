import fastify from 'fastify'
//import { memoriesRoutes } from './routes/memories'

// import { PrismaClient } from '@prisma/client'
// import { json } from 'stream/consumers'

const app = fastify()

//app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server Api rodando')
  })
