import {Entity, model, property} from '@loopback/repository';

@model()
export class Shoppingcart extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  shoppingcartid?: number;

  @property({
    type: 'string',
    required: true,
  })
  shoppingcartaddress1: string;

  @property({
    type: 'string',
  })
  shoppingcartaddress2?: string;

  @property({
    type: 'date',
    required: true,
  })
  shoppingcartdatetime: string;

  @property({
    type: 'boolean',
    required: true,
  })
  shoppingcartshipped: boolean;


  constructor(data?: Partial<Shoppingcart>) {
    super(data);
  }
}

export interface ShoppingcartRelations {
  // describe navigational properties here
}

export type ShoppingcartWithRelations = Shoppingcart & ShoppingcartRelations;
