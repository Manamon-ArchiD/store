import { Type } from '@sinclair/typebox';

const transactionTypeEnum = Type.Enum({
    purchase: 'purchase',
    sale: 'sale'
});

const transactionTargetEnum = Type.Enum({
    creature: 'creature',
    gadget: 'gadget'
});

export const transactionSchema = Type.Object({
    id: Type.String(),
    transactionType: transactionTypeEnum,
    playerId: Type.String(),
    targetId: Type.String(),
    targetType: transactionTargetEnum,
});
