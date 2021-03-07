import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Employees, EmployeesRelations} from '../models';

export class EmployeesRepository extends DefaultCrudRepository<
  Employees,
  typeof Employees.prototype.employeesid,
  EmployeesRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Employees, dataSource);
  }
}
