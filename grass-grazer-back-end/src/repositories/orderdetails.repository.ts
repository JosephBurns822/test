import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Orderdetails, OrderdetailsRelations} from '../models';

export class OrderdetailsRepository extends DefaultCrudRepository<
  Orderdetails,
  typeof Orderdetails.prototype.orderdetailsid,
  OrderdetailsRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Orderdetails, dataSource);
  }
}
