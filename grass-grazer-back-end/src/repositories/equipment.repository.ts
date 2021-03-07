import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Equipment, EquipmentRelations} from '../models';

export class EquipmentRepository extends DefaultCrudRepository<
  Equipment,
  typeof Equipment.prototype.equipmentid,
  EquipmentRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Equipment, dataSource);
  }
}
