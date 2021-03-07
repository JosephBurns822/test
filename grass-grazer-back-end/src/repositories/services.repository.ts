import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Services, ServicesRelations} from '../models';

export class ServicesRepository extends DefaultCrudRepository<
  Services,
  typeof Services.prototype.serviceid,
  ServicesRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Services, dataSource);
  }
}
