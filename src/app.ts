import { FastifyPluginAsync, FastifyServerOptions } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';

export interface AppOptions extends FastifyServerOptions {}

// Options de l'application
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
    // Configuration des CORS
    await fastify.register(fastifyCors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });

    // Configuration et enregistrement de Swagger
    await fastify.register(fastifySwagger, {
        swagger: {
            info: {
                title: 'Fastify API',
                description: 'API documentation with Swagger and Fastify',
                version: '1.0.0',
            },
            host: 'localhost:3000',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
        },
    });

    // Enregistrement de Swagger UI
    await fastify.register(SwaggerUI, {
        routePrefix: '/api-docs',
    });
};

export default app;
export { app, options };
