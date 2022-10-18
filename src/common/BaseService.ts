import { DeepPartial, FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { BaseEntity } from "./base.entity";

export class BaseService<T extends BaseEntity, TCreateDto = DeepPartial<T>, TUpdateDto = DeepPartial<T>> {
  constructor(private readonly repository: Repository<T>) { }

  async getAll(options?: FindManyOptions<T>) {
    return this.repository.find(options);
  }

  async get(id: number, options?: FindManyOptions<T>) {
    const where: FindManyOptions<any> = {
      where: {
        id
      }
    }

    const mergeOptions = Object.assign({}, where, options)

    return this.repository.findOne(mergeOptions);
  }

  async create(createDto: TCreateDto) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.repository.save(createDto, {
      transaction: true,
    })
  }

  async update(id: number, updateDto: TUpdateDto) {
    console.log(id)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const whereId: FindOptionsWhere<T> = {
      id
    }

    await this.repository.findOneByOrFail(whereId)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.repository.save({ id, ...updateDto }, {
      transaction: true,
    })
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}