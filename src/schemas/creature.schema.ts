import { Type } from '@sinclair/typebox';

export const creatureSchema = Type.Object({
    id: Type.String(),
    purchasable: Type.Boolean(),
    purchasePrice: Type.Number(),
    salePrice: Type.Number(),
});
