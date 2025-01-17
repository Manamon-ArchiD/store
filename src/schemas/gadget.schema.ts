import { Type } from '@sinclair/typebox';

const bonusTypeEnum = Type.Enum({
    attack: 'attack',
    health: 'health',
    attackSpeed: 'attackSpeed',
    movementSpeed: 'movementSpeed',
});

export const gadgetSchema = Type.Object({
    id: Type.String(),
    price: Type.Number(),
    bonusType: bonusTypeEnum,
    bonusValue: Type.Number(),
});
