import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MymongodbDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.Id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.mymongodb') dataSource: MymongodbDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
