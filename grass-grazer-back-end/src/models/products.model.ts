import {Entity, model, property} from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  productsid?: number;

  @property({
    type: 'string',
    required: true,
  })
  productsname: string;

  @property({
    type: 'number',
    required: true,
  })
  productsprice: number;

  @property({
    type: 'string',
    required: true,
  })
  productsdescription: string;


  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
