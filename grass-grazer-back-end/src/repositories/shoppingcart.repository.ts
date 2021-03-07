import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Shoppingcart, ShoppingcartRelations} from '../models';

export class ShoppingcartRepository extends DefaultCrudRepository<
  Shoppingcart,
  typeof Shoppingcart.prototype.shoppingcartid,
  ShoppingcartRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Shoppingcart, dataSource);
  }
}
