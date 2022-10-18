import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { DhlTypeEntity } from 'src/dhlTypes/entity/dhl-type.entity';
import { Repository } from 'typeorm';
import { BaseService } from './../common/BaseService';
import { CreateDhlDto } from "./dto/create-dhl.dto";
import { UpdateDhlDto } from "./dto/update-dhl.dto";
import { DhlEntity } from './entity/dhl.entity';

@Injectable()
export class DhlService extends BaseService<DhlEntity> {
  constructor(
    @InjectRepository(DhlEntity) private readonly dhlRepository: Repository<DhlEntity>,
    @InjectRepository(DhlTypeEntity) private readonly dhlTypeRepository: Repository<DhlTypeEntity>,
  ) {
    super(dhlRepository)
  }

  getAll(): Promise<DhlEntity[]> {
    return super.getAll({
      relations: {
        type: true
      }
    })
  }

  async create(createDto: CreateDhlDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: createDto.typeId })

    const dhlEntity = new DhlEntity()

    dhlEntity.name = createDto.name
    dhlEntity.type = type

    return super.create(dhlEntity)
  }

  async update(id: number, updateDto: UpdateDhlDto) {
    const type = await this.dhlTypeRepository.findOneByOrFail({ id: updateDto.typeId })
    const dhlEntity = new DhlEntity()

    dhlEntity.name = updateDto.name
    dhlEntity.type = type

    return super.update(id, dhlEntity)
  }
}