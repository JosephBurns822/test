import {Entity, model, property} from '@loopback/repository';

@model()
export class Projects extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  projectsid?: number;

  @property({
    type: 'string',
    required: true,
  })
  projectsname: string;

  @property({
    type: 'date',
    required: true,
  })
  projectsstartdate: string;

  @property({
    type: 'number',
    required: true,
  })
  projectsprice: number;

  @property({
    type: 'string',
  })
  projectscomments?: string;


  constructor(data?: Partial<Projects>) {
    super(data);
  }
}

export interface ProjectsRelations {
  // describe navigational properties here
}

export type ProjectsWithRelations = Projects & ProjectsRelations;
