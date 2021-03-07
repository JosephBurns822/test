import {Entity, model, property} from '@loopback/repository';

@model()
export class Employees extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  employeesid?: number;

  @property({
    type: 'string',
    required: true,
  })
  employeeslastname: string;

  @property({
    type: 'string',
    required: true,
  })
  employeesfirstname: string;

  @property({
    type: 'string',
    required: true,
  })
  employeesposition: string;

  @property({
    type: 'boolean',
    required: true,
  })
  employeesadmin: boolean;

  @property({
    type: 'date',
    required: true,
  })
  employeeshiredate: string;

  @property({
    type: 'date',
  })
  employeesfinaldate?: string;

  @property({
    type: 'string',
    required: true,
  })
  employeesphonenumber: string;

  @property({
    type: 'number',
    required: true,
  })
  employeespayrate: number;

  @property({
    type: 'boolean',
    required: true,
  })
  employeeactive: boolean;


  constructor(data?: Partial<Employees>) {
    super(data);
  }
}

export interface EmployeesRelations {
  // describe navigational properties here
}

export type EmployeesWithRelations = Employees & EmployeesRelations;
