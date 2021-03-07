import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Vehicle, VehicleRelations} from '../models';

export class VehicleRepository extends DefaultCrudRepository<
  Vehicle,
  typeof Vehicle.prototype.vehicleid,
  VehicleRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Vehicle, dataSource);
  }
}
