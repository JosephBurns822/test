import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Supplier, SupplierRelations} from '../models';

export class SupplierRepository extends DefaultCrudRepository<
  Supplier,
  typeof Supplier.prototype.supplierid,
  SupplierRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Supplier, dataSource);
  }
}
