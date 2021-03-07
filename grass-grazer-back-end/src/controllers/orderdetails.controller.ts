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
import {Orderdetails} from '../models';
import {OrderdetailsRepository} from '../repositories';

export class OrderdetailsController {
  constructor(
    @repository(OrderdetailsRepository)
    public orderdetailsRepository : OrderdetailsRepository,
  ) {}

  @post('/orderdetails')
  @response(200, {
    description: 'Orderdetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(Orderdetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orderdetails, {
            title: 'NewOrderdetails',
            exclude: ['orderdetailsid'],
          }),
        },
      },
    })
    orderdetails: Omit<Orderdetails, 'orderdetailsid'>,
  ): Promise<Orderdetails> {
    return this.orderdetailsRepository.create(orderdetails);
  }

  @get('/orderdetails/count')
  @response(200, {
    description: 'Orderdetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Orderdetails) where?: Where<Orderdetails>,
  ): Promise<Count> {
    return this.orderdetailsRepository.count(where);
  }

  @get('/orderdetails')
  @response(200, {
    description: 'Array of Orderdetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Orderdetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Orderdetails) filter?: Filter<Orderdetails>,
  ): Promise<Orderdetails[]> {
    return this.orderdetailsRepository.find(filter);
  }

  @patch('/orderdetails')
  @response(200, {
    description: 'Orderdetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orderdetails, {partial: true}),
        },
      },
    })
    orderdetails: Orderdetails,
    @param.where(Orderdetails) where?: Where<Orderdetails>,
  ): Promise<Count> {
    return this.orderdetailsRepository.updateAll(orderdetails, where);
  }

  @get('/orderdetails/{id}')
  @response(200, {
    description: 'Orderdetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Orderdetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Orderdetails, {exclude: 'where'}) filter?: FilterExcludingWhere<Orderdetails>
  ): Promise<Orderdetails> {
    return this.orderdetailsRepository.findById(id, filter);
  }

  @patch('/orderdetails/{id}')
  @response(204, {
    description: 'Orderdetails PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orderdetails, {partial: true}),
        },
      },
    })
    orderdetails: Orderdetails,
  ): Promise<void> {
    await this.orderdetailsRepository.updateById(id, orderdetails);
  }

  @put('/orderdetails/{id}')
  @response(204, {
    description: 'Orderdetails PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orderdetails: Orderdetails,
  ): Promise<void> {
    await this.orderdetailsRepository.replaceById(id, orderdetails);
  }

  @del('/orderdetails/{id}')
  @response(204, {
    description: 'Orderdetails DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderdetailsRepository.deleteById(id);
  }
}
