import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customerid,
  CustomerRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Customer, dataSource);
  }
}
