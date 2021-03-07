import {Entity, model, property} from '@loopback/repository';

@model()
export class Appointment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  appointmentid?: number;

  @property({
    type: 'date',
  })
  appointmentdatetime?: string;

  @property({
    type: 'string',
  })
  appointmentcomments?: string;


  constructor(data?: Partial<Appointment>) {
    super(data);
  }
}

export interface AppointmentRelations {
  // describe navigational properties here
}

export type AppointmentWithRelations = Appointment & AppointmentRelations;
