import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Equipment} from '../models';
import {EquipmentRepository} from '../repositories';

export class EquipmentController {
  constructor(
    @repository(EquipmentRepository)
    public equipmentRepository : EquipmentRepository,
  ) {}

  @post('/equipment')
  @response(200, {
    description: 'Equipment model instance',
    content: {'application/json': {schema: getModelSchemaRef(Equipment)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipment, {
            title: 'NewEquipment',
            exclude: ['equipmentid'],
          }),
        },
      },
    })
    equipment: Omit<Equipment, 'equipmentid'>,
  ): Promise<Equipment> {
    return this.equipmentRepository.create(equipment);
  }

  @get('/equipment/count')
  @response(200, {
    description: 'Equipment model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Equipment) where?: Where<Equipment>,
  ): Promise<Count> {
    return this.equipmentRepository.count(where);
  }

  @get('/equipment')
  @response(200, {
    description: 'Array of Equipment model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Equipment, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Equipment) filter?: Filter<Equipment>,
  ): Promise<Equipment[]> {
    return this.equipmentRepository.find(filter);
  }

  @patch('/equipment')
  @response(200, {
    description: 'Equipment PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipment, {partial: true}),
        },
      },
    })
    equipment: Equipment,
    @param.where(Equipment) where?: Where<Equipment>,
  ): Promise<Count> {
    return this.equipmentRepository.updateAll(equipment, where);
  }

  @get('/equipment/{id}')
  @response(200, {
    description: 'Equipment model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Equipment, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Equipment, {exclude: 'where'}) filter?: FilterExcludingWhere<Equipment>
  ): Promise<Equipment> {
    return this.equipmentRepository.findById(id, filter);
  }

  @patch('/equipment/{id}')
  @response(204, {
    description: 'Equipment PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipment, {partial: true}),
        },
      },
    })
    equipment: Equipment,
  ): Promise<void> {
    await this.equipmentRepository.updateById(id, equipment);
  }

  @put('/equipment/{id}')
  @response(204, {
    description: 'Equipment PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() equipment: Equipment,
  ): Promise<void> {
    await this.equipmentRepository.replaceById(id, equipment);
  }

  @del('/equipment/{id}')
  @response(204, {
    description: 'Equipment DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.equipmentRepository.deleteById(id);
  }
}
