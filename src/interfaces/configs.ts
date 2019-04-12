import { Cryptocurrency } from './crypto';
import { EscrowType, HashableItemField } from './omp-enums';
import { KVS } from './common';
import { ShippingAddress } from './omp';

export interface BidConfiguration {
    cryptocurrency: Cryptocurrency;
    escrow: EscrowType;
    shippingAddress: ShippingAddress;
    objects?: KVS[];
}

export interface HashableConfig {
    fields: HashableFieldConfig[];
}

export interface HashableFieldConfig {
    from: string;
    to: HashableItemField;
}

export class HashableListingMessageConfig implements HashableConfig {
    public fields = [{
        from: 'generated',
        to: HashableItemField.GENERATED
    }, {
        from: 'information.title',
        to: HashableItemField.TITLE
    }, {
        from: 'information.shortDescription',
        to: HashableItemField.SHORT_DESC
    }, {
        from: 'information.longDescription',
        to: HashableItemField.LONG_DESC
    }, {
        from: 'payment.type',
        to: HashableItemField.PAYMENT_TYPE
    }, {
        from: 'payment.escrow.type',
        to: HashableItemField.ESCROW_TYPE
    }, {
        from: 'payment.escrow.ratio.buyer',
        to: HashableItemField.ESCROW_RATIO_BUYER
    }, {
        from: 'payment.escrow.ratio.seller',
        to: HashableItemField.ESCROW_RATIO_SELLER
    }, {
        from: 'payment.options[0].currency',
        to: HashableItemField.PAYMENT_CURRENCY
    }, {
        from: 'payment.options[0].basePrice',
        to: HashableItemField.PAYMENT_BASE_PRICE
    }, {
        from: 'payment.options[0].address.type',
        to: HashableItemField.PAYMENT_ADDRESS_TYPE
    }, {
        from: 'payment.options[0].address.address',
        to: HashableItemField.PAYMENT_ADDRESS_ADDRESS
    }, {
        from: 'payment.options[0].shippingPrice.domestic',
        to: HashableItemField.PAYMENT_SHIPPING_PRICE_DOMESTIC
    }, {
        from: 'payment.options[0].shippingPrice.international',
        to: HashableItemField.PAYMENT_SHIPPING_PRICE_INTL
    }] as HashableFieldConfig[];
}

