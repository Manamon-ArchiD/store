import {FastifyInstance} from "fastify";
import {basicCreature} from "../../../controller/to.delete.controller";
import {creatureSchema} from "../../../schemas/creature.schema";

async function creatures(fastify: FastifyInstance) {
    fastify.get("", {
        schema: {
            summary: "List all purchasable creatures",
            tags: ['creatures'],
            response: {
                200: {
                    type: "array",
                    items: creatureSchema
                },
            },
        },
    }, basicCreature);
}

export default creatures;
