import { FastifyPluginAsync, FastifyServerOptions } from 'fastify';
import AutoLoad from '@fastify/autoload';
import fastifySwagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';
import {join} from "path";

export interface AppOptions extends FastifyServerOptions {}

const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
    // Configuration des CORS
    await fastify.register(fastifyCors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });

    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'plugins'),
        options: opts
    })

    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'routes'),
        options: opts
    })

    await fastify.register(SwaggerUI, {
        routePrefix: '/api-docs',
    });
};

export default app;
export { app, options };
