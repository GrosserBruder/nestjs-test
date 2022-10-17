import { DhlEntity } from './entity/dhl.entity';
import { Injectable } from "@nestjs/common";
import { CreateDhlDto } from "./dto/create-dhl.dto";
import { UpdateDhlDto } from "./dto/update-dhl.dto";
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';

@Injectable()
export class DhlService {
  constructor(
    @InjectRepository(DhlEntity) private readonly dhlRepository: Repository<DhlEntity>,
    @InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>,
    @InjectDataSource() private readonly dataSource: DataSource
  ) { }

  async getAll() {
    return this.dhlRepository.find({
      relations: {
        type: true,
      },
    });
  }

  async get(id: number) {
    return this.dhlRepository.findOne({
      where: {
        id
      },
      relations: {
        type: true
      }
    });
  }

  async create(createDto: CreateDhlDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: createDto.typeId })

    const dhlEntity = new DhlEntity()

    dhlEntity.name = createDto.name
    dhlEntity.type = type

    return this.dhlRepository.save(dhlEntity, {
      transaction: true,
    })
  }

  async update(id: number, updateDto: UpdateDhlDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: updateDto.typeId })
    const dhlEntity = new DhlEntity()

    dhlEntity.name = updateDto.name
    dhlEntity.type = type

    return this.dhlRepository.update({ id }, dhlEntity)
      .then(() => {
        // return this.dhlRepository.findOneBy({ id })
        return this.dhlRepository.find({
          where: {
            id,
          },
          relations: {
            type: true,
          },
          take: 1
        })
          .then((x) => x[0])
      });
  }

  async remove(id: number) {
    return this.dhlRepository.delete(id);
  }
}