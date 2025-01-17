import {FastifyInstance} from "fastify";
import {basicGadget} from "../../../controller/to.delete.controller";
import {gadgetSchema} from "../../../schemas/gadget.schema";

async function gadgets(fastify: FastifyInstance) {
    fastify.get("", {
        schema: {
            summary: "List all purchasable gadgets",
            tags: ['gadgets'],
            response: {
                200: {
                    type: "array",
                    items: gadgetSchema
                },
            },
        },
    }, basicGadget);
}

export default gadgets;
