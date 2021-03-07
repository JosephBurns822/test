import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  customerid?: number;

  @property({
    type: 'string',
    required: true,
  })
  customerlastname: string;

  @property({
    type: 'string',
    required: true,
  })
  customerfirstname: string;

  @property({
    type: 'string',
    required: true,
  })
  customerphonenumber: string;

  @property({
    type: 'string',
    required: true,
  })
  customeraddress1: string;

  @property({
    type: 'string',
  })
  customeraddress2?: string;

  @property({
    type: 'string',
  })
  customerbusinessname?: string;

  @property({
    type: 'string',
    required: true,
  })
  customeremailaddress: string;

  @property({
    type: 'boolean',
    required: true,
  })
  customerpropertyviewing: boolean;


  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
