import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehicle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  vehicleid?: number;

  @property({
    type: 'number',
    required: true,
  })
  vehicleyear: number;

  @property({
    type: 'string',
    required: true,
  })
  vehiclemake: string;

  @property({
    type: 'string',
    required: true,
  })
  vehiclemodel: string;

  @property({
    type: 'string',
    required: true,
  })
  vehiclecolor: string;

  @property({
    type: 'number',
    required: true,
  })
  vehiclemileage: number;

  @property({
    type: 'boolean',
    required: true,
  })
  vehiclesignedout: boolean;

  @property({
    type: 'string',
  })
  vehiclewho?: string;


  constructor(data?: Partial<Vehicle>) {
    super(data);
  }
}

export interface VehicleRelations {
  // describe navigational properties here
}

export type VehicleWithRelations = Vehicle & VehicleRelations;
