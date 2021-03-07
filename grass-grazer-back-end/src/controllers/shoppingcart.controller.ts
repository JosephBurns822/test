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
import {Shoppingcart} from '../models';
import {ShoppingcartRepository} from '../repositories';

export class ShoppingcartController {
  constructor(
    @repository(ShoppingcartRepository)
    public shoppingcartRepository : ShoppingcartRepository,
  ) {}

  @post('/shoppingcart')
  @response(200, {
    description: 'Shoppingcart model instance',
    content: {'application/json': {schema: getModelSchemaRef(Shoppingcart)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {
            title: 'NewShoppingcart',
            exclude: ['shoppingcartid'],
          }),
        },
      },
    })
    shoppingcart: Omit<Shoppingcart, 'shoppingcartid'>,
  ): Promise<Shoppingcart> {
    return this.shoppingcartRepository.create(shoppingcart);
  }

  @get('/shoppingcart/count')
  @response(200, {
    description: 'Shoppingcart model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Shoppingcart) where?: Where<Shoppingcart>,
  ): Promise<Count> {
    return this.shoppingcartRepository.count(where);
  }

  @get('/shoppingcart')
  @response(200, {
    description: 'Array of Shoppingcart model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Shoppingcart, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Shoppingcart) filter?: Filter<Shoppingcart>,
  ): Promise<Shoppingcart[]> {
    return this.shoppingcartRepository.find(filter);
  }

  @patch('/shoppingcart')
  @response(200, {
    description: 'Shoppingcart PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {partial: true}),
        },
      },
    })
    shoppingcart: Shoppingcart,
    @param.where(Shoppingcart) where?: Where<Shoppingcart>,
  ): Promise<Count> {
    return this.shoppingcartRepository.updateAll(shoppingcart, where);
  }

  @get('/shoppingcart/{id}')
  @response(200, {
    description: 'Shoppingcart model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Shoppingcart, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Shoppingcart, {exclude: 'where'}) filter?: FilterExcludingWhere<Shoppingcart>
  ): Promise<Shoppingcart> {
    return this.shoppingcartRepository.findById(id, filter);
  }

  @patch('/shoppingcart/{id}')
  @response(204, {
    description: 'Shoppingcart PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoppingcart, {partial: true}),
        },
      },
    })
    shoppingcart: Shoppingcart,
  ): Promise<void> {
    await this.shoppingcartRepository.updateById(id, shoppingcart);
  }

  @put('/shoppingcart/{id}')
  @response(204, {
    description: 'Shoppingcart PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() shoppingcart: Shoppingcart,
  ): Promise<void> {
    await this.shoppingcartRepository.replaceById(id, shoppingcart);
  }

  @del('/shoppingcart/{id}')
  @response(204, {
    description: 'Shoppingcart DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.shoppingcartRepository.deleteById(id);
  }
}
