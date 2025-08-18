import {type FastifyPluginAsyncZod } from "fastify-type-provider-zod";

const createUsersApp: FastifyPluginAsyncZod = async (server) => {
  server.post('/users', {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' }
        },
        required: ['name', 'email']
      },
        reply: {
            200: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                user: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    email: { type: 'string', format: 'email' }
                }
                }
            }
            }
        }
    }       
  }, async (request, reply) => {
    const { name, email } = request.body as { name: string; email: string };
    
    // Here you would typically save the user to a database
    // For this example, we will just return the user data
    return { message: 'User created successfully', user: { name, email } };
  });
}
