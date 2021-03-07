import {Entity, model, property} from '@loopback/repository';

@model()
export class Supplier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  supplierid?: number;

  @property({
    type: 'string',
    required: true,
  })
  suppliername: string;

  @property({
    type: 'string',
    required: true,
  })
  supplieraddress1: string;

  @property({
    type: 'string',
  })
  supplieraddress2?: string;

  @property({
    type: 'string',
    required: true,
  })
  supplierphonenumber: string;

  @property({
    type: 'string',
  })
  supplieremailaddress?: string;


  constructor(data?: Partial<Supplier>) {
    super(data);
  }
}

export interface SupplierRelations {
  // describe navigational properties here
}

export type SupplierWithRelations = Supplier & SupplierRelations;
