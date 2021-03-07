import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  equipmentid?: number;

  @property({
    type: 'string',
    required: true,
  })
  equipmentname: string;

  @property({
    type: 'boolean',
    required: true,
  })
  equipmentsignedout: boolean;

  @property({
    type: 'string',
  })
  equipmentwho?: string;


  constructor(data?: Partial<Equipment>) {
    super(data);
  }
}

export interface EquipmentRelations {
  // describe navigational properties here
}

export type EquipmentWithRelations = Equipment & EquipmentRelations;
