import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Projects, ProjectsRelations} from '../models';

export class ProjectsRepository extends DefaultCrudRepository<
  Projects,
  typeof Projects.prototype.projectsid,
  ProjectsRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Projects, dataSource);
  }
}
