import {Entity, model, property} from '@loopback/repository';

@model()
export class Orderdetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  orderdetailsid?: number;

  @property({
    type: 'number',
    required: true,
  })
  orderdetailsproductquantity: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  orderdetailsitems: string[];

  @property({
    type: 'number',
    required: true,
  })
  orderdetailstotal: number;

  @property({
    type: 'date',
  })
  orderdetailsdeliverydate?: string;

  @property({
    type: 'string',
  })
  orderdetailscomments?: string;


  constructor(data?: Partial<Orderdetails>) {
    super(data);
  }
}

export interface OrderdetailsRelations {
  // describe navigational properties here
}

export type OrderdetailsWithRelations = Orderdetails & OrderdetailsRelations;
