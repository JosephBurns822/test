import {Entity, model, property} from '@loopback/repository';

@model()
export class Services extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  serviceid?: number;

  @property({
    type: 'string',
    required: true,
  })
  servicestype: string;

  @property({
    type: 'number',
    required: true,
  })
  servicesprice: number;


  constructor(data?: Partial<Services>) {
    super(data);
  }
}

export interface ServicesRelations {
  // describe navigational properties here
}

export type ServicesWithRelations = Services & ServicesRelations;
