import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Products, ProductsRelations} from '../models';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.productsid,
  ProductsRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Products, dataSource);
  }
}
