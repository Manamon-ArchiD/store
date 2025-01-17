import {FastifyReply, FastifyRequest} from "fastify";

export const basicCreature = async function (request: FastifyRequest, reply: FastifyReply) {
    const creature1 = {
        id: "984fs5z61df5",
        purchasable: true,
        purchasePrice: 20,
        salePrice: 15,
    };
    const creature2 = {
        id: "fez8941z61df5",
        purchasable: true,
        purchasePrice: 0,
        salePrice: 0,
    };
    reply.status(200).send([creature1, creature2]);
};

export const basicGadget = async function (request: FastifyRequest, reply: FastifyReply) {
    const gadget1 = {
        id: "98fojernfiepr,vsd",
        name: "L'épée qui coupe mais pas trop (ça fait un peu mal quand même)",
        purchasePrice: 20,
        salePrice: 15,
        bonusType: "attack",
        bonusValue: 5,
    };
    const gadget2 = {
        id: "ofjiàrjpds,f54459dezfz",
        name: "Le truc qui donne un peu de vie pas ouf et trop cher",
        purchasePrice: 90,
        salePrice: 0,
        bonusType: "health",
        bonusValue: 10,
    };
    reply.status(200).send([gadget1, gadget2]);
}

export const basicMessage = async function (request: FastifyRequest, reply: FastifyReply) {
    const message = {
        message: "Bah alors on a pas assez de thunes pour acheter ce qu'on veut ?",
    };
    reply.status(402).send(message);
}
