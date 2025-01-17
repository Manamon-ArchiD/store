import {FastifyInstance} from "fastify";
import {basicMessage} from "../../../controller/to.delete.controller";
import {gadgetSchema} from "../../../schemas/gadget.schema";
import {creatureSchema} from "../../../schemas/creature.schema";

async function sell(fastify: FastifyInstance) {
    fastify.post("/gadget", {
        schema: {
            body: {
                type: "object",
                properties: {
                    userId: {type: "string"},
                    gadgetId: {type: "string"},
                },
                required: ["userId", "gadgetId"]
            },
            summary: "Sell a gadget",
            tags: ["sell"],
            response: {
                200: {
                    gadgetSchema,
                },
                402: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                },
                404: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                }
            }
        }
    }, basicMessage);

    fastify.post("/creature", {
        schema: {
            body: {
                type: "object",
                properties: {
                    userId: {type: "string"},
                    creatureId: {type: "string"},
                },
                required: ["userId", "creatureId"]
            },
            summary: "Sell a creature",
            tags: ["sell"],
            response: {
                200: {
                    creatureSchema,
                },
                402: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                },
                404: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                }
            }
        }
    }, basicMessage);
}

export default sell;
