import {type FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

const createUsersApp: FastifyPluginAsyncZod = async (server) => {
  server.post("/users", {
    schema: {
      body: z.object({
        name: z.string(),
        email: z.email(),
        password: z.string().min(6),
      }),
      response: {
        200: z.object({
          cursirId: z.ulid().describe("Cursor criado com sucesso")
        })
      }
    }
  }, (request, reply)=> {
    const {name, email, password} = request.body

  })
}

export {createUsersApp}