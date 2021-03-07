import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MainDataSource} from '../datasources';
import {Appointment, AppointmentRelations} from '../models';

export class AppointmentRepository extends DefaultCrudRepository<
  Appointment,
  typeof Appointment.prototype.appointmentid,
  AppointmentRelations
> {
  constructor(
    @inject('datasources.main') dataSource: MainDataSource,
  ) {
    super(Appointment, dataSource);
  }
}
