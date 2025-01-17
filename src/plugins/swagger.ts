import fp from 'fastify-plugin'
import swagger, { FastifySwaggerOptions } from '@fastify/swagger'

export default fp<FastifySwaggerOptions>(async (fastify) => {
    fastify.register(swagger, {
        openapi: {
            info: {
                title: 'Store Service API',
                description: 'API documentation for managing creatures and gadgets.',
                version: '1.0.0',
            },
            tags: [
                { name: 'creatures', description: 'Operations related to creatures' },
                { name: 'gadgets', description: 'Operations related to gadgets' },
                { name: 'purchase', description: 'Operations related to purchase' },
                { name: 'sell', description: 'Operations related to sell' },
            ],
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Development server'
                }
            ],
        }
    })
})
